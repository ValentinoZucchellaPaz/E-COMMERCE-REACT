import "./CartItem.css"
import { Link } from "react-router-dom"
import { 
    Card,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Text,
    Button,
    Image,
    ButtonGroup
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export default function CartItem({img, id, name, price, quantity, handleDelete}) {

    return(
        <>
        <Card minW={'250px'} w={{base:'auto', md:'65vw'}} p={{base:'1rem 0',md:'0 1rem'}} h={'auto'} m={'auto'} flex flexDirection={{base:'column', md:'row'}} flexWrap={{base:'wrap', md:'nowrap'}} alignItems={'center'}>
            <Link to={`/item/${id}`}>
                    <Image
                    src={img} 
                    alt={name} 
                    title={name}
                    borderRadius='lg'
                    fit={'contain'}
                    margin={'auto'}
                    h={'12rem'}
                    />
            </Link>
            <CardBody>                
                <Stack spacing='1'>
                    <Link to={`/item/${id}`}>
                        <Heading size='lg' m={'2px'} textTransform={'capitalize'}>{name}</Heading>
                    </Link>
                    <Text><Text as={'b'}>Unidades:</Text> {quantity} </Text>
                    <Text><Text as={'b'}>Precio:</Text> ${price} </Text>
                    <Text m={'2px'} color='blue.600' fontSize='2xl' fontWeight={'bold'} >Subtotal: ${price * quantity}</Text>
                </Stack>
            </CardBody>
            <CardFooter p={'0'} h={'50px'} flex justifyContent={'center'} alignItems={'center'}>
                <ButtonGroup>
                    <Button onClick={()=>handleDelete(id)}>
                        <DeleteIcon />
                    </Button>
                    <Link to={`/item/${id}`}>
                        <Button variant='ghost' colorScheme='blue'>
                        Ver más
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
        
        

        </>
    )
}