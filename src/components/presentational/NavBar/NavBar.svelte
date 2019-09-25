<script>
  import Logo from "../../../assets/images/Logo.svelte";
</script>

<style lang="scss" type="text/scss" src="./NavBar.scss">

</style>

<nav>
  <div id="nav__container">
    <div class="nav-item nav-item--left">
      <Logo height="70%" />
    </div>
    <div class="nav-item nav-item--center">
      <menu>
        <menuitem>Início</menuitem>
        <menuitem>Sobre</menuitem>
        <menuitem>Lineup</menuitem>
        <menuitem>Parceiros</menuitem>
        <menuitem>Contato</menuitem>
      </menu>
    </div>
    <div class="nav-item nav-item--right">
      <button>INSCRIÇÃO</button>
    </div>
  </div>
</nav>
