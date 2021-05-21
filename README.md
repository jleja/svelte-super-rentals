# Svelte Super Rentals!!!

Following along with Ember's Super Rentals tutorial, but using Svelte.  (I KNOW!!!)

https://youthful-easley-e68829.netlify.app/

![Screen Shot 2021-05-14 at 5 15 35 PM](https://user-images.githubusercontent.com/1759897/118332760-9b843300-b4d8-11eb-8bfb-9b91d2234441.png)


## Mapbox
This project uses Mapbox and requires you to use a public access token.  
- Sign up on mapbox.com for an account
- Create an API key
- In the root of this project, add a file called `.env`
- Add `VITE_MAPBOX_ACCESS_TOKEN="<<YOUR API KEY HERE>>"` and save the file, replacing the `<<....>>` contents with your API key

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
