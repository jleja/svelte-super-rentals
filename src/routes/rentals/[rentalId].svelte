<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(`/api/rentals/${page.params.rentalId}.json`);
    const { data } = await res.json();
    const { id, type } = data;
    const rental = { id, type, ...data.attributes };

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

  export let rental;
</script>

<Jumbo>
  <h2>{rental.title}</h2>
  <p>Nice find! This looks like a nice place to stay near {rental.city}.</p>
  <a href="/" target="_blank" rel="external nofollow noopener noreferrer" class="share button">
    Share on Twitter
  </a>
</Jumbo>

<RentalDetail rental={rental} />