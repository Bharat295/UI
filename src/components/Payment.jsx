 import React from 'react'
import { Box ,Button, TextField } from '@mui/material';
import image1 from '../images/ace_club.png';
import image2 from '../images/ace_diamond.png';
import image3 from '../images/ace_heart.png';
import image4 from '../images/ace_spade.png';
import heart from '../images/heart.png';
import coin from '../images/coin.png';
import '../style/style.css';


export default function Payment() {
  return (
    <Box
    display='flex'
    flexDirection='column'
    // flexDirection={{ xs: 'column', md: 'row' }}
    sx={{
      background: 'linear-gradient(to right bottom, #0C6121, #01370F)',
    }}
    height='100vh'
    fontFamily='Pixellari'
  >
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

    <Box
      // border='3px solid black'
      display='flex'
      flexDirection='row'
    >


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
            style={{
            fontSize: '14px',
            fontWeight: '100',
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#00350E',
            margin: '0',
            width: '100%',
            borderRadius: '30px 30px 0 0',
            height: '9vh'
          }}
          >
          Account    
        </Button>  
          <Button
            style={{
            fontSize: '14px',
            fontWeight: '100',
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#rgb(14,103,37)',
            margin: '0',
            width: '100%',
            height: '8vh'
          }}
          >
          Payment    
        </Button>  

        {/* <p
          style={{
            fontSize: '30px',
            fontWeight: '100',
            color: 'white',
            textAlign: 'center'
          }}

        >
          Account
        </p> */}

        <p
          style={{
            border: '1px solid black',
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
      <Box
        border='6px solid #26AA47'
        width='100%'
        margin={{ xs: '5px', md: '30px' }}
        borderRadius='30px'
        padding='30px'
          backgroundColor='#00350E'
          display='flex'    
          flexDirection='column'  
          alignContent='center'
        // justifyContent='center'
         alignItems='center'
        >

          <Box
            width='60%'
          >
            
            
          <Box
            className='custom-box'
            left='30%'
            right='30%'
            
          >
            Total Winnings
        </Box>  
          <Box
             className = 'custom-box'
          >
            Payment received
        </Box>  
          <Box
             className = 'custom-box'
          >
            Withdrawal Limit
            </Box> 
           
            <Box
             
              style={{
              display:'flex',
              justifyContent: 'space-between',
              // border: '3px solid',
              marginLeft: '25px',
              marginRight:'15%'
            }}
            >
              <TextField
                variant='outlined'
                placeholder='Enter Cashout amount'
                InputProps={{
                  style: {
                    color: 'white',
                    border: '5px solid #1D9A3C',
                    borderRadius:'25px'
                  },
                   
                }}
                InputLabelProps={{
                  style: { color: 'white' },           
              }}
                
              />
              <Button
                 style={{
                  fontSize: '14px',
                   
            fontWeight: '100',
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#1D9A3C',
            margin: '0',
            width: '40%',
                  height: '8vh',
            borderRadius:'25px'
          }}
              >Click Me</Button>

            </Box>
            <Box
             className = 'custom-box'
          >
            Amount Processed
            </Box> 
            
           
            <div style={{
              display:'flex',
              justifyContent: 'space-between',
              // border: '3px solid',
              marginLeft: '25px',
              marginRight:'15%'
            }}>
              <Button variant='contained'
                style={{
                  fontSize: '14px',
             
                   fontWeight: '100',
                   color: 'Black',
                   textAlign: 'center',
                   backgroundColor: '#FFDD0C',
                   margin: '0',
                   width: '40%',
                         height: '8vh',
                   borderRadius:'25px'
                }}
              >
        Add Money
      </Button>
              <Button
                style={{
                  fontSize: '14px',
                   
                   fontWeight: '100',
                   color: 'white',
                   textAlign: 'center',
                   backgroundColor: '#1D9A3C',
                   margin: '0',
                   width: '40%',
                         height: '8vh',
                   borderRadius:'25px'
              }}
              >
         Back to game
      </Button>
    </div> 

        </Box>  
      </Box>
    </Box>
  </Box>



  )
}
