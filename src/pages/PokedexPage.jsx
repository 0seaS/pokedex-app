import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'


const PokedexPage = () => {

  const trainer = useSelector(reducer => reducer.trainer)
  
  const [inputValue, setInputValue] = useState('')

  const [selecValue, setSelecValue] = useState('allPokemons')

  console.log(selecValue)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
  const [pokemons, getAllPokemos, getPokemonosByType] = useFetch(url)

  useEffect(( )=> {
    if (selecValue === 'allPokemons') {
      getAllPokemos()
    } else {
      getPokemonosByType(selecValue)
    }
  }, [selecValue])


  

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  // TO DELETE 
  console.log(inputValue)

  return (
    <div className="pokedex__header">
      <div className="pokedex__header-image">
        <div className="pok-red">POKEDEX</div>
        <div className="pok-black">
          <div className="pok-button"></div>
        </div>
      </div>
      <p className="pokedex__welcome"><span className="pokedex__user-welcome">Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      <form className="pokedex__form" onSubmit={handleSubmit}>
        <input className="pokedex__form-input" ref={inputSearch} type="text"/>
        <button className="pokedex__form-button">Search</button>
      </form>
      <SelectType
      setSelecValue={setSelecValue}/>
      <div className="pokedex__pokemon-list">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage