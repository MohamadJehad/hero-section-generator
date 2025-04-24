import './App.css'
import HeroSection from './Components/HeroSection '
import { dummyData } from "./Data/heroContent"; 

function App() {

  return <HeroSection initialData={dummyData} />

}

export default App
