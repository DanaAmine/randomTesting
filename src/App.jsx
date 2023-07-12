import './App.css'
import NavBar from './Components/NavBar';
import Shapes from './Components/Shapes';

function App() {
  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 7px;
      background-color: #272727; /* Set the background color to blue */
    }
  
    ::-webkit-scrollbar-thumb {
      background-color:#50C1F5 ;
      border-radius: 5px;
    }
  `;
  return (
    <>
<<<<<<< HEAD
    <style>{scrollbarStyles}</style>
    {/* <h1 className="text-3xl text-GDG-blue">hello world!</h1> */}
    <div className=' bg-[#1F1F1F] dark:bg-white  h-screen '>
      <NavBar/>
       <Shapes/>
    </div>
    <div className='h-[1200px]'>heloo</div>
=======

>>>>>>> 46bf092ff146781c9a255cc7d3ba874660f596ca
    </>
  )
}

export default App;
