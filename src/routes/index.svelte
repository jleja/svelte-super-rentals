<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/rentals');
    const data = await res.json();
    const { rentals } = data;

    if (res.ok) return { props: { rentals } };

    return {
      status: res.status,
      error: new Error()
    };
  }
</script>

<script>
	import Jumbo from '../components/Jumbo.svelte';
  import Rentals from '../components/Rentals.svelte';

  export let rentals;
</script>

<Jumbo>
  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a sveltekit:prefetch href="about" class="button">About Us</a>
</Jumbo>

<Rentals rentals={rentals} />