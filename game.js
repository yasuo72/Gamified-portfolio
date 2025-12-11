
        const GameState = {
            isStarted: false,
            isPaused: false,
            isLoading: true,
            depth: 0,
            oxygen: 100,
            treasuresFound: 0,
            totalTreasures: 18,
            achievements: [],
            playerPosition: { x: 0, y: 0, z: 0 },
            playerRotation: 0,
            nearbyTreasure: null,
            collectedTreasures: new Set()
        };

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

        // Treasure/Project Data
        const TREASURES = {
            project1: {
                id: 'project1',
                name: 'TransitShare',
                icon: '🚌',
                year: '2024',
                description: 'Real-time bus tracking and location sharing app with live GPS updates between drivers and passengers.',
                tech: ['Flutter', 'Node.js', 'MongoDB', 'Socket.IO', 'Mapbox'],
                position: { x: 50, y: -30, z: -100 },
                features: [
                    'Interactive maps with route visualization & ETA',
                    'Smart notifications for approaching buses',
                    'JWT auth & optimized geospatial queries',
                    'Supports thousands of concurrent users'
                ]
            },
            project2: {
                id: 'project2',
                name: 'AI Image Recognition Bot',
                icon: '🤖',
                year: '2024',
                description: 'Multimodal chatbot combining deep-learning image recognition with natural language understanding.',
                tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
                position: { x: -80, y: -60, z: -150 },
                features: [
                    '99.9% classification accuracy with CNN/YOLO',
                    'Sub-100ms response time',
                    'Handles 10,000+ concurrent users',
                    'Enterprise-grade E2E encryption'
                ]
            },
            project3: {
                id: 'project3',
                name: 'MedAssist+',
                icon: '🏥',
                year: '2025',
                description: 'AI-powered medical emergency assistant using QR/face scan-based patient identification.',
                tech: ['Flutter', 'Node.js', 'Flask', 'Huggingface', 'LLMs'],
                position: { x: 100, y: -100, z: -200 },
                features: [
                    'Online/offline medical bot for diagnosis',
                    'Secure medical data vault',
                    'Face-scan & QR instant data access',
                    'Disease prediction & medicine info'
                ]
            },
            project4: {
                id: 'project4',
                name: 'FinnSathi',
                icon: '💰',
                year: '2025',
                description: 'Smart AI-driven personal finance app with secure cloud sync and multi-device access.',
                tech: ['Flutter', 'Node.js', 'MongoDB', 'Flask', 'LLMs'],
                position: { x: -120, y: -150, z: -250 },
                features: [
                    'Automated expense tracking with OCR + ML',
                    'Interactive real-time analytics dashboard',
                    'AI chatbot with voice interaction',
                    'Personalized financial recommendations'
                ]
            },
            project5: {
                id: 'project5',
                name: 'HabitIQ',
                icon: '💪',
                year: '2024',
                description: 'AI-powered health tracker with NLP chatbots and predictive analytics.',
                tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
                position: { x: 60, y: -200, z: -300 },
                features: [
                    'Wearable device API integration',
                    'Real-time health monitoring',
                    '40% reduction in onboarding time',
                    'Predictive health analytics'
                ]
            },
            project6: {
                id: 'project6',
                name: 'FashionHub',
                icon: '👗',
                year: '2025',
                description: 'Full-stack modern e-commerce platform for fashion with secure authentication.',
                tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind'],
                position: { x: -80, y: -250, z: -350 },
                features: [
                    'Dynamic catalog with advanced search',
                    'Interactive admin dashboard',
                    'AI-powered chatbot support',
                    'Real-time order tracking'
                ]
            },
            skill1: {
                id: 'skill1',
                name: 'JavaScript Mastery',
                icon: '⚡',
                year: 'Good',
                description: 'Advanced JavaScript knowledge including ES6+, async/await, closures, and functional programming paradigms.',
                tech: ['ES6+', 'Async/Await', 'DOM API', 'WebSockets'],
                position: { x: 150, y: -80, z: -50 },
                features: [
                    'Event-driven architecture',
                    'Promise & callback management',
                    'Module systems (CommonJS, ES6)',
                    'Performance optimization'
                ]
            },
            skill2: {
                id: 'skill2',
                name: 'Python Expertise',
                icon: '🐍',
                year: 'Expert',
                description: 'Deep expertise in Python for data science, machine learning, and backend development.',
                tech: ['NumPy', 'Pandas', 'Scikit-learn', 'Django'],
                position: { x: -150, y: -120, z: 80 },
                features: [
                    'Data manipulation & analysis',
                    'Machine learning pipelines',
                    'Web scraping & automation',
                    'Statistical computing'
                ]
            },
            skill3: {
                id: 'skill3',
                name: 'React Proficiency',
                icon: '⚛️',
                year: 'Good',
                description: 'Expert-level React development with hooks, state management, and performance optimization.',
                tech: ['Hooks', 'Redux', 'Context API', 'Next.js'],
                position: { x: 80, y: -170, z: -180 },
                features: [
                    'Component architecture',
                    'State management patterns',
                    'Server-side rendering',
                    'Performance profiling'
                ]
            },
            skill4: {
                id: 'skill4',
                name: 'Node.js Backend',
                icon: '🟢',
                year: 'Expert',
                description: 'Full-stack Node.js development with Express, database design, and API architecture.',
                tech: ['Express', 'Socket.IO', 'Microservices', 'REST APIs'],
                position: { x: -120, y: -200, z: 150 },
                features: [
                    'RESTful API design',
                    'Real-time communication',
                    'Database optimization',
                    'Authentication & security'
                ]
            },
            skill5: {
                id: 'skill5',
                name: 'AI/ML Engineering',
                icon: '🧠',
                year: 'Intermediate',
                description: 'Machine learning model development, training, and deployment with TensorFlow and PyTorch.',
                tech: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
                position: { x: 120, y: -280, z: -280 },
                features: [
                    'Neural network design',
                    'Model optimization',
                    'Data preprocessing',
                    'Production deployment'
                ]
            },
            skill6: {
                id: 'skill6',
                name: 'Mobile Development',
                icon: '📱',
                year: 'Expert',
                description: 'Cross-platform mobile development with Flutter and React Native for iOS and Android.',
                tech: ['Flutter', 'Dart', 'Firebase', 'Native APIs'],
                position: { x: -100, y: -320, z: 200 },
                features: [
                    'UI/UX design patterns',
                    'State management',
                    'Native module integration',
                    'App store deployment'
                ]
            },
            cert1: {
                id: 'cert1',
                name: 'PU Code Hackathon 2.0',
                icon: '🏆',
                year: '2025',
                description: 'Winner of PU Code Hackathon 2.0 organized by Parul University. Developed an innovative solution using modern web technologies.',
                tech: ['ReactJS', 'AI/ML', 'Node.js', 'MongoDB'],
                position: { x: 170, y: -90, z: -120 },
                features: [
                    'Innovative problem-solving',
                    'Full-stack development',
                    'Team collaboration',
                    'Rapid prototyping'
                ]
            },
            cert2: {
                id: 'cert2',
                name: 'Vadodara Hackathon 5.0',
                icon: '🥇',
                year: '2024',
                description: 'Participated in Vadodara Hackathon 5.0 with a Flask-based AI/ML solution for real-world problem solving.',
                tech: ['Flask', 'AI/ML', 'HTML/CSS/JS', 'Bootstrap'],
                position: { x: -170, y: -140, z: -50 },
                features: [
                    'Machine learning integration',
                    'Web development',
                    'Data processing',
                    'User interface design'
                ]
            },
            cert3: {
                id: 'cert3',
                name: 'SQL and Databases',
                icon: '🗄️',
                year: '2024',
                description: 'Certification in SQL and Database Management from Infosys Springboard. Mastered relational database design and optimization.',
                tech: ['SQL', 'Database Design', 'Query Optimization', 'Indexing'],
                position: { x: 140, y: -250, z: -80 },
                features: [
                    'Advanced SQL queries',
                    'Database normalization',
                    'Performance tuning',
                    'Data integrity'
                ]
            },
            cert4: {
                id: 'cert4',
                name: 'Computer Networks & Internet Protocol',
                icon: '🌐',
                year: '2023-2024',
                description: 'NPTEL certification from IIT Kharagpur covering computer networks, protocols, and internet architecture fundamentals.',
                tech: ['TCP/IP', 'OSI Model', 'Network Security', 'Routing'],
                position: { x: -140, y: -180, z: -200 },
                features: [
                    'Network protocols',
                    'Internet architecture',
                    'Packet analysis',
                    'Network security basics'
                ]
            },
            cert5: {
                id: 'cert5',
                name: 'Theory of Computation',
                icon: '⚙️',
                year: '2024',
                description: 'NPTEL certification from IIT Kharagpur on Theory of Computation, covering automata, formal languages, and computational complexity.',
                tech: ['Automata Theory', 'Formal Languages', 'Complexity Theory', 'Algorithms'],
                position: { x: 110, y: -310, z: -180 },
                features: [
                    'Finite automata',
                    'Context-free grammars',
                    'Turing machines',
                    'Complexity analysis'
                ]
            },
            cert6: {
                id: 'cert6',
                name: 'Internet of Things',
                icon: '📡',
                year: '2025',
                description: 'NPTEL certification from IIT Kharagpur on Internet of Things, covering IoT architecture, sensors, and embedded systems.',
                tech: ['IoT Architecture', 'Sensors', 'Embedded Systems', 'Cloud Integration'],
                position: { x: -110, y: -270, z: -220 },
                features: [
                    'IoT device programming',
                    'Sensor integration',
                    'Real-time data processing',
                    'Cloud connectivity'
                ]
            }
        };

        // Achievements
        const ACHIEVEMENTS = {
            firstDive: { name: 'First Dive', description: 'Started your deep sea adventure!', icon: '🌊' },
            explorer: { name: 'Explorer', description: 'Reached 100m depth', icon: '🧭' },
            deepDiver: { name: 'Deep Diver', description: 'Reached 200m depth', icon: '⬇️' },
            abyssDweller: { name: 'Abyss Dweller', description: 'Reached 300m depth', icon: '🌑' },
            treasureHunter: { name: 'Treasure Hunter', description: 'Found your first project!', icon: '🏴‍☠️' },
            collector: { name: 'Collector', description: 'Found 3 projects', icon: '📦' },
            masterExplorer: { name: 'Master Explorer', description: 'Found all 18 treasures!', icon: '👑' }
        };

        // ============================================
        // DOM ELEMENTS
        // ============================================
        const startScreen = document.getElementById('startScreen');
        const startButton = document.getElementById('startButton');
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingBar = document.getElementById('loadingBar');
        const loadingStatus = document.getElementById('loadingStatus');
        const loadingDepth = document.getElementById('loadingDepth');
        const gameCanvas = document.getElementById('game-canvas');
        const gameHUD = document.getElementById('gameHUD');
        const currentDepthEl = document.getElementById('currentDepth');
        const oxygenFill = document.getElementById('oxygenFill');
        const oxygenText = document.getElementById('oxygenText');
        const compassValue = document.getElementById('compassValue');
        const crosshair = document.getElementById('crosshair');
        const scannerOverlay = document.getElementById('scannerOverlay');
        const interactionPrompt = document.getElementById('interactionPrompt');
        const discoveryPopup = document.getElementById('discoveryPopup');
        const achievementNotification = document.getElementById('achievementNotification');
        const pauseMenu = document.getElementById('pauseMenu');
        const infoPanel = document.getElementById('infoPanel');
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');

        const miniMapPlayer = document.getElementById('miniMapPlayer');
        const miniMap = document.querySelector('.mini-map');
        const mobileControls = document.getElementById('mobileControls');
        const actionButtons = document.getElementById('actionButtons');
        const joystick = document.getElementById('joystick');
        const scanBtn = document.getElementById('scanBtn');
        const menuBtn = document.getElementById('menuBtn');
        const navBtn = document.getElementById('navBtn');

        // ============================================
        // THREE.JS SETUP
        // ============================================
        let scene, camera, renderer, submarine, treasureChests = [], creatures = [];
        let clock = new THREE.Clock();
        let keys = { w: false, a: false, s: false, d: false, q: false, e: false, shift: false, space: false };
        let mouseX = 0, mouseY = 0;
        let targetRotationX = 0, targetRotationY = 0;

        const miniMapPings = {};
        let joystickActive = false;
        let joystickVector = { x: 0, z: 0 };
        let joystickStart = { x: 0, y: 0 };
        let lastTouchX = 0, lastTouchY = 0;

        function initThreeJS() {
            // Scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x001428);
            scene.fog = new THREE.FogExp2(0x001428, 0.008);

            // Camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 0);

            // Renderer
            renderer = new THREE.WebGLRenderer({ canvas: gameCanvas, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x003366, 0.4);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0x00aaff, 0.5);
            directionalLight.position.set(0, 100, 0);
            scene.add(directionalLight);

            // Add submarine light
            const subLight = new THREE.PointLight(0x00f5ff, 1, 50);
            subLight.position.set(0, 0, 5);
            camera.add(subLight);
            scene.add(camera);

            // Create underwater environment
            createUnderwaterEnvironment();

            // Create treasure chests
            createTreasureChests();

            // Create sea creatures
            createSeaCreatures();

            // Handle window resize
            window.addEventListener('resize', onWindowResize);
        }

        function createUnderwaterEnvironment() {
            // Create particles (plankton/debris)
            const particlesGeometry = new THREE.BufferGeometry();
            const particleCount = 5000;
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount * 3; i += 3) {
                positions[i] = (Math.random() - 0.5) * 500;
                positions[i + 1] = (Math.random() - 0.5) * 500;
                positions[i + 2] = (Math.random() - 0.5) * 500;

                // Random bioluminescent colors
                const colorChoice = Math.random();
                if (colorChoice < 0.3) {
                    colors[i] = 0; colors[i + 1] = 0.96; colors[i + 2] = 1;
                } else if (colorChoice < 0.5) {
                    colors[i] = 0.22; colors[i + 1] = 1; colors[i + 2] = 0.08;
                } else if (colorChoice < 0.7) {
                    colors[i] = 0.75; colors[i + 1] = 0; colors[i + 2] = 1;
                } else {
                    colors[i] = 0.5; colors[i + 1] = 0.7; colors[i + 2] = 1;
                }
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.5,
                vertexColors: true,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });

            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Create rock formations
            for (let i = 0; i < 30; i++) {
                const rockGeometry = new THREE.DodecahedronGeometry(Math.random() * 10 + 5, 1);
                const rockMaterial = new THREE.MeshStandardMaterial({
                    color: 0x2a3a4a,
                    roughness: 0.9,
                    metalness: 0.1
                });
                const rock = new THREE.Mesh(rockGeometry, rockMaterial);
                rock.position.set(
                    (Math.random() - 0.5) *                    (Math.random() - 0.5) * 400,
                    -50 - Math.random() * 300,
                    (Math.random() - 0.5) * 400
                );
                rock.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                );
                rock.scale.set(
                    1 + Math.random(),
                    1 + Math.random(),
                    1 + Math.random()
                );
                scene.add(rock);
            }

            // Create kelp forest
            for (let i = 0; i < 50; i++) {
                const kelpGroup = new THREE.Group();
                const kelpHeight = 20 + Math.random() * 40;
                const segments = 10;

                for (let j = 0; j < segments; j++) {
                    const segmentGeometry = new THREE.CylinderGeometry(0.2, 0.3, kelpHeight / segments, 8);
                    const segmentMaterial = new THREE.MeshStandardMaterial({
                        color: 0x1dd3b0,
                        transparent: true,
                        opacity: 0.7,
                        side: THREE.DoubleSide
                    });
                    const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
                    segment.position.y = j * (kelpHeight / segments);
                    segment.userData.swayOffset = Math.random() * Math.PI * 2;
                    segment.userData.swaySpeed = 0.5 + Math.random() * 0.5;
                    kelpGroup.add(segment);
                }

                kelpGroup.position.set(
                    (Math.random() - 0.5) * 300,
                    -100 - Math.random() * 200,
                    (Math.random() - 0.5) * 300
                );
                kelpGroup.userData.isKelp = true;
                scene.add(kelpGroup);
            }

            // Create coral formations
            const coralColors = [0xff6b9d, 0xff9f43, 0xee5a24, 0xbf00ff, 0x00f5ff];
            for (let i = 0; i < 40; i++) {
                const coralGeometry = new THREE.ConeGeometry(
                    1 + Math.random() * 3,
                    5 + Math.random() * 10,
                    5 + Math.floor(Math.random() * 3)
                );
                const coralMaterial = new THREE.MeshStandardMaterial({
                    color: coralColors[Math.floor(Math.random() * coralColors.length)],
                    emissive: coralColors[Math.floor(Math.random() * coralColors.length)],
                    emissiveIntensity: 0.2
                });
                const coral = new THREE.Mesh(coralGeometry, coralMaterial);
                coral.position.set(
                    (Math.random() - 0.5) * 350,
                    -80 - Math.random() * 250,
                    (Math.random() - 0.5) * 350
                );
                coral.rotation.x = Math.random() * 0.3;
                coral.rotation.z = Math.random() * 0.3;
                scene.add(coral);
            }

            // Create glowing orbs (bioluminescent)
            for (let i = 0; i < 100; i++) {
                const orbGeometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.5, 16, 16);
                const orbColors = [0x00f5ff, 0x39ff14, 0xbf00ff, 0xff00a0, 0xffff00];
                const orbColor = orbColors[Math.floor(Math.random() * orbColors.length)];
                const orbMaterial = new THREE.MeshBasicMaterial({
                    color: orbColor,
                    transparent: true,
                    opacity: 0.8
                });
                const orb = new THREE.Mesh(orbGeometry, orbMaterial);
                orb.position.set(
                    (Math.random() - 0.5) * 400,
                    (Math.random() - 0.5) * 400,
                    (Math.random() - 0.5) * 400
                );
                orb.userData.isOrb = true;
                orb.userData.originalY = orb.position.y;
                orb.userData.pulseSpeed = 1 + Math.random() * 2;
                orb.userData.floatSpeed = 0.5 + Math.random();
                orb.userData.floatAmplitude = 1 + Math.random() * 2;

                // Add point light to some orbs
                if (Math.random() > 0.7) {
                    const orbLight = new THREE.PointLight(orbColor, 0.5, 10);
                    orb.add(orbLight);
                }

                scene.add(orb);
            }

            // Create ocean floor
            const floorGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
            const floorMaterial = new THREE.MeshStandardMaterial({
                color: 0x1a2a3a,
                roughness: 1,
                metalness: 0
            });

            // Add some height variation to the floor
            const floorPositions = floorGeometry.attributes.position;
            for (let i = 0; i < floorPositions.count; i++) {
                const x = floorPositions.getX(i);
                const y = floorPositions.getY(i);
                const z = Math.sin(x * 0.05) * Math.cos(y * 0.05) * 10 + Math.random() * 5;
                floorPositions.setZ(i, z);
            }
            floorGeometry.computeVertexNormals();

            const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.rotation.x = -Math.PI / 2;
            floor.position.y = -350;
            scene.add(floor);
        }

        function createTreasureChests() {
            Object.values(TREASURES).forEach(treasure => {
                // Create treasure chest group
                const chestGroup = new THREE.Group();

                // Chest body
                const chestBodyGeometry = new THREE.BoxGeometry(4, 3, 3);
                const chestMaterial = new THREE.MeshStandardMaterial({
                    color: 0x8B4513,
                    roughness: 0.8,
                    metalness: 0.2
                });
                const chestBody = new THREE.Mesh(chestBodyGeometry, chestMaterial);
                chestGroup.add(chestBody);

                // Chest lid
                const chestLidGeometry = new THREE.BoxGeometry(4.2, 1.5, 3.2);
                const chestLid = new THREE.Mesh(chestLidGeometry, chestMaterial);
                chestLid.position.y = 2;
                chestGroup.add(chestLid);

                // Gold trim
                const trimMaterial = new THREE.MeshStandardMaterial({
                    color: 0xffd700,
                    roughness: 0.3,
                    metalness: 0.8,
                    emissive: 0xffd700,
                    emissiveIntensity: 0.3
                });

                // Horizontal trims
                const trimGeometry = new THREE.BoxGeometry(4.3, 0.2, 0.2);
                const trim1 = new THREE.Mesh(trimGeometry, trimMaterial);
                trim1.position.set(0, 1.5, 1.5);
                chestGroup.add(trim1);

                const trim2 = new THREE.Mesh(trimGeometry, trimMaterial);
                trim2.position.set(0, 1.5, -1.5);
                chestGroup.add(trim2);

                // Lock
                const lockGeometry = new THREE.BoxGeometry(0.8, 1, 0.3);
                const lock = new THREE.Mesh(lockGeometry, trimMaterial);
                lock.position.set(0, 1.5, 1.7);
                chestGroup.add(lock);

                // Glowing aura
                const auraGeometry = new THREE.SphereGeometry(5, 32, 32);
                const auraMaterial = new THREE.MeshBasicMaterial({
                    color: 0x00f5ff,
                    transparent: true,
                    opacity: 0.2,
                    side: THREE.BackSide
                });
                const aura = new THREE.Mesh(auraGeometry, auraMaterial);
                chestGroup.add(aura);

                // Point light
                const chestLight = new THREE.PointLight(0x00f5ff, 1, 30);
                chestLight.position.y = 2;
                chestGroup.add(chestLight);

                // Position the chest
                chestGroup.position.set(
                    treasure.position.x,
                    treasure.position.y,
                    treasure.position.z
                );

                // Store treasure data
                chestGroup.userData = {
                    isTreasure: true,
                    treasureId: treasure.id,
                    treasureData: treasure,
                    collected: false,
                    originalY: treasure.position.y
                };

                treasureChests.push(chestGroup);
                scene.add(chestGroup);
            });
        }

        function createSeaCreatures() {
            // Create jellyfish
            for (let i = 0; i < 15; i++) {
                const jellyfishGroup = new THREE.Group();

                // Bell
                const bellGeometry = new THREE.SphereGeometry(2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
                const jellyfishColors = [0xbf00ff, 0xff00a0, 0x00f5ff, 0x39ff14];
                const jellyfishColor = jellyfishColors[Math.floor(Math.random() * jellyfishColors.length)];
                const bellMaterial = new THREE.MeshBasicMaterial({
                    color: jellyfishColor,
                    transparent: true,
                    opacity: 0.6,
                    side: THREE.DoubleSide
                });
                const bell = new THREE.Mesh(bellGeometry, bellMaterial);
                jellyfishGroup.add(bell);

                // Tentacles
                for (let t = 0; t < 8; t++) {
                    const tentacleGeometry = new THREE.CylinderGeometry(0.1, 0.05, 5, 8);
                    const tentacleMaterial = new THREE.MeshBasicMaterial({
                        color: jellyfishColor,
                        transparent: true,
                        opacity: 0.4
                    });
                    const tentacle = new THREE.Mesh(tentacleGeometry, tentacleMaterial);
                    const angle = (t / 8) * Math.PI * 2;
                    tentacle.position.set(
                        Math.cos(angle) * 1,
                        -2.5,
                        Math.sin(angle) * 1
                    );
                    tentacle.userData.swayOffset = Math.random() * Math.PI * 2;
                    jellyfishGroup.add(tentacle);
                }

                // Light
                const jellyfishLight = new THREE.PointLight(jellyfishColor, 0.5, 15);
                jellyfishGroup.add(jellyfishLight);

                jellyfishGroup.position.set(
                    (Math.random() - 0.5) * 300,
                    -20 - Math.random() * 200,
                    (Math.random() - 0.5) * 300
                );

                jellyfishGroup.userData = {
                    isCreature: true,
                    type: 'jellyfish',
                    floatSpeed: 0.3 + Math.random() * 0.3,
                    floatAmplitude: 5 + Math.random() * 10,
                    originalY: jellyfishGroup.position.y,
                    moveDirection: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.02,
                        0,
                        (Math.random() - 0.5) * 0.02
                    )
                };

                creatures.push(jellyfishGroup);
                scene.add(jellyfishGroup);
            }

            // Create fish schools (Peepers)
            for (let school = 0; school < 5; school++) {
                const schoolGroup = new THREE.Group();
                const fishCount = 10 + Math.floor(Math.random() * 15);

                for (let i = 0; i < fishCount; i++) {
                    const fishGroup = new THREE.Group();

                    // Fish body
                    const bodyGeometry = new THREE.ConeGeometry(0.3, 1.5, 8);
                    bodyGeometry.rotateX(Math.PI / 2);
                    const fishColors = [0xff6b35, 0xff9f43, 0xffd93d, 0x6bcb77];
                    const fishColor = fishColors[Math.floor(Math.random() * fishColors.length)];
                    const bodyMaterial = new THREE.MeshStandardMaterial({
                        color: fishColor,
                        emissive: fishColor,
                        emissiveIntensity: 0.2
                    });
                    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
                    fishGroup.add(body);

                    // Tail
                    const tailGeometry = new THREE.ConeGeometry(0.4, 0.5, 4);
                    tailGeometry.rotateX(-Math.PI / 2);
                    const tail = new THREE.Mesh(tailGeometry, bodyMaterial);
                    tail.position.z = -0.9;
                    fishGroup.add(tail);

                    // Eye
                    const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
                    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
                    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
                    eye.position.set(0.15, 0.1, 0.5);
                    fishGroup.add(eye);

                    fishGroup.position.set(
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 5,
                        (Math.random() - 0.5) * 10
                    );

                    fishGroup.userData = {
                        offsetX: Math.random() * Math.PI * 2,
                        offsetY: Math.random() * Math.PI * 2,
                        speed: 0.5 + Math.random() * 0.5
                    };

                    schoolGroup.add(fishGroup);
                }

                schoolGroup.position.set(
                    (Math.random() - 0.5) * 300,
                    -30 - Math.random() * 150,
                    (Math.random() - 0.5) * 300
                );

                schoolGroup.userData = {
                    isCreature: true,
                    type: 'fishSchool',
                    moveSpeed: 0.2 + Math.random() * 0.3,
                    moveDirection: new THREE.Vector3(
                        (Math.random() - 0.5),
                        (Math.random() - 0.5) * 0.2,
                        (Math.random() - 0.5)
                    ).normalize()
                };

                creatures.push(schoolGroup);
                scene.add(schoolGroup);
            }

            // Create large creature (whale-like)
            const whaleGroup = new THREE.Group();

            const whaleBodyGeometry = new THREE.SphereGeometry(15, 32, 16);
            whaleBodyGeometry.scale(2, 0.8, 1);
            const whaleMaterial = new THREE.MeshStandardMaterial({
                color: 0x2a4a6a,
                roughness: 0.9
            });
            const whaleBody = new THREE.Mesh(whaleBodyGeometry, whaleMaterial);
            whaleGroup.add(whaleBody);

            // Whale tail
            const tailGeometry = new THREE.BoxGeometry(20, 2, 8);
            const tail = new THREE.Mesh(tailGeometry, whaleMaterial);
            tail.position.z = -20;
            tail.rotation.x = 0.2;
            whaleGroup.add(tail);

            // Bioluminescent spots
            for (let i = 0; i < 20; i++) {
                const spotGeometry = new THREE.SphereGeometry(0.5, 8, 8);
                const spotMaterial = new THREE.MeshBasicMaterial({
                    color: 0x00f5ff,
                    transparent: true,
                    opacity: 0.8
                });
                const spot = new THREE.Mesh(spotGeometry, spotMaterial);
                const theta = Math.random() * Math.PI;
                const phi = Math.random() * Math.PI * 2;
                spot.position.set(
                    Math.sin(theta) * Math.cos(phi) * 15,
                    Math.sin(theta) * Math.sin(phi) * 6,
                    Math.cos(theta) * 15
                );
                whaleGroup.add(spot);
            }

            whaleGroup.position.set(200, -150, -200);
            whaleGroup.userData = {
                isCreature: true,
                type: 'whale',
                moveSpeed: 0.1,
                circleRadius: 150,
                circleAngle: 0
            };

            creatures.push(whaleGroup);
            scene.add(whaleGroup);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // ============================================
        // GAME LOOP & ANIMATION
        // ============================================
        function animate() {
            if (!GameState.isStarted || GameState.isPaused) {
                requestAnimationFrame(animate);
                return;
            }

            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            // Update player movement
            updatePlayerMovement(delta);

            // Update camera rotation based on mouse
            updateCameraRotation(delta);

            // Update depth based on camera position
            GameState.depth = Math.abs(Math.floor(camera.position.y));
            currentDepthEl.textContent = GameState.depth;

            // Update mission objectives based on depth
            const projectsFound = Array.from(GameState.collectedTreasures).filter(id => id.startsWith('project')).length;
            const skillsFound = Array.from(GameState.collectedTreasures).filter(id => id.startsWith('skill')).length;
            updateMissionObjectives(projectsFound, skillsFound);

            // Update compass
            const compassDeg = Math.floor((camera.rotation.y * 180 / Math.PI + 360) % 360);
            const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
            const dirIndex = Math.floor((compassDeg + 22.5) / 45) % 8;
            compassValue.textContent = `${directions[dirIndex]} ${compassDeg}°`;

            // Update oxygen (slowly decrease when deep)
            if (GameState.depth > 100) {
                GameState.oxygen = Math.max(0, GameState.oxygen - delta * 0.5);
                oxygenFill.style.width = GameState.oxygen + '%';
                oxygenText.textContent = Math.floor(GameState.oxygen) + '%';

                if (GameState.oxygen < 30) {
                    oxygenFill.style.background = 'linear-gradient(90deg, #ff1744, #ff6b35)';
                }
            } else {
                GameState.oxygen = Math.min(100, GameState.oxygen + delta * 2);
                oxygenFill.style.width = GameState.oxygen + '%';
                oxygenText.textContent = Math.floor(GameState.oxygen) + '%';
                oxygenFill.style.background = 'linear-gradient(90deg, var(--bio-cyan), var(--bio-green))';
            }

            // Animate treasure chests
            treasureChests.forEach(chest => {
                if (!chest.userData.collected) {
                    chest.position.y = chest.userData.originalY + Math.sin(time * 2) * 0.5;
                    chest.rotation.y += delta * 0.5;

                    // Update aura pulse
                    const aura = chest.children.find(c => c.geometry && c.geometry.type === 'SphereGeometry');
                    if (aura) {
                        aura.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
                    }
                }
            });

            // Animate creatures
            creatures.forEach(creature => {
                if (creature.userData.type === 'jellyfish') {
                    creature.position.y = creature.userData.originalY + 
                        Math.sin(time * creature.userData.floatSpeed) * creature.userData.floatAmplitude;
                    creature.position.add(creature.userData.moveDirection);

                    // Animate tentacles
                    creature.children.forEach((child, index) => {
                        if (child.userData.swayOffset !== undefined) {
                            child.rotation.x = Math.sin(time * 2 + child.userData.swayOffset) * 0.3;
                            child.rotation.z = Math.cos(time * 2 + child.userData.swayOffset) * 0.2;
                        }
                    });

                    // Keep within bounds
                    if (Math.abs(creature.position.x) > 350) creature.userData.moveDirection.x *= -1;
                    if (Math.abs(creature.position.z) > 500) creature.userData.moveDirection.z *= -1;
                }

                if (creature.userData.type === 'fishSchool') {
                    creature.position.add(
                        creature.userData.moveDirection.clone().multiplyScalar(creature.userData.moveSpeed)
                    );

                    // Animate individual fish
                    creature.children.forEach(fish => {
                        fish.position.x += Math.sin(time * fish.userData.speed + fish.userData.offsetX) * 0.02;
                        fish.position.y += Math.sin(time * fish.userData.speed + fish.userData.offsetY) * 0.01;
                    });

                    // Change direction randomly or at bounds
                    if (Math.abs(creature.position.x) > 350 || 
                        Math.abs(creature.position.z) > 500 ||
                        Math.random() < 0.001) {
                        creature.userData.moveDirection = new THREE.Vector3(
                            (Math.random() - 0.5),
                            (Math.random() - 0.5) * 0.2,
                            (Math.random() - 0.5)
                        ).normalize();
                    }
                }

                if (creature.userData.type === 'whale') {
                    creature.userData.circleAngle += delta * creature.userData.moveSpeed;
                    creature.position.x = Math.cos(creature.userData.circleAngle) * creature.userData.circleRadius;
                    creature.position.z = Math.sin(creature.userData.circleAngle) * creature.userData.circleRadius - 200;
                    creature.rotation.y = -creature.userData.circleAngle + Math.PI / 2;
                }
            });

            // Check for nearby treasures
            checkNearbyTreasures();

            // Check achievements
            checkAchievements();

            // Update mini-map
            updateMiniMap();

            // Render
            renderer.render(scene, camera);
        }

        function updatePlayerMovement(delta) {
            const moveSpeed = keys.shift ? 40 : 20;
            const direction = new THREE.Vector3();

            if (keys.w) direction.z -= 1;
            if (keys.s) direction.z += 1;
            if (keys.a) direction.x -= 1;
            if (keys.d) direction.x += 1;
            if (keys.space) direction.y += 1;
            if (keys.q) direction.y -= 1;

            if (isTouchDevice && joystickActive) {
                direction.x += joystickVector.x;
                direction.z += joystickVector.z;
            }

            direction.normalize();
            direction.applyQuaternion(camera.quaternion);
            direction.multiplyScalar(moveSpeed * delta);

            camera.position.add(direction);

            // Clamp position
            camera.position.y = Math.min(10, Math.max(-500, camera.position.y));
            camera.position.x = Math.max(-400, Math.min(400, camera.position.x));
            camera.position.z = Math.max(-600, Math.min(100, camera.position.z));

            // Update player position in state
            GameState.playerPosition = {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z
            };
        }

        function updateCameraRotation(delta) {
            camera.rotation.order = 'YXZ';
            camera.rotation.y += (targetRotationY - camera.rotation.y) * 5 * delta;
            camera.rotation.x += (targetRotationX - camera.rotation.x) * 5 * delta;

            // Clamp vertical rotation
            camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
        }

        function checkNearbyTreasures() {
            let nearestTreasure = null;
            let nearestDistance = Infinity;

            treasureChests.forEach(chest => {
                if (!chest.userData.collected) {
                    const distance = camera.position.distanceTo(chest.position);
                    if (distance < 15 && distance < nearestDistance) {
                        nearestDistance = distance;
                        nearestTreasure = chest;
                    }
                }
            });

            if (nearestTreasure) {
                GameState.nearbyTreasure = nearestTreasure;
                interactionPrompt.classList.add('visible');
                interactionPrompt.querySelector('.interaction-text').textContent = 
                    `Scan ${nearestTreasure.userData.treasureData.name}`;
                crosshair.classList.add('targeting');
            } else {
                GameState.nearbyTreasure = null;
                interactionPrompt.classList.remove('visible');
                crosshair.classList.remove('targeting');
            }
        }

        function checkAchievements() {
            // First dive
            if (!GameState.achievements.includes('firstDive') && GameState.depth > 10) {
                unlockAchievement('firstDive');
            }

            // Explorer (100m)
            if (!GameState.achievements.includes('explorer') && GameState.depth >= 100) {
                unlockAchievement('explorer');
            }

            // Deep Diver (200m)
            if (!GameState.achievements.includes('deepDiver') && GameState.depth >= 200) {
                unlockAchievement('deepDiver');
            }

            // Abyss Dweller (300m)
            if (!GameState.achievements.includes('abyssDweller') && GameState.depth >= 300) {
                unlockAchievement('abyssDweller');
            }

            // Collector (3 treasures)
            if (!GameState.achievements.includes('collector') && GameState.treasuresFound >= 3) {
                unlockAchievement('collector');
            }

            // Master Explorer (all treasures)
            if (!GameState.achievements.includes('masterExplorer') && GameState.treasuresFound >= GameState.totalTreasures) {
                unlockAchievement('masterExplorer');
            }
        }

        function unlockAchievement(achievementId) {
            if (GameState.achievements.includes(achievementId)) return;

            GameState.achievements.push(achievementId);
            const achievement = ACHIEVEMENTS[achievementId];

            document.getElementById('achievementTitle').textContent = achievement.name;
            document.getElementById('achievementDesc').textContent = achievement.description;
            document.querySelector('.achievement-icon').textContent = achievement.icon;

            achievementNotification.classList.add('show');

            setTimeout(() => {
                achievementNotification.classList.remove('show');
            }, 4000);
        }

        function updateMiniMap() {
            const player = miniMapPlayer;
            const mapElement = miniMap;
            const mapSize = mapElement ? mapElement.offsetWidth : 200;
            const worldSize = 800;

            const mapX = ((camera.position.x + worldSize / 2) / worldSize) * mapSize;
            const mapY = ((camera.position.z + worldSize / 2) / worldSize) * mapSize;

            if (player) {
                player.style.left = Math.max(10, Math.min(mapSize - 10, mapX)) + 'px';
                player.style.top = Math.max(10, Math.min(mapSize - 10, mapY)) + 'px';

                // Update player direction indicator
                const rotation = (-camera.rotation.y * 180 / Math.PI);
                player.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            }

            Object.values(TREASURES).forEach(treasure => {
                const ping = miniMapPings[treasure.id];
                if (!ping) return;

                if (GameState.collectedTreasures.has(treasure.id)) {
                    ping.style.display = 'none';
                    return;
                }

                ping.style.display = 'block';
                const tx = ((treasure.position.x + worldSize / 2) / worldSize) * mapSize;
                const tz = ((treasure.position.z + worldSize / 2) / worldSize) * mapSize;
                ping.style.left = Math.max(10, Math.min(mapSize - 10, tx)) + 'px';
                ping.style.top = Math.max(10, Math.min(mapSize - 10, tz)) + 'px';
            });
        }

        // ============================================
        // INPUT HANDLING
        // ============================================
        function setupInputHandlers() {
            // Keyboard
            document.addEventListener('keydown', (e) => {
                const key = e.key.toLowerCase();
                if (key in keys) keys[key] = true;
                if (key === 'shift') keys.shift = true;
                if (key === ' ') keys.space = true;

                // Interact
                if (key === 'e' && GameState.nearbyTreasure) {
                    scanTreasure(GameState.nearbyTreasure);
                }

                // Pause
                if (key === 'escape') {
                    togglePause();
                }

                // Navigation helper
                if (key === 'n') {
                    highlightNearestTreasureOnMap();
                }
            });

            document.addEventListener('keyup', (e) => {
                const key = e.key.toLowerCase();
                if (key in keys) keys[key] = false;
                if (key === 'shift') keys.shift = false;
                if (key === ' ') keys.space = false;
            });

            // Desktop mouse look
            if (!isTouchDevice) {
                document.addEventListener('mousemove', (e) => {
                    if (GameState.isPaused || !GameState.isStarted) return;
                    if (document.pointerLockElement !== document.body) return;

                    targetRotationY -= e.movementX * 0.002;
                    targetRotationX -= e.movementY * 0.002;
                    targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
                });

                // Click to lock pointer
                gameCanvas.addEventListener('click', () => {
                    if (GameState.isStarted && !GameState.isPaused && document.body.requestPointerLock) {
                        document.body.requestPointerLock();
                    }
                });

                // Pointer lock change
                document.addEventListener('pointerlockchange', () => {
                    if (document.pointerLockElement !== document.body && GameState.isStarted) {
                        // Pointer unlocked - could pause game
                    }
                });
            }

            setupMobileControls();
        }

        function setupMobileControls() {
            if (!mobileControls || !actionButtons) return;

            if (!isTouchDevice) {
                mobileControls.style.display = 'none';
                actionButtons.style.display = 'none';
                return;
            }

            mobileControls.style.display = 'flex';
            actionButtons.style.display = 'flex';

            if (joystick) {
                joystick.addEventListener('touchstart', onJoystickStart, { passive: false });
                joystick.addEventListener('touchmove', onJoystickMove, { passive: false });
                joystick.addEventListener('touchend', onJoystickEnd);
                joystick.addEventListener('touchcancel', onJoystickEnd);
            }

            if (scanBtn) {
                scanBtn.addEventListener('click', () => {
                    if (GameState.nearbyTreasure) {
                        scanTreasure(GameState.nearbyTreasure);
                    }
                });
            }

            if (menuBtn) {
                menuBtn.addEventListener('click', () => {
                    togglePause();
                });
            }

            if (navBtn) {
                navBtn.addEventListener('click', () => {
                    highlightNearestTreasureOnMap();
                });
            }

            if (gameCanvas) {
                gameCanvas.addEventListener('touchstart', onLookTouchStart, { passive: false });
                gameCanvas.addEventListener('touchmove', onLookTouchMove, { passive: false });
                gameCanvas.addEventListener('touchend', onLookTouchEnd);
                gameCanvas.addEventListener('touchcancel', onLookTouchEnd);
            }
        }

        function onJoystickStart(e) {
            if (!isTouchDevice || e.touches.length === 0) return;
            const touch = e.touches[0];
            joystickActive = true;
            joystickStart.x = touch.clientX;
            joystickStart.y = touch.clientY;
            joystickVector.x = 0;
            joystickVector.z = 0;
        }

        function onJoystickMove(e) {
            if (!isTouchDevice || !joystickActive || e.touches.length === 0) return;
            const touch = e.touches[0];
            const dx = touch.clientX - joystickStart.x;
            const dy = touch.clientY - joystickStart.y;
            const maxDist = 60;
            let limitedDx = dx;
            let limitedDy = dy;
            const dist = Math.hypot(dx, dy);
            if (dist > maxDist) {
                const ratio = maxDist / dist;
                limitedDx *= ratio;
                limitedDy *= ratio;
            }

            if (joystick) {
                joystick.style.transform = `translate(calc(-50% + ${limitedDx}px), calc(-50% + ${limitedDy}px))`;
            }

            joystickVector.x = limitedDx / maxDist;
            joystickVector.z = -limitedDy / maxDist;
        }

        function onJoystickEnd() {
            joystickActive = false;
            joystickVector.x = 0;
            joystickVector.z = 0;
            if (joystick) {
                joystick.style.transform = 'translate(-50%, -50%)';
            }
        }

        function onLookTouchStart(e) {
            if (!isTouchDevice || e.touches.length === 0) return;
            const touch = e.touches[0];
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
        }

        function onLookTouchMove(e) {
            if (!isTouchDevice || e.touches.length === 0) return;
            const touch = e.touches[0];
            const dx = touch.clientX - lastTouchX;
            const dy = touch.clientY - lastTouchY;
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;

            targetRotationY -= dx * 0.003;
            targetRotationX -= dy * 0.003;
            targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
        }

        function onLookTouchEnd() {
            lastTouchX = 0;
            lastTouchY = 0;
        }

        function createMiniMapPings() {
            if (!miniMap) return;

            Object.values(TREASURES).forEach(treasure => {
                if (miniMapPings[treasure.id]) return;
                const ping = document.createElement('div');
                ping.className = 'mini-map-ping';
                miniMap.appendChild(ping);
                miniMapPings[treasure.id] = ping;
            });
        }

        function highlightNearestTreasureOnMap() {
            let nearest = null;
            let nearestDistance = Infinity;

            Object.values(TREASURES).forEach(treasure => {
                if (GameState.collectedTreasures.has(treasure.id)) return;
                const dx = treasure.position.x - GameState.playerPosition.x;
                const dy = treasure.position.y - GameState.playerPosition.y;
                const dz = treasure.position.z - GameState.playerPosition.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < nearestDistance) {
                    nearestDistance = dist;
                    nearest = treasure;
                }
            });

            Object.values(miniMapPings).forEach(ping => {
                ping.classList.remove('nav-active');
            });

            if (nearest && miniMapPings[nearest.id]) {
                const ping = miniMapPings[nearest.id];
                ping.classList.add('nav-active');
                setTimeout(() => {
                    ping.classList.remove('nav-active');
                }, 4000);
            }
        }

        function scanTreasure(treasure) {
            if (treasure.userData.collected) return;

            // Show scanner overlay
            scannerOverlay.classList.add('active');

            setTimeout(() => {
                scannerOverlay.classList.remove('active');
                collectTreasure(treasure);
            }, 2000);
        }

        function collectTreasure(treasure) {
            treasure.userData.collected = true;
            GameState.collectedTreasures.add(treasure.userData.treasureId);
            GameState.treasuresFound++;

            // Update inventory slot
            const slotIndex = Object.keys(TREASURES).indexOf(treasure.userData.treasureId);
            const slot = document.getElementById(`slot${slotIndex + 1}`);
            slot.classList.remove('locked');
            slot.classList.add('collected');
            slot.innerHTML = `${treasure.userData.treasureData.icon}<span class="slot-number">${slotIndex + 1}</span>`;

            // Count projects and skills separately
            const projectCount = Object.keys(TREASURES).filter(key => key.startsWith('project')).length;
            const skillCount = Object.keys(TREASURES).filter(key => key.startsWith('skill')).length;
            const projectsFound = Array.from(GameState.collectedTreasures).filter(id => id.startsWith('project')).length;
            const skillsFound = Array.from(GameState.collectedTreasures).filter(id => id.startsWith('skill')).length;

            // Update mission objectives
            updateMissionObjectives(projectsFound, skillsFound);
            
            const progress = (GameState.treasuresFound / GameState.totalTreasures) * 100;
            progressFill.style.width = progress + '%';
            progressPercent.textContent = Math.floor(progress) + '%';

            // Hide treasure from scene
            treasure.visible = false;

            // Show discovery popup
            showDiscoveryPopup(treasure.userData.treasureData);

            // First treasure achievement
            if (GameState.treasuresFound === 1 && !GameState.achievements.includes('treasureHunter')) {
                unlockAchievement('treasureHunter');
            }
        }

        function updateMissionObjectives(projectsFound, skillsFound) {
            // Objective 1: Explore ocean depths (completed at 50m depth)
            if (GameState.depth >= 50 && !document.getElementById('obj1').classList.contains('completed')) {
                document.getElementById('obj1').classList.add('completed');
            }

            // Objective 2: Find all treasures (projects + skills)
            document.querySelector('#obj2 .objective-text').textContent = 
                `Find All Treasures (${GameState.treasuresFound}/${GameState.totalTreasures})`;
            if (GameState.treasuresFound === GameState.totalTreasures) {
                document.getElementById('obj2').classList.add('completed');
            }

            // Objective 3: Discover all skills
            const totalSkills = 6;
            document.querySelector('#obj3 .objective-text').textContent = 
                `Discover all skills (${skillsFound}/${totalSkills})`;
            if (skillsFound === totalSkills) {
                document.getElementById('obj3').classList.add('completed');
            }

            // Objective 4: Reach the Deep Abyss (300m depth)
            if (GameState.depth >= 300 && !document.getElementById('obj4').classList.contains('completed')) {
                document.getElementById('obj4').classList.add('completed');
            }
        }

        function showDiscoveryPopup(treasureData) {
            document.getElementById('discoveryIcon').textContent = treasureData.icon;
            document.getElementById('discoveryTitle').textContent = treasureData.name;
            document.getElementById('discoverySubtitle').textContent = `Project ${treasureData.year}`;
            document.getElementById('discoveryContent').textContent = treasureData.description;

            const techContainer = document.getElementById('discoveryTech');
            techContainer.innerHTML = '';
            treasureData.tech.forEach(tech => {
                const span = document.createElement('span');
                span.textContent = tech;
                techContainer.appendChild(span);
            });

            if (discoveryPopup) {
                discoveryPopup.dataset.treasureId = treasureData.id;
            }

            discoveryPopup.classList.add('active');

            // Exit pointer lock for popup interaction
            if (!isTouchDevice && document.exitPointerLock) {
                document.exitPointerLock();
            }
        }

        function togglePause() {
            GameState.isPaused = !GameState.isPaused;

            if (GameState.isPaused) {
                pauseMenu.classList.add('active');
                if (!isTouchDevice && document.exitPointerLock) {
                    document.exitPointerLock();
                }
            } else {
                pauseMenu.classList.remove('active');
                if (!isTouchDevice && document.body.requestPointerLock) {
                    document.body.requestPointerLock();
                }
            }
        }

        // ============================================
        // UI EVENT HANDLERS
        // ============================================
        function setupUIHandlers() {
            // Start button
            startButton.addEventListener('click', () => {
                startScreen.classList.add('hidden');
                startLoading();
            });

            // Discovery popup buttons
            document.getElementById('discoveryClose').addEventListener('click', closeDiscoveryPopup);
            document.getElementById('discoveryContinueBtn').addEventListener('click', closeDiscoveryPopup);
            document.getElementById('discoveryViewBtn').addEventListener('click', () => {
                const treasureId = discoveryPopup ? discoveryPopup.dataset.treasureId : '';
                closeDiscoveryPopup();

                let link = '';
                switch (treasureId) {
                    case 'project1':
                        link = 'https://github.com/yasuo72/TransitShare';
                        break;
                    case 'project2':
                        link = 'https://github.com/yasuo72/Image-reco-chatbot.git';
                        break;
                    case 'project3':
                        link = 'https://github.com/yasuo72/Medassist-.git';
                        break;
                    case 'project4':
                        link = 'https://github.com/yasuo72/Finnsathi--Ai-Expense-Monitor-Backend.git';
                        break;
                    case 'project5':
                        link = 'https://github.com/yasuo72/HabitiQ.git';
                        break;
                    case 'project6':
                        link = 'https://github.com/yasuo72/fashionwear.git';
                        break;
                    case 'skill1':
                    case 'skill2':
                    case 'skill3':
                    case 'skill4':
                    case 'skill5':
                    case 'skill6':
                        link = 'https://github.com/yasuo72';
                        break;
                    case 'cert1':
                    case 'cert2':
                    case 'cert3':
                    case 'cert4':
                    case 'cert5':
                    case 'cert6':
                        link = 'https://drive.google.com/drive/folders/1RI3bO0z_lQ_2grCzD_T_bAdxcTCT1RNq';
                        break;
                    default:
                        link = '';
                }

                if (link) {
                    window.open(link, '_blank');
                } else {
                    infoPanel.classList.add('active');
                }
            });

            // Pause menu buttons
            document.getElementById('resumeBtn').addEventListener('click', () => {
                togglePause();
            });

            document.getElementById('viewPortfolioBtn').addEventListener('click', () => {
                pauseMenu.classList.remove('active');
                infoPanel.classList.add('active');
            });

            document.getElementById('contactBtn').addEventListener('click', () => {
                window.open('mailto:rohit@example.com', '_blank');
            });

            document.getElementById('restartBtn').addEventListener('click', () => {
                location.reload();
            });

            // Info panel close
            document.getElementById('infoPanelClose').addEventListener('click', () => {
                infoPanel.classList.remove('active');
                if (!GameState.isPaused && !isTouchDevice && document.body.requestPointerLock) {
                    document.body.requestPointerLock();
                }
            });

            // Inventory slots click
            document.querySelectorAll('.inventory-slot').forEach(slot => {
                slot.addEventListener('click', () => {
                    const treasureId = slot.dataset.treasure;
                    if (GameState.collectedTreasures.has(treasureId)) {
                        showDiscoveryPopup(TREASURES[treasureId]);
                    }
                });
            });
        }

        function closeDiscoveryPopup() {
            discoveryPopup.classList.remove('active');
            if (!GameState.isPaused && !isTouchDevice && document.body.requestPointerLock) {
                document.body.requestPointerLock();
            }
        }

        function createBubbles() {
            const bubblesLayer = document.getElementById('bubblesLayer');
            if (!bubblesLayer) return;

            const initialCount = 25;
            for (let i = 0; i < initialCount; i++) {
                createBubble(bubblesLayer);
            }

            setInterval(() => {
                createBubble(bubblesLayer);
            }, 1000);
        }

        function createBubble(bubblesLayer) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';

            const size = 10 + Math.random() * 40;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = 6 + Math.random() * 8 + 's';
            bubble.style.animationDelay = Math.random() * 4 + 's';

            bubblesLayer.appendChild(bubble);

            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        }

        // ============================================
        // LOADING SEQUENCE
        // ============================================
        function startLoading() {
            loadingScreen.style.display = 'flex';
            let progress = 0;
            let depth = 0;

            const statusMessages = [
                'Initializing submarine systems...',
                'Calibrating depth sensors...',
                'Scanning ocean floor...',
                'Loading marine life data...',
                'Mapping treasure locations...',
                'Pressurizing hull...',
                'Activating sonar...',
                'Systems ready. Dive commencing...'
            ];

            let statusIndex = 0;

            const loadingInterval = setInterval(() => {
                progress += Math.random() * 8;
                depth += Math.random() * 30;

                if (progress >= 100) {
                    progress = 100;
                    clearInterval(loadingInterval);

                    setTimeout(() => {
                        loadingScreen.classList.add('hidden');
                        GameState.isStarted = true;
                        gameHUD.style.opacity = '1';

                        initThreeJS();
                        setupInputHandlers();
                        createMiniMapPings();
                        createBubbles();
                        animate();

                        if (!isTouchDevice && document.body.requestPointerLock) {
                            // Initial pointer lock (desktop only)
                            setTimeout(() => {
                                document.body.requestPointerLock();
                            }, 500);
                        }

                    }, 1000);
                }

                loadingBar.style.width = progress + '%';
                loadingDepth.textContent = Math.floor(depth);

                if (progress > (statusIndex + 1) * 12.5 && statusIndex < statusMessages.length - 1) {
                    statusIndex++;
                    loadingStatus.textContent = statusMessages[statusIndex];
                }

            }, 150);
        }

        // ============================================
        // INITIALIZE
        // ============================================
        document.addEventListener('DOMContentLoaded', () => {
            setupUIHandlers();
            setupMobileControls();
            createMiniMapPings();
            gameHUD.style.opacity = '0';
            loadingScreen.style.display = 'none';
        });

        // Console Easter Egg
        console.log('%c🌊 DEEP DIVE PORTFOLIO', 'color: #00f5ff; font-size: 24px; font-weight: bold;');
        console.log('%c🎮 Navigate with WASD, look around with mouse', 'color: #39ff14; font-size: 12px;');
        console.log('%c🔍 Press E near treasure chests to discover projects', 'color: #ff6b35; font-size: 12px;');
        console.log('%c👨‍💻 Built by Rohit Singh', 'color: #bf00ff; font-size: 12px;');
    
