<script>
  import { onMount } from "svelte";

  const TWEET_INTENT = 'https://twitter.com/intent/tweet';

  onMount(() => {
    pageUrl = window.location.href;
  });

  export let text;
  export let hashtags;
  export let via;
  let pageUrl;

  $: shareURL = () => {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', pageUrl);

    if (text) {
      url.searchParams.set('text', text);
    }

    if (hashtags) {
      url.searchParams.set('hashtags', hashtags);
    }

    if (via) {
      url.searchParams.set('via', via);
    }

    return url;
  }
</script>

<a href={shareURL()} target="_blank" rel="external nofollow noopener noreferrer" class="share button">
  <slot>No share button content was provided.</slot>
</a>