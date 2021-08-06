<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(`/rentals/${page.params.rentalId}.json`);
    const data = await res.json();
    const { rental } = data;

    if (res.ok) return { props: { rental } };

    return {
      status: res.status,
      error: new Error()
    };
  }
</script>

<script>
	import Jumbo from '../../components/Jumbo.svelte';
  import RentalDetail from '../../components/RentalDetail.svelte';
  import ShareButton from '../../components/ShareButton.svelte';

  export let rental;
</script>

<Jumbo>
  <h2>{rental.title}</h2>
  <p>Nice find! This looks like a nice place to stay near {rental.city}.</p>
  <ShareButton
    text="Check out {rental.title} on Super Rentals!"
    hashtags="vacation,travel,authentic,blessed,superrentals"
    via="sveltejs"
  >
    Share on Twitter
  </ShareButton>
</Jumbo>

<RentalDetail rental={rental} />
