<script>
  export let src;
  export let alt;

  let isLarge = false;

  function toggleSize() {
		isLarge = !isLarge;
	}
</script>

<button type="button" class="image {isLarge ? "large" : ""}" on:click={toggleSize}>
  <img src={src} alt={alt}>
  <small>View {isLarge ? "Smaller" : "Larger"}</small>
</button>
