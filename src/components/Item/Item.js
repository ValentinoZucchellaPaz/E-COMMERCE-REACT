import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Divider, Stack, Heading, Text, Button, Image } from '@chakra-ui/react'

const Item = ({ name, img, stock, price, description, id }) => {

    
    return (
        <Card minW={['80vw', 'auto']} h={'25rem'} boxShadow='lg'>
            <CardBody p={'auto'}>
                <Link to={`/item/${id}`}>
                    <Image
                        src={img} 
                        alt={name} 
                        title={description}
                        borderRadius='lg'
                        fit={'contain'}
                        margin={'auto'}
                        maxH={'200px'}
                        h={'fit-content'}
                        loading={'lazy'}
                    />
                </Link>
                <Stack mt='6' spacing='3'>
                <Link to={`/item/${id}`}>
                    <Heading size='md' textTransform={'capitalize'}>{name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                    <Text as='i'>solo {stock} en stock</Text>
                </Link>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={'0'} h={'50px'} display='flex' justifyContent={'center'} alignItems={'center'}>
                <Link to={`/item/${id}`}>
                    <Button variant='ghost' colorScheme='blue'>
                        Ver más
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Item