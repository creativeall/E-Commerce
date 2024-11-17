import React from 'react';
import Cards from './Cards';
import dress1 from '../images/dress1.jpg';
import dress2 from '../images/dress2.jpg';
import dress3 from '../images/dress3.jpg';
import dress4 from '../images/dress4.jpg';
import dress5 from '../images/dress5.jpg';
import dress6 from '../images/dress6.jpg';
import dress7 from '../images/dress7.jpg';
import dress8 from '../images/dress8.jpg';
import dress9 from '../images/dress9.jpg';
import dress10 from '../images/dress10.jpg';
import './Cards.css';
 

const CardData = () => {
     
    return (
        <>
        
            <h1 style={{ textAlign: 'center' }}>Most Popular</h1>
            <div className='cards-container'>
                <Cards
                    imgsrc={dress1}
                    title="BASKLE Midi Dress With Belt - Customize"
                    text="₹6666.00 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress2}
                    title="Regular Fit Lapel Collar Long sleeve Elegant Long Dress"
                    text="₹6,481.29 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress3}
                    title="Womens Satin Suit Dress"
                    text="₹5,492.96 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress4}
                    title="Womens Suits Blazers Spring Winter Korean Style Dress"
                    text="₹1,984.41 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress5}
                    title="Westhood Top Skirt Co-ords Set"
                    text="₹679.00 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress6}
                    title="Premium Crop Blazer Coat With Fork Pencil Black Skirt Set"
                    text="₹5,190.00 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress7}
                    title="AOBRICON Fashion summer jumpsuits"
                    text="₹3,104.84 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress8}
                    title="KIRUNDO Women's 2024 Fall 2 Piece Blazer Set Casual Loose Long Blazer Jackets"
                    text="₹1,211.00 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress9}
                    title="Women Cotton Blend Blazer Pant Set"
                    text="₹1999.00 MRP"
                    link=""
                />
                <Cards
                    imgsrc={dress10}
                    title="rare Women Mini Casual Dress"
                    text="₹899.00 MRP"
                    link=""
                />
            </div>
             
        </>
    )
}

export default CardData;
