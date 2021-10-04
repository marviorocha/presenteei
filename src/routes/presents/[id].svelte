<script>
  import { page } from "$app/stores";
  import Warp from "$lib/ui/Warp.svelte";
  import categories from "../../stores/Category";
  import Step from "$lib/components/Steps.svelte";
  const id = $page.params.id;
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
  <h1 class="text-2xl font-bold">
    Hello {id}
  </h1>
</Warp>
