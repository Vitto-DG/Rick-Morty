import Card from '../Card/Card';
import { TarjetasHolder } from './styledComponents';

function Cards(props) {
   const { characters } = props;
   return (
         <TarjetasHolder>
               {
                  props.characters.map((pers) =>{
                     return(
                        <Card
                        key={pers.id}
                        id={pers.id}
                        name={pers.name}
                        species={pers.species}
                        gender={pers.gender}
                        image={pers.image}
                        onClose={props.onClose}
                        />
                     )
                  })
               }
         </TarjetasHolder>
   )
}

export default Cards;
