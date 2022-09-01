<script>
    import { count } from './stores.js'
</script>

<h1>The count is {$count}</h1>

<div class="buttons">
    <button class="plusButton" on:click={count.increment}>+</button>
    <button class="minusButton" on:click={count.decrement}>-</button>
    <button class="resetButton" on:click={count.reset}>reset</button>
</div>

<style>
    .plusButton {
        font-size: large;
    }

    .minusButton {
        font-size: large;
    }

    .resetButton {
        font-size: large;
    }
</style>
