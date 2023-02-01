import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { Card, Center, Divider, Box, Heading, Text, Button, Image, Badge, Stack } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ name, img, stock, price, description, category, longDescription, id }) =>{

    const { getItemById } = useContext(CartContext)

    const cartElement = getItemById(id)

    return (
        <Card w='80vw' boxShadow='lg' display='flex' flexDirection={{base:'column', md:'row'}} justifyContent={'space-evenly'}>
            <Image
                src={img} 
                alt={name} 
                title={description}
                borderRadius='lg'
                fit={'contain'}
                margin={'auto'}
                h={{base:'200px', md:'300px'}}
            />
            <Box pt='6' w={{base:'100%', md:'50%'}}>
                <Heading size='lg' textTransform={'capitalize'}>{name}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    ${price}
                </Text>
                <ItemCounter name={name} stock={stock} price={price} id={id} img={img}/>
                {
                    cartElement && <h2 className='Title'>Ya tienes {cartElement.quantity} en el carrito</h2> 
                }
                <Divider m={'.5rem auto'} borderBottomColor={'gray.400'} w={'50%'} />
                <Stack justify='center' align='center' spacing='2'>
                    <Text fontSize='md' w={'80%'} m={'auto'}>{longDescription}</Text>
                    <Text fontSize='md'>Categoría: {category}</Text>
                    <Badge colorScheme='gray' fontWeight='600' fontStyle='italic'>solo {stock} en stock</Badge>
                </Stack>
                <Divider m={'.5rem auto'} borderBottomColor={'gray.400'} w={'50%'} />
                <Center p={'0'} h={'50px'}>
                    <Link to='../' >
                        <Button textTransform={'uppercase'} variant='ghost' colorScheme='blue' mb={'.5rem'}>
                            volver
                        </Button>
                    </Link>
                </Center>
            </Box>
        </Card>
    )
}

export default ItemDetail