<script>
  import * as aq from "arquero";
  import sourceFile from "./data/cleanData.csv?raw";

  const data = aq
    .fromCSV(sourceFile)
    .derive({ height: (d) => aq.op.round(d.frequency * 1000) })
    .objects();

  console.log(data);
</script>

<main>
  <svg width="650" height="520">
    {#each data as datum, i}
      <rect
        x={i * 25}
        y={500 - datum.height}
        width="20"
        height={datum.height}
      />
      <text><tspan x={i * 25 + 5} y="515">{datum.letter}</tspan></text>
    {/each}
  </svg>
</main>

<style>
  rect {
    fill: salmon;
  }

  tspan {
    font: bold 10px sans-serif;
    fill: grey;
  }
</style>
