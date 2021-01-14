import Logo from './logoshipix.png';
import './style.css'; 
import Navbar from './Navbar.js';

function App() {
  return (
    <div >
     <div>
       <Navbar />
       <h1>
         Exercices 3
       </h1>
       <img src={Logo} alt=""height="200px"/>
     </div>
    </div>
  );
}

export default App;
