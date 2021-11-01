<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import Warp from "$lib/ui/Warp.svelte";
    import Step from "$lib/components/Steps.svelte";
    import product from "../../stores/Product";

    import Loading from "$lib/ui/Loading.svelte";
    import { price } from "$lib/helper/Price";
</script>

<svelte:head>
    <title>{$product.length === 0 ? "" : $product[0].name} | Presenteei</title>
</svelte:head>

<Warp>
    <Step>
        <li class="step step-primary ">Categoria</li>
        <li class="step step-primary"><a href="/dicas/1"> Dicas </a></li>
        <li data-content="🎁" class="step step-primary">Presente</li>
        <li data-content="?" class="step step-primary">Finalizar</li>
    </Step>

    {#if $product.length === 0}
        <div>
            <Loading />
        </div>
    {:else}
        <section class="body-font">
            <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={$product[0].thumbnail}
                    />
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div
                            class="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                        >
                            <img src={$product[0].store.thumbnail} alt="Loja" />
                        </div>
                        <div
                            class="flex flex-col items-center text-center justify-center"
                        >
                            <h2 class="font-medium title-font mt-4  text-lg">
                                {$product[0].store.name}
                            </h2>
                            <div class="w-12 h-1 0 rounded mt-2 mb-4" />
                            <p class="text-base">
                                <!-- Raclette knausgaard hella meggs normcore
                                williamsburg enamel pin sartorial venmo tbh hot
                                chicken gentrify portland. -->
                            </p>
                        </div>
                    </div>
                    <div
                        class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
                    >
                        <p class="leading-relaxed text-lg mb-4">
                            {$product[0].name}
                        </p>
                        <p>
                            Vendido por: {$product[0].store.name} |
                            <b
                                >Items em Estoque
                                {$product[0].installment.quantity}</b
                            >
                        </p>
                        <p class="font-thin line-through text-md">
                            {price.format($product[0].priceFrom)}
                        </p>
                        <p
                            class="leading-relaxed flex items-center justify-between  text-3xl md-4 "
                        >
                            {price.format($product[0].price)}
                            <a
                                href={$product[0].link}
                                target="_blank"
                                class="btn btn-xs md:btn-sm lg:btn-md xl:btn-lg btn-primary inline-flex items-center"
                            >
                                🎁 Presentear
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    {/if}
</Warp>
