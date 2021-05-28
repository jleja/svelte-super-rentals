<script>
  export let src;
  export let alt;

  let large = false;

  function toggleSize() {
    large = !large;
  }
</script>

<button type="button" class="image" class:large on:click={toggleSize}>
  <img src={src} alt={alt}>
  <small>View {large ? "Smaller" : "Larger"}</small>
</button>
