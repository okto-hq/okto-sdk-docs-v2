export interface Resource {
  name: string;
  url: string;
}

export interface Idea {
  id: number;
  title: string;
  description: string;
  expectedOutput: string[];
  estimatedTime: string;
  bountyType: string;
  category: string;
  skills: string[];
  pointsValue: string;
  details: string;
  requirements: string[];
  resources: Resource[];
}

export const ideas: Idea[] = [
  {
    id: 1,
    title: "Open Hacks: Build on Okto in Regional Hackathons",
    description: "Encourage developers at regional hackathons to build using Okto SDK. Submitted projects will be evaluated monthly, and top projects will be rewarded and featured on our showcase page.",
    expectedOutput: [
      "Functional project built using Okto SDK with good UI, deployed with a demo.",
      "Short write-up (500+ words) on how Okto was used.",
      "Submission via this form."
    ],
    estimatedTime: "Ongoing (Top projects selected on the first Tuesday of each month)",
    bountyType: "Bounty",
    category: "Community & Growth",
    skills: ["Development", "Design", "Community Building"],
    pointsValue: "Up to 50K points",
    details: "This idea encourages developers to participate in regional hackathons and build projects using the Okto SDK. It's a great way to showcase your talent and contribute to the Okto ecosystem.",
    requirements: [
      "Knowledge of Web3 development",
      "Familiarity with Okto SDK",
      "Ability to participate in hackathons"
    ],
    resources: [
      { name: "Okto SDK Documentation", url: "https://docs.okto.xyz" },
      { name: "Sample Projects", url: "https://github.com/okto-xyz/samples" }
    ]
  },
  {
    id: 2,
    title: "Gasless Transaction Demo",
    description: "Build a simple dApp using Okto's Gas Station API, allowing users to send transactions without needing gas tokens.",
    expectedOutput: [
      "Fully functional dApp showcasing gasless transactions.",
      "Step-by-step documentation and video tutorial.",
      "Open-source code on GitHub."
    ],
    estimatedTime: "3-4 weeks",
    bountyType: "Project",
    category: "DApps",
    skills: ["Development"],
    pointsValue: "Up to 100K points",
    details: "Gasless transactions are a key feature for improving user experience in Web3. This project aims to create a simple demo that showcases how developers can implement gasless transactions using Okto's Gas Station API.",
    requirements: [
      "Experience with Web3 development",
      "Understanding of gas mechanisms in blockchain",
      "JavaScript/TypeScript skills"
    ],
    resources: [
      { name: "Okto Gas Station API Docs", url: "https://docs.okto.xyz/gas-station" },
      { name: "Gasless Transaction Tutorial", url: "https://blog.okto.xyz/gasless-tx" }
    ]
  },
  {
    id: 3,
    title: "Okto Pay: Merchant Integration Plugin",
    description: "Build a WooCommerce/Shopify plugin enabling merchants to accept crypto payments via Okto.",
    expectedOutput: [
      "A working WooCommerce/Shopify plugin.",
      "User documentation & integration guide.",
      "Open-source code for further development."
    ],
    estimatedTime: "6 weeks",
    bountyType: "Project",
    category: "SDK Development",
    skills: ["Development", "Content Creation"],
    pointsValue: "Up to 300K points",
    details: "This project aims to make it easier for merchants to accept crypto payments via Okto. By creating plugins for popular e-commerce platforms like WooCommerce and Shopify, we can expand the adoption of crypto payments.",
    requirements: [
      "Experience with WooCommerce or Shopify plugin development",
      "Knowledge of Web3 payment systems",
      "PHP/JavaScript skills"
    ],
    resources: [
      { name: "Okto Payment API", url: "https://docs.okto.xyz/payments" },
      { name: "WooCommerce Developer Docs", url: "https://woocommerce.com/document/create-a-plugin/" }
    ]
  },
  {
    id: 4,
    title: "Voice-Controlled dApp Interactions",
    description: "Develop a voice assistant that enables users to interact with Okto-powered dApps using voice commands.",
    expectedOutput: [
      "AI model for voice-based Web3 interactions.",
      "Supports key functions like wallet balance, swaps, and staking.",
      "Open-source GitHub repo."
    ],
    estimatedTime: "6-8 weeks",
    bountyType: "Project",
    category: "DApps",
    skills: ["Development", "Research"],
    pointsValue: "Up to 200K points",
    details: "Voice interactions can make Web3 more accessible to users. This project involves building a voice assistant that can understand and execute common Web3 transactions via Okto's SDK.",
    requirements: [
      "Experience with voice recognition technologies",
      "Web3 development skills",
      "Knowledge of AI/ML for natural language processing"
    ],
    resources: [
      { name: "Okto Eliza Plugin Docs", url: "https://docs.okto.xyz/eliza" },
      { name: "Voice Recognition APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" }
    ]
  },
  {
    id: 5,
    title: "Interactive Okto Learning Platform",
    description: "Develop an interactive platform where developers can complete coding challenges related to Okto SDK to earn rewards.",
    expectedOutput: [
      "Platform with multiple coding challenges.",
      "Rewards system based on difficulty.",
      "Gamified leaderboard."
    ],
    estimatedTime: "8-10 weeks",
    bountyType: "Project",
    category: "Content & Education",
    skills: ["Development", "Content Creation", "Design"],
    pointsValue: "Up to 200K points",
    details: "Learning by doing is one of the most effective ways to master new skills. This platform will offer interactive coding challenges that teach developers how to use Okto SDK while earning rewards.",
    requirements: [
      "Full-stack development experience",
      "Knowledge of educational platforms",
      "Experience with gamification"
    ],
    resources: [
      { name: "Okto SDK Documentation", url: "https://docs.okto.xyz" },
      { name: "Example Coding Challenges", url: "https://github.com/okto-xyz/challenges" }
    ]
  },
  {
    id: 6,
    title: "Okto SDK Playground",
    description: "A web-based interactive playground where developers can test Okto SDK functions without setting up a local environment.",
    expectedOutput: [
      "Hosted web app where developers can interact with Okto SDK APIs.",
      "Pre-configured sandbox environment, sample transactions and wallet interactions.",
      "Open-source repo for community contributions."
    ],
    estimatedTime: "6-8 weeks",
    bountyType: "Project",
    category: "SDK Development",
    skills: ["Development", "Design"],
    pointsValue: "Up to 150K points",
    details: "This playground will allow developers to experiment with Okto SDK features directly in the browser, making it easier to learn and test without having to set up a local development environment.",
    requirements: [
      "Front-end development skills",
      "Experience with sandbox environments",
      "Knowledge of Web3 development"
    ],
    resources: [
      { name: "Okto SDK Documentation", url: "https://docs.okto.xyz" },
      { name: "Sandbox Design Patterns", url: "https://example.com/sandbox-patterns" }
    ]
  },
  {
    id: 7,
    title: "Okto CLI",
    description: "A CLI tool that allows developers to quickly instantiate an Okto template repo for JS-based platforms, similar to Create-React-App. This will streamline onboarding and setup for Okto SDK integration.",
    expectedOutput: [
      "A working CLI tool that can generate Okto-based project templates for React, Next.js, and other JS frameworks based on user input.",
      "The tool should handle dependencies, configuration, and initial setup."
    ],
    estimatedTime: "6-8 weeks",
    bountyType: "Project",
    category: "SDK Development",
    skills: ["Development"],
    pointsValue: "Up to 250K points",
    details: "This CLI tool will make it much easier for developers to get started with Okto by automating the setup process for different JavaScript frameworks. It will handle installing dependencies, configuring the SDK, and generating boilerplate code.",
    requirements: [
      "Experience building CLI tools",
      "Knowledge of JavaScript build systems",
      "Familiarity with different JS frameworks"
    ],
    resources: [
      { name: "Okto SDK Integration Guide", url: "https://docs.okto.xyz/integration" },
      { name: "CLI Design Best Practices", url: "https://example.com/cli-design" }
    ]
  }
];

export const skillCategories: readonly string[] = [
  "All Skills",
  "Development",
  "Design",
  "Content Creation",
  "Community Building",
  "Research",
];

export const projectCategories: readonly string[] = [
  "All Projects",
  "SDK Development",
  "DApps",
  "Documentation",
  "Content & Education",
  "Community & Growth",
];