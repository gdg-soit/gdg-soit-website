import { Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Event from "./pages/Event"
import Blogs from "./pages/Blogs"


function App() {

  return (
    <div className="inter-4">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/teams" element={ <Teams/> } />
        <Route path="/event" element= { <Event/>} />
        <Route path="/blogs" element= { <Blogs/>} />
      </Routes>
      {/* Footer */}
    </div>
  )
}

export default App
