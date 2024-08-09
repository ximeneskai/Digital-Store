const ProductDetails = () => {
    return (
        <>
        <section className="page-box-produto">
            <h6 className="sequencia-produto"><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h6>
            <div className="box-produto">
                <div className="imagens-produto">
                    <div className="imagem-max">
                        <img src="../imagens/produto-imagem.png" alt="Imagem maior do produto" />
                    </div>
                    <div className="imagens-mini">
                    <img src="../imagens/produto-imagem-3.png" alt="Imagem menor do produto" />
                    <img src="../imagens/produto-imagem-2.png" alt="Imagem menor do produto" />
                    <img src="../imagens/produto-imagem-3.png" alt="Imagem menor do produto" />
                    <img src="../imagens/produto-imagem-4.png" alt="Imagem menor do produto" />
                    <img src="../imagens/produto-imagem-5.png" alt="Imagem menor do produto" />
                    </div>
                </div>
                <div className="detalhes-produto">
                    <h1 className="titulo-produto-tenis">Tênis Nike Revolution 
                    6 Next Nature Masculino</h1>
                    <h6 className="descricao-produto-tenis">Casual | Nike | REF:38416711</h6>
                    <div className="avaliacao-produto">
                        <img src="../imagens/estrelas-produto.png" alt="Avaliação do produto" />&nbsp;&nbsp;
                        <img src="../imagens/avaliacao-produto.png" alt="Avaliação do produto" />
                    </div>
                    <div className="preco-produto">
                            <p class="price">R$&nbsp;
                            <span class="current">219</span>,00 &nbsp;  
                            <span class="old">299,00</span>
                            </p>
                    </div>
                    <div className="texto-descricao">
                        <h6 className="titulo-texto-descricao">Descrição do produto</h6>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perferendis iure ducimus eius ullam cum, earum aperiam ipsa fuga alias recusandae, nulla voluptas laboriosam corporis debitis odit? Voluptate, consequuntur illum?</h6>
                    </div>
                    
                    <div className="tamanhos-produto">
                        <h6 className="titulo-texto-descricao">Tamanho</h6>
                        <button className="numero-tamanho">39</button>
                        <button className="numero-tamanho">40</button>
                        <button className="numero-tamanho-selecionado">41</button>
                        <button className="numero-tamanho">42</button>
                        <button className="numero-tamanho">43</button>
                    </div>
                    <div className="cores-produto">
                        <h6 className="titulo-texto-descricao">Cores</h6>
                        <button className="botao-cor-1">&nbsp;</button>
                        <button className="botao-cor-2">&nbsp;</button>
                        <button className="botao-cor-3">&nbsp;</button>
                        <button className="botao-cor-4">&nbsp;</button>
                    </div>
                    <button className="offer-button" id="botao-comprar">COMPRAR</button>
                </div>
            </div>
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