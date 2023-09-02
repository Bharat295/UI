import React from 'react'
import { Box } from '@mui/material';
import coin from '../images/coin.png';
import '../style/style.css';
import heart from '../images/heart.png';

export default function NavBar() {
  return (
    <Box
    border='6px solid #26AA47'
    display='flex'
    alignItems='center'
    color='white'
    fontWeight='bold'
    sx={{
        backgroundColor: '#24BD4A',
    }}
    margin='18px 35px 0px 35px'
    borderRadius='25px'
    justifyContent='space-between'

>
    <img src={coin} alt="Image 1" width='30px' />


    <h1
        style={{
            // fontSize: '30px',
            margin: '0',
            fontWeight: '400'
        }}
    >SUITS</h1>

    <Box
        style={{
            margin: '0'
        }}
        display='flex'
        flexDirection='row'
    >
        <div>

            <h2
                style={{
                    // fontSize: '30px',
                    margin: '0',
                    fontWeight: '400'
                }}
            >John Whatson</h2>
            <h4
                style={{
                    margin: '0',
                    textAlign: 'right'
                }}
            >
                John_2932

            </h4>
        </div>

        <Box
            display='flex'
            alignItems='center' // Align items vertically
            justifyContent='center' // Center horizontally
            margin='0'
        >

            <img src={heart} alt="Image 1" style={{ Width: '40%' }} />
        </Box>


    </Box>

</Box>
  )
}
