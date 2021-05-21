<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/api/rentals.json');
    const { data } = await res.json();
    const rentals = data.map((rental) => {
      const { id, type } = rental;

      return { id, type, ...rental.attributes};
    });

    if (res.ok) return { props: { rentals } };

    return {
      status: res.status,
      error: new Error()
    };
  }
</script>

<script>
	import Jumbo from '../components/Jumbo.svelte';
  import Rental from '../components/Rental.svelte';

  export let rentals;
</script>

<Jumbo>
  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a sveltekit:prefetch href="about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
  <ul class="results">
    {#each rentals as rental}
      <li><Rental rental={rental} /></li>
    {/each}
  </ul>
</div>