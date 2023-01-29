import { Container } from '@mui/material'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

const Main = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
        </Container>
    )
}
export default Main
