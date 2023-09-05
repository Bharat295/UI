import React from 'react';
import '../style/style.css';
import { Box } from '@mui/material';

export default function Account() {

  const data = {
    "totalWinCoin": 0,
    "currentCoin": 0,
    "withdrwalLimit": 0,
    "totalPaymetRecived": 0,
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
    >
      <Box display='flex' flexDirection='column'
        padding='20px'
        color='#C6F5D2'
      >
        <Box
          display='flex'
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-evenly'
          textAlign='left'
          alignItems='center'

        >

          <div
            style={{

              width: '40%',

            }}
          >
            <h2
              style={{

                margin: '0'

              }}
            >
              First Name
            </h2>
            <p
              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
              {data.firstName}
            </p>
          </div>
          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
            <h2
              style={{
                // border: '2px solid black',
                margin: '0'
              }}
            >
              Phone Number
            </h2>
            <p
              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
                {data.phone}
            </p>
          </div>

        </Box>

        <Box
          display='flex'
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-evenly'
          textAlign='left'
          alignItems='center'
          marginTop='30px'

        >

          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
            <h2
              style={{
                // border: '2px solid black',
                margin: '0'
              }}
            >
              Last Name
            </h2>
            <p
              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
              {data.lastName}
            </p>
          </div>
          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
            <h2
              style={{
                // border: '2px solid black',
                margin: '0'
              }}
            >
              Game Money
            </h2>
            <p

              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
              {data.gameMoney}
            </p>
          </div>
        </Box>

        <Box
          display='flex'
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-evenly'
          textAlign='left'
          alignItems='center'
          marginTop='40px'
        >

          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
            <h2
              style={{
                // border: '2px solid black',
                margin: '0'
              }}
            >
              User Id
            </h2>
            <p
              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
              {data.userId}
            </p>
          </div>
          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >

          </div>



        </Box>

        <Box
          display='flex'
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-evenly'
          textAlign='left'
          alignItems='center'
          marginTop='40px'

        >

          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
            <h2
              style={{
                // border: '2px solid black',
                margin: '0'
              }}
            >
              Email Id
            </h2>
            <p
              style={{
                margin: '0',
                fontSize: '18px',
                border: '6px solid #1EA640',
                width: '80%',
                padding: '5px',
                backgroundColor: '#0F6725',
                borderRadius: '20px',
                marginTop: '6px'
              }}
            >
              {data.email}
            </p>
          </div>
          <div
            style={{
              // border: '2px solid black',
              width: '40%'
            }}
          >
       
          </div>



        </Box>


      </Box>
    </Box>
  )
}
