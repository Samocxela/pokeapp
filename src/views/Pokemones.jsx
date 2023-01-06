import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Pokemones(){
    const [listadoPokemones,setListadoPokemones]=useState('');
    const [pokemonSeleccionado, setPokemonSeleccionado]=useState('');
    const navigate = useNavigate();
    const url='https://pokeapi.co/api/v2/pokemon/';

    useEffect(()=>{
        obtenerListadoPokemones();
    },[]);

    const irAPokemones = () =>{
        
        navigate(`/pokemones/${pokemonSeleccionado}`);
    }

    const obtenerListadoPokemones = async () =>{
        const res = await fetch(url)
        const data = await res.json();
        data.results.sort((a,b)=>{
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
        setListadoPokemones(data.results)
        console.log(setListadoPokemones)
    }

    return(
       <div>
            <section className="contenedor fondoCarta imgPokebola centrar">
                
                <h2 className="texto-borde mb-5">Selecciona un Pokémon</h2>
               
                <Form.Select className="mb-3" style={{width: '300px'}} aria-label="Default select example" value={pokemonSeleccionado} onChange={(e)=>setPokemonSeleccionado(e.target.value)}>
                    {listadoPokemones&&listadoPokemones.map((elemento,i)=>(
                        <option key={i} value={elemento.name}>{elemento.name}</option>

                    ))}    
                 
                </Form.Select>
                <Button variant="primary" className="mt-5" onClick={irAPokemones}>Ver Detalle</Button>
                <br />
            </section>
       </div> 
    )
}