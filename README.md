# Ai Ad Generator

I built an app that creates a flyer for your (fictional?) business. Select the best slogan created by various text generation AI models, before selecting a stunning image. Then view your flyer. 

## Cloudflare Dev Challenge

This project is part of the [Cloudflare Dev Challenge](https://dev.to/devteam/join-us-for-the-cloudflare-ai-challenge-3000-in-prizes-5f99). 


## Tech Stack

[Astro](https://astro.build/) site using [Tailwind](https://tailwindcss.com/), that calls [Cloudflare workers](https://developers.cloudflare.com/workers/) and stores images in [R2](https://developers.cloudflare.com/r2/).

Cloudflare workers are stored in their own repos: [r2-connect-worker](https://github.com/StewSchrieff/r2-connect-worker) and [billowing-limit](https://github.com/StewSchrieff/worker-billowing-limit-574d).

### Run Locally
This project can be run by `npm i` and `npm run dev`.
