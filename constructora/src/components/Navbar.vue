<template>
  <div>
  <b-navbar toggleable="lg" type="info" variant=""><br>
    <b-navbar-brand class="color ml-5  mr-10" href="#" ><img src="@/assets/Constructora/logoss.png" style="max-width:77%"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-5">
        <b-nav-item class="ml-4" to="/"><strong>INICIO</strong></b-nav-item>
        <b-nav-item class="ml-4" to="/Constructora"><strong>CONSTRUCTORA</strong></b-nav-item>
        <b-nav-item class="ml-4" to="/Servicio"><strong>SERVICIO</strong></b-nav-item>
          
          <b-nav-item-dropdown class="ml-4"   text="GALERIA" right >
          <b-dropdown-item ><router-link to="Cadobe"> CASAS DE ADOBE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="Cbloque">CASAS DE BLOQUE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tfachada">TIPOS DE FACHADA</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tpintura">OTROS</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="ml-4" to="/Contacto"><strong>CONTACTO</strong></b-nav-item>

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