import '../assets/card.css';
import gianmarco from '../assets/gianmarco.jpeg';

export default function Card({imgPath, elenco}) {
    const imgStyle = {width: "300px", height: "300px",};

    return (
      <>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img id="immagine" src={imgPath} alt="Membro del gruppo" style={imgStyle}/>
                </div>
                <div className="flip-card-back">
                    <h1>Linguaggi / framework</h1>
                    <p>{elenco}</p>
                </div>
            </div> 
        </div>
      </>
    );
}