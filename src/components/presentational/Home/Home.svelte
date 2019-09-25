<script>
  import NavBar from "../NavBar";
  import Logo from "../../../assets/images/Logo.svelte";
  export let name = "John";
</script>

<style lang="scss" type="text/scss" src="./Home.scss">

</style>

<NavBar />
<div id="home-container">
  <div id="featured-logo">
    <Logo width="50px" />
    <p>2019 _ Edição 2</p>
  </div>
  <div id="featured_images">
    <div id="featured-image" class="icon__close" />
    <div id="detail-image" class="icon__close" />
  </div>
</div>

<div id="about-container">
  <div class="content">
    <h2 class="background-title">Sobre a hubcon</h2>
    <p>Sobre a hubcon_</p>
    <h3>
      A hubcon é um evento de tecnologia lorem fringilla vel, aliquet nec,
      vulputate eget, arcu ut, imperdiet a, venenatis vitae, justo. Pede mollis
      pretium.
    </h3>
  </div>
</div>

<p>More content...</p>
<p>More content...</p>
<p>More content...</p>
<p>More content...</p>
