<script>
    let a = 1
    let b = 2
    let c = 3
    let d = 4
    let e = 5
    let f = 6
    let g = 7
    let h = 8
</script>

<h1>Math</h1>

<!------------------------------------------------------------------------>
<div class="body">
    <label>
        <input
            class="firstField"
            type="number"
            bind:value={a}
            min="0"
            max="100"
        />
        <input type="range" bind:value={a} min="0" max="100" />
    </label>

    <label>
        <input
            class="secondField"
            type="number"
            bind:value={b}
            min="0"
            max="100"
        />
        <input type="range" bind:value={b} min="0" max="100" />
    </label>

    <p>{a} + {b} = {a + b}</p>

    <!------------------------------------------------------------------------>

    <label>
        <input
            class="firstField"
            type="number"
            bind:value={c}
            min="0"
            max="100"
        />
        <input type="range" bind:value={c} min="0" max="100" />
    </label>

    <label>
        <input
            class="secondField"
            type="number"
            bind:value={d}
            min="0"
            max="100"
        />
        <input type="range" bind:value={d} min="0" max="100" />
    </label>

    <p>{c} - {d} = {c - d}</p>

    <!------------------------------------------------------------------------>

    <label>
        <input
            class="firstField"
            type="number"
            bind:value={e}
            min="0"
            max="100"
        />
        <input type="range" bind:value={e} min="0" max="100" />
    </label>

    <label>
        <input
            class="secondField"
            type="number"
            bind:value={f}
            min="0"
            max="100"
        />
        <input type="range" bind:value={f} min="0" max="100" />
    </label>

    <p>{e} * {f} = {e * f}</p>

    <!------------------------------------------------------------------------>

    <label>
        <input
            class="firstField"
            type="number"
            bind:value={g}
            min="0"
            max="100"
        />
        <input type="range" bind:value={g} min="0" max="100" />
    </label>

    <label>
        <input
            class="secondField"
            type="number"
            bind:value={h}
            min="0"
            max="100"
        />
        <input type="range" bind:value={h} min="0" max="100" />
    </label>

    <p>{g} / {h} = {g / h}</p>
</div>

<!------------------------------------------------------------------------>
<style>
    .firstField {
        height: 30px;
        width: 40px;
        font-size: large;
    }

    .secondField {
        height: 30px;
        width: 40px;
        font-size: large;
    }

    .body {
        display: grid flex;
        grid-template-columns: 1fr;
        row-gap: 20px;
        justify-content: center;
        align-items: center;
    }
</style>
