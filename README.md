# Rebet P2P Slider

A React-based interactive P2P betting slider with animated orb, gradient transitions, and dynamic feedback effects.

## Features

* Drag-to-Accept or Decline slider UI
* Animated glowing orb on idle
* Gradient background changes based on slider direction
* Real-time icon, color, and arrow changes
* Modular architecture with reusable components and styles

## Project Structure

```
src/
├── components/
│   ├── P2PSlider.tsx
│   ├── Orb.tsx
│   ├── SliderIndicator.tsx
│   └── styles/
│       ├── sliderStyles.ts
│       ├── orbStyles.ts
│       └── indicatorStyles.ts
├── hooks/
│   └── useDragLogic.ts
├── utils/
│   ├── Constants.ts
│   └── GradientStyles.ts
├── assets/
│   ├── StaticAssets/
│   └── AnimatedAssets/
└── App.tsx
```

## Technologies Used

* React + TypeScript
* Framer Motion (drag + animation)
* Lottie (glowing animated arrows)
* Modular CSS-in-JS (per component)

## How It Works

1. **Orb Drag**: Users can drag the orb left or right
2. **Dynamic Feedback**: Color, orb image, arrow type, and background change based on direction
3. **Threshold**: Dragging past a threshold triggers accept or decline callback
4. **Reset**: After confirmation, the user can reset and reuse the slider

## Getting Started

```bash
npm install
npm run dev
```
## Testing

* Unit testing setup with Jest and React Testing Library is planned but not included in this version.  
* All interactions and behaviors have been manually tested during development to ensure proper functionality.

---

