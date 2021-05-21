<script>
  export let lat;
  export let lng;
  export let zoom;
  export let width;
  export let height;
  export let alt = `Map image at coordinates ${lat},${lng}`;

  const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

  const mapSrc = () => {
    const coordinates = `${lng},${lat},${zoom}`;
    const dimensions = `${width}x${height}`;
    const accessToken = `access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  };
</script>

<div class="map">
  <img
    alt={alt}
    src={mapSrc()}
    width={width}
    height={height}
  >
</div>