<script>
	import Jumbo from '../components/Jumbo.svelte';
</script>

<Jumbo>
  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a sveltekit:prefetch href="about" class="button">About Us</a>
</Jumbo>