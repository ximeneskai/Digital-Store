const Layout= () => {

return (
<>
<div className="box-carrossel">
<section className="box-secao">
    <div className="layout-container">
      <div className="layout-content">
        <p className="highlight-text">Melhores ofertas personalizadas</p>
        <h1 className="title-layout" >Queima de estoque Nike <span role="img" aria-label="fire">🔥</span></h1>
        <p className="description-text">
          Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.
        </p>
        <button className="offer-button">Ver Ofertas</button>
      </div>
    </div>
</section>
<div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../imagens/sapato-carrossel.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="../imagens/sapato-carrossel.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="../imagens/sapato-carrossel.png" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</>
  );
}
 
export default Layout;