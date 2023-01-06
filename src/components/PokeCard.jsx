
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

export default function PokeCard({pokemon,setPokemon}){
    const navigate = useNavigate();
    const volver = ()=>{
        navigate(`/pokemones/`)

    }

    return(
        <div className="contenedor banner_img">
            <Card style={{ width: '20rem' }}>
                <Card.Img  className='imagenCard' variant="top" src={pokemon.img} />
                <Card.Body className='centrar'>
                    <Card.Title className='texto-borde'>{pokemon.name}</Card.Title>
                    <p><span>Ataque:{pokemon.stat_attack} Defensa:{pokemon.stat_defense} Speed:{pokemon.stat_speed}</span></p>
                    <p ><span>HP:{pokemon.hp}</span></p>
                    
                    <Button variant="primary" onClick={volver}>Volver</Button>
                </Card.Body>
            </Card>
                    
        </div>
    )
}