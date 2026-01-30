import {
    ReactIcon, NodeIcon, TsIcon, TailwindIcon, ViteIcon, FramerMotionIcon, ExpressIcon, GoogleAIIcon
} from "../assets/Icons"

import {
    CareerCompassLogo
} from "../assets/Logos"

import {
    CareerCompassShots
} from "../assets/Shots"

import {
    CareerCompassMockup
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
    }
]