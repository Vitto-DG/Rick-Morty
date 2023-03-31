import style from './Card.module.css';
import { Link } from "react-router-dom";

function Card(props) {
   return (
      <div className={style.tarjeta}>        
      <img src={props.image} alt={props.name} />         
         <Link to={`/detail/${props.id}`}>
         <h2>Name: {props.name}</h2>
         </Link>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h3>#: {props.id}</h3>
         <button onClick={() => props.onClose(props.id)} className={style.closeButton}>X</button>
         
      </div>
   );
}


export default Card;