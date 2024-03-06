export default function Profile({ url, nome }) {
    return (
        <>
            <div className="persona">
                <div className="foto">
                    <img
                        src={url}
                        alt={nome}
                        className="photo"
                    />
                </div>

                <div className="testo">
                    <h2>{nome}</h2>
                </div>
            </div>
        </>
    );
}