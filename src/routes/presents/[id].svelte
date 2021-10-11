<script>
  import Pagination from "$lib/components/Pagination.svelte";
  import Warp from "$lib/ui/Warp.svelte";
  import Step from "$lib/components/Steps.svelte";
  import search, { updateProducts } from "../../stores/Search";
  import { page } from "$app/stores";
  import Loading from "$lib/ui/Loading.svelte";
  import Products from "$lib/components/Products.svelte";
  let pag = 1;
  const urlParams = $page.params.id;

  const updatePage = (params) => {
    if (params === "prev") {
      pag += 1;
    } else {
      pag -= 1;
    }
    updateProducts(urlParams, pag);
  };
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>

<Warp>
  <Step>
    <li class="step step-primary ">Categoria</li>
    <li class="step step-primary">Dicas</li>
    <li data-content="?" class="step">Presente</li>
    <li data-content="🎁" class="step">Finalizar</li>
  </Step>

  <div class="grid grid-cols-3 gap-4">
    {#each $search as products (products.id)}
      <Products {products} />
    {:else}
      <Loading />
    {/each}
  </div>
  <Pagination {pag} handlerPage={updatePage} />
</Warp>
