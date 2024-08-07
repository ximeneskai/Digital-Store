const Section = () => {
    return (
    <>
        <section className="oferta-especial-box">

            <div className="oferta-especial-imagens">
                <img src="../imagens/background-sapato-secao.png" alt="Imagem de fundo" class="imagem-fundo"></img>
                <img src="../imagens/sapato-secao.png" alt="Imagem da frente" class="imagem-frente"></img>
            </div>
            
            <div className="oferta-especial-content">
                <h6 className="highlight-text-oferta">Oferta Especial</h6>
                <h2 className="titulo-oferta-especial">Air Jordan edição de 
                colecionador</h2>
                <p className="texto-oferta-especial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <p></p>
                <button className="offer-button">Ver Oferta</button>
            </div>
            
        </section>
    </>
    );
}
 
export default Section;