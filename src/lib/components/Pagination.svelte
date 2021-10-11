<script>
  export let pag = 1;
  export let handlerPage;
</script>

<div class="flex justify-center items-center">
  <div class="btn-group">
    <button
      class={pag ? pag <= 1 && "btn disabled" : "btn"}
      on:click={handlerPage("next")}>Anterior</button
    >
    <button class="btn">{pag}</button>
    <button class="btn btn-active">2</button>
    <button class="btn">3</button>
    <button class="btn">4</button>
    <button on:click={handlerPage("prev")} class="btn">Próximo</button>
  </div>
</div>

<style>
  .disabled {
    opacity: 0.2;
    pointer-events: none;
  }
</style>
