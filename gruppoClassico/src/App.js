// import logo from './logo.svg';
import './App.css';
// import removeArrayDuplictes from 'remove-array-duplicates-taccarlo';

// function App() {
//   return (
//     <div className="App">
//       <h1> Stai attento alla lezione !</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {Diego, GianMarco} from './components/Profile';
// import gianmarco from './assets/gianmarco.jpeg';
// import Card from './components/Card';
// import { Diego } from './components/Profile';
// import Profile from './Profile.js';  //se in Profile.js c'è un export con default

export default function Gallery() {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1> GRUPPO CLASSICO</h1>
          <h3><i>pochi ma buoni</i></h3>
        </div>
        
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4"><Diego></Diego></div>
          <div className="col-4"><GianMarco/></div>

          {/* <div className="col-4">
            <Card imgPath = {gianmarco} elenco = "Html, css, javascript, react, pyhton, java, c, sql, mariaDB"></Card>
          </div>
          <div className="col-4">
            <Card imgPath = {gianmarco} elenco = "Html, css, javascript, typescript, react, pyhton, java, c, sql, mariaDB"></Card>
          </div> */}

          <div className="col-2"></div>
        </div>
      </div>
    </>
  );

}