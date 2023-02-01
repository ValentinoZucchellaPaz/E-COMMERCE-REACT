import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Button, useToast, Heading, Text, Stack, Badge, ButtonGroup } from '@chakra-ui/react'
import { db } from '../../services/FireBase/FirebaseConfig'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'
import useTitle from "../../hooks/useTitle"

export default function Checkout () {
    const toast = useToast()
    const { cart, total, cleanCart } = useContext(CartContext)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ orderId, setOrderId ] = useState('')

    useTitle('Fist&Kicks - Checkout')
    
    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'Valen',
                phone: 123456789,
                email: 'jajan@gmail.com'
            },
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const ids = cart.map(prod=>prod.id)

        const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
        const outOfStock = []

        getDocs(productRef)
            .then(res=>{
                res.docs.map(doc=>{
                    const dataDb = doc.data()
                    const stockDb = dataDb.stock
        
                    const productAddedToCart = cart.find(prod=>prod.id===doc.id)
                    const prodQuantity = productAddedToCart.quantity

                    if(stockDb >= prodQuantity){
                        batch.update(doc.ref, { stock: stockDb-prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDb, quantity: prodQuantity})
                    }

                    if (outOfStock.length === 0) {
                        batch.commit()
            
                        const orderRef = collection(db, 'orders')
                        addDoc(orderRef, objOrder).then(res=>{
                            setOrderId(res.id)
                            cleanCart()
                        })

                        return toast({
                            title: 'Orden agregada',
                            description: 'Tú orden se agregó exitosamente, en 48hs hábiles nos comunicaremos',
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                            position:'top-right'
                        })
                    } else {
                        return toast({
                            title: 'Ya no tenemos!',
                            description: `Productos fuera de stock:${outOfStock.map(prod=> ` ${prod.name} (stock: ${prod.stock}, cantidad: ${prod.quantity})`)
                            }`,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                            position:'top-right'
                        })
                    }
                })
            })
            .catch(err=>setError(true))
            .finally(()=>{
                setLoading(false)
            })

        // try{
        //     const objOrder = {
        //         buyer: {
        //             name: 'Valen',
        //             phone: 123456789,
        //             email: 'jajan@gmail.com'
        //         },
        //         items: cart,
        //         total
        //     }
    
        //     const batch = writeBatch(db)
        //     const ids = cart.map(prod=>prod.id)
    
        //     const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
        //     const prodsAddedToCartFromFirestore = await getDocs(productRef)
    
        //     const { docs } = prodsAddedToCartFromFirestore
        //     const outOfStock = []
    
        //     docs.forEach(doc=>{
        //         const dataDb = doc.data()
        //         const stockDb = dataDb.stock
    
        //         const productAddedToCart = cart.find(prod=>prod.id===doc.id)
        //         const prodQuantity = productAddedToCart.quantity
    
        //         if(stockDb >= prodQuantity){
        //             batch.update(doc.ref, { stock: stockDb-prodQuantity})
        //         } else {
        //             outOfStock.push({id: doc.id, ...dataDb, quantity: prodQuantity})
        //         }
    
        //     })
    
        //     if (outOfStock.length === 0) {
        //         await batch.commit()
    
        //         const orderRef = collection(db, 'orders')
        //         const orderAdded = await addDoc(orderRef, objOrder)
    
        //         const {id} = orderAdded
        //         setOrderId(id)
        //         toast({
        //             title: 'Orden agregada',
        //             description: 'Tú orden se agregó exitosamente, en 48hs hábiles nos comunicaremos',
        //             status: 'success',
        //             duration: 9000,
        //             isClosable: true,
        //             position:'top-right'
        //         })
        //         cleanCart()
        //     } else {
        //         toast({
        //             title: 'Ya no tenemos!',
        //             description: `Productos fuera de stock:${outOfStock.map(prod=> ` ${prod.name} (stock: ${prod.stock}, cantidad: ${prod.quantity})`)
        //             }`,
        //             status: 'error',
        //             duration: 9000,
        //             isClosable: true,
        //             position:'top-right'
        //         })
        //     }
        // } catch (err){
        //     <Heading>Hubo un error {err}</Heading>
        // } finally{
        //     setLoading(false)
        // }
        
    }

    if (loading) {
        return(
            <Stack h='85vh' direction='column' justify='center' align='center'>
                <Heading size='lg' m={'2px'} textTransform={'uppercase'}>generando órden...</Heading>
                <Spinner />
            </ Stack>
        )
    }
    if(error){
        return <Heading>Hubo un error {error}</Heading>
    }
    
    if (cart.length === 0) {
        if (orderId !== '') {
            return <Stack h='85vh' justify='center' gap='1rem'>
                    <Text>Tienes una orden con el id: <Badge colorScheme='purple'>{orderId}</Badge></Text>
                    <Link to='/cart'>
                        <Button colorScheme='purple' leftIcon={<i className={`fa-solid fa-cart-shopping`}></i>} textTransform='uppercase'>
                            carrito
                        </Button>
                    </Link>
                </ Stack>
        } else {
            return <Heading>No hay productos en el carrito</Heading>
        }
    }

    


    return(
        <Stack gap='1rem'>
            <Heading textTransform='uppercase'>checkout</Heading>
            <Stack>
                {
                    cart.map(item=> 
                        <Text fontSize='md' textTransform='capitalize' m='1' fontWeight='semibold' key={item.id}>
                            <Badge colorScheme='purple' mx='8px'>{item.name}:</Badge>
                            ${item.price * item.quantity} (${item.price} x {item.quantity})
                        </Text>)
                }

                <Heading size='lg'>Total: ${total}</Heading>

            </Stack>
            <ButtonGroup justifyContent='center'>
                <Button colorScheme='blue' textTransform='uppercase' onClick={createOrder}>
                    Generar orden
                </Button>
                <Link to='/cart'>
                    <Button colorScheme='purple' leftIcon={<i className={`fa-solid fa-cart-shopping`}></i>} textTransform='uppercase'>
                        carrito
                    </Button>
                </Link>
            </ButtonGroup>
            
        </Stack>
    )
}