import { Routes,Route} from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
         <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
    </>
  )
}

export default App
