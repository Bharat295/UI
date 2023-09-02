import React from 'react'
import Payment from './Payment'
import Account from './Account'

export default function RightSidebar({isAccount}) {
    console.log("IS " , isAccount)
    return (

        isAccount ? <Account/> : <Payment />
 
  )
}
