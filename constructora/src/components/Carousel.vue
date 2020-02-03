<template>
  <div id="c">
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
        text="Le Damos La Bien Bienvenida."
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
    <h1>hola</h1>
    
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

</style>
