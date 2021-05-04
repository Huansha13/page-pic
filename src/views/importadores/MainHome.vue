<template>
  <div class="container animate__animated animate__slideInUp">
    <div>
      <br> <br>
      <h2 class="title">IMPORTACIONES GRUPALES</h2>
    </div>
    <div class="section-presentation">
      <div class="row">
        <div class=" video-youtube text-center mx-auto col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
          <div class="react-player mx-auto video-youtube" style="width: 100%; height: 100%;"><div style="width: 100%; height: 100%;">
            <iframe frameborder="0"
                    allowfullscreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="YouTube video player"
                    width="100%" height="100%"
                    src="https://www.youtube.com/embed/qFP1j86IiOk?autoplay=1&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fwww.calculadoradefletes.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                    id="widget2">
            </iframe>
          </div>
          </div>
        </div>
        <div class="info-import col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 ">
          <h3>IMPORTACIONES PARA PYMES Y EMPRENDEDORES</h3>
          <p class="describe-txt " >Las principales desafiantes al momento de empezar una IMPORTACIÓN son: La falta de capital y el desconocimiento de proveedores confiables.
            Por lo antes expuesto PIC CARGO ha creado una nueva linea de atención a nuestros importadores para que puedan realizar su importación facil y segura.</p>
          <br>
        </div>
      </div>
    </div>
    &nbsp;
    <div class="section-questions">
      <div class="col-12">
        <div class="content-return-questions d-flex">
          <div class="return">
            <a href=""> <i class="uil uil-estate"></i> Home </a>
          </div>
          <div class="questions">
            <a href=""><i class="uil uil-comment-question"></i> Preguntas Frecuentes</a>
          </div>
        </div>
      </div>
    </div>
    &nbsp;
    <div class="section-wsp">
      <div class="title-wsp d-flex">
        <i class="uil uil-whatsapp-alt"></i>
        Únete al Grupo de Whatsapp
      </div>
      <h3 class="title-select-pais">Selecciona tú país de residencia:</h3>
      <div class="pais-wsp">
        <ul class="ul-paises-wsp flex-wrap">
          <li><a href="#"> <img src="https://www.calculadoradefletes.com/assets/img/flags/panamaRound.svg" alt=""> Panamá</a></li>
          <li><a href="#"> <img src="https://www.calculadoradefletes.com/assets/img/flags/peruRound.svg" alt=""> Perú </a></li>
          <li><a href="#"> <img src="https://www.calculadoradefletes.com/assets/img/flags/venezuelaRound.svg" alt=""> Venezuela </a></li>
        </ul>
      </div>
      <br>  <br>
      <h3 style="text-align: center">Taller gratuito de Importación</h3>
      <div class="tarller">
        <a href=""> <img src="https://www.calculadoradefletes.com/assets/img/importar.svg" alt=""> Unete Aqui</a>
      </div>
    </div>

    <tbl-impotaciones></tbl-impotaciones>

    &nbsp; &nbsp;
    <div class="di">
      <deseas-importar></deseas-importar>
    </div>
    &nbsp; &nbsp;
    <div class="section-stock">
      <mercancia-stock></mercancia-stock>
    </div>
    &nbsp; &nbsp;
    <div class="section-m-transito">
      <mercancia-trancito></mercancia-trancito>
    </div>
    &nbsp; &nbsp;
    <div class="sectionInLive">
      <TransmicionesEnVivo></TransmicionesEnVivo>
    </div>
    &nbsp; &nbsp;
    <div class="sectionTestimonio">
      <Testimonio></Testimonio>
    </div>
  </div>
  &nbsp; &nbsp;
  <div class="sectioFooter">
    <MainFooter></MainFooter>
  </div>
  <BtnWhatsaap></BtnWhatsaap>
</template>

<style lang="scss">
@import "../../components/styles/styleMainHome";
</style>

<script>
import DeseasImportar from "@/views/importadores/DeseasImportar";
import MercanciaStock from "@/views/importadores/MercanciaStock";
import MercanciaTrancito from "@/views/importadores/MercanciaTrancito";
import TransmicionesEnVivo from "@/views/importadores/TransmicionesEnVivo";
import Testimonio from "@/views/importadores/Testimonio";
import Footer from "@/views/importadores/MainFooter";
import MainFooter from "@/views/importadores/MainFooter";
import TblImpotaciones from "@/views/importadores/TblImpotaciones";
import BtnWhatsaap from "@/views/importadores/BtnWhatsaap";
export default {
  components: {
    BtnWhatsaap,
    TblImpotaciones,
    MainFooter, Footer, Testimonio, TransmicionesEnVivo, MercanciaTrancito, MercanciaStock, DeseasImportar}
}
</script>
