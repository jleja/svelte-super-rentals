<script>
	import Jumbo from '../components/Jumbo.svelte';
</script>

<Jumbo>
  <h2>Contact Us</h2>
  <p>
    Super Rentals Representatives would love to help you<br>
    choose a destination or answer any questions you may have.
  </p>
  <address>
    Super Rentals HQ
    <p>
      1212 Test Address Avenue<br>
      Testington, OR 97233
    </p>
    <a class="text-blue-600" href="tel:503.555.1212">+1 (503) 555-1212</a><br>
    <a class="text-blue-600" href="mailto:john.leja@dockyard.com">superrentalsrep@sveltejs.com</a>
  </address>
  <a sveltekit:prefetch href="about" class="button">About Us</a>
</Jumbo>