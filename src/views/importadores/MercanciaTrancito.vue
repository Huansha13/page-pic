<template>
  <div class="wrapper-stock">
    <div class="title-stock">
      <h3><i class="uil uil-plane-departure"></i> &nbsp; Mercancía en Trancito</h3>
      <br>
    </div>
    <div class="row sec-transito">
      <div class="col-12 col-sm-12 col-md-6 col-lg-3" v-for="n in 2">
        <div class="box">
          <div class="img-product">
            <img src="https://firebasestorage.googleapis.com/v0/b/pic-calculadora.appspot.com/o/fotos%2FCONCENTRADOR-DE-OXIGENO-OLIVE-OLV-10%20(2).jpg?alt=media&token=2e27a758-0812-4170-979e-f5cd6d2389dc" alt="">
          </div>
          <div class="description">
            <span>Concentradores de oxigeno olive</span>
          </div>
          <div class="d-flex sectionLikeCountry">
            <div class="like">
              <div>
                <i class="uil uil-heart"></i> 2
              </div>
            </div>
            <div class="country d-flex">
              <div>
                <img src="https://www.calculadoradefletes.com/assets/img/flags/peru.svg" alt="">
              </div>
              <span><b>Perú</b></span>
            </div>
          </div>
          <div class="llegada">
            <div class="d-flex sectionLlegadaEstimada">
              <span class="btn-green"></span>
              <b>Llegada estimada:</b> &nbsp; 2021-05-05
            </div>
          </div>
          <div class="btn">
            <button>Ver Importadores</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/components/styles/mercanciaStock";
</style>
