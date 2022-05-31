import React,{useEffect} from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getGreetingsFromApi } from "../redux/greetingsReducer"
const Greeting=()=>{

  const greeting=useSelector((state)=>state.greetingsReducer)

  const dispatch=useDispatch()
 useEffect(() => {
    dispatch(getGreetingsFromApi())
  }, [dispatch])
  

    return (
      <React.Fragment>
       <span>{greeting}</span>
       <button onClick={()=> dispatch(getGreetingsFromApi())}>Next greeting</button>
       <Link to='/'>Go to home</Link>
      </React.Fragment>
    );
 
}

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
