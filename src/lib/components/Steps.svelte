<script>
  import { page } from "$app/stores";
  export let step = "step-primary";
</script>

<section class="p-4 mb-8">
  <ul class="w-full steps">
    <slot />
  </ul>
</section>
