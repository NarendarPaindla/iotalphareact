import Header from './components/Header';
import Greeting  from './components/Greetings';
import Greet from './components/Greet';
import  Counter from './components/Counter';
import MounseEventDemo from './components/MouseEventsDemo';
function App(){
  const name="IOTalpha";
  return(
   <>
   {/* <Greeting/>
   <Greet/>
   <Header name={name}/>
   <h1>Hello World</h1>
   <p>This batch is {name}</p>
   <Counter/> */}
   <MounseEventDemo/>
   </>
  );
}

export default App;