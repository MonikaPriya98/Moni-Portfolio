# Monika Priya — Interactive Engineering Portfolio

An interactive engineering portfolio built with React, JavaScript, and WebGL. It highlights experience across Java, Flutter, cloud platforms, and OpenShift through motion-rich, responsive UI elements.

## Features

- Cinematic boot screen
- Interactive 3D technology constellation
- Magnetic call-to-action buttons
- Ctrl/Cmd + K command palette
- Animated impact metrics and project sections
- Scroll progress indicator
- Responsive mobile design
- Reduced-motion accessibility support

## Tech stack

- React 18
- Vite 6
- JavaScript and JSX
- Three.js, React Three Fiber, and Drei
- Framer Motion and GSAP
- Lucide React and React Icons
- CSS

## Run locally

Requirements: Node.js 20.19 or newer (below version 23) and npm 10 or 11.

```bash
git clone https://github.com/MonikaPriya98/Moni-Portfolio.git
cd Moni-Portfolio
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The project uses a relative asset base so it works correctly when hosted under a GitHub Pages repository path.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys the portfolio through GitHub Actions whenever a commit is pushed to `main`. It can also be started manually from the repository's **Actions** tab.

To enable the deployment:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push a commit to `main`, or manually run the workflow named **Deploy portfolio to GitHub Pages**.

After a successful deployment, the site is available at:

<https://monikapriya98.github.io/Moni-Portfolio/>

The workflow uses GitHub's standard Pages actions and does not require third-party hosting, deployment keys, or repository secrets.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |

## Dependency compatibility

The 3D stack is pinned to versions compatible with React 18:

- React and React DOM 18.3.1
- React Three Fiber 8.18.0
- Drei 9.122.0
- Three.js 0.169.0

Use `npm ci` for a reproducible installation based on `package-lock.json`.
