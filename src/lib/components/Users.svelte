<script>
  import Loading from "$lib/ui/Loading.svelte";
  import categories from "../../stores/Category";
</script>

<div class="grid-cols-2 md:grid-cols-4 grid text-white gap-3">
  {#each $categories as categories (categories.id)}
    <div class="flex flex-col items-center justify-center">
      <a class="avatar" title={categories.name} href="dicas/{categories.id}">
        <div
          class="mb-2 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img src={categories.image} alt={categories.name} />
        </div>
      </a>
      <h3 class="text-xl">{categories.name}</h3>
    </div>
  {:else}
    <Loading />
  {/each}
</div>
