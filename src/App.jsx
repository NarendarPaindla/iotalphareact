import Header from './components/Header';
function App(){
  const name="IOTalpha";
  return(
   <>
   <Header name={name}/>
   <h1>Hello World</h1>
   <p>This batch is {name}</p>
   </>
  );
}

export default App;