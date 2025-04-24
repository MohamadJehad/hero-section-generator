import './App.css'
import HeroSection from './Components/HeroSection '
import { dummyData } from "./Data/heroContent"; 

const App = () => <HeroSection initialData={dummyData} />;

export default App
