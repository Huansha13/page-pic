<template>
  <nav class="animate__animated animate__fadeInDown">
    <div class="redSocial d-flex">
      <div class="logo-mobile">
        <img src="https://www.calculadoradefletes.com/assets/img/ch-logo.png" alt="">
      </div>
      <ul class="d-flex contatc-paises">
        <li class="li-contact"><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/panamaRound.svg" alt=""><b>Panamá:</b>&nbsp; +50762197664</a></li>
        <li class="li-contact"><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/peruRound.svg" alt=""><b>Perú:</b> &nbsp;+51920301745</a></li>
        <li class="li-contact"><a href="#"><img src="https://www.calculadoradefletes.com/assets/img/flags/venezuelaRound.svg" alt=""><b>Venezuela:</b>&nbsp; +582127632240</a></li>
      </ul>
      <div class="d-flex contact-redSocial">
        <ul class="d-flex redSocialLinks">
          <li><a href="#"><i class="uil uil-facebook-f"></i></a></li>
          <li><a href="#"><i class="uil uil-twitter"></i></a></li>
          <li><a href="#"><i class="uil uil-instagram"></i></a></li>
        </ul>
        <span class="login">
          <a href="">Iniciar sesión</a>
        </span>
        <div class="menu">
          <label for="menu">
            <i class="uil uil-bars"></i>
          </label>
        </div>
      </div>
    </div>
  </nav>
  <div class=" banner animate__animated animate__fadeInDown">
    <div class="background"></div>
    <div class="nav-banner">
      <div class="logo">
        <img class="logo-pic" src="https://www.calculadoradefletes.com/assets/img/ch-logo.png" alt="">
        <div class="ifo-logo">
          <span>CALCULADORA DE FLETES E IMPUESTOS DE ADUANA</span>
        </div>
      </div>
      <div class="access-link d-flex animate__animated animate__bounce">
        <ul class="d-flex">
          <li><a href="#"><i class="uil uil-estate"></i>Cotiza tu Flete</a></li>
          <li><router-link to="/importadores" href="#"><i class="uil uil-suitcase-alt"></i>Importaciones grupales</router-link></li>
          <li><a href="#"><i class="uil uil-file-landscape-alt"></i> Servicio de Agente de Aduana</a></li>
          <li><a href="#"><i class="uil uil-university"></i> Aprende a Ahorrar</a></li>
          <li><a href="#"><i class="uil uil-calling"></i> Contacto</a></li>
        </ul>
      </div>
    </div>
    <img class="img-banner" src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_960_720.jpg" alt="">
  </div>



  <input type="checkbox" id="menu" style="display:none;">
  <div class="navbar">
    <ul>
      <li style="margin-bottom: 35px"><a href="" class="login-r"><b><i class="uil uil-user"></i> Iniciar sesión</b></a></li>
      <li><a href="#"><i class="uil uil-estate"></i>Cotiza tu Flete</a></li>
      <li><router-link to="/importadores" href="#"><i class="uil uil-suitcase-alt"></i>Importaciones grupales</router-link></li>
      <li><a href="#"><i class="uil uil-file-landscape-alt"></i> Servicio de Agente de Aduana</a></li>
      <li><a href="#"><i class="uil uil-university"></i> Aprende a Ahorrar</a></li>
      <li><a href="#"><i class="uil uil-calling"></i> Contacto</a></li>
    </ul>
    <span class="line"></span>
    <ul class="d-flex flex-wrap contatc-paises-r">
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
  padding: 75px 20px 20px 25px;
  background: #272f3e;
  position: fixed;
  z-index: 1;
  width: 100%;
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
    color: #d6690f;
  }
}
.logo-mobile {
  display: none;
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
  .contatc-paises {
    display: none !important;
  }
  .contact-redSocial {
    width: 100%;
  }
  .logo-mobile {
    display: inline-flex;
    img {
      width: 50px;
    }
  }
  .logo-pic {
    display: none;
  }
  nav {
    height: 50px !important;
  }
  .login {
    display: none;
  }
}
</style>
