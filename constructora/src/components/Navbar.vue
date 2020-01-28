<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="color" href="#"><img src="@/assets/Constructora/logoss.png" style="max-width:77%"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="color" to="/">INICIO</b-nav-item>
        <b-nav-item class="color" to="/Constructora">CONSTRUCTORA</b-nav-item>
        <b-nav-item class="color" to="/Servicio">SERVICIO</b-nav-item>
          
          <b-nav-item-dropdown class="color" text="GALERIA" right>
          <b-dropdown-item ><router-link to="Cadobe" > CASAS DE ADOBE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="Cbloque">CASAS DE BLOQUE</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tfachada">TIPOS DE FACHADA</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/Tpintura">TIPOS DE PINTURA</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="color" to="/Contacto">contacto</b-nav-item>

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
.color{
  color:rgb(241, 241, 248);
  margin-left: 40px   
}

</style>