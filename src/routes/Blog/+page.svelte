<script>
    import Box from './Box.svelte'
</script>

<h1>Blog</h1>

<div class="blogs">
    <div>
        <Box>
            <h2>Erster Eintrag!</h2>
            <p>
                Am 30. Aug. 2022 habe ich diese Website angefangen.
                <br />
                Ich habe an diesem Tag folgende Dinge erledigt:
                <br />
                <br />
                - die Navbar erstellt/bearbeitet <br />
                - verschiedene tabs hinzugefügt <br />
                - verschiedene Items personalisiert <br />
            </p>
        </Box>
    </div>
    <Box>
        <h2>Zweiter Eintrag!</h2>
        <p>
            Am 31. Aug. 2022 habe ich angefangen diesen Blog zu <br /> erstellen
            und ich habe vor <br /> diesen jeden Arbeitstag zu aktualiesieren.
            <br /> <br /> <br /> <br />
        </p>
    </Box>
</div>

<div class="blogs">
    <div>
        <Box>
            <h2>Dritter Eintrag!</h2>
            <p>
                Heute ist der 1. Sep. 2022 <br />
                gestern habe ich noch die Clock von der Website etwas verschönert
                und angepasst da diese durch die Layout änderung etwas verschoben
                war.
            </p>
        </Box>
    </div>
    <Box>
        <h2>Vierter Eintrag!</h2>
        <p>This is a box. It can contain anything.</p>
    </Box>
</div>

<div class="blogs">
    <div>
        <Box>
            <h2>Fünfter Eintrag!</h2>
            <p>This is a box. It can contain anything.</p>
        </Box>
    </div>
    <Box>
        <h2>Sechster Eintrag!</h2>
        <p>This is a box. It can contain anything.</p>
    </Box>
</div>

<style>
    .blogs {
        display: grid;
        grid-auto-rows: minmax(100px, auto);
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 10px;
    }
</style>
