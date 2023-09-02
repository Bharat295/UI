 import React from 'react'
import { Box ,Button, TextField } from '@mui/material';
 
import '../style/style.css';


export default function Payment() {
  return (
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
  )
}
