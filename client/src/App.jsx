//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//Cpmponent
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      
    </>
  );
}

export default App;


//Dielievery
//Dining out
//Night
//Nutri

//Master -> Url parameter.