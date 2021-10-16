<script>
  import Pagination from "$lib/components/Pagination.svelte";
  import Warp from "$lib/ui/Warp.svelte";
  import Step from "$lib/components/Steps.svelte";
  import search, { updateProducts } from "../../stores/Search";
  import { page } from "$app/stores";
  import Loading from "$lib/ui/Loading.svelte";
  import Products from "$lib/components/Products.svelte";

  let product = [];
  const pagi = $page.params.id;

  const getPag = (pagi) => {
    if ([pagi].includes(undefined)) {
      return $search["pagination"];
    }
  };
  let pag = 1;

  const updatePage = (params) => {
    if (params === "prev") {
      pag += 1;
    } else {
      pag -= 1;
    }

    window.scrollTo({
      top: 50,
      left: 0,
      behavior: "smooth",
    });

    updateProducts($page.params.id, pag);
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

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each $search.offers || product as products (products.id)}
      <Products {products} />
    {:else}
      <Loading />
    {/each}
  </div>
  <Pagination
    {pag}
    getPagination={$search.pagination || []}
    handlerPage={updatePage}
  />
</Warp>
