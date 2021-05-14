<script>
	import Jumbo from '../components/Jumbo.svelte';
</script>

<Jumbo>
  <h2>About Super Rentals</h2>
  <p>
    The Super Rentals website is a delightful project created to explore Svelte.
    By building a property rental site, we can simultaneously imagine traveling
    AND building Svelte applications.
  </p>
  <a sveltekit:prefetch href="contact" class="button">Contact Us</a>
</Jumbo>