import { Box, Heading, Stack, Text, Divider, Image, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/FireBase/FirebaseConfig'
import MartialArtsList from '../../components/MartialArtsList/MartialArtsList'
import logo from './assets/fistkicks-high-resolution-logo-color-on-transparent-background.png'
import useTitle from '../../hooks/useTitle'

export default function Contact () {

    const [martialArts, setMartialArts] = useState([])

    useTitle('Fist&Kicks - Contacto')

    useEffect(()=>{
        const martialArtsRef = collection(db, 'martialArts')
        getDocs(martialArtsRef)
            .then(res=>{
                const martialArtsAdapted = res.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setMartialArts(martialArtsAdapted)
            })
    }, [db])


    return(
        <Stack spacing='1rem'>
            <Box>
                <Image src={logo} w='300px' m='1rem auto'/>
                <Center><Divider w='80vw' /></Center>
                <Heading m='1rem' fontSize='xl' textTransform='uppercase'>¿Quienes somos?</Heading>
                <Text>
                    Somos una escuela de artes marciales de Córdoba, Argentina. <br />
                    En nuestro dojo no solo enseñamos a patear y golpear, cultivamos valores y creamos mejores persona.<br/>
                    Niños, adolecentes y adultos disfrutan juntos todos los servicios de Sakura Dojo.
                </Text>
            </Box>
            <Center><Divider w='80vw' /></Center>
            <Box>
                <Heading m='1rem' fontSize='xl' textTransform='uppercase'>¿Donde estamos?</Heading>
                <Text>
                    Nos encontramos en el barrio de Arguello, en la provincia de Córdoba.<br/>
                    Avenida Doctor, Av. Rafael Núñez 6069 <br />
                    <Text as='i' textTransform='uppercase' m='.5rem' fontWeight='600'>ven a entrenar</Text>
                </Text>
                <Center h='65vh' w='80vw' m='.5rem auto'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104.287333326862!2d-64.250259620673!3d-31.347026150657843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329eadef5fd2f9%3A0x533854a0877b9b56!2sSakura%20doyo%20karate!5e0!3m2!1ses-419!2sar!4v1674838195715!5m2!1ses-419!2sar" style={{border: "0", width: '100%', height: '100%', borderRadius: '8px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='google-map-sakura-dojo'></iframe>
                </Center>
            </Box>
            <Center><Divider w='80vw' /></Center>
            <Box>
                <Heading m='1rem' fontSize='xl' textTransform='uppercase'>Nuestros servicios</Heading>
                <MartialArtsList martialArts={martialArts} />
            </Box>
        </Stack>
    )
}