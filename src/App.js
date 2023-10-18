import { useState } from 'react';
import './App.css';
import { Tooltip } from './tooltip/tooltip';

function App() {
  // making state
  const [position,setPosition] = useState("top");
  const [Hovering,setHovering] = useState(false);

  // function to set position 
  const handlePosition = (pos)=>{
       setPosition(pos);
  }
  // function to start hovering
  const handleHover = ()=>{
      setHovering(true);
  }
  // function to remove hovering 
  const handleLeave = ()=>{
      setHovering(false);
  }
  return (
    <div className="App">
         <Tooltip handlePosition={handlePosition} 
                  handleHover={handleHover} 
                  handleLeave={handleLeave}
                  position = {position}
                  Hovering = {Hovering}/>
    </div>
  );
}

export default App;
