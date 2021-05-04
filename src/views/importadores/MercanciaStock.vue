<template>
  <div class="wrapper-stock">
    <div class="title-stock">
      <h3><i class="uil uil-parcel"></i> &nbsp; Mercancía en stock</h3>
      <br>
    </div>
    <div class="row sec-stock">
      <div class="col-12 col-sm-12 col-md-6 col-lg-3" v-for="n in 4">
        <div class="box">
          <div class="img-product">
            <img src="https://firebasestorage.googleapis.com/v0/b/pic-calculadora.appspot.com/o/fotos%2FIMG-20201025-WA0111.jpg?alt=media&token=93ddf5cb-18d1-4257-93c1-8221945cf047" alt="">
          </div>
          <div class="description">
            <span>Pañalera - Cama para bebe</span>
          </div>
          <div class="d-flex sectionLikeCountry">
            <div class="like">
              <div>
                <i class="uil uil-heart"></i> 21
              </div>
            </div>
            <div class="country d-flex">
              <div>
                <img src="https://www.calculadoradefletes.com/assets/img/flags/peru.svg" alt="">
              </div>
              <span><b>Perú</b></span>
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
