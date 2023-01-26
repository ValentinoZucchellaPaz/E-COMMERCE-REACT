import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
import './ItemDetail.css'
import { useContext } from 'react'
import { Card, CardBody, CardFooter, Divider, Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ name, img, stock, price, description, category, longDescription, id }) =>{

    const { useContextById } = useContext(CartContext)

    const cartElement = useContextById(id)

    return (
        <>
            {/* <h2 className="Title-primary">Detalle del producto</h2>
            <div className="Detail-container">
                <img className="DetailImg" src={img} alt={name} title={description} />
                <div className="Content-container">
                    <h2 className="Title-primary">
                        {name} 
                    </h2>
                    <h2 className="Title">Categoría: {category}</h2>
                    <p className='Subtitle'>solo {stock} en stock</p>
                    <h2 className="Title-primary">${price}</h2>
                    <h2 className="Title">{longDescription}</h2>
                    <ItemCounter name={name} stock={stock} price={price} id={id} img={img}/>
                    {
                        cartElement && <h2 className='Title'>Ya tienes {cartElement.quantity} en el carrito</h2> 
                    }
                </div>
            </div>
            <Link className="return-link" to='../'>Volver</Link> */}
        <Card w='80vw'>
            <Flex flexDirection={{base:'column', md:'row'}} justifyContent={'space-evenly'} >
                <Image
                src={img} 
                alt={name} 
                title={description}
                borderRadius='lg'
                fit={'contain'}
                margin={'auto'}
                h={{base:'200px', md:'300px'}}
                w={'50%'}
                />
                <Box pt='6' w={{base:'100%', md:'50%'}} spacing='3'>
                    <Heading size='lg' textTransform={'capitalize'}>{name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                    <ItemCounter name={name} stock={stock} price={price} id={id} img={img}/>
                    {
                        cartElement && <h2 className='Title'>Ya tienes {cartElement.quantity} en el carrito</h2> 
                    }
                    <Divider m={'.5rem auto'} borderBottomColor={'gray.400'} w={'50%'} />
                    <Text fontSize='lg' w={'80%'} m={'auto'}>{longDescription}</Text>
                    <Text fontSize='lg'>Categoría: {category}</Text>
                    <Text as='i' bg='gray.300'>solo {stock} en stock</Text>
                    <Divider m={'.5rem auto'} borderBottomColor={'gray.400'} w={'50%'} />
                    <CardFooter p={'0'} h={'50px'} flex justifyContent={'center'} alignItems={'center'}>
                        <Link to='../' >
                            <Button textTransform={'uppercase'} variant='ghost' colorScheme='blue' mb={'.5rem'}>
                                volver
                            </Button>
                        </Link>
                    </CardFooter>
                </Box>
                
            </Flex>
            
            
        </Card>
        </>
    )
}

export default ItemDetail