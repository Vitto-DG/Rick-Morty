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
                        name={pers.name}
                        species={pers.species}
                        gender={pers.gender}
                        image={pers.image}
                        onClose={() => window.alert('Emulamos que se cierra la card')}
                        />
                     )
                  })
               }
         </TarjetasHolder>
   )
}

export default Cards;
