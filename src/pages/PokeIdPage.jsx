import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeIdPage.css'


const PokeIdPage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [])

  console.log(pokemon)

  return (
    <>
      <div className="header">

      </div>
      <div className="pokemoncard">
        <div className="pokemoncard__header">
          <div className="pokemoncard__background">
            <img className="pokemoncard__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
        </div>
        <div className="pokemoncard__body">
          <div className="pokemoncard__body-title">
            <p># <span>{pokemon?.id}</span> </p>
            <p>{pokemon?.name}</p>
          </div>
          
          <div className="pokemoncard__weight">
            <ul>
              <li><p>Peso</p><p>{pokemon?.weight}</p></li>
              <li><p>height</p><p>{pokemon?.height}</p></li>
            </ul>
          </div>
          <div className="pokemoncard__type-abilities">

            <div className="pokemoncard__type">
              <p>Type</p>
              <ul>
                {
                  pokemon?.types.map(res => (
                    <li key={res.type.name}>{res.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className="pokemoncard__abilities">
            <p>Abilities</p>
              <ul>
                {
                  pokemon?.abilities.map(res => (
                    <li key={res.ability.name}>{res.ability.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          
          <div className="pokemon__stats">
              <h3>Stats</h3>
              <ul className="pokemon__stats-list">
                {
                  pokemon?.stats.map(res => (
                    <li key={res.stat.name}>
                      <span>{res.stat.name}: </span>
                      <span>{res.base_stat}/150</span>
                      <div className="graphic__container">
                        <div className="stat__graphic">
                          <div className="stat__graphic-charge" style={{width: `${res.base_stat*100/150}%`}}></div>
                        </div>
                      </div>
                      
                    </li>
                  ))
                }
              </ul>
          </div>
          <div className="pokemon__movements">
            <h3>Movements</h3>
            <ul className="pokemon__movements-list">
              {
                pokemon?.moves.map(res => (
                  <li key={res.move.name}>{res.move.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default PokeIdPage