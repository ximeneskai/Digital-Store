const Destaques = () => {
    return ( 
        <>
        <section className="destaques-box">
            <h2 className="destaques-titulo">Coleções em destaque</h2>
            <div className="destaques-icones">
                <div className="destaques-item">
                    <img className="destaques-icone" src="../imagens/icone-camisa.png" alt="Icone de Camisa" />
                    <h6 className="legenda-icone">Camisetas</h6>
                </div>
                <div className="destaques-item">
                    <img className="destaques-icone" src="../imagens/icone-calca.png" alt="Icone de Camisa" />
                    <h6 className="legenda-icone">Calças</h6>
                </div>
                <div className="destaques-item">
                    <img className="destaques-icone" src="../imagens/icone-camisa.png" alt="Icone de Camisa" />
                    <h6 className="legenda-icone">Bonés</h6>
                </div>
                <div className="destaques-item">
                    <img className="destaques-icone" src="../imagens/icone-headphone.png" alt="Icone de Camisa" />
                    <h6 className="legenda-icone">Headphones</h6>
                </div>
                <div className="destaques-item">
                    <img className="destaques-icone" src="../imagens/icone-tenis.png" alt="Icone de Camisa" />
                    <h6 className="legenda-icone">Tênis</h6>
                </div>
            </div>

        </section>
        
        
        </>
     );
}
 
export default Destaques;