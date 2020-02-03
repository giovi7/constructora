<template>
  <div>
    <ul>
      <h3>TIPOS DE SERVICIO</h3>
      <br />
    </ul>
    <div>
  <div class="mt-4">
    <b-card-group deck>
      <b-card  :img-src="require('../assets/Constructora/foto4.jpg')" img-alt="Card image" img-top>
        <b-card-text>
          <h5>OBRA GRUESA.</h5> 
        </b-card-text>
      </b-card>

      <b-card :img-src="require('../assets/Constructora/foto46.jpg')" img-alt="Card image" img-bottom>
        <b-card-text>
          <h5>OBRA FINA.</h5>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4></h4>
    <b-card :img-src="require('../assets/Constructora/casa.jpg')" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <h5>LLAVE A LA MANO</h5>
      </b-card-text>
    </b-card>

    <b-card :img-src="require('../assets/Constructora/casas.jpg')" img-alt="Card image" img-right>
      <b-card-text>
       <h5>REMODELACION</h5>
      </b-card-text>
    </b-card>
  </div>
  <div>
    <h4></h4>
    <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text>
          <h5>GAFITER.</h5> 
        </b-card-text>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
        <b-card-text>
          <h5>ELECTRICIDAD.</h5>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  
</div>
  </div>
  
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");

#app {
  font-family: "Varela Round", Helvetica, Arial, sans-serif;
  
  
  color: #2c3e50;

}
</style>