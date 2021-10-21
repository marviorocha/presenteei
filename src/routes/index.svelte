<script>
  import Users from "$lib/components/Users.svelte";
  import Warp from "$lib/ui/Warp.svelte";
  import Step from "$lib/components/Steps.svelte";
</script>

<svelte:head>
  <title>Guia de Presentes - Presenteei</title>
</svelte:head>

<Warp>
  <Step>
    <li class="step step-primary ">Categoria</li>
    <li class="step">Dicas</li>
    <li data-content="?" class="step">Presente</li>
    <li data-content="🎁" class="step">Finalizar</li>
  </Step>
  <Users />
</Warp>
