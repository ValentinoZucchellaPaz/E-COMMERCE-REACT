import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function CheckoutForm({ createOrder }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    createOrder({
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    });
  }
  return (
    <div className="w-[90vw] sm:w-3/4 md:w-1/2 pb-10">
      <Card>
        <CardHeader>
          <Heading size="lg" mb="10px">
            Carga tus datos para la compra
          </Heading>
          <Text as="i">
            Recuerda que usaremos estos datos para contactarte y determinar
            detalles de compra
          </Text>
        </CardHeader>

        <CardBody>
          <form
            className="w-[90%] m-auto sm:w-2/3 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <Stack spacing="4" align="center">
              <FormControl>
                <FormLabel>Nombre completo</FormLabel>
                <Input ref={nameRef} type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={emailRef} type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Número de teléfono</FormLabel>
                <Input ref={phoneRef} type="text" />
              </FormControl>
              <Button
                colorScheme="blue"
                textTransform="uppercase"
                w="fit-content"
                type="submit"
              >
                Generar orden
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
