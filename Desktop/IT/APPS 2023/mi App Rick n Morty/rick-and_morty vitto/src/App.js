
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import style from './components/tarjetas.module.css'
import styleA from './App.module.css'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
//import { Link, NavLink } from 'react-router-dom'
//import CardDetail from './components/CardDetail/CardDetail.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Details.jsx'
import Form from './components/Form/From.jsx'

function App () {
                                                  //Hooks
  
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [ access, setAccess ] = useState(false);
  
  const username = "vittodegiusto@gmail.com";
  const password = "soyhenryRYM2023";

  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
        setAccess(true);
        navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
                                                  // EventHandlers
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY ="25c5421ab18e.53092debcfd09eaf66b7";
    if(characters.find((char) => char.id === id)) {
      return alert("Personaje repetido")
    }

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
//   Paso a dejarles una ayudita con una "trampita" con la que nos encontramos cuando queremos mostrar el detalle.
// A algunos de ustedes les habrá pasado que cuando quieren mostrar el detalle character.origin.name  la consola nos dice "cannot read properties of undefined".
// Modificamos leeeevemente la sintaxis y ponemos character.origin?.name  y estará funcionando...
// Los invito a que me dejen en hilo por qué creen ustedes que sucede esto... y mañana en el Code Review la explicación definitiva.
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }
  // =========   HOME    ======      DETAIL     ======    ABOUT   ========
  return (
    <div>
          {
          document.body.style.backgroundImage = "url('https://doitbeforeme.com/wp-content/uploads/2023/01/lockscreen-rick-and-morty-wallpaper.webp')"
          }
    <div className='App' style={{ padding: '15px' }}>
      
          <h2 className={styleA.ricknmortytitle}>Rick & Morty</h2>
          {/* Title <img src='https://www.pngfind.com/pngs/m/16-165525_rick-and-morty-rick-and-morty-png-transparent.png' /> */}
      
      
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/> }
      
      <Routes>
        <Route path="/home" element={<Cards className={style.listItem} onClose={onClose} characters={characters}/>}/>        
        <Route path="/about" element={<About />}/>
        <Route path="/detail/:detailId" element={<Detail />}/>         
      </Routes>      
    </div>
        <div>        
          {document.title='Rick & Morty - by VittoDG'
        }
        </div>
    </div>
  )
}

export default App
