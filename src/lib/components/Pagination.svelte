<script>
  export let getPagination;
  export let pag = 1;
  export let handlerPage;
</script>

{#if getPagination.length === 0}
  <div />
{:else}
  <div class="flex  mt-10 justify-center items-center">
    <div class="btn-group">
      <button
        class="btn btn-wide {pag <= 1 && 'disabled'}"
        on:click={handlerPage("next")}>Anterior</button
      >
      <button class="btn btn-disabled"
        >Página: {pag} de {getPagination.totalPage}</button
      >
      <button
        class="btn btn-wide {pag >= getPagination.totalPage && 'disabled'}"
        on:click={handlerPage("prev")}>Próximo</button
      >
    </div>
  </div>
{/if}

<style>
  .disabled {
    opacity: 0.2;
    pointer-events: none;
  }
</style>
