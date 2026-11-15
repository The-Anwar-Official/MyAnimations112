# My Animations — Motion Lab

A standalone animation destination designed to be linked from an existing personal portfolio. This site contains only four animated experiences; it intentionally has no Work, Services, Approach, Contact, or oversized personal-name intro sections.

## Included experiences

1. **The last-ball six** — animated night cricket stadium, crowd, bowler delivery, batter swing, ball flight and six callout.
2. **The water cycle** — a repeating visual sequence for evaporation, condensation, precipitation and collection. The scene includes changing sky/landscape states and scientific explanations; no animated person is included.
3. **Carrom night** — two players facing each other at a wooden carrom board, with an animated striker and coins moving across the board.
4. **How a plant grows** — seed/germination to roots and shoot, leaf growth, flowering and fruit/seed formation, with stage-by-stage science notes about plant growth and photosynthesis.

## Tech

React + Vite, CSS keyframe animation, and SVG/CSS-built scenes. No video files or external image assets are required. The project honours `prefers-reduced-motion` and includes keyboard-visible focus styles for cards and controls.

## Run locally

Requires a compatible Node.js version for the Vite version in `package.json`.

```sh
npm install
npm run dev
```

Create a production bundle with:

```sh
npm run build
npm run preview
```

## Link it from your existing portfolio

Add a `My Animations` link in the original portfolio pointing to the deployed URL for this project. This is intended to be a separate site/destination; it does not replace your original portfolio.

## Notes

The scenes are animated illustrations built from HTML/CSS/SVG, not photorealistic 3D simulations. Scientific descriptions are simplified for a general audience. For production use in a school or science exhibit, review the science text against the required course materials.
