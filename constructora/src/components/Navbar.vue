<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand class="color ml-5 mr-5" href="#" ><img src="@/assets/logo02.jpg" style="max-width:120%"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-5">
        <b-nav-item class="ml-5" to="/"><strong>INICIO</strong></b-nav-item>
        <b-nav-item class="color" to="/Constructora"><strong>CONSTRUCTORA</strong></b-nav-item>
        <b-nav-item class="color" to="/Servicio"><strong>SERVICIO</strong></b-nav-item>
          
          <b-nav-item-dropdown class="color"   text="GALERIA" right>
          <b-dropdown-item ><router-link to="Cadobe" > CASAS DE ADOBE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="Cbloque">CASAS DE BLOQUE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tfachada">TIPOS DE FACHADA</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tpintura">OTROS</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="color" to="/Contacto"><strong>CONTACTO</strong></b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>


</style>