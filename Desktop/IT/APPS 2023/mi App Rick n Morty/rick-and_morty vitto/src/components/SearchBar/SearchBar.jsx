import style from "./SearchBar.module.css"
import { useState } from "react";

function SearchBar({ onSearch }) {

      const [id, setId] = useState("");

      const handleChange = (event) => {            //    Keydown: Enter
         setId(event.target.value);
      };                                           //    Clear input al recibir Card

   return (
      <div className={style.bar}>        
         <input 
         type='search' className={style.searchInput} onChange={handleChange}
         />
         <button className={style.searchButton} onClick={() => onSearch(id)}>
            Agregar
         </button>      
      </div>
   );
}

export default SearchBar;