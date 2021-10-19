<script>
  export let products;
  const { id, name, price, thumbnail, link, store } = products;
</script>

<div class="card bg-gray-100 text-center shadow-2xl">
  <figure class="px-10 pt-10">
    <img alt={name} src={thumbnail} class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge mx-2 badge-info">R$ {price}</div>
    </h2>

    <div class="badge badge-ghost">{store.name}</div>
    <div class="justify-center card-actions">
      <a href={link} target="_blank" class="btn btn-outline btn-accent"
        >Comprar</a
      >
    </div>
  </div>
</div>
