import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Section = () => {
    const navigate = useNavigate(); // Crie uma instância de navigate

    const handleClick = () => {
        const productId = 1; // Substitua pelo ID do produto desejado
        navigate(`/product/${productId}`); // Navegue para a nova rota
    };

    return (
        <>
            <section className="oferta-especial-box">
                <div className="oferta-especial-imagens">
                    <img src="../imagens/background-sapato-secao.png" alt="Imagem de fundo" className="imagem-fundo" />
                    <img src="../imagens/sapato-secao.png" alt="Imagem da frente" className="imagem-frente" />
                </div>
                
                <div className="oferta-especial-content">
                    <h6 className="highlight-text-oferta">Oferta Especial</h6>
                    <h2 className="titulo-oferta-especial">Air Jordan edição de colecionador</h2>
                    <p className="texto-oferta-especial">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    <p></p>
                    <button className="offer-button" onClick={handleClick}>Ver Oferta</button> {/* Adicione o evento onClick */}
                </div>
            </section>
        </>
    );
}
 
export default Section;
