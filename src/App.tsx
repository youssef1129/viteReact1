import Nav from "./components/Nav"
import './App.css'
import { Top } from "./components/Top"
import { Info } from "./components/Info"
import { Imagee } from "./components/Image"
import { Training } from "./components/Training"
import { Quiz } from "./components/Quiz"
import { Bottom } from "./components/Bottom"
function App() {

  return (
    <div>
      <Nav />
      <div className="container">
        <Top />
        <div className="section1">
          <Info/>
          <Imagee/>
          <Training/>
        </div>
        <Quiz/>
        <Bottom/>
      </div>
    </div>
  )
}

export default App
