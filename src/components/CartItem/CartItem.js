import { Link } from "react-router-dom"
import { 
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Button,
    Image,
    ButtonGroup
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function CartItem({img, id, name, price, quantity}) {

    const { deleteItem } = useContext(CartContext)

    return(
        <Card 
            w={{base:'250px', sm:'65vw'}} h='auto'
            p={{base:'1rem 0',sm:'0 1rem'}} m='auto' boxShadow='lg'
            display='flex' direction={{base:'column', sm:'row'}} flexWrap={{base:'wrap', sm:'nowrap'}} align='center'>
            <Link to={`/item/${id}`}>
                    <Image
                        src={img} 
                        alt={name} 
                        title={name}
                        borderRadius='lg'
                        fit={'contain'}
                        margin={'auto'}
                        h={'12rem'}
                        loading={'lazy'}
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
                <ButtonGroup my='1'>
                    <Button onClick={()=>deleteItem(id)}>
                        <DeleteIcon />
                    </Button>
                    <Link to={`/item/${id}`}>
                        <Button variant='ghost' colorScheme='blue'>
                        Ver más
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}