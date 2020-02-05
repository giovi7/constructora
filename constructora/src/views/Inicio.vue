<template>
  <div class="fondo" >
    <Carousel/>
    <Pcarusel/>
    <div class="container">
     <div class="row">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto018.gif" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title">ELECTRICIDAD</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto018.gif" class="card-img-top col-sm" alt="...">
  <div class="card-body">
    <h5 class="card-title">GAFITER</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  <div class="card" style="width: 18rem;">
  <img src="@/assets/Constructora/foto018.gif" class="card-img-top col-sm" alt="...">
  <div class="card-body">
    <h5 class="card-title">ELECTRICIDAD</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  
  </div>



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