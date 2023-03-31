import React from "react";
import './About.css'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
                <h1>Nunca es tarde...</h1>
                <img className="pic" src="https://victoriodegiusto.com/wp-content/uploads/2022/08/cropped-WhatsApp-Image-2022-07-28-at-9.26.47-AM.jpeg" Alt="Vitto DG"/>
                <p>Aca estoy... cambiando de profesion a mis 35 años. Luchando con la frustración  interna de subordinar todo mi conocimiento y experiencia
                    para aprender esta nueva movida a un ritmo muy veloz. Con una cuenta regresiva para poder seguir viviendo donde me siento mas tranquilo y comodo.
                </p>

            </>
        )
    }
}
export default About;