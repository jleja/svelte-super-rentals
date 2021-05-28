<script>
  import Rental from '../components/Rental.svelte';

  export let rentals;
  let searchTerm = '';

  $: filteredRentals = rentals.filter(rental => rental.title.includes(searchTerm));
</script>

<div class="rentals">
  <label>
    <span>Where would you like to stay?</span>
    <input class="light" bind:value={searchTerm}>
  </label>

  <ul class="results">
    {#each filteredRentals as rental}
      <li><Rental rental={rental} /></li>
    {/each}
  </ul>
</div>