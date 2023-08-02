import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"


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
    <div>
      <p><span>Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text"/>
        <button>Search</button>
      </form>
      <SelectType
      setSelecValue={setSelecValue}/>
      <div>
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