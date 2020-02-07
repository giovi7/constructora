<template>
  <div class="fondo" >
    <Carousel/>
    <Pcarusel/>

    <!-- iii -->
    <div class="container mb-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto04.gif" class="card-img-top"  alt="...">
  <div class="card-body">
    <h5 class="card-title">ELECTRICIDAD</h5>
    <p class="card-text">Se ofrece todo tipo de instalaciones electricas, adaptada a sus nesecidades </p>
  
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto018.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">GAFITER</h5>
    <p class="card-text"> Se brinda todo tipo de instalaciones, adaptada a sus nesecidades.Contactenos entregamos un servicio de calidad para usted.
</p>
 
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto021.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">REMODELACION</h5>
    <p class="card-text">Realizamos remodelacion, renovacion y restauracion. Entregamos un servicio de calidad.</p>

  </div>
</div>
    </div>
  </div><br><br>
</div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Pcarusel from '@/components/Pcarusel.vue'
export default {
    components:{
        Carousel,
        Pcarusel
    }

}
</script>

<style>
.fondo{
  background: linear-gradient(217deg, rgb(245, 246, 243), rgba(246, 242, 241, 0.452) 70.71%),
            linear-gradient(127deg, rgb(227, 229, 231), rgba(211, 221, 221, 0.897) 70.71%),
            linear-gradient(336deg, rgb(247, 250, 250), rgba(194, 240, 216, 0.52) 70.71%);

 /* background: linear-gradient(to bottom, rgb(255, 254, 254), rgb(131, 130, 130)); */
}
</style>