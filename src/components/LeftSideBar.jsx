import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import image1 from '../images/ace_club.png';
import image2 from '../images/ace_diamond.png';
import image3 from '../images/ace_heart.png';
import image4 from '../images/ace_spade.png';

import '../style/style.css';
export default function LeftSideBar({setAccount}) {
    const [AccountBackground, setAccountbackground] =
    useState('#rgb(14,103,37)');
const [paymentBackground, setpaymentbackground] =
    useState('#00350E'); 
  return (
    <Box
    border='6px solid #26AA47'
    margin={{ xs: '5px', md: '30px' }}
    borderRadius='30px'
    width={{ xs: '100%', md: '27%' }}
    color='white'
    sx={{
        backgroundColor: '#0F6725',
    }}
>

    <Button
        className='custom-button'
        style={{
            color: 'white',
            backgroundColor: AccountBackground,
            borderRadius: '30px 30px 0 0',
        }}
        onClick={() => {
            setAccount(1);
            setAccountbackground('#0E6725');
            setpaymentbackground('#00350E');
        }}
    >
        Account
    </Button>
    <Button
        className='custom-button'
        style={{
            color: 'white',
            backgroundColor: paymentBackground,
        }}
        onClick={() => {
            setAccount(0);
            setAccountbackground('#00350E');
            setpaymentbackground('#0E6725');
        }}

    >
        Payment
    </Button>



    <p
        style={{

            backgroundColor: '#00350E',
            height: '17vh',
            margin: '0',
            padding: '5px',
            fontSize: '20px',
            textAlign: 'center'
        }}
    >

    </p>

    <Box textAlign={{ xs: 'center', md: 'left' }} marginLeft={{ md: '20px' }}>
        <p style={{ fontSize: '23px' }}>Help and Support</p>

        <Box fontWeight='100'>
            <p>FAQs</p>
            <p>Tutorial</p>
            <p>Contact us</p>
            <p>Logout</p>
        </Box>
    </Box>

    <Box
        display={{ xs: 'block', md: 'flex' }}
        justifyContent='space-between'
        alignItems='center'
        margin='5px'
    // marginTop={{ xs: '10px', md: '10vh' }}
    >
        <img src={image1} alt="Image 1" style={{ maxWidth: '25%' }} />
        <img src={image2} alt="Image 2" style={{ maxWidth: '25%' }} />
        <img src={image4} alt="Image 2" style={{ maxWidth: '25%' }} />
        <img src={image3} alt="Image 1" style={{ maxWidth: '25%' }} />
    </Box>
</Box>
  )
}
