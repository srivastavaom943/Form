import Firstpage from './Firstpage';
import './index.css';
import './App.css'
import Secondpage from './Secondpage/Secondpage';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='' element={  <Firstpage/>}/>
      <Route path='/Secondpage'   element={  <Secondpage/>}/>
    
    </Routes>
    
</>
  )
}

export default App;
