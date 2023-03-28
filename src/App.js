import logo from './logo.svg';
import './App.css';
import Menu from "./components/index"
function App() {
  const isLogin=true;
  const isSearch=false;
  
  // if(true){
  //   return (
  //     <>
  //     Da login
  //     </>
  //   );
  // }
  // else {
  //   return(
  //     <>
  //     chua login
  //     </>
  //   )
  // }
  // return (
  //   <>
    
  //   </>
  // );
  return (
    <>
    {isLogin ?(<>Da login</>): (<>chua Login</>)}
    </>
  )
}

export default App;
