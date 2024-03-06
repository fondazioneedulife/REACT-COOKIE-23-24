import '../assets/card.css';

export default function Card({imgPath, elenco, messaggio}) {
    const imgStyle = {width: "300px", height: "300px",};

    return (
      <>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img id="immagine" src={imgPath} alt="Membro del gruppo" style={imgStyle}/>
                </div>
                <div className="flip-card-back">
                    <h1>Linguaggi e framework</h1>
                    <p>{elenco}</p>
                    <br />
                    <h3>{messaggio}</h3>
                </div>
            </div> 
        </div>
      </>
    );
}