<script>
  import Map from './Map.svelte';
  import RentalImage from './RentalImage.svelte';

  export let rental;

  const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
  const type = COMMUNITY_CATEGORIES.includes(rental.category) ? 'Community' : 'Standalone';
</script>

<article class="rental">
  <RentalImage
    src={rental.image}
    alt="A picture of {rental.title}"
  />
  <div class="details">
    <h3>
      <a href="rentals/{rental.id}">{rental.title}</a>
    </h3>
    <div class="detail owner">
      <span>Owner:</span> {rental.owner}
    </div>
    <div class="detail type">
      <span>Type:</span> {type}
    </div>
    <div class="detail location">
      <span>Location:</span> {rental.city}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {rental.bedrooms}
    </div>
  </div>
  <Map
    lat={rental.location.lat}
    lng={rental.location.lng}
    zoom="9"
    width="150"
    height="150"
    alt="A map of {rental.title}"
  />
</article>