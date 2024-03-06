import './App.css';
import Profile from'./functions/profile.js';
import scando from './foto/Scando.jpg'
import giacopuzzi from './foto/Giacopuzzi.jpg'
import talha from './foto/Talha.jpg'
import lorenzo from './foto/Lorenzo.jpg'
import davide from './foto/DavideAngiari.jpg'

// import {Profile2} from'./functions/profile.js';

export default function Gallery(){
  return ( // su return può esserci solamente un solo elemento
    <section>
      <h1>!COOKIE</h1>
      {/*questo è un commento*/}
      <p>Forza Back-End</p>
      <div className='lista'>
      
      <Profile url={scando} nome = "Matteo Scandolara"/>
      <Profile url={giacopuzzi} nome = "Lorenzo Giacopuzzi"/>
      <Profile url={talha} nome = "Talha Imran"/> 
      <Profile url={lorenzo} nome = "Lorenzo Russo"/>
      <Profile url={davide} nome = "Davide Angiari"/>

      </div>
    </section>
  );
}
