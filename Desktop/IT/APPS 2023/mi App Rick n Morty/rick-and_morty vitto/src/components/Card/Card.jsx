import style from './Card.module.css';

function Card(props) {
   return (
      <div className={style.tarjeta}>        
      <img src={props.image} alt={props.name} />         
         <h2>Name: {props.name}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <button onClick={onclose} className={style.closeButton}>X</button>
      </div>
   );
}


export default Card;