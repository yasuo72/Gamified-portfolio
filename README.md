# Deep Dive Portfolio Adventure

An immersive 3D underwater-themed portfolio experience built with Three.js. Explore the ocean depths, discover treasures (projects, skills, and certifications), and unlock achievements.

## Features

- **3D Ocean Environment**: Navigate through a beautiful underwater world using WASD controls
- **18 Discoverable Treasures**:
  - 6 Project Treasures with GitHub repository links
  - 6 Skill Treasures showcasing technical expertise
  - 6 Certificate Treasures linking to your achievements
- **Interactive Scanner**: Press E to scan nearby treasures and view details
- **Mini-Map Navigation**: Real-time sonar-style mini-map showing treasure locations
- **Achievement System**: Unlock achievements as you explore and collect treasures
- **Responsive Design**: Works on desktop and mobile devices with touch controls
- **Dynamic UI**: HUD displays depth, oxygen, compass, and inventory

## Project Structure

```
├── index.html          # Main HTML file with game container
├── game.js             # Core game logic, Three.js setup, and game mechanics
├── game.css            # Styling for UI elements and animations
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Controls

### Desktop
- **W/A/S/D**: Move forward/left/backward/right
- **Space/Q**: Move up/down
- **Mouse**: Look around
- **E**: Interact/Scan nearby treasures
- **ESC**: Open pause menu
- **N**: Highlight nearest treasure on mini-map

### Mobile
- **Joystick**: Movement control
- **Scan Button**: Interact with treasures
- **Menu Button**: Pause menu
- **Nav Button**: Navigation helper

## Game Mechanics

1. **Exploration**: Navigate the ocean depths to find treasure chests
2. **Scanning**: Press E when near a treasure to scan and view details
3. **Discovery Popup**: View treasure information and click "View Details" to:
   - **Projects**: Opens the specific GitHub repository
   - **Skills**: Opens your GitHub profile
   - **Certificates**: Opens your Google Drive certificates folder
4. **Inventory**: Collect treasures to unlock inventory slots
5. **Achievements**: Unlock badges as you reach milestones

## Treasure Locations

All treasures are positioned within the game environment:
- **X bounds**: -250 to 250
- **Y bounds**: -340 to 10 (depth)
- **Z bounds**: -450 to 50

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or use Git**:
   - Push to GitHub
   - Connect repository to Vercel dashboard
   - Auto-deploy on push

### Environment Variables
No environment variables required. This is a static site.

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Uses WebGL for 3D rendering
- Optimized for 60 FPS gameplay
- Responsive canvas resizing
- Efficient particle system for underwater effects

## Customization

### Change Treasure Links
Edit `game.js` in the `setupUIHandlers()` function:
```javascript
case 'project1':
    link = 'your-github-url';
    break;
```

### Adjust Treasure Positions
Modify the `position` object in each treasure definition in the `TREASURES` object.

### Customize Colors
Edit CSS variables in `game.css` for the ocean theme.

## Credits

- **Three.js**: 3D graphics library
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## License

Personal portfolio project. All rights reserved.

---

**Enjoy your deep dive adventure!** 🌊🏴‍☠️
