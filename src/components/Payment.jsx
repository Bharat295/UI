import React from 'react'
import { Box ,Button, TextField } from '@mui/material';
 
import '../style/style.css';


export default function Payment() {
  
  const data = {
    "totalWinCoin": 23,
    "currentCoin": 34,
    "withdrwalLimit": 23233,
    "totalPaymetRecived":4322,
    "paymentHistory": [],
    "userId": 'Raj123',
    "_id": "64f22ff52cba3c9e7c837f31",
    "firstName": "Raj",
    "lastName": "Kumar",
    "email": "scripterhunts@gmail.com",
    "phone": 999999999,
    "gameMoney": 100,
    "active": true,
    "accountType": "Gammer"
  }
  
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
        // left='30%'
        //   right='30%'
          justifyContent='space-between'
         
      >
          <div>
           
           Total Winnings
          </div>
          <div>
             {data.totalWinCoin}
          </div>

    </Box>  
      <Box
          className='custom-box'
          justifyContent='space-between'
      >
        <div>
           
           Total Payment
          </div>
          <div>
             {data.totalPaymetRecived}
          </div>
    </Box>  
      <Box
          className='custom-box'
          justifyContent='space-between'
      >
        <div>
           
           Withdrawal
          </div>
          <div>
             {data.withdrwalLimit}
          </div>
          

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
          className='custom-box'
          justifyContent='space-between'
      >
          <div>
         Amount 
        </div>
          <div>
            {data.totalPaymetRecived}
        </div>
        
        
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
