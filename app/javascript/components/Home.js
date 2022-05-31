import React from 'react'
import { Link } from 'react-router-dom'

const Home=()=> {
  return (
    <>
    <div>Home</div>
    <Link to='/greeting'>Go to greetings page</Link>
    </>
  )
}

export default Home