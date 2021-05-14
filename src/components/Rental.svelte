<script>
  import Map from './Map.svelte';
  import RentalImage from './RentalImage.svelte';
  
  export let image;
  export let title;
  export let owner;
  export let category;
  export let city;
  export let bedrooms;
  export let location;

  const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
  const type = COMMUNITY_CATEGORIES.includes(category) ? 'Community' : 'Standalone';
</script>

<article class="rental">
  <RentalImage
    src={image}
    alt="A picture of {title}"
  />
  <div class="details">
    <h3>{title}</h3>
    <div class="detail owner">
      <span>Owner:</span> {owner}
    </div>
    <div class="detail type">
      <span>Type:</span> {type}
    </div>
    <div class="detail location">
      <span>Location:</span> {city}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {bedrooms}
    </div>
  </div>
  <Map
    lat={location.lat}
    lng={location.lng}
    zoom="9"
    width="150"
    height="150"
    alt="A map of {title}"
  />
</article>