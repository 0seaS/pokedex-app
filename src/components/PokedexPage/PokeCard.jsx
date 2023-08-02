import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  const firstType = pokemon?.types[0].type.name

  return (
    <article className={`pokeCard ${firstType}-border`} onClick={handleClick}>
        <header className={`pokeCard__header ${firstType}-gradient`}>
            <img className="pokeCard__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="pokeCard__body">
            <h3 className={`pokeCard__name ${firstType}-color`}>{pokemon?.name}</h3>
            <ul className="pokeCard__types">
                {
                    pokemon?.types.map(typeInfo => (
                        <li className="pokeCard__typeName" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="pokeCard__hr"/>
            <ul className="pokeCard__stats">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="pokeCard__stat" key={statInfo.stat.url}>
                            <h4 className="pokeCard__statName">{statInfo.stat.name}</h4>
                            <span className={`pokeCard__statValue ${firstType}-color`}>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard