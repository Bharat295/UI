import React, { useState } from 'react'
import { Box  } from '@mui/material';
 
import '../style/style.css';

import RightSidebar from './RightSidebar';
import LeftSideBar from './LeftSideBar';
import NavBar from './NavBar';

export default function Home() {
    const [isAccount, setAccount] = useState(1);
 

    return (
        <Box
            display='flex'
            flexDirection='column'
            
            sx={{
                background: 'linear-gradient(to right bottom, #0C6121, #01370F)',
            }}
            height='100vh'
            fontFamily='Pixellari'
        >
            <NavBar/>

            <Box
                
                display='flex'
                flexDirection='row'
            >
                <LeftSideBar setAccount={setAccount} /> 
                <RightSidebar isAccount={isAccount} />

            </Box>
        </Box>
    )
}
