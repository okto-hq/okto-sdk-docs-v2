import { Idea } from "../types";

export const ideasData: Idea[] = [
  {
    id: "project-1",
    title: "Build a New Component Library",
    type: "Project",
    description: "Create a comprehensive component library for Okto's frontend applications using React and TypeScript. This will involve designing, implementing, and documenting a set of reusable UI components that follow Okto's design guidelines.",
    skillLevel: "Intermediate",
    skillsRequired: ["React", "TypeScript", "UI/UX", "Component Design"],
    reward: 2000,
    deadline: "2025-08-01",
    timeCommitment: "Medium",
    status: "Open",
    featured: true,
    outcomes: [
      "A fully documented component library with 20+ components",
      "Interactive Storybook documentation",
      "Unit tests with high coverage",
      "Integration examples for common use cases"
    ],
    successCriteria: [
      "Components follow Okto's design system",
      "All components are responsive and accessible",
      "Code meets Okto's quality standards",
      "Documentation is comprehensive and clear"
    ],
    prerequisites: [
      "Experience with React and TypeScript",
      "Understanding of component design principles",
      "Familiarity with frontend testing frameworks"
    ],
    timeline: [
      {
        milestone: "Initial Design",
        date: "2025-06-15",
        description: "Complete design specifications for all components"
      },
      {
        milestone: "First Delivery",
        date: "2025-07-01",
        description: "Deliver first set of 10 components with documentation"
      },
      {
        milestone: "Final Delivery",
        date: "2025-08-01",
        description: "Complete all components, tests, and documentation"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/submit-proposal"
  },
  {
    id: "bounty-1",
    title: "Implement Dark Mode for Documentation",
    type: "Bounty",
    description: "Implement a dark mode toggle and styling for the Okto documentation website. This should include all necessary CSS changes and respect user preferences via system settings.",
    skillLevel: "Beginner",
    skillsRequired: ["CSS", "JavaScript", "Web Development"],
    reward: 500,
    deadline: "2025-07-15",
    timeCommitment: "Low",
    status: "Open",
    featured: true,
    outcomes: [
      "Fully functional dark mode toggle",
      "Dark theme CSS implementation",
      "System preference detection",
      "User preference persistence"
    ],
    successCriteria: [
      "Dark mode correctly applies to all documentation pages",
      "Toggle works without page refresh",
      "Respects system preferences by default",
      "Maintains good contrast ratios for accessibility"
    ],
    prerequisites: [
      "Basic understanding of CSS and JavaScript",
      "Familiarity with web accessibility standards"
    ],
    timeline: [
      {
        milestone: "Submission Deadline",
        date: "2025-07-15",
        description: "Complete implementation must be submitted by this date"
      },
      {
        milestone: "Review Period",
        date: "2025-07-20",
        description: "All submissions will be reviewed by this date"
      },
      {
        milestone: "Winner Announcement",
        date: "2025-07-25",
        description: "Winner will be announced and paid"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/start-bounty"
  },
  {
    id: "project-2",
    title: "Create Interactive Tutorial System",
    type: "Project",
    description: "Design and implement an interactive tutorial system that helps new users learn Okto through guided, hands-on experiences. The system should be embeddable in our documentation and support multiple learning paths.",
    skillLevel: "Advanced",
    skillsRequired: ["JavaScript", "React", "UX Design", "Technical Writing"],
    reward: 2500,
    deadline: "2025-08-15",
    timeCommitment: "High",
    status: "Open",
    featured: false,
    outcomes: [
      "Interactive tutorial framework",
      "At least 5 complete tutorial experiences",
      "Integration with documentation",
      "Analytics for tracking completion rates"
    ],
    successCriteria: [
      "Tutorials are intuitive and engaging",
      "System is extendable for adding new tutorials",
      "Code is well-documented and maintainable",
      "User testing shows high completion rates"
    ],
    prerequisites: [
      "Strong experience with frontend development",
      "Understanding of educational design principles",
      "Familiarity with Okto's core features"
    ],
    timeline: [
      {
        milestone: "Framework Design",
        date: "2025-06-30",
        description: "Complete design and architecture of the tutorial system"
      },
      {
        milestone: "First Tutorial Set",
        date: "2025-07-31",
        description: "Deliver first 2 tutorials with framework implementation"
      },
      {
        milestone: "Final Delivery",
        date: "2025-08-15",
        description: "Complete all tutorials and documentation"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/submit-proposal"
  },
  {
    id: "bounty-2",
    title: "Create Performance Dashboard Widget",
    type: "Bounty",
    description: "Build a dashboard widget that displays real-time performance metrics for Okto deployments, including response times, error rates, and resource usage.",
    skillLevel: "Intermediate",
    skillsRequired: ["JavaScript", "Data Visualization", "API Integration"],
    reward: 800,
    deadline: "2025-07-30",
    timeCommitment: "Medium",
    status: "Open",
    featured: false,
    outcomes: [
      "Real-time performance metrics dashboard widget",
      "Interactive charts and visualizations",
      "Configurable thresholds and alerts",
      "Documentation for integration"
    ],
    successCriteria: [
      "Widget updates in real-time",
      "Visualizations are clear and informative",
      "Code is optimized for performance",
      "Design matches Okto's UI guidelines"
    ],
    prerequisites: [
      "Experience with JavaScript and data visualization libraries",
      "Understanding of performance metrics and monitoring",
      "Ability to work with RESTful APIs"
    ],
    timeline: [
      {
        milestone: "Submission Deadline",
        date: "2025-07-30",
        description: "Complete widget must be submitted by this date"
      },
      {
        milestone: "Review Period",
        date: "2025-08-10",
        description: "All submissions will be reviewed by this date"
      },
      {
        milestone: "Winner Announcement",
        date: "2025-08-15",
        description: "Winner will be announced and paid"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/start-bounty"
  },
  {
    id: "project-3",
    title: "Develop CLI Tool Extensions",
    type: "Project",
    description: "Extend Okto's CLI tool with new features that improve developer productivity, such as scaffolding, code generation, environment management, and integration with CI/CD pipelines.",
    skillLevel: "Advanced",
    skillsRequired: ["Node.js", "CLI Development", "DevOps", "Go (optional)"],
    reward: 3000,
    deadline: "2025-08-30",
    timeCommitment: "High",
    status: "Open",
    featured: false,
    outcomes: [
      "At least 5 new CLI features or commands",
      "Comprehensive documentation and examples",
      "Unit and integration tests",
      "Performance benchmarks"
    ],
    successCriteria: [
      "CLI extensions are intuitive and developer-friendly",
      "Features demonstrably improve workflow efficiency",
      "Code is well-structured and maintainable",
      "Documentation is clear and complete"
    ],
    prerequisites: [
      "Experience building command line tools",
      "Strong knowledge of Node.js or Go",
      "Understanding of developer workflows and CI/CD"
    ],
    timeline: [
      {
        milestone: "Proposal and Planning",
        date: "2025-06-30",
        description: "Detailed proposal for CLI extensions and implementation plan"
      },
      {
        milestone: "Initial Implementation",
        date: "2025-07-31",
        description: "First set of CLI features with documentation"
      },
      {
        milestone: "Final Delivery",
        date: "2025-08-30",
        description: "Complete all features, tests, and documentation"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/submit-proposal"
  },
  {
    id: "bounty-3",
    title: "Create Tutorial Videos for Beginners",
    type: "Bounty",
    description: "Produce a series of high-quality video tutorials that walk new users through getting started with Okto, from installation to building their first application.",
    skillLevel: "Beginner",
    skillsRequired: ["Video Production", "Technical Communication", "Basic Okto Knowledge"],
    reward: 1200,
    deadline: "2025-07-20",
    timeCommitment: "Medium",
    status: "Open",
    featured: false,
    outcomes: [
      "5-7 tutorial videos (3-10 minutes each)",
      "Clear, step-by-step instructions",
      "High-quality audio and visuals",
      "Accompanying text summaries"
    ],
    successCriteria: [
      "Videos are clear, concise, and engaging",
      "Content is technically accurate",
      "Production quality meets professional standards",
      "Concepts are explained in an accessible way"
    ],
    prerequisites: [
      "Experience with video production and editing",
      "Good communication skills and clear speaking voice",
      "Basic understanding of Okto or similar tools"
    ],
    timeline: [
      {
        milestone: "Script Approval",
        date: "2025-06-25",
        description: "Submit scripts for review and approval"
      },
      {
        milestone: "Submission Deadline",
        date: "2025-07-20",
        description: "Complete video series must be submitted by this date"
      },
      {
        milestone: "Review Period",
        date: "2025-07-30",
        description: "All submissions will be reviewed by this date"
      }
    ],
    mentor: {
      name: "Ovia Seshadri",
      title: "Head od DevRel",
      contactHours: "Tuesdays and Thursdays, 2-4pm ",
      email: "ovia.seshadri@coindcx.com"
    },
    applicationUrl: "/summer-of-abstraction/start-bounty"
  }
];