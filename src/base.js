
import { useState } from 'react';
import axios from'axios';
function App() {   
  const [name,setName]=useState([])  
  const [population,setPopulation]=useState([]) 
  
  const[action,setAction]=useState([])
  const [total,setTotal]=useState('')
  const news =async()=>{ 
    try{
   const response=  await axios.get("https://restcountries.com/v3.1/all")   
   const nn=(response.data)
   if(nn){  
    const responsedata=(nn);   
    console.log(responsedata)
    setAction(responsedata)
    const name=responsedata.filter((contry)=>contry.region==="Asia");   
    
     const population =responsedata.filter((pop)=>pop.population<200000); 
    
    const populat=responsedata.map((x)=>x.population) 
    
    const initialValue = 0;
    setTotal(populat.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    ))
    
    setName(name) 
    setPopulation(population) 
    
   } 
   else { 
    throw   ({error:"error"})
   }
    }catch(error){  
      console.log("error")

    }

  }



  return (
    <div className="App">
      <header className="App-header">
        
        {name? <>{name.map((cn1)=><h1> {cn1.name.common}</h1>)}</>:<h1>'error'</h1>}  
        
        {population?<>{population.map((cn1)=><h1> {cn1.name.common} : {cn1.population}</h1>)}</>:<h1>'error'</h1>} 

       
    {action?action.map((element) => (<h3>
      Name:{element.name.common}<br/>
   capital:{element.capital} <br/>
      flag:{element.flag}</h3>)) :<h1>'error'</h1>}
     
      <h2>"total population" :{total};</h2>
     
        <button onClick={news}>submit</button>
      </header>
    </div>
  );
}

export default App;
