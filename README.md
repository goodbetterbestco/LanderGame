# README: Lunar Landing: Starship Edition

## Enhanced Development Plan for "Lunar Landing: Starship Edition"

### Game Concept Overview

*"Lunar Landing: Starship Edition"* is a physics-driven space simulation where players launch a starship from a Texas facility, navigate through space, and land on the Moon. The game is designed to:

- Deliver a physics engine with **realistic** and **arcade modes** for broad appeal—challenging yet accessible.
- Showcase a **vibrant, rotoscoped visual style** inspired by *Waking Life*, enhancing gameplay clarity.
- Target a **50% success rate**, fine-tuned through playtesting to balance challenge and fairness.
- Fit play sessions under **10 minutes** for high replayability.
- Achieve **60fps** across desktop and mobile browsers, prioritizing mobile performance.
- Include **arcade-style features**—leaderboards, achievements, and profiles—for retention.
- Offer **intuitive, customizable controls** across platforms, tested extensively.
- Drive **engagement and MRR** through a player-centric experience that feels tight and rewarding.

With a 16-week timeline—double the original scope—this plan leverages the extra time to refine the core loop, test relentlessly, build a community early, and ensure the game stands out where past projects faltered.

---

### Technical Requirements

#### Physics Engine

The physics engine is the game’s backbone, balancing realism and fun to keep players hooked.

##### Core Simulations

- **Gravitational Forces**: Simulate starship interactions with celestial bodies.
- **Atmospheric Drag**: Model drag during ascent, simplified in arcade mode.
- **Orbital Mechanics**: Update trajectories based on gravity, with assists in arcade mode.
- **Fuel and Thrust**: Adjust thrust and mass dynamically, more forgiving in arcade mode.

##### Enhancements

- **Dual Modes**:
  - *Realistic*: Complex physics for enthusiasts—unforgiving but fair.
  - *Arcade*: Simplified mechanics (less drag, more fuel) that still feel snappy, not dumbed-down.
- **Assists**: Toggleable autopilot and trajectory guides to aid new players without trivializing skill.
- **Optimizations**: Use Verlet integration for stability, quadtrees for collision efficiency, and adaptive time steps for 60fps.
- **Time Acceleration**: Up to 10x speed in orbital phases, with clear visual cues (e.g., pulsing HUD).

**Execution**: Test early and often to ensure failures are clear and fixable—players should understand *why* they crash and how to improve.

#### Graphics and Visual Style

The game uses the Canvas API for a **2D rotoscoped aesthetic** that’s unique, functional, and mobile-friendly.

##### Implementation

- **Visual Design**: Vector-based art with bold outlines and a vibrant palette for readability.
- **Animations**: Smooth 60fps via sprite sheets and texture atlases.
- **Assets**: Start with placeholders (e.g., circles for planets), transition to professional rotoscoped art.
- **Effects**: Subtle particle effects (thrust trails, landing impacts) for immersion, avoiding screen clutter.

##### Required Assets

- Starship (launch, flight, landing animations)
- Texas launch site and Earth backdrop
- Space environment (stars, distant Earth)
- Lunar surface with varied landing zones
- UI elements (HUD, menus)
- Particle effects (exhaust, collisions)

##### Enhancements

- **Clarity**: Work closely with artists from the start to sync visuals with gameplay—test across screen sizes for readability.
- **Audio**: Build a rich soundscape (launch roars, space hums, dynamic music) early with placeholders, refining throughout.
- **Performance**: Optimize with caching and sprite sheets for 60fps, especially on low-end mobile devices.

**Execution**: Prioritize clarity over flash—visuals should enhance, not distract.

#### Game Mechanics

The core loop—launch, orbit, land—is quick and replayable, with smartly layered depth.

##### Phases

- **Pre-Launch**: Customize ship components (e.g., fuel, engines) and run checks.
- **Launch**: Time thrust for liftoff.
- **Ascent**: Adjust thrust and attitude to reach orbit.
- **Orbital Phase**: Navigate trajectories, with optional challenges (e.g., debris avoidance).
- **Descent**: Land precisely on lunar zones.
- **Scoring**: Rate velocity, orientation, fuel use, and bonus objectives.

##### Enhancements

- **Arcade Mode**: Reduce complexity for casual play without feeling hand-holding.
- **Assists**: Toggleable aids (autopilot, trajectory lines) for accessibility.
- **Depth**: Add optional objectives (e.g., docking) and ship upgrades—reward skill, not grind.
- **Controls**: Responsive, customizable inputs (mouse/keyboard for desktop, touch/tilt for mobile) with haptic feedback where possible. Include a short, skippable tutorial.

**Execution**: Test controls to death across devices—lag or clunkiness kills retention.

#### User Interface

The UI is sleek, functional, and tied to the rotoscoped style.

##### HUD Elements

- Fuel bar, velocity gauge, altitude meter, toggleable trajectory line
- Landing zone markers with proximity indicators
- Status alerts (e.g., low fuel) with subtle animations

##### Menus and Screens

- Attract mode showcasing gameplay
- Main menu with mode selection and settings
- Player profiles for stats and unlocks
- Local/global leaderboards
- Post-mission summary with detailed scoring

##### Enhancements

- **Feedback**: Use color shifts and animations to highlight critical info.
- **Readability**: Scale UI dynamically for all devices, preserving the aesthetic.

**Execution**: Keep it intuitive—test onboarding with newbies and veterans alike.

#### Arcade Features

Arcade elements drive replayability and stickiness.

##### Features

- **Leaderboards**: Local and global, sorted by difficulty/mode.
- **Profiles**: Track stats, achievements, and unlocks.
- **Difficulty Levels**: Adjust physics for varied challenges.
- **Achievements**: Unlock cosmetics or missions (e.g., “Lunar Ace”).
- **Challenges**: Time attacks or special objectives (e.g., “No Assist Landing”).

##### Enhancements

- **Progression**: Tie unlocks to skill-based milestones, not paywalls.
- **Focus**: Prioritize single-player polish—multiplayer is a post-launch stretch goal.

**Execution**: Keep it simple and rewarding—don’t overcomplicate the core.

#### Cross-Platform Compatibility

Seamless performance across platforms is non-negotiable, with mobile as the priority.

##### Targets

- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS, Android)

##### Optimizations

- **Dynamic Loading**: Scale assets by device capability.
- **Performance**: Tune physics and graphics for 60fps, testing on low-end devices.
- **Storage**: Use LocalStorage for save data.
- **Enhancement**: Leverage high-end hardware for richer visuals where possible.

**Execution**: Optimize from day one—battery drain and lag are dealbreakers on mobile.

---

### Project Structure and Architecture

#### Directory Structure


##### Directory Structure Explanation

- **assets/**: Contains all non-code resources like images, sounds, and animations (currently empty, using placeholders in code).
- **src/**: Houses the JavaScript source code, organized into logical modules.
  - **core/**: Essential game engine components (currently only `game.js` exists).
  - **scenes/**: Different game stages and their logic (not yet implemented).
  - **entities/**: Game object definitions (not yet implemented).
  - **ui/**: User interface components (not yet implemented).
  - **utils/**: Helpful utility functions (not yet implemented).
  - **config/**: Configuration and constant files (not yet implemented).
- **styles/**: CSS styling for the game (`main.css` enforces full-screen canvas).
- **index.html**: The main HTML file to launch the game.
- **webpack.config.js**: Webpack configuration for building and serving the project.
- **package.json**: Defines dependencies and scripts (e.g., `npm run start`).
- **.gitignore**: Excludes `node_modules` and `dist` from version control.
- **README.md**: Project documentation and setup instructions (this file).

#### Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Canvas API, Web Audio API, LocalStorage, Webpack, Babel
- **Tools**: Git, Jest (testing), Puppeteer (performance)
- **Deployment**: GitHub Pages/Netlify

---

### Development Timeline

A 16-week roadmap ensures a polished, hit-worthy launch:

#### Weeks 1-2: Foundation and Prototype

- **Refine GDD with detailed physics modes, assists, and progression.**  
  *Status*: In progress—initial GDD provided, physics modes (realistic/arcade) planned but not implemented.
- **Build core loop (launch, orbit, land) with placeholder physics/graphics—hit 60fps on a low-end phone.**  
  *Status*: Partially complete—initial game loop implemented with placeholder physics (gravity, thrust, fuel) and graphics (white rectangle for starship, gray ground). Only the descent phase is functional so far (starship falls and can thrust upward). 60fps achieved on desktop, mobile testing pending.
- **Start rotoscoped assets (sketches) and placeholder audio (launch sound, hum).**  
  *Status*: Not started—currently using basic placeholders (rectangle for starship, gray ground).
- **Launch Twitter/X and dev blog—post a teaser screenshot.**  
  *Status*: Not started.
- **Deliverable**: Playable prototype with rough physics/controls.  
  *Status*: Achieved—playable prototype with basic physics (gravity, thrust, fuel) and controls (spacebar for thrust) implemented in `src/core/game.js`.

#### Weeks 3-4: Mechanics and First Feedback

- Add gravity, drag, orbits, fuel, and thrust—test realistic vs. arcade modes.
- Playtest with 5-10 testers: Is it fun? Clear? Log feedback.
- Integrate draft art (starship, Earth) and audio (basic soundscape).
- *Deliverable*: Working core loop, initial tweaks based on feedback.

#### Weeks 5-6: Controls and Full Flow

- Code unified, customizable controls for desktop/mobile—test for zero lag.
- Build launch, flight, and landing scenes with smooth transitions.
- Playtest with 10-15 testers, focusing on control feel—fix pain points.
- *Deliverable*: Full game flow with responsive inputs.

#### Weeks 7-8: UI and Arcade Hooks

- Add HUD (fuel, velocity) and main menu—keep it rotoscoped and sleek.
- Implement local leaderboards and 2-3 achievements (e.g., “First Orbit”).
- Swap in polished art (Moon, UI) and audio (dynamic music).
- *Deliverable*: Functional UI, early arcade features.

#### Weeks 9-10: Depth and Engagement

- Add optional objectives (e.g., debris dodge) or customization (e.g., engine upgrade).
- Integrate particle effects (thrust, impacts) and ambient audio layers.
- Playtest with 20+ testers: Where do they stick? Drop? Adjust accordingly.
- *Deliverable*: Deeper gameplay, refined feel.

#### Weeks 11-12: Iteration and Polish

- Tweak physics, controls, and difficulty per feedback—aim for 50% success rate.
- Polish animations, colors, and audio mix—make it shine.
- Test monetization (e.g., ship skins)—gauge player reaction.
- *Deliverable*: Near-final build, highly playable.

#### Weeks 13-14: Optimization and Beta

- Optimize for 60fps across platforms—cut asset/code fat, test on low-end devices.
- Playtest with 20+ testers: Squash bugs, tune difficulty.
- Release beta trailer, open closed beta—gather wider feedback.
- *Deliverable*: Beta build, community buzz growing.

#### Weeks 15-16: Final Sprint and Launch

- Lock in final assets, audio, and monetization—no new features, just fixes.
- Deploy on GitHub Pages/Netlify—launch with a trailer and social blast.
- *Deliverable*: Live game, players incoming.

#### Post-Launch (Weeks 17+)

- Monitor analytics: Drop-off points, MRR, player feedback.
- Release updates: Bug fixes first, then small content (missions, skins) if traction holds.
- Engage community via socials—keep them invested.
- *Goal*: Steady growth, climbing MRR.

---

### Current State

#### Progress Summary

As of March 7, 2025, we’ve completed the initial prototype phase (Weeks 1-2) with the following accomplishments, refined based on the development session:

- **Development Environment**:
  - Set up a Webpack development environment with `webpack.config.js`, `package.json`, and `index.html`.
  - Configured Webpack Dev Server to serve content from the project root (`path.resolve(__dirname)`), with `dist/bundle.js` output to the `dist` directory and served at `/dist/bundle.js`.
  - Added `.gitignore` to exclude `node_modules` and `dist`.
  - Resolved initial setup issues (e.g., 404 errors for `bundle.js`, “Cannot GET /” errors) by aligning `devServer.static.directory` with the project root and ensuring `index.html` loads `dist/bundle.js` correctly.
  - Fixed layout issues (scrolling, white background/stripe, scrollbars) via `styles/main.css` (e.g., `html, body { margin: 0; padding: 0; overflow: hidden; }`, `canvas { display: block; }`).

- **Core Game Loop**:
  - Implemented the initial game loop in `src/core/game.js` using the Canvas API.
  - Added a starship entity (white rectangle, 20x20px) that starts 200 pixels above the ground (`canvas.height - 200`).
  - Implemented basic physics:
    - **Gravity**: 0.1 pixels per frame downward acceleration.
    - **Thrust**: 0.2 pixels per frame upward acceleration when spacebar is held, capped at -5 (upward velocity limit).
    - **Fuel**: Starts at 100, decreases by 0.1 per frame while thrusting, stops at 0.
    - **Ground Collision**: Ground at `canvas.height - 50` (50px gray rectangle), with a bounce effect (`velocityY *= -0.5`) on impact.
  - Added a fuel display (`Fuel: X.X`) in the top-left corner using `ctx.fillText`, updating dynamically.
  - Canvas dynamically resizes to `window.innerWidth` and `window.innerHeight`, ensuring full-screen gameplay.
  - Achieved 60fps on desktop (MacBook Pro tested); mobile performance untested.

- **Controls**:
  - Added spacebar controls using `document.addEventListener('keydown')` and `keyup` for continuous thrust while held.
  - Resolved initial control issues by ensuring browser focus (clicking the window activates controls).
  - Starship rises when spacebar is held, falls when released, with fuel decreasing during thrust.

- **Version Control**:
  - Committed changes to Git with three commits:
    1. Initial `.gitignore` setup.
    2. Webpack configuration, `index.html`, and initial `game.js`.
    3. Initial game loop with canvas, physics, and fuel display.
  - Repository is local; not yet pushed to a remote (e.g., GitHub)—next developer should initialize a remote if needed.

- **Layout Fixes**:
  - Ensured a black background with no scrolling, white areas, or scrollbars via `styles/main.css`.

#### Known Issues and Next Steps

- **Physics Tuning**: 
  - Current gravity (0.1) and thrust (0.2) values are placeholders and need tuning for better balance—current settings allow reasonable control but may feel too floaty or harsh. Playtesting will refine these.
  - Bounce effect (`velocityY *= -0.5`) is basic and may need adjustment for realism or arcade feel.

- **Missing Features**:
  - Full core loop (launch, orbit, land) not implemented—currently only a simplified descent phase exists (starship falls from a fixed height, can thrust upward).
  - Realistic and arcade modes, atmospheric drag, and orbital mechanics are pending implementation in `src/core/game.js` or a separate `physics.js`.
  - Rotoscoped art, audio, and particle effects not started—using placeholders (white rectangle for starship, gray rectangle for ground).
  - Additional HUD elements (velocity, altitude, trajectory line) and UI (main menu, leaderboards) are pending, to be added in `src/ui/` or expanded in `game.js`.
  - Directory structure partially implemented—only `src/core/game.js` exists; `physics.js`, `input.js`, `renderer.js`, etc., need creation.

- **Testing**: 
  - Achieved 60fps on desktop (MacBook Pro, Chrome/Safari), but mobile testing (iOS/Android browsers) is pending to confirm performance on low-end devices.
  - Playtesting with 5-10 testers is the next step to assess fun, clarity, and difficulty—current success rate unmeasured but likely above 50% due to forgiving thrust.

- **Instructions for Next Developer**:

  1. **Setup**:
     - Clone the repository (if pushed to a remote) or access it locally at `/Users/evanthayer/Library/Mobile Documents/com~apple~CloudDocs/Projects/lunar-landing-starship`.
     - Run `npm install` to install dependencies (`webpack`, `webpack-dev-server`, `babel-loader`, etc.).
     - Run `npm run start` to launch Webpack Dev Server at `http://localhost:8080/`.
     - Project is synced via iCloud Drive—ensure files are fully synced (no cloud icons in Finder) before running.

  2. **Current Functionality**:
     - Open `http://localhost:8080/` in a browser.
     - See a white 20x20px rectangle (starship) starting 200px above a gray 50px-high ground on a black canvas.
     - Hold the spacebar to thrust upward (fuel decreases from 100); release to fall with gravity and bounce on the ground.
     - Fuel display in the top-left corner updates dynamically (e.g., `Fuel: 99.9` during thrust).
     - Canvas resizes with the window, maintaining full-screen gameplay.

  3. **Next Steps**:
     - **Physics**: Expand `src/core/game.js` to include realistic and arcade modes (e.g., toggleable drag, orbit simulation). Consider splitting physics into `src/core/physics.js` (see Technical Requirements).
     - **Core Loop**: Implement launch and orbital phases—add pre-launch setup (e.g., fuel selection) and orbital navigation, possibly in `src/scenes/launchScene.js` and `flightScene.js`.
     - **Testing**: Test on low-end mobile devices (e.g., older iPhone/Android) to ensure 60fps and minimal battery drain. Conduct playtesting with 5-10 testers to gather feedback on fun, clarity, and difficulty—adjust physics constants accordingly.
     - **Assets**: Integrate placeholder art (e.g., circles for planets in `assets/images/backgrounds/`) and audio (e.g., launch sound in `assets/audio/`) to replace rectangles.
     - **Community**: Launch a Twitter/X account and dev blog—post a teaser screenshot of the current prototype (starship thrusting above ground) to build early engagement.
     - **Version Control**: If not already done, push the repository to a remote (e.g., GitHub) and update this `README.md` with any additional setup notes.

---

### Testing and Quality Assurance

- **Unit Tests**: Jest for physics and core logic.
- **Performance**: Profile on low-end devices for 60fps—watch battery drain.
- **Playtesting**: Multiple rounds (5-20+ testers) to hit 50% success rate and ensure fun.

---

### Challenges and Mitigations

- **Mobile Performance**: Optimize early—light assets, efficient code, constant low-end testing.
- **Physics vs. Fun**: Tune via playtests—slightly forgiving beats overly brutal.
- **Control Variability**: Offer customization, test across devices for responsiveness.

---

### Additional Guidance

- **Scope**: Focus on single-player polish—multiplayer post-launch if MRR justifies it.
- **Community**: Build hype from week 1—social media, dev blog, beta testers.
- **Monetization**: Test in-game purchases (skins) or optional ads—keep it fair, not sleazy.

