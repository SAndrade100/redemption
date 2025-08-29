import React, { useState } from "react";

export default function Pagina({
    direita = false,
    capitulo,
    titulo,
    texto,
    versoCapitulo,
    versoTitulo,
    versoTexto,
    numero
}) {
    const [flip, setFlip] = useState(false);

    return (
        <div className="pagina-flip-container">
            <div className={`pagina-flip${flip ? " flipped" : ""}`}>
                <div className={`pagina${direita ? " direita" : ""}`}>
                    <button className="flip-btn" onClick={() => setFlip(f => !f)}>Virar Página</button>
                    <div className="decor-top"></div>
                    <h2>{capitulo}</h2>
                    <h1>{titulo}</h1>
                    <p>{texto}</p>
                    <div className="decor-bottom"></div>
                    <div className="numero-pagina">{numero}</div>
                </div>
                <div className={`pagina-back${direita ? " direita-back" : ""}`}>
                    <div className="decor-top"></div>
                    <h2>{versoCapitulo}</h2>
                    <h1>{versoTitulo}</h1>
                    <p>{versoTexto}</p>
                    <div className="decor-bottom"></div>
                    <div className="numero-pagina">{numero}</div>
                </div>
            </div>
        </div>
    );
}
