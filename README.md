# Monika Priya — Interactive Engineering Portfolio (JavaScript)

This version is fully converted from TypeScript to JavaScript / JSX.

## Stack

- React
- Vite
- JavaScript / JSX
- Three.js
- React Three Fiber
- Drei
- Framer Motion
- GSAP
- Lucide React
- CSS

## Included

- Cinematic boot screen
- Interactive 3D technology constellation
- Java / Flutter / Cloud / OpenShift positioning
- Magnetic CTA buttons
- Scroll progress indicator
- Ctrl/Cmd + K command palette
- Animated impact metrics
- Engineering stack cards
- Project system rows
- Dedicated OpenShift section
- Responsive mobile design
- Reduced-motion accessibility support

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Important

This codebase no longer requires:
- TypeScript
- tsconfig files
- @types packages
- .tsx files

All React components now use `.jsx`.

## Dependency compatibility fix

This build is pinned to a compatible React Three Fiber stack:

- React 18.3.1
- React DOM 18.3.1
- @react-three/fiber 8.18.0
- @react-three/drei 9.122.0
- Three.js 0.169.0
- Node 20.19.x supported

If you previously attempted installation, remove `node_modules` and `package-lock.json`
before running `npm install` again.
