import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, TailwindIcon, ViteIcon, FramerMotionIcon, ExpressIcon, GoogleAIIcon, RestApiIcon, VueIcon
} from "../assets/Icons"

import {
    CareerCompassLogo, AuraLogo, NeonSliceLogo, SyslabLogo
} from "../assets/Logos"

import {
    CareerCompassShots, AuraShots, NeonSliceShots, SyslabShots
} from "../assets/Shots"

import {
    CareerCompassMockup, AuraMockup, NeonSliceMockup, SyslabMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

export const ProjectsList: ProjectsListType = [
    {
        Name: "CareerCompass AI",
        ShortDesc: "An AI-powered career intelligence platform that provides personalized career insights, strategic planning, and intelligent recommendations for professionals.",
        Desc: "CareerCompass AI is a next-generation career guidance platform that leverages advanced artificial intelligence to provide personalized career insights, strategic planning, and intelligent recommendations. It features an AI Career Strategist with natural conversation capabilities, comprehensive career exploration tools covering 100+ career paths across AI & Tech, Product & Design, Business & Strategy, and Security & Finance. The platform includes professional tools like Resume Analyzer with ATS scoring, Interview Preparation, Salary Intelligence, and Learning Pathways. It offers a responsive design with dark/light themes and multi-language support.",
        Logo: CareerCompassLogo,
        Shot: CareerCompassShots,
        Mockup: CareerCompassMockup,
        Theme: "#14B8A6",
        Status: "completed",
        Link: "https://ram6023.github.io/career-compass/",
        Source: "https://github.com/Ram6023/career-compass",
        Tech: [
            {
                title: "React",
                description: "React 18 for building the modern, component-based user interface.",
                icon: ReactIcon
            },
            {
                title: "TypeScript",
                description: "TypeScript 5 for type-safe, maintainable code.",
                icon: TsIcon
            },
            {
                title: "Tailwind CSS",
                description: "Utility-first CSS framework for rapid UI development.",
                icon: TailwindIcon
            },
            {
                title: "Vite",
                description: "Next-generation frontend tooling for fast development.",
                icon: ViteIcon
            },
            {
                title: "Node.js",
                description: "JavaScript runtime for server-side operations.",
                icon: NodeIcon
            },
            {
                title: "Express.js",
                description: "Fast, unopinionated web framework for Node.js.",
                icon: ExpressIcon
            },
            {
                title: "Google AI",
                description: "Google Generative AI for intelligent career recommendations.",
                icon: GoogleAIIcon
            },
            {
                title: "Framer Motion",
                description: "Production-ready motion library for React animations.",
                icon: FramerMotionIcon
            }
        ],
        features: [
            {
                title: "AI Career Chat Advisor",
                description: "Natural conversation-based AI career strategist that provides personalized guidance and recommendations."
            },
            {
                title: "Resume Analyzer",
                description: "Advanced resume analysis with ATS compatibility scoring and improvement suggestions."
            },
            {
                title: "Career Path Exploration",
                description: "Discover 500+ career paths across AI & Tech, Product & Design, Business & Strategy, and more."
            },
            {
                title: "Salary Intelligence",
                description: "Real-time salary trends and market analysis for informed career decisions."
            },
            {
                title: "Interview Preparation",
                description: "AI-powered interview coaching with practice questions and feedback."
            },
            {
                title: "Skill Assessment",
                description: "Comprehensive skill gap analysis with personalized learning pathway recommendations."
            },
            {
                title: "Responsive Design",
                description: "PWA-ready design with dark/light theme support for seamless experience across devices."
            }
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Syslab",
        ShortDesc: "An immersive, premium systems engineering laboratory designed to visualize and simulate low-level computing concepts with a futuristic 'Command Center' aesthetic.",
        Desc: "Syslab is a comprehensive educational platform that transforms complex computer science theories into interactive visual experiences. Built with a focus on high-end UI/UX, the application features a futuristic dashboard environment where users can simulate kernel-level operations, network data flows, and database structures. The project strips away traditional web layouts in favor of an immersive 'OS-style' interface, complete with a simulated kernel boot sequence, glassmorphic UI elements, and real-time performance analytics for deep-level systems learning.",
        Logo: SyslabLogo,
        Shot: SyslabShots,
        Mockup: SyslabMockup,
        Theme: "#10B981",
        Status: "completed",
        Link: "https://ram6023.github.io/Syslab/",
        Source: "https://github.com/Ram6023/Syslab",
        Tech: [
            {
                title: "Vue 3",
                description: "Vue 3 with Composition API for flexible and reactive UI components.",
                icon: VueIcon
            },
            {
                title: "TypeScript",
                description: "TypeScript for robust, type-safe simulation algorithms.",
                icon: TsIcon
            },
            {
                title: "Tailwind CSS",
                description: "Utility-first CSS for modern glassmorphism and animated layouts.",
                icon: TailwindIcon
            },
            {
                title: "Vite",
                description: "High-performance build tool for rapid development and testing.",
                icon: ViteIcon
            },
            {
                title: "Motion",
                description: "@vueuse/motion for fluid spring-based animations and transitions.",
                icon: JsIcon
            }
        ],
        features: [
            {
                title: "CPU Scheduler",
                description: "Real-time simulation of scheduling algorithms (FCFS, Priority, RR) with interactive Gantt charts."
            },
            {
                title: "Network Simulator",
                description: "Visualizes TCP 3-way handshakes and reliable data transfer with real-time cwnd graphing."
            },
            {
                title: "Memory Manager",
                description: "Interactive page replacement simulator (LRU, FIFO, Optimal) with efficiency gauges."
            },
            {
                title: "Database Engine",
                description: "Dynamic B-Tree Index traversal visualization and simulated Disk I/O analytics."
            },
            {
                title: "Compiler Playground",
                description: "A technical 'Kernel Console' for exploring lexical analysis, tokenization, and bytecode execution."
            },
            {
                title: "Premium Environment",
                description: "Includes a custom sidebar dock, a traveling 3D grid background, and professional-grade terminal feedback."
            }
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "AURA",
        ShortDesc: "A premium JARVIS-style AI voice assistant with stunning visual interface featuring real-time system monitoring, wake word activation, and glassmorphism design.",
        Desc: "AURA (Advanced User Responsive AI) is an intelligent voice-activated AI assistant designed to feel like a living entity—an AI that breathes, pulses, responds with voice, and monitors your system in style. The interface draws inspiration from JARVIS from Iron Man, featuring a futuristic sci-fi command center aesthetic with glassmorphism effects and luxury branding elements. The assistant responds to the wake word 'Hey Aura' and can perform various tasks including opening apps, performing calculations, setting timers, taking notes, checking weather, and providing system status information. The central orb animates to show different states (ready, listening, responding, speaking) with mesmerizing orbital rings, floating particles, and sparkle effects.",
        Logo: AuraLogo,
        Shot: AuraShots,
        Mockup: AuraMockup,
        Theme: "#D4AF37",
        Status: "completed",
        Link: "https://ram6023.github.io/Aura/",
        Source: "https://github.com/Ram6023/Aura",
        Tech: [
            {
                title: "HTML5",
                description: "Semantic markup for structure and accessibility.",
                icon: HtmlIcon
            },
            {
                title: "CSS3",
                description: "Premium styling with glassmorphism, gradients, and animations.",
                icon: CssIcon
            },
            {
                title: "JavaScript",
                description: "Core logic, interactions, and Web Speech API integration.",
                icon: JsIcon
            },
            {
                title: "Web Speech API",
                description: "Voice recognition and speech synthesis for natural interaction.",
                icon: JsIcon
            },
            {
                title: "REST API",
                description: "Open-Meteo API integration for live weather data.",
                icon: RestApiIcon
            }
        ],
        features: [
            {
                title: "Wake Word Activation",
                description: "Say 'Hey Aura' to activate the assistant, or click the orb or press spacebar."
            },
            {
                title: "Voice Response",
                description: "JARVIS-style spoken responses with natural text-to-speech synthesis."
            },
            {
                title: "Real-time System Monitoring",
                description: "Live Battery, CPU, Memory, and Network status widgets with beautiful visualizations."
            },
            {
                title: "Live Weather",
                description: "Weather information with geolocation support using Open-Meteo API."
            },
            {
                title: "Voice Commands",
                description: "Calculator, timers, dice roll, coin flip, notes, and more via voice."
            },
            {
                title: "Quick Actions",
                description: "Open apps like YouTube, Spotify, Netflix, Gmail, Maps, and social media instantly."
            },
            {
                title: "Theme Switching",
                description: "Cyberpunk, Ocean, Matrix, and Midnight themes for personalization."
            },
            {
                title: "Premium UI",
                description: "Animated orbital rings, floating particles, sparkles with glassmorphism design."
            }
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Neon Slice",
        ShortDesc: "A browser-based gesture-controlled slicing game powered by MediaPipe Hands AI for real-time hand tracking, featuring stunning 3D neon visuals.",
        Desc: "Neon Slice Ultimate is an immersive browser-based game where players slice through beautiful 3D objects using their hand movements detected via webcam. Powered by Google's MediaPipe Hands technology for real-time hand tracking, the game brings the thrill of Fruit Ninja directly to your browser. Players can wave their hands to slice crystal gems, plasma orbs, cyber cubes, quantum cores, and nebula rings while avoiding bombs. The game features multiple modes (Endless, Timed, Zen, and Boss Battle), a power-up system (Freeze, Shield, Double Points, Extra Life), a combo multiplier system, critical hits on center slices, and progressive difficulty scaling. The entire game is contained in a single HTML file with glassmorphism UI, particle effects, and four customizable color themes.",
        Logo: NeonSliceLogo,
        Shot: NeonSliceShots,
        Mockup: NeonSliceMockup,
        Theme: "#FF00FF",
        Status: "completed",
        Link: "https://ram6023.github.io/Neon-slice/",
        Source: "https://github.com/Ram6023/Neon-slice",
        Tech: [
            {
                title: "HTML5",
                description: "Structure and Canvas rendering for game graphics.",
                icon: HtmlIcon
            },
            {
                title: "CSS3",
                description: "Styling, animations, and glassmorphism effects.",
                icon: CssIcon
            },
            {
                title: "JavaScript",
                description: "Game logic, interactivity, and MediaPipe integration.",
                icon: JsIcon
            },
            {
                title: "MediaPipe Hands",
                description: "Google's AI for real-time hand tracking and gesture recognition.",
                icon: JsIcon
            }
        ],
        features: [
            {
                title: "Gesture Controls",
                description: "Wave to slice, fist for shield, peace sign for slow motion - all tracked via webcam."
            },
            {
                title: "4 Game Modes",
                description: "Endless, Timed (60/90/120s), Zen (no bombs), and Boss Battle modes."
            },
            {
                title: "3D HD Objects",
                description: "Crystal gems, plasma orbs, cyber cubes, quantum cores, and nebula rings to slice."
            },
            {
                title: "Power-up System",
                description: "Freeze, Shield, Double Points, Extra Life, and Golden Star power-ups."
            },
            {
                title: "Particle Explosions",
                description: "Stunning visual effects on every slice with particle systems."
            },
            {
                title: "Combo System",
                description: "Score multipliers up to 4x with critical hits on center slices."
            },
            {
                title: "4 Color Themes",
                description: "Neon, Retro, Ocean, Fire, and Forest themes for personalization."
            },
            {
                title: "XP & Leveling",
                description: "Progress tracking with localStorage persistence across sessions."
            }
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    }
]