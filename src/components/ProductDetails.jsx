const ProductDetails = () => {
    return (
        <>
        <section className="box-produto">
            <h6 className="sequencia-produto">Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h6>
            <div className="imagens-produto"></div>
            <div className="detalhes-produto"></div>
            <div className="produtos-relacionados">
                <div className="titulo-product-card">
                    <h3 className="titulo-galeria">Produtos relacionados</h3>
                    <a className="link-galeria" href="">Ver todos →</a>
                </div>
                <div className="galeria-produtos">
                    <div class="product-card">
                        <div class="discount-tag">30% OFF</div>
                        <img src="../imagens/card-tenis.png" alt="K-Swiss V8 - Masculino" class="product-image"></img>
                        <h6 class="product-tag">Tênis</h6>
                        <h2 class="product-name">K-Swiss V8 - Masculino</h2>
                        <div class="product-price">
                            <span class="price-old">R$200</span>
                            <span class="price-new">R$100</span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="discount-tag">30% OFF</div>
                        <img src="../imagens/card-tenis.png" alt="K-Swiss V8 - Masculino" class="product-image"></img>
                        <h6 class="product-tag">Tênis</h6>
                        <h2 class="product-name">K-Swiss V8 - Masculino</h2>
                        <div class="product-price">
                            <span class="price-old">R$200</span>
                            <span class="price-new">R$100</span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="../imagens/card-tenis.png" alt="K-Swiss V8 - Masculino" class="product-image"></img>
                        <h6 class="product-tag">Tênis</h6>
                        <h2 class="product-name">K-Swiss V8 - Masculino</h2>
                        <div class="product-price">
                            <span class="price-old">R$200</span>
                            <span class="price-new">R$100</span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="../imagens/card-tenis.png" alt="K-Swiss V8 - Masculino" class="product-image"></img>
                        <h6 class="product-tag">Tênis</h6>
                        <h2 class="product-name">K-Swiss V8 - Masculino</h2>
                        <div class="product-price">
                            <span class="price-old">R$200</span>
                            <span class="price-new">R$100</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default ProductDetails;