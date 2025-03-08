# Lunar Landing: Starship Edition

## Table of Contents
1. [Game Concept Overview](#game-concept-overview)
2. [Technical Requirements](#technical-requirements)
   - [Physics Engine](#physics-engine)
   - [Graphics and Visual Style](#graphics-and-visual-style)
   - [Game Mechanics](#game-mechanics)
   - [User Interface](#user-interface)
   - [Arcade Features](#arcade-features)
   - [Cross-Platform Compatibility](#cross-platform-compatibility)
3. [Project Structure and Architecture](#project-structure-and-architecture)
   - [Directory Structure](#directory-structure)
   - [Technology Stack](#technology-stack)
4. [Development Timeline](#development-timeline)
5. [Current State](#current-state)
   - [Progress Summary](#progress-summary)
   - [Known Issues](#known-issues)
6. [Instructions for the Next Developer](#instructions-for-the-next-developer)
   - [Setup Instructions](#setup-instructions)
   - [Current Functionality](#current-functionality)
   - [Next Steps](#next-steps)
7. [Testing and Quality Assurance](#testing-and-quality-assurance)
8. [Challenges and Mitigations](#challenges-and-mitigations)
9. [Additional Guidance](#additional-guidance)
10. [Troubleshooting and Resources](#troubleshooting-and-resources)

---

## Game Concept Overview

"Lunar Landing: Starship Edition" is a physics-driven space simulation where players launch a starship from a Texas facility, navigate through space, and land on the Moon. The game is designed to:

- Deliver a physics engine with realistic and arcade modes for broad appeal—challenging yet accessible.
- Showcase a vibrant, rotoscoped visual style inspired by *Waking Life*, enhancing gameplay clarity.
- Target a 50% success rate, fine-tuned through playtesting to balance challenge and fairness.
- Fit play sessions under 10 minutes for high replayability.
- Achieve 60fps across desktop and mobile browsers, prioritizing mobile performance.
- Include arcade-style features—leaderboards, achievements, and profiles—for retention.
- Offer intuitive, customizable controls across platforms, tested extensively.
- Drive engagement and MRR (Monthly Recurring Revenue) through a player-centric experience that feels tight and rewarding.

With a 16-week timeline—double the original scope—this plan leverages the extra time to refine the core loop, test relentlessly, build a community early, and ensure the game stands out where past projects faltered.

---

## Technical Requirements

### Physics Engine

The physics engine is the game's backbone, balancing realism and fun to keep players hooked.

#### Core Simulations
- **Gravitational Forces**: Simulate starship interactions with celestial bodies.
- **Atmospheric Drag**: Model drag during ascent, simplified in arcade mode.
- **Orbital Mechanics**: Update trajectories based on gravity, with assists in arcade mode.
- **Fuel and Thrust**: Adjust thrust and mass dynamically, more forgiving in arcade mode.

#### Enhancements
- **Dual Modes**:
  - *Realistic*: Complex physics for enthusiasts—unforgiving but fair.
  - *Arcade*: Simplified mechanics (less drag, more fuel) that still feel snappy, not dumbed-down.
- **Assists**: Toggleable autopilot and trajectory guides to aid new players without trivializing skill.
- **Optimizations**: Use Verlet integration for stability, quadtrees for collision efficiency, and adaptive time steps for 60fps.
- **Time Acceleration**: Up to 10x speed in orbital phases, with clear visual cues (e.g., pulsing HUD).

#### Execution
- Test early and often to ensure failures are clear and fixable—players should understand why they crash and how to improve.

### Graphics and Visual Style

The game uses the Canvas API for a 2D rotoscoped aesthetic that's unique, functional, and mobile-friendly.

#### Implementation
- **Visual Design**: Vector-based art with bold outlines and a vibrant palette for readability.
- **Animations**: Smooth 60fps via sprite sheets and texture atlases.
- **Assets**: Start with placeholders (e.g., circles for planets), transition to professional rotoscoped art.
- **Effects**: Subtle particle effects (thrust trails, landing impacts) for immersion, avoiding screen clutter.

#### Required Assets
- Starship (launch, flight, landing animations)
- Texas launch site and Earth backdrop
- Space environment (stars, distant Earth)
- Lunar surface with varied landing zones
- UI elements (HUD, menus)
- Particle effects (exhaust, collisions)

#### Enhancements
- **Clarity**: Work closely with artists from the start to sync visuals with gameplay—test across screen sizes for readability.
- **Audio**: Build a rich soundscape (launch roars, space hums, dynamic music) early with placeholders, refining throughout.
- **Performance**: Optimize with caching and sprite sheets for 60fps, especially on low-end mobile devices.

#### Execution
- Prioritize clarity over flash—visuals should enhance, not distract.

### Game Mechanics

The core loop—launch, orbit, land—is quick and replayable, with smartly layered depth.

#### Phases
1. **Pre-Launch**: Customize ship components (e.g., fuel, engines) and run checks.
2. **Launch**: Time thrust for liftoff.
3. **Ascent**: Adjust thrust and attitude to reach orbit.
4. **Orbital Phase**: Navigate trajectories, with optional challenges (e.g., debris avoidance).
5. **Descent**: Land precisely on lunar zones.
6. **Scoring**: Rate velocity, orientation, fuel use, and bonus objectives.

#### Enhancements
- **Arcade Mode**: Reduce complexity for casual play without feeling hand-holding.
- **Assists**: Toggleable aids (autopilot, trajectory lines) for accessibility.
- **Depth**: Add optional objectives (e.g., docking) and ship upgrades—reward skill, not grind.
- **Controls**: Responsive, customizable inputs (mouse/keyboard for desktop, touch/tilt for mobile) with haptic feedback where possible. Include a short, skippable tutorial.

#### Execution
- Test controls to death across devices—lag or clunkiness kills retention.

### User Interface

The UI is sleek, functional, and tied to the rotoscoped style.

#### HUD Elements
- Fuel bar, velocity gauge, altitude meter, toggleable trajectory line
- Landing zone markers with proximity indicators
- Status alerts (e.g., low fuel) with subtle animations

#### Menus and Screens
- Attract mode showcasing gameplay
- Main menu with mode selection and settings
- Player profiles for stats and unlocks
- Local/global leaderboards
- Post-mission summary with detailed scoring

#### Enhancements
- **Feedback**: Use color shifts and animations to highlight critical info.
- **Readability**: Scale UI dynamically for all devices, preserving the aesthetic.

#### Execution
- Keep it intuitive—test onboarding with newbies and veterans alike.

### Arcade Features

Arcade elements drive replayability and stickiness.

#### Features
- **Leaderboards**: Local and global, sorted by difficulty/mode.
- **Profiles**: Track stats, achievements, and unlocks.
- **Difficulty Levels**: Adjust physics for varied challenges.
- **Achievements**: Unlock cosmetics or missions (e.g., "Lunar Ace").
- **Challenges**: Time attacks or special objectives (e.g., "No Assist Landing").

#### Enhancements
- **Progression**: Tie unlocks to skill-based milestones, not paywalls.
- **Focus**: Prioritize single-player polish—multiplayer is a post-launch stretch goal.

#### Execution
- Keep it simple and rewarding—don't overcomplicate the core.

### Cross-Platform Compatibility

Seamless performance across platforms is non-negotiable, with mobile as the priority.

#### Targets
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS, Android)

#### Optimizations
- **Dynamic Loading**: Scale assets by device capability.
- **Performance**: Tune physics and graphics for 60fps, testing on low-end devices.
- **Storage**: Use LocalStorage for save data.
- **Enhancement**: Leverage high-end hardware for richer visuals where possible.

#### Execution
- Optimize from day one—battery drain and lag are dealbreakers on mobile.

---

## Project Structure and Architecture

### Directory Structure

Below is the current and planned directory structure:

```
lunar-landing-starship/
├── assets/                  # Non-code resources (currently empty, using placeholders in code)
│   ├── images/             # Images, sprites, and backgrounds (e.g., starship, planets)
│   ├── audio/              # Audio files (e.g., launch sounds, music)
│   └── animations/         # Animation data (e.g., sprite sheets)
├── src/                    # JavaScript source code
│   ├── core/              # Essential game engine components
│   │   ├── game.js        # Main game loop (currently implemented)
│   │   ├── physics.js     # Physics engine (planned)
│   │   ├── input.js       # Input handling (planned)
│   │   └── renderer.js    # Rendering logic (planned)
│   ├── scenes/            # Game stages and their logic (planned)
│   │   ├── launchScene.js # Launch phase (planned)
│   │   ├── flightScene.js # Orbital phase (planned)
│   │   └── landScene.js   # Landing phase (planned)
│   ├── entities/          # Game object definitions (planned)
│   │   ├── starship.js    # Starship entity (planned)
│   │   └── planet.js      # Celestial bodies (planned)
│   ├── ui/                # User interface components (planned)
│   │   ├── hud.js         # Heads-up display (planned)
│   │   └── menu.js        # Main menu and screens (planned)
│   ├── utils/             # Utility functions (planned)
│   │   └── math.js        # Math helpers (planned)
│   └── config/            # Configuration and constants (planned)
│       └── constants.js   # Game constants (planned)
├── styles/                # CSS styling
│   └── main.css           # Full-screen canvas styling
├── index.html             # Main HTML file to launch the game
├── webpack.config.js      # Webpack configuration
├── package.json           # Dependencies and scripts
├── .gitignore             # Excludes node_modules, dist, etc.
└── README.md              # Project documentation (this file)
```

### Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Canvas API, Web Audio API, LocalStorage, Webpack, Babel
- **Tools**: Git, Jest (testing), Puppeteer (performance)
- **Deployment**: GitHub Pages/Netlify

---

## Development Timeline

A 16-week roadmap ensures a polished, hit-worthy launch:

### Weeks 1-2: Foundation and Prototype
- **Tasks**:
  - Refine GDD with detailed physics modes, assists, and progression. *Status*: In progress—initial GDD provided, physics modes (realistic/arcade) planned but not implemented.
  - Build core loop (launch, orbit, land) with placeholder physics/graphics—hit 60fps on a low-end phone. *Status*: Partially complete—initial game loop implemented with placeholder physics (gravity, thrust, fuel) and graphics (white rectangle for starship, gray ground). Only the descent phase is functional so far (starship falls and can thrust upward). 60fps achieved on desktop, mobile testing pending.
  - Start rotoscoped assets (sketches) and placeholder audio (launch sound, hum). *Status*: Not started—currently using basic placeholders (rectangle for starship, gray ground).
  - Launch Twitter/X and dev blog—post a teaser screenshot. *Status*: Not started.
- **Deliverable**: Playable prototype with rough physics/controls. *Status*: Achieved—playable prototype with basic physics (gravity, thrust, fuel) and controls (spacebar for thrust) implemented in `src/core/game.js`.

### Weeks 3-4: Mechanics and First Feedback
- Add gravity, drag, orbits, fuel, and thrust—test realistic vs. arcade modes.
- Playtest with 5-10 testers: Is it fun? Clear? Log feedback.
- Integrate draft art (starship, Earth) and audio (basic soundscape).
- **Deliverable**: Working core loop, initial tweaks based on feedback.

### Weeks 5-6: Controls and Full Flow
- Code unified, customizable controls for desktop/mobile—test for zero lag.
- Build launch, flight, and landing scenes with smooth transitions.
- Playtest with 10-15 testers, focusing on control feel—fix pain points.
- **Deliverable**: Full game flow with responsive inputs.

### Weeks 7-8: UI and Arcade Hooks
- Add HUD (fuel, velocity) and main menu—keep it rotoscoped and sleek.
- Implement local leaderboards and 2-3 achievements (e.g., "First Orbit").
- Swap in polished art (Moon, UI) and audio (dynamic music).
- **Deliverable**: Functional UI, early arcade features.

### Weeks 9-10: Depth and Engagement
- Add optional objectives (e.g., debris dodge) or customization (e.g., engine upgrade).
- Integrate particle effects (thrust, impacts) and ambient audio layers.
- Playtest with 20+ testers: Where do they stick? Drop? Adjust accordingly.
- **Deliverable**: Deeper gameplay, refined feel.

### Weeks 11-12: Iteration and Polish
- Tweak physics, controls, and difficulty per feedback—aim for 50% success rate.
- Polish animations, colors, and audio mix—make it shine.
- Test monetization (e.g., ship skins)—gauge player reaction.
- **Deliverable**: Near-final build, highly playable.

### Weeks 13-14: Optimization and Beta
- Optimize for 60fps across platforms—cut asset/code fat, test on low-end devices.
- Playtest with 20+ testers: Squash bugs, tune difficulty.
- Release beta trailer, open closed beta—gather wider feedback.
- **Deliverable**: Beta build, community buzz growing.

### Weeks 15-16: Final Sprint and Launch
- Lock in final assets, audio, and monetization—no new features, just fixes.
- Deploy on GitHub Pages/Netlify—launch with a trailer and social blast.
- **Deliverable**: Live game, players incoming.

### Post-Launch (Weeks 17+)
- Monitor analytics: Drop-off points, MRR, player feedback.
- Release updates: Bug fixes first, then small content (missions, skins) if traction holds.
- Engage community via socials—keep them invested.
- **Goal**: Steady growth, climbing MRR.

---

## Current State

### Progress Summary

As of March 7, 2025, we've completed the initial prototype phase (Weeks 1-2) with the following accomplishments, refined based on the development session:

#### Development Environment
- Set up a Webpack development environment with `webpack.config.js`, `package.json`, and `index.html`.
- Configured Webpack Dev Server to serve content from the project root (`path.resolve(__dirname)`), with `dist/bundle.js` output to the `dist` directory and served at `/dist/bundle.js`.
- Added `.gitignore` to exclude `node_modules` and `dist`.
- Resolved initial setup issues (e.g., 404 errors for `bundle.js`, "Cannot GET /" errors) by aligning `devServer.static.directory` with the project root and ensuring `index.html` loads `dist/bundle.js` correctly.
- Fixed layout issues (scrolling, white background/stripe, scrollbars) via `styles/main.css` (e.g., `html, body { margin: 0; padding: 0; overflow: hidden; }`, `canvas { display: block; }`).

#### Core Game Loop
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

#### Controls
- Added spacebar controls using `document.addEventListener('keydown')` and `keyup` for continuous thrust while held.
- Resolved initial control issues by ensuring browser focus (clicking the window activates controls).
- Starship rises when spacebar is held, falls when released, with fuel decreasing during thrust.

#### Version Control
- Committed changes to Git with four commits:
  1. Initial `.gitignore` setup.
  2. Webpack configuration, `index.html`, and initial `game.js`.
  3. Initial game loop with canvas, physics, and fuel display.
  4. Test change to verify SSH push (added a line to `README.md`).
- Repository is now pushed to a remote GitHub repository: `https://github.com/goodbetterbestco/LanderGame`.
- Switched from HTTPS to SSH for authentication to avoid credential issues. The remote URL is now `git@github.com:goodbetterbestco/LanderGame.git`.

#### Layout Fixes
- Ensured a black background with no scrolling, white areas, or scrollbars via `styles/main.css`.

### Known Issues

#### Physics Tuning
- Current gravity (0.1) and thrust (0.2) values are placeholders and need tuning for better balance—current settings allow reasonable control but may feel too floaty or harsh. Playtesting will refine these.
- Bounce effect (`velocityY *= -0.5`) is basic and may need adjustment for realism or arcade feel.

#### Missing Features
- Full core loop (launch, orbit, land) not implemented—currently only a simplified descent phase exists (starship falls from a fixed height, can thrust upward).
- Realistic and arcade modes, atmospheric drag, and orbital mechanics are pending implementation in `src/core/game.js` or a separate `physics.js`.
- Rotoscoped art, audio, and particle effects not started—using placeholders (white rectangle for starship, gray rectangle for ground).
- Additional HUD elements (velocity, altitude, trajectory line) and UI (main menu, leaderboards) are pending, to be added in `src/ui/` or expanded in `game.js`.
- Directory structure partially implemented—only `src/core/game.js` exists; `physics.js`, `input.js`, `renderer.js`, etc., need creation.

#### Testing
- Achieved 60fps on desktop (MacBook Pro, Chrome/Safari), but mobile testing (iOS/Android browsers) is pending to confirm performance on low-end devices.
- Playtesting with 5-10 testers is the next step to assess fun, clarity, and difficulty—current success rate unmeasured but likely above 50% due to forgiving thrust.

---

## Instructions for the Next Developer

### Setup Instructions

To get started immediately, follow these steps to set up the development environment and access the project:

#### 1. Clone the Repository
- The project is hosted on GitHub at: `https://github.com/goodbetterbestco/LanderGame`.
- Clone the repository using SSH (recommended) or HTTPS:
  - **SSH** (preferred, requires setup—see below):
    ```
    git clone git@github.com:goodbetterbestco/LanderGame.git
    ```
  - **HTTPS** (alternative, requires Personal Access Token—see Troubleshooting section):
    ```
    git clone https://github.com/goodbetterbestco/LanderGame.git
    ```
- Navigate to the project directory:
  ```
  cd LanderGame
  ```
  
#### 2. Set Up SSH (If Using SSH)
- SSH is the recommended method for Git operations to avoid authentication issues. If you haven't set up SSH on your machine, follow these steps:
1. **Generate an SSH Key**:
   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   - Replace `your_email@example.com` with the email associated with your GitHub account.
   - Press Enter to accept the default file location (`~/.ssh/id_ed25519`).
   - Optionally set a passphrase (or leave blank for simplicity).
2. **Start the SSH Agent**:
   ```
   eval "$(ssh-agent -s)"
   ```
3. **Add the SSH Key to the Agent**:
   ```
   ssh-add ~/.ssh/id_ed25519
   ```
4. **Copy the Public Key**:
   ```
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copy the output (starts with `ssh-ed25519` and ends with your email).
5. **Add the Key to GitHub**:
   - Go to `https://github.com/settings/keys`.
   - Click "New SSH key" or "Add SSH key."
   - Give it a descriptive name (e.g., "My Laptop SSH Key") and paste the public key.
   - Click "Add SSH key."
6. **Test the SSH Connection**:
   ```
   ssh -T git@github.com
   ```
   - You should see: `Hi goodbetterbestco! You've successfully authenticated...`
7. **Verify the Remote URL**:
   - Ensure the remote URL uses SSH:
   ```
   git remote -v
   ```
   - Output should be: `origin git@github.com:goodbetterbestco/LanderGame.git (fetch/push)`.
   - If it uses HTTPS, switch to SSH:
   ```
   git remote set-url origin git@github.com:goodbetterbestco/LanderGame.git
   ```

#### 3. Install Dependencies
- Ensure Node.js and npm are installed on your machine (download from `https://nodejs.org` if needed).
- Install project dependencies:
  ```
  npm install
  ```

#### 4. Run the Development Server
- Start the Webpack Dev Server to run the game locally:
  ```
  npm run start
  ```
- Open a browser and navigate to `http://localhost:8080/`.
- **Note**: If you encounter a 404 error for `bundle.js` or a "Cannot GET /" error, ensure `index.html` references `/dist/bundle.js` correctly and `webpack.config.js` has `devServer.static.directory` set to `path.resolve(__dirname)`.

#### 5. Verify Project Sync (If Using iCloud Drive)
- The project is synced via iCloud Drive at `/Users/evanthayer/Library/Mobile Documents/com~apple~CloudDocs/Projects/lunar-landing-starship`.
- Ensure all files are fully synced (no cloud icons in Finder) before running the project to avoid missing files or outdated versions.

### Current Functionality

Once the setup is complete, you should see the following when running the game:

- Open `http://localhost:8080/` in a browser.
- A white 20x20px rectangle (starship) starts 200px above a gray 50px-high ground on a black canvas.
- Hold the spacebar to thrust upward (fuel decreases from 100); release to fall with gravity and bounce on the ground.
- Fuel display in the top-left corner updates dynamically (e.g., `Fuel: 99.9` during thrust).
- Canvas resizes with the window, maintaining full-screen gameplay.

### Next Steps

Here are the immediate tasks for the next developer, prioritized to advance the project toward the Weeks 3-4 goals:

1. **Physics Expansion**:
   - Expand `src/core/game.js` to include realistic and arcade modes (e.g., toggleable drag, orbit simulation). Consider splitting physics logic into `src/core/physics.js` for better organization (see Technical Requirements).
   - Tune physics constants (gravity: 0.1, thrust: 0.2, bounce: -0.5) based on playtesting feedback to balance fun and challenge.
   - Implement atmospheric drag and orbital mechanics as outlined in the Technical Requirements.

2. **Core Loop Implementation**:
   - Implement the full core loop (launch, orbit, land):
     - **Launch Phase**: Add pre-launch setup (e.g., fuel/engine selection) in `src/scenes/launchScene.js`.
     - **Orbital Phase**: Add orbital navigation and optional challenges (e.g., debris avoidance) in `src/scenes/flightScene.js`.
     - **Landing Phase**: Enhance the current descent phase with precise landing zones in `src/scenes/landScene.js`.

3. **Testing**:
   - Test on low-end mobile devices (e.g., older iPhone/Android) to ensure 60fps and minimal battery drain. Use browser developer tools to simulate mobile devices if physical devices are unavailable.
   - Conduct playtesting with 5-10 testers to gather feedback on fun, clarity, and difficulty. Adjust physics constants and controls based on feedback, aiming for a 50% success rate.

4. **Assets**:
   - Integrate placeholder art (e.g., circles for planets in `assets/images/backgrounds/`) and audio (e.g., launch sound in `assets/audio/`) to replace rectangles. Use free resources from sites like OpenGameArt.org or Freesound.org if professional assets are unavailable.
   - Begin sketches for rotoscoped art to align with the visual style (bold outlines, vibrant palette).

5. **Community Building**:
   - Launch a Twitter/X account and dev blog to build early engagement. Post a teaser screenshot of the current prototype (starship thrusting above ground) to generate interest. Use tools like OBS Studio to capture screenshots or GIFs.

6. **Version Control**:
   - Continue using Git and GitHub for version control:
     - Commit changes regularly with descriptive messages (e.g., `git commit -m "Added orbital mechanics to physics.js"`).
     - Push changes to GitHub frequently to ensure work is backed up: `git push origin main`.
     - Use branches for new features (e.g., `git checkout -b feature/orbital-mechanics`) to keep experimental changes separate from `main`.
   - If collaborating with others, use Pull Requests on GitHub to review and merge changes.

---

## Testing and Quality Assurance

- **Unit Tests**: Use Jest to test physics and core logic. Create a test suite in `tests/` (e.g., `physics.test.js`) to verify calculations like gravity, thrust, and fuel consumption.
- **Performance**: Profile on low-end devices for 60fps—watch battery drain. Use browser developer tools (e.g., Chrome DevTools Performance tab) to identify bottlenecks.
- **Playtesting**: Conduct multiple rounds (5-20+ testers) to hit a 50% success rate and ensure fun. Document feedback systematically (e.g., in a spreadsheet or GitHub Issues).

---

## Challenges and Mitigations

- **Mobile Performance**: Optimize early—use light assets, efficient code, and constant low-end testing. Avoid heavy computations in the main game loop.
- **Physics vs. Fun**: Tune via playtests—slightly forgiving beats overly brutal. Document tuning iterations in a changelog or GitHub Issues.
- **Control Variability**: Offer customization, test across devices for responsiveness. Use browser developer tools to simulate touch inputs if physical devices are unavailable.

---

## Additional Guidance

- **Scope**: Focus on single-player polish—multiplayer is a post-launch stretch goal if MRR justifies it.
- **Community**: Build hype from week 1—social media, dev blog, beta testers. Use free tools like Canva for promotional graphics.
- **Monetization**: Test in-game purchases (e.g., ship skins) or optional ads—keep it fair, not sleazy. Avoid pay-to-win mechanics to maintain player trust.

---

## Troubleshooting and Resources

### Common Issues and Fixes

#### Git and GitHub
- **Authentication Errors (HTTPS)**:
  - If using HTTPS and encountering a `403` error (`Permission denied`), you may need a Personal Access Token (PAT):
    1. Go to `https://github.com/settings/tokens`.
    2. Generate a new PAT with the `repo` scope.
    3. When prompted for a password during `git push`, use the PAT instead of your GitHub password.
  - To avoid repeated prompts, cache credentials:
    ```
    git config --global credential.helper osxkeychain  # macOS
    ```
  - **Recommendation**: Use SSH instead of HTTPS to avoid these issues (see Setup Instructions).

- **Authentication Errors (SSH)**:
  - If `git push` fails with `Permission denied (publickey)`, verify:
    - Your SSH key is added to the SSH agent: `ssh-add ~/.ssh/id_ed25519`.
    - The public key is added to GitHub: `https://github.com/settings/keys`.
    - The remote URL uses SSH: `git remote -v` should show `git@github.com:...`.
    - Test the SSH connection: `ssh -T git@github.com`.

- **Merge Conflicts**:
  - If pulling or merging changes results in conflicts, Git will mark affected files with conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). Edit the files to resolve conflicts, then:
    ```
    git add <file>
    git commit
    ```

#### Development Environment
- **404 Errors for `bundle.js`**:
  - Ensure `index.html` references `/dist/bundle.js` correctly (e.g., `<script src="/dist/bundle.js"></script>`).
  - Verify `webpack.config.js` has `output.publicPath` set to `/dist/` and `devServer.static.directory` set to `path.resolve(__dirname)`.

- **"Cannot GET /" Error**:
  - Ensure Webpack Dev Server is running (`npm run start`) and serving from the project root. Check `webpack.config.js` for correct `devServer` settings.

- **Layout Issues (Scrollbars, White Background)**:
  - Verify `styles/main.css` includes:
    ```css
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: black;
    }
    canvas {
      display: block;
    }
    ```

- **Controls Not Working**:
  - Ensure the browser window has focus—click inside the window to activate controls.
  - Check `src/core/game.js` for correct event listeners (keydown and keyup for spacebar).

### Resources

- **Git and GitHub**:
  - [Official Git Documentation](https://git-scm.com/doc): Comprehensive guide to Git commands.
  - [GitHub Guides](https://guides.github.com/): Tutorials on GitHub features (e.g., Pull Requests, Issues).
  - [Learn Git Branching](https://learngitbranching.js.org/): Interactive tutorial for branching and merging.

- **Game Development**:
  - [Phaser Documentation](https://phaser.io/docs): If considering a game framework for easier development.
  - [OpenGameArt](https://opengameart.org/): Free placeholder art assets.
  - [Freesound](https://freesound.org/): Free placeholder audio assets.

- **Markdown**:
  - [GitHub Markdown Guide](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax): Format your README.md with headings, lists, images, etc.

- **Backup**:
  - Regularly back up your local repository to an external drive or cloud storage (e.g., Google Drive, Dropbox) in case of GitHub account issues. To download a copy of the repository:
    - Go to https://github.com/goodbetterbestco/LanderGame, click the green "Code" button, and select "Download ZIP."

---

### Key Changes and Additions

1. **Table of Contents**:
   - Added a table of contents with clickable links for quick navigation, making the document more developer-friendly.

2. **Setup Instructions**:
   - Expanded setup instructions to include cloning the GitHub repository, setting up SSH, installing dependencies, and running the development server.
   - Added detailed SSH setup steps, reflecting the work we did during our session to switch from HTTPS to SSH.
   - Included HTTPS as an alternative with a note on PATs, but emphasized SSH as the preferred method.
   - Added a note about iCloud Drive sync to prevent issues with missing or outdated files.

3. **Version Control**:
   - Updated the version control section to reflect the repository's new remote status on GitHub (`https://github.com/goodbetterbestco/LanderGame`) and the switch to SSH.
   - Added guidance on committing, pushing, and using branches, ensuring the next developer can continue using Git effectively.

4. **Next Steps**:
   - Prioritized immediate tasks (physics expansion, core loop implementation, testing, assets, community building, version control) to guide the next developer toward Weeks 3-4 goals.
   - Included specific file names (e.g., `src/core/physics.js`, `src/scenes/launchScene.js`) to align with the planned directory structure.

5. **Troubleshooting and Resources**:
   - Added a dedicated section for troubleshooting common issues, especially related to Git and GitHub authentication (e.g., `403` errors, SSH setup), based on the challenges we encountered.
   - Included resources for learning Git, GitHub, and game development, as well as tools for backups, ensuring the next developer has everything they need to continue independently.

6. **Formatting and Readability**:
   - Improved Markdown formatting with consistent headings, lists, code blocks, and emphasis (e.g., *italics* for status updates).
   - Reorganized sections to prioritize critical information (e.g., Setup Instructions) for the next developer.

---

### Why These Changes Matter

The revised `README.md` ensures the next developer can:
- **Get Started Immediately**: Clear setup instructions, including GitHub access and SSH configuration, eliminate barriers to entry.
- **Understand the Project's State**: Detailed progress summary and known issues provide context, while next steps offer a clear roadmap.
- **Avoid Pitfalls**: Troubleshooting tips and resources prevent common issues, especially with Git and GitHub, based on our session.
- **Continue Development Effectively**: Guidance on version control, testing, and community building ensures the project stays on track toward its goals.

This `README.md` is now a comprehensive onboarding document, balancing high-level vision with practical, actionable steps. The next developer should have everything they need to pick up where you left off and advance the project successfully.