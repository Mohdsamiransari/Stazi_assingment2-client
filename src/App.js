import { Home } from "./components/Home";
import {Routes, Route} from 'react-router-dom'
import { PropertyDetail } from "./components/PropertyDetail";



function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home/:_id" element={<PropertyDetail/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
