import React from 'react';
import { cn } from "../lib/utils";
import { Helmet } from 'react-helmet-async';
import BlurImage from './utils/BlurImage';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Sriram Vissakoti | AI & Full Stack Developer</title>
        <meta name="description" content="Learn more about Sriram Vissakoti, an AI & Data Science student and developer passionate about building impactful, user-focused applications and solving real-world problems." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About Sriram Vissakoti | AI & Full Stack Developer" />
        <meta property="og:description" content="Get to know Sriram Vissakoti's journey in AI, full-stack development, collaborative projects, and problem-solving." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content="/profile_pic.jpg" />
        <meta property="og:site_name" content="Sriram Vissakoti's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Sriram Vissakoti | AI & Full Stack Developer" />
        <meta name="twitter:description" content="Discover Sriram Vissakoti's passion for AI, web development, and creating meaningful digital experiences." />
        <meta name="twitter:image" content="/profile_pic.jpg" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image (Left) */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
          <BlurImage
            src="/profile_pic.jpg"
            alt="Sriram Vissakoti"
            className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m Sriram Vissakoti, a passionate and curious engineering student pursuing a Bachelor’s degree in Artificial Intelligence and Data Science at Vignan Institute of Technology and Science, Hyderabad. I’m deeply driven by the idea of using technology to solve real-world problems and create meaningful digital experiences.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With a strong foundation in C/C++, Java, Python, and web technologies (HTML, CSS, JavaScript), I enjoy building efficient, scalable, and user-friendly applications. My recent project, the Placement Cell Management System, strengthened my skills in full-stack development, database integration, and responsive UI/UX design using Tailwind CSS.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I thrive in collaborative environments—whether it’s hackathons, team projects, or open-source contributions—and I take pride in continuously learning, experimenting, and pushing my creative and technical limits.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Beyond coding, I’m also developing my problem-solving mindset and leadership skills by actively engaging in competitive coding and tech events. I believe in learning by doing and aim to grow into a well-rounded software engineer capable of leading impactful projects.
          </p>
          <p className="text-lg leading-relaxed">
            Currently, I’m exploring new opportunities to apply my knowledge in AI-driven solutions and web development, while staying open to mentorship and real-world challenges that help me evolve both technically and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;