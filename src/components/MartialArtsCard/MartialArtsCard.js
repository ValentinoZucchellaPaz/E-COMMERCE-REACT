import { Card, CardBody, Box, Heading, Text, Image } from '@chakra-ui/react'

const MartialArtsCard = ({ name, img, description }) => {

    
    return (
        <Card minW={['80vw', 'auto']} h={'20rem'} boxShadow='lg'>
            <CardBody p={'auto'}>
                <Image
                src={img} 
                alt={name} 
                title={name}
                borderRadius='lg'
                fit={'contain'}
                margin={'auto'}
                maxH={'180px'}
                h={'fit-content'}
                loading={'lazy'}
                />
                <Box mt='6' p='.5rem'>
                    <Heading size='md' textTransform={'capitalize'}>{name}</Heading>
                    <Text as='i'>{description}</Text>
                </Box>
            </CardBody>
        </Card>
    )
}

export default MartialArtsCard