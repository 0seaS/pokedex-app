import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"


const PokeCard = ({ url }) => {

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article onClick={handleClick}>
        <header>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(typeInfo => (
                        <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr />
            <ul>
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url}>
                            <h4>{statInfo.stat.name}</h4>
                            <span>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard