<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Warp from "$lib/ui/Warp.svelte";
    import Loading from "$lib/ui/Loading.svelte";
    import category, { setCategories } from "../../stores/Category";
    import Step from "$lib/components/Steps.svelte";

    import { fade, draw, fly } from "svelte/transition";
    import { flip } from "svelte/animate";
    let duration = 4000;
    let delay = 200;
    onMount(() => {
        setTimeout(() => {
            document.querySelectorAll("path").forEach(() => {
                path.style.fill = "orange";
            });
        }, duration + delay);
    });

    // import categorias, { setCat/egorias } from "../../stores/Dicas";
    let id = $page.params.id;
    $: categories = $category.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
    <title>Presentes ({categories.name}) - Presenteei</title>
</svelte:head>
<Warp>
    <Step>
        <li class="step step-primary ">Categoria</li>
        <li class="step step-primary">Dicas</li>
        <li data-content="🎁" class="step">Presente</li>
        <li data-content="?" class="step">Finalizar</li>
    </Step>

    {#if !categories}
        <div class="grid grid-cols-1">
            <Loading />
        </div>
    {:else}
        <div class="flex px-4 space-x-3">
            <div>
                <img
                    class="w-32 h-32 rounded-lg"
                    src="../{categories.image}"
                    alt="Dicas de presente {categories.name}"
                />
            </div>
            <div class="text-2xl">Presentes {categories.name}</div>
        </div>

        <div class="flex flex-wrap m-4 content-center ">
            {#each categories.keywords as key}
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100  p-3  rounded-lg">
                        <a
                            target="_parent"
                            title="Dicas de presente {key.name}"
                            href="/presents/{key.id}?keyword={key.filterkey}&categories={key.categories}"
                        >
                            <svg
                                class="w-32 mx-auto h-32"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    in:draw={{ duration, delay }}
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                /></svg
                            >

                            <h2
                                class="text-xl text-gray-900 text-center  font-medium title-font mb-4"
                            >
                                {key.name}
                            </h2>
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</Warp>

<style>
    path {
        stroke: orange;
        fill: white;
        transition: 2s;
    }
</style>
