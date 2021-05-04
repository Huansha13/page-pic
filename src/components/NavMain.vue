<template>
  <nav>
    <div class="logo d-flex">
      <img src="https://www.calculadoradefletes.com/assets/img/ch-logo.png" alt="">
      <div class="ifo-logo">
        <span>CALCULADORA DE FLETES E IMPUESTOS DE ADUANA</span>
      </div>
    </div>
    <div class="links">
      <div class="redSocial">
        <div class="d-flex contact-redSocial">
          <ul class="d-flex contatc-paises">
            <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/panamaRound.svg" alt="">Panamá +50762197664</a></li>
            <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/peruRound.svg" alt="">Perú +51920301745</a></li>
            <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/venezuelaRound.svg" alt="">Venezuela +582127632240</a></li>
          </ul>
          <ul class="d-flex redSocialLinks">
            <li><a href="#"><i class="uil uil-facebook-f"></i></a></li>
            <li><a href="#"><i class="uil uil-twitter"></i></a></li>
            <li><a href="#"><i class="uil uil-instagram"></i></a></li>
          </ul>
          <div class="menu">
            <label for="menu">
              <i class="uil uil-bars"></i>
            </label>
          </div>
        </div>
      </div>
      <div class="access-link d-flex">
        <ul class="d-flex">
          <li><a href="#"><i class="uil uil-estate"></i>Cotiza tu Flete</a></li>
          <li><router-link to="/importadores" href="#"><i class="uil uil-suitcase-alt"></i>Importaciones grupales</router-link></li>
          <li><a href="#"><i class="uil uil-file-landscape-alt"></i> Servicio de Agente de Aduana</a></li>
          <li><a href="#"><i class="uil uil-university"></i> Aprende a Ahorrar</a></li>
          <li><a href="#"><i class="uil uil-calling"></i> Contacto</a></li>
        </ul>
        <span> &nbsp; - &nbsp;</span>
        <span class="login">
          <a href=""><b>Iniciar sesión</b></a>
        </span>
      </div>
    </div>
  </nav>
  <input type="checkbox" id="menu" style="display:none;">
  <div class="navbar">
    <ul>
      <li style="text-align: end"><a href=""><b><i class="uil uil-user"></i> Iniciar sesión</b></a></li>
      <li><a href="#"><i class="uil uil-estate"></i>Cotiza tu Flete</a></li>
      <li><router-link to="/importadores" href="#"><i class="uil uil-suitcase-alt"></i>Importaciones grupales</router-link></li>
      <li><a href="#"><i class="uil uil-file-landscape-alt"></i> Servicio de Agente de Aduana</a></li>
      <li><a href="#"><i class="uil uil-university"></i> Aprende a Ahorrar</a></li>
      <li><a href="#"><i class="uil uil-calling"></i> Contacto</a></li>
    </ul>
    <span class="line"></span>
    <ul class="d-flex flex-wrap contatc-paises">
      <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/panamaRound.svg" alt="">Panamá +50762197664</a></li>
      <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/peruRound.svg" alt="">Perú +51920301745</a></li>
      <li><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/venezuelaRound.svg" alt="">Venezuela +582127632240</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "styles/stylesNav";
.navbar {
  display: none;
  background: linear-gradient(
          90deg
      , #3c80b4, #0d5084 35%, #0c1924);
  padding: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 20px;
    }
    li a {
      color: white;
      text-decoration: none;
      i {
        margin-right: 10px;
      }
    }
  }
}
.menu i{
  &:hover {
    color: #007bff;
  }
}
@media (max-width: 768px) {
  #menu:checked + .navbar{
    display: flex !important;
    flex-direction: column;
  }
  .menu-area{
    display: flex;
  }
  .contatc-paises {
    li {
      margin-right: 20px;
    }
  }
  .line {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid white;
    margin-bottom: 10px;
  }
}
</style>
