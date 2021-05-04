<template>
  <div class="section-tbl-importaciones">
    <div class="img-heading">
      <img src="https://www.calculadoradefletes.com/assets/img/logoNew.svg" alt="">
    </div>
    <div class="title-btn-import">
      <h3>IMPORTACIONES EN PROCESO...</h3>
      <p>SELECCIONE UNA CAMPAÑA <i class="uil uil-mouse-alt-2"></i> </p>
    </div>
    <table class="tbl-data">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Productos</th>
        <th scope="col">Desde</th>
        <th scope="col">Vía</th>
        <th scope="col">Cierre</th>
        <th scope="col">Llegada</th>
      </tr>
      </thead>
      <br>
      <tbody>
      <tr v-for="n in 5" :key="n">
        <th scope="row">{{n}}</th>
        <td class="td-products">
          <div class="products">
            <img src="https://res.cloudinary.com/yfr/image/upload/v1620078368/pic/descarga_4_l9kyd1.jpg" alt="">
            <div class="name-product">
              Carteras, edredones, relojes, ferretería y repuestos de autos
            </div>
          </div>
        </td>
        <td class="td-pais">
          <div class="icon-bandera-pais">
            <img src="https://www.calculadoradefletes.com/assets/img/flags/panamaRound.svg" alt="">
          </div>
        </td>
        <td class="via">
          <div class="td-via">
            <i class="uil uil-ship"></i> Marítimo
          </div>
        </td>
        <td class="tddate"><b>15 JUN</b></td>
        <td class="tddate"> <b>30 JUN</b></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@import "src/views/resposive-tbl/reposive-tbl";
.section-tbl-importaciones {
  margin-top: 30px;
}
</style>
