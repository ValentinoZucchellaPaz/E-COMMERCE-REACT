import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Badge,
} from "@chakra-ui/react";

export default function CheckoutCard({ id, img, price, name, quantity }) {
  return (
    <Card w={["80vw", "auto"]} minW="300px" boxShadow="lg">
      <CardBody p={"auto"}>
        <Link to={`/item/${id}`}>
          <Image
            src={img}
            alt={name}
            title={name}
            borderRadius="lg"
            fit={"contain"}
            margin={"auto"}
            maxH={"200px"}
            h={"fit-content"}
            loading={"lazy"}
          />
        </Link>
        <Stack my="6" spacing="3">
          <Link to={`/item/${id}`}>
            <Heading size="md" textTransform={"capitalize"}>
              {name}
            </Heading>
          </Link>
          <Text fontSize="md" textTransform="capitalize" fontWeight="semibold">
            Total:
            <Badge colorScheme="purple" mx="8px">
              ${price * quantity} (${price} x {quantity})
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        p={"0"}
        h={"50px"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link to={`/item/${id}`}>
          <Button variant="ghost" colorScheme="blue">
            Ver Producto
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
