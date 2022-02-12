import './App.css';
import useState from "react"
import useEffect from "react"

function App() {

  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/")
    .then((res) => res.json())
    .then((data)=>setEpisodios(data.results))
  }, [])

  console.log("se rendediro el componente app")
  return (
    <div>
      {episodios.map((episodio) =>(
        <h2>{episodio.name}</h2>
      ))}
    </div>
  );
}

export default App;
