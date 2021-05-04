<template>

  <h3 class="title-testimonio"><i>~ Testimonios ~</i></h3>
  <div class="view-testimonios">
    <span class="check"><i class="uil uil-check-circle"></i></span>
    <span class="txt-tst">Importadores y Fabricantes</span>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="n in 3">
      <div class="box-testimonio">
        <div class="react-player video-youtube-Tras" tabindex="0" style="width: 100%; height: 100%;"><div style="width: 100%; height: 100%;"><iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/PJIrFmZJU64?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.calculadoradefletes.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;youtube=%5Bobject%20Object%5D&amp;enablejsapi=1&amp;widgetid=7" id="widget8"></iframe></div></div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/components/styles/testimonio";
@media (max-width: 768px) {
  .box-testimonio {
    margin-bottom: 15px;
  }
}
</style>
