<template>
  <div id="c" class="fondo">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="BRAÑEZ"
        text="Le Damos La Bienvenida."
        :img-src="require('../assets/Constructora/foto042.gif')"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="require('../assets/Constructora/foto041.gif')">
        <h1></h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('../assets/Constructora/foto038.gif')"></b-carousel-slide>
     <b-carousel-slide :img-src="require('../assets/Constructora/foto040.gif')"></b-carousel-slide>
    </b-carousel>
    <br>
    <br>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
b-carousel-slide{
  background-color: black;
}
.fondo{
  background: linear-gradient(217deg, rgb(245, 246, 243), rgba(246, 242, 241, 0.452) 70.71%),
            linear-gradient(127deg, rgb(227, 229, 231), rgba(211, 221, 221, 0.897) 70.71%),
            linear-gradient(336deg, rgb(247, 250, 250), rgba(194, 240, 216, 0.52) 70.71%);
            
 /* background: linear-gradient(to bottom, rgb(255, 254, 254), rgb(131, 130, 130)); */
}
</style>
