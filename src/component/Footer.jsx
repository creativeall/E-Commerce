import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main'>
            <footer>
                <div className='container'>
                    <div className='sec aboutus'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisl ac nisi cursus viverra.</p>
                        <div className='social-icon'>
                            <InstagramIcon />
                            <FacebookIcon />
                            <TelegramIcon />
                            <WhatsAppIcon />
                        </div>
                    </div>
                    <div className='sec quicklinks'>
                        <h2>Support</h2>
                        <ul>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='sec quicklinks'>
                        <h2>Shop</h2>
                        <ul>
                            <li>Casual</li>
                            <li>Work & Office</li>
                            <li>Activewear</li>
                            <li>Evening Dresses</li>
                        </ul>
                    </div>
                    <div className='sec contact'>
                        <h2>Contact Us</h2>
                        <div className='info'>
                            <div><PhoneIcon /> +1 234 567 8900</div>
                            <div><EmailIcon /> knownmore@emailto.meee</div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copyrightText'>
                <p>Copyright 2024 Shop Online. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
