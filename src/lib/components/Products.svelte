<script>
  export let products;
  const { id, name, price, thumbnail, link, store } = products;
</script>

<div class="card bg-gray-100 text-center shadow-2xl">
  <figure class="px-10 mx-auto pt-10">
    <a title={name} href="/products/{id}/?id={id}&store={store.id}">
      <img alt={name} src={thumbnail} class="rounded-xl" /></a
    >
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
    </h2>
    <div class="justify-center card-actions">
      <a
        href="/products/{id}/?id={id}&store={store.id}"
        target="_blank"
        class="btn btn-outline btn-accent">Detalhes</a
      >
    </div>
  </div>
</div>
