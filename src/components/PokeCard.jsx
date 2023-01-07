
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

export default function PokeCard({pokemon,setPokemon}){
    const navigate = useNavigate();
    const volver = ()=>{
        navigate(`/pokemones/`)

    }

    return(
        <div className="contenedor banner_img imgPokebolaOpen">
            <Card style={{ width: '20rem' }}>
                
                <Card.Body className='centrar'>
                    <Card.Title className='texto-borde'>{pokemon.name}</Card.Title>
                    <Card.Img  className='imagenCard image-fluid' variant="top" src={pokemon.img} />
                    <p>Ataque:{pokemon.stat_attack} Defensa:{pokemon.stat_defense} Speed:{pokemon.stat_speed}</p>
                    <p >HP:{pokemon.hp}</p>
                    
                    <Button variant="primary" onClick={volver}>Volver</Button>
                </Card.Body>
            </Card>
                    
        </div>
    )
}