<script>
    import '../app.css'
    import Header from '../lib/Header.svelte'
    import Nav from '../lib/nav.svelte'
</script>

<Header />
<Nav />
<main>
    <slot />
</main>

<style>
    main {
        max-width: 1000px;
        padding: 10px;
        margin: 0 auto;
    }
</style>
