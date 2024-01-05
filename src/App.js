
import './App.css';
import Base from './base'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {   
  
    

  



  return ( 
    <BrowserRouter>  
    <Routes> 
    <Route exact path='/' element={<Base/>}/>
    </Routes>
      
    
    </BrowserRouter>
    
      
    
  );
}

export default App;
