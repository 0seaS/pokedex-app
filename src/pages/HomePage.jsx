import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  // input trainer alow us to capture the ref in the form
  const inputTrainer = useRef()

  // dispatcher of the setTrainerG
  const dispatch = useDispatch()

  // const navigate alow us to go to the different routes
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // e.target.(name o id inside of event).value
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>hi trainer</h2>
      <p>To start whit the app, give me your name 😋</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputTrainer} type="text" />
        <button>Gotta catch'em all!</button>
      </form>
    </div>
  )
}

export default HomePage