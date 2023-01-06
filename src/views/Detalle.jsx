import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PokeCard from "../components/PokeCard";


export default function Detalle(){
    const url='https://pokeapi.co/api/v2/pokemon/';
    const { nombre } = useParams();

    const [pokemon,setPokemon] = useState({});
    
    useEffect(()=>{
        obtenerPokemon(nombre);
    },[nombre]);
    
 

    const obtenerPokemon = async (nombre) =>{
        const res = await fetch(url + nombre)
        if (res.status !== 200){

            console.log('Error');
        }else{
            const data = await res.json();
            const objetoPokemon = {
                                    name: data.name[0].toUpperCase() + data.name.slice(1),
                                    img: data.sprites.other.dream_world.front_default,
                                    hp: data.stats[0].base_stat,
                                    stat_attack: data.stats[1].base_stat,
                                    stat_defense: data.stats[2].base_stat,
                                    stat_speed: data.stats[5].base_stat,
                                    types:[]
            };
            
            setPokemon(objetoPokemon)
            console.log(objetoPokemon)
        }
        
    };

    return (
        <div className="fondoCarta">
            {   
                
                (!pokemon.name)?
                <img src='../pokeups.jpg'/>:
                <PokeCard pokemon={pokemon} setPokemon={setPokemon}/>
             
            }
        </div>
    );
}