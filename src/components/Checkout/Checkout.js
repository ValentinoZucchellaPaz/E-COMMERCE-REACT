import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Button,
  useToast,
  Heading,
  Text,
  Stack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { db } from "../../services/FireBase/FirebaseConfig";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

export default function Checkout() {
  const toast = useToast();
  const { cart, total, cleanCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("lastOrder")) && null
  );

  useTitle("Fist&Kicks - Checkout");

  const createOrder = ({ name, phone, email }) => {
    setLoading(true);
    const objOrder = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart,
      total,
    };

    const batch = writeBatch(db);
    const ids = cart.map((prod) => prod.id);

    const productRef = query(
      collection(db, "products"),
      where(documentId(), "in", ids)
    );
    const outOfStock = [];

    getDocs(productRef)
      .then((res) => {
        res.docs.map((doc) => {
          const dataDb = doc.data();
          const stockDb = dataDb.stock;

          const productAddedToCart = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = productAddedToCart.quantity;

          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDb, quantity: prodQuantity });
          }

          if (outOfStock.length === 0) {
            batch.commit();

            const orderRef = collection(db, "orders");
            addDoc(orderRef, objOrder).then((res) => {
              setOrder({ id: res.id, objOrder });
              localStorage.setItem(
                "lastOrder",
                JSON.stringify({ id: res.id, objOrder })
              );
              cleanCart();
            });

            return toast({
              title: "Orden agregada",
              description:
                "Tú orden se agregó exitosamente, en 48hs hábiles nos comunicaremos",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
          } else {
            return toast({
              title: "Ya no tenemos!",
              description: `Productos fuera de stock:${outOfStock.map(
                (prod) =>
                  ` ${prod.name} (stock: ${prod.stock}, cantidad: ${prod.quantity})`
              )}`,
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Stack h="85vh" direction="column" justify="center" align="center">
        <Heading size="lg" m={"2px"} textTransform={"uppercase"}>
          generando órden...
        </Heading>
        <Spinner />
      </Stack>
    );
  }

  if (error) {
    return <Heading>Hubo un error {error}</Heading>;
  }

  if (cart.length === 0) {
    if (order === null) {
      JSON.parse(localStorage.getItem("lastOrder")) &&
        setOrder(JSON.parse(localStorage.getItem("lastOrder")));
      return (
        <Stack spacing="2" justifyContent="center" alignItems="center" h="80vh">
          <Heading textTransform="uppercase">
            no pudimos recuperar tu última órden
          </Heading>
          <Text>
            Nunca realizaste una orden o lo hiciste desde otro dispositivo, de
            todas formas no te preocupes, si hiciste una orden nos contacteremos
            por el email y teléfono que pasaste
          </Text>
          <Text>
            Si crees que pasaste mal tus datos puedes hacer una nueva orden
          </Text>
        </Stack>
      );
    } else {
      return (
        <Stack p="20px" justify="center" spacing={4}>
          <Heading>Última órden:</Heading>
          <Text>
            Id de orden:{" "}
            <Badge textTransform="normal" fontSize=".8rem" colorScheme="purple">
              {order.id}
            </Badge>
          </Text>
          <Text>
            Nombre Completo:{" "}
            <Badge textTransform="normal" fontSize=".8rem" colorScheme="purple">
              {order.objOrder.buyer.name}
            </Badge>
          </Text>
          <Text>
            Email:{" "}
            <Badge textTransform="normal" fontSize=".8rem" colorScheme="purple">
              {order.objOrder.buyer.email}
            </Badge>
          </Text>
          <Text>
            Teléfono:{" "}
            <Badge textTransform="normal" fontSize=".8rem" colorScheme="purple">
              {order.objOrder.buyer.phone}
            </Badge>
          </Text>
          <Heading size="md">
            Total:
            <Badge colorScheme="purple" mx="5px" fontSize="1rem">
              ${order.objOrder.total}
            </Badge>
          </Heading>
          <Stack my="50px" justify="center" spacing={2}>
            <Heading size="md">Estos son los items</Heading>
            <Flex wrap="wrap" justify="center" gap="1rem">
              {order.objOrder.items.map((item) => (
                <CheckoutCard key={item.id} {...item} />
              ))}
            </Flex>
          </Stack>
          <Link to="/cart">
            <Button
              colorScheme="purple"
              leftIcon={<i className={`fa-solid fa-cart-shopping`}></i>}
              textTransform="uppercase"
            >
              carrito
            </Button>
          </Link>
        </Stack>
      );
    }
  }

  return (
    <Stack gap="1rem" align="center">
      <Heading textTransform="uppercase">checkout</Heading>
      <Stack align="center">
        <Heading size="lg">Productos</Heading>
        {cart.map((item) => (
          <Text
            fontSize="md"
            textTransform="capitalize"
            m="1"
            fontWeight="semibold"
            key={item.id}
          >
            <Badge colorScheme="purple" mx="8px">
              {item.name}:
            </Badge>
            ${item.price * item.quantity} (${item.price} x {item.quantity})
          </Text>
        ))}
        <Heading size="lg">Total: ${total}</Heading>
      </Stack>
      <CheckoutForm createOrder={createOrder} />
    </Stack>
  );
}
