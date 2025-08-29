import React from "react";
import Capa from "./capa";
import Pagina from "./pagina";

export default function Livro() {
    return (
        <>
            <style>
                {`
                .livro {
                    position: relative;
                    width: 900px;
                    max-width: 98vw;
                    height: 570px;
                    max-height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(90deg, #c7b08a 0%, #f8ecd4 50%, #c7b08a 100%);
                    border-radius: 24px;
                    box-shadow: 0 12px 48px rgba(0,0,0,0.18), 0 0 0 12px #bfa46a inset;
                    overflow: visible;
                }
                .livro-inner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
                .pagina-flip-container {
                    perspective: 1200px;
                    width: 44%;
                    height: 86%;
                    position: relative;
                    margin: 0 1.5%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .pagina-flip {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.9s cubic-bezier(.55,-0.01,.38,1.01);
                    transform-style: preserve-3d;
                    position: relative;
                }
                .pagina-flip.flipped {
                    transform: rotateY(180deg);
                }
                .pagina, .pagina-back {
                    backface-visibility: hidden;
                    width: 100%;
                    height: 100%;
                    background: #fdf6e3;
                    box-shadow: 0 0 24px 0 rgba(0,0,0,0.10), 0 0 0 2px #e6d3b3 inset;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    font-family: 'Georgia', serif;
                    color: #3a2f1d;
                    padding: 38px 32px 32px 38px;
                    position: absolute;
                    top: 0; left: 0;
                    border-radius: 18px 0 0 18px;
                    overflow: hidden;
                }
                .pagina.direita, .pagina-back.direita-back {
                    border-radius: 0 18px 18px 0;
                    padding-left: 32px;
                    padding-right: 38px;
                }
                .pagina-back {
                    justify-content: center;
                    transform: rotateY(180deg);
                }
                .pagina .decor-top, .pagina .decor-bottom,
                .pagina-back .decor-top, .pagina-back .decor-bottom {
                    width: 90%;
                    height: 22px;
                    margin: 0 auto;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .pagina .decor-top, .pagina-back .decor-top {
                    background-image: url('data:image/svg+xml;utf8,<svg width="320" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M10,18 Q40,2 160,10 Q280,2 310,18" fill="none" stroke="%23bfa46a" stroke-width="2"/><path d="M30,12 Q50,8 70,12" fill="none" stroke="%23bfa46a" stroke-width="1"/><path d="M290,12 Q270,8 250,12" fill="none" stroke="%23bfa46a" stroke-width="1"/></svg>');
                }
                .pagina .decor-bottom, .pagina-back .decor-bottom {
                    background-image: url('data:image/svg+xml;utf8,<svg width="320" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M10,4 Q40,20 160,12 Q280,20 310,4" fill="none" stroke="%23bfa46a" stroke-width="2"/><path d="M30,10 Q50,14 70,10" fill="none" stroke="%23bfa46a" stroke-width="1"/><path d="M290,10 Q270,14 250,10" fill="none" stroke="%23bfa46a" stroke-width="1"/></svg>');
                }
                .pagina h1, .pagina-back h1 {
                    font-size: 1.7em;
                    margin-bottom: 0.4em;
                    color: #7c5c2a;
                    text-align: center;
                }
                .pagina h2, .pagina-back h2 {
                    font-size: 1.1em;
                    margin-bottom: 1em;
                    color: #a88c5f;
                    text-align: center;
                }
                .pagina p, .pagina-back p {
                    font-size: 1.05em;
                    line-height: 1.7;
                    margin-bottom: 1.1em;
                    text-align: justify;
                }
                .pagina .numero-pagina, .pagina-back .numero-pagina {
                    position: absolute;
                    bottom: 18px;
                    right: 32px;
                    font-size: 0.95em;
                    color: #b8a77a;
                    font-style: italic;
                }
                .fita {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 24px;
                    height: 38px;
                    background: linear-gradient(180deg, #c0392b 60%, #a93226 100%);
                    border-radius: 0 0 12px 12px;
                    z-index: 3;
                }
                .flip-btn {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    z-index: 10;
                    background: #bfa46a;
                    color: #fff;
                    border: none;
                    border-radius: 6px;
                    padding: 8px 16px;
                    cursor: pointer;
                    font-size: 1em;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                @media (max-width: 900px) {
                    .livro {
                        width: 98vw;
                        height: 60vw;
                        min-height: 350px;
                    }
                    .pagina, .pagina-back {
                        padding: 18px 8px 18px 18px;
                    }
                    .pagina.direita, .pagina-back.direita-back {
                        padding-left: 8px;
                        padding-right: 18px;
                    }
                }
                `}
            </style>
            <div className="livro">
                <div className="livro-inner">
                    <Capa />
                    <Pagina
                        capitulo="Capítulo 1"
                        titulo="O Começo de Uma Jornada"
                        texto="Em uma manhã dourada, as páginas de um novo livro se abriram para revelar um mundo de possibilidades. Cada palavra escrita era uma porta para aventuras, sonhos e descobertas."
                        versoCapitulo="Capítulo 1 (Verso)"
                        versoTitulo="Reflexão"
                        versoTexto="O verso da página revela pensamentos profundos e reflexões sobre o início da jornada."
                        numero={1}
                    />
                    <Pagina
                        direita
                        capitulo="Capítulo 2"
                        titulo="Novos Horizontes"
                        texto="O leitor, curioso, mergulhou na história, sentindo o aroma do papel e ouvindo o suave sussurrar das páginas ao serem viradas. Assim começava uma jornada inesquecível."
                        versoCapitulo="Capítulo 2 (Verso)"
                        versoTitulo="Descobertas"
                        versoTexto="No verso, novas descobertas aguardam, ampliando ainda mais os horizontes do leitor."
                        numero={2}
                    />
                </div>
                <div className="fita"></div>
            </div>
        </>
    );
}
