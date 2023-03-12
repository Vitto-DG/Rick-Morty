
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import style from './components/tarjetas.module.css'
import styleA from './App.module.css'
import { useState } from 'react'


function App () {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym-.up.railway.app/api";
    const API_KEY ="25c5421ab18e.53092debcfd09eaf66b7";
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }else {
        alert("No hay personajes con ese ID");
      }
    });
  }


  return (
    <div>
          {
          document.body.style.backgroundImage = "url('https://doitbeforeme.com/wp-content/uploads/2023/01/lockscreen-rick-and-morty-wallpaper.webp')"
          }
    <div className='App' style={{ padding: '25px' }}>
      
          <h2 className={styleA.ricknmortytitle}>Rick & Morty</h2>
          {/* Title <img src='https://www.pngfind.com/pngs/m/16-165525_rick-and-morty-rick-and-morty-png-transparent.png' /> */}
      <div className={styleA.Nav}>
        <Nav onSearch={onSearch}/> 
      </div>
      <div>       
          <div className={style.unorderedList}>
            <Cards className={style.listItem}       // este compt pasa 
              characters={characters}
            />
          </div>
      </div>
      <hr />
    </div>
        <div>
        
          {document.title='Rick & Morty - by VittoDG'
        }
        </div>
    </div>
  )
}

export default App
