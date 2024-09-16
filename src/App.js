import logo from './logo.svg';
import './App.css';

function App() {
  const x=7;
  let text = "Goodbye";
  if(x<10){
    text = "Hello";
  }
  return (
    <>
    <div className="App">
      <h1>Hello world its me DK</h1>  
     <h2>{text}</h2>
    </div>
    </>
  );
}

export default App;
