<script>
  import categories from "../../stores/Category";
</script>

<div class="grid-cols-4 grid text-white gap-4">
  {#each $categories as categories}
    <div class="flex flex-col items-center justify-center">
      <img
        class="w-40 h-40 border-2 border-white rounded-lg shadow"
        src={categories.image}
      />
      <h3 class="text-xl p-2">{categories.name}</h3>
    </div>
  {/each}
</div>
