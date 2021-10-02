<script>
  import Header from "$lib/ui/Header.svelte";
  import Users from "$lib/components/Users.svelte";
  import Warp from "$lib/ui/Warp.svelte";
</script>

<div class="mx-auto bg-gray-700 h-30 text-white">
  <Header />
</div>
<Warp>
  <Users />
</Warp>
