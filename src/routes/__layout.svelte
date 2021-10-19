<script>
  import Header from "$lib/ui/Header.svelte";
  import "../app.css";
  import Footer from "$lib/ui/Footer.svelte";
</script>

<div class="mx-auto bg-gray-700 h-30 text-white">
  <Header />
</div>

<slot />

<Footer />
