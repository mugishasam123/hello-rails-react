import Axios from 'axios'

const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const getGreetings=(payload)=>({
  type: GET_GREETING,
  payload
})

export const getGreetingsFromApi=()=>async(dispatch)=>{
  const result= await Axios.get('/v1/greeting');
  const message= result.data.greetings.greeting
  dispatch(getGreetings(message))
  console.log(message)
}



const greetingsReducer=(state=[],action)=>{
    switch(action.type){
        case GET_GREETING:
              return action.payload
        default:
          return state

    }
}
export default greetingsReducer;

