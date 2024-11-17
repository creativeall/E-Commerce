import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import './Service.css';

const Service = () => {
    return (
        <>
            <div className='container'>
                <div className='box'>
                    <ShoppingBagIcon className='icons' />
                    <h1>Order Online</h1>
                    <p>Order Online allows customers to conveniently shop and purchase items from anywhere, with easy browsing and secure checkout.</p>
                </div>
                <div className='box'>
                    <LocalShippingIcon className='icons' />
                    <h1>Free Shipping</h1>
                    <p>Free Shipping lets customers receive their orders without extra delivery charges, adding convenience and value to purchases.</p>
                </div>
                <div className='box'>
                    <StorefrontIcon className='icons'/>
                    <h1>More Freshness</h1>
                    <p>More Freshness ensures that customers receive products at peak quality, enhancing taste, nutrition, and satisfaction.</p>
                </div>
                <div className='box'>
                    <PaymentIcon className='icons' />
                    <h1>Safe Payment</h1>
                    <p>Safe Payment ensures secure, reliable transactions by protecting customers' financial information during online purchases.</p>
                </div>
            </div>
        </>
    )
}

export default Service;
