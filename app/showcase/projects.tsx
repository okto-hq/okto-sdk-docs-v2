import { ReactLogo, FlutterLogo, ApiLogo, NextJSLogo } from './icons';

export const showcases = [
  {
    image: require("@/public/images/projects/buy_me_a_coffee.png"),
    name: "Buy Me A Coffee",
    url: "https://okto-sdk-test-buy-me-a-coffee.vercel.app/",
    githubUrl:
      "https://github.com/Deepakraja03/Okto-SDK-Test-BuyMeACoffee/tree/master",
    sdk: <NextJSLogo />,
    sdkName: "NextJS",
    description:
      'A decentralized tipping platform powered by Okto that enables users to support content creators using cryptocurrency transfers through the Okto SDK V2. This application simplifies the process of sending token-based "tips" similar to the traditional "Buy Me a Coffee" concept but leveraging blockchain technology.',
    videoUrl:
      "https://drive.google.com/file/d/1l8LSgYqv-7FvhPusU8rQvMyYkzkew1qB/preview",
    note: "Okto sample project",
  },
  {
    image: require("@/public/images/projects/Cyspace.png"),
    name: "CySpace",
    url: "https://devfolio.co/projects/cyspace-2cf9",
    githubUrl: "https://github.com/dynamicduho/cyspace",
    sdk: <ReactLogo />,
    sdkName: "React",
    description:
      "CySpace is a Web3 social media platform that fosters meaningful connections by rewarding users based on how well they truly know their friends. It features AI-driven avatars, on-chain content storage, and interactive 3D personal spaces. Okto plays a crucial role in ensuring seamless Web3 onboarding by providing embedded wallets linked to Google Sign-in, abstracting private key management, and sponsoring gas fees. This allows users to engage with blockchain-powered social interactions effortlessly, making CySpace an intuitive bridge between Web2 and Web3.",
    videoUrl: "https://www.youtube.com/embed/lVXlzcTHaFI?si=Nd9jGftUcylpSNsh",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/Aeris.png"),
    name: "Aeris",
    url: "https://devfolio.co/projects/aeris-375a",
    githubUrl: "https://github.com/ottodevs/ethdenver-wallet",
    sdk: <NextJSLogo />,
    sdkName: "NextJS",
    description:
      "Aeris simplifies crypto asset management by providing a single, intuitive interface where users can view and control all their tokens across multiple blockchains. With Web2-like onboarding and one-click transactions, it eliminates the complexity of managing multiple wallets. Okto’s SDK plays a key role by enabling session key delegation and seamless wallet management, ensuring users can interact with Web3 effortlessly. By integrating Superchain’s chain abstraction and AI-driven interactions, Aeris transforms blockchain operations into a smooth, user-friendly experience, making crypto management as easy as any everyday application.",
    videoUrl: "",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/Inflection.png"),
    name: "Inflection",
    url: "https://devfolio.co/projects/inflection-0086",
    githubUrl: "https://github.com/nathanliow/ethdenver-2025",
    sdk: <NextJSLogo />,
    sdkName: "NextJS",
    description:
      "Inflection leverages Okto SDK's wallet management system to enable conditional allowances that only execute when campaign criteria are met—keeping assets secure in users' wallets until completion. Okto's seamless authentication flow and multi-chain support powers Inflection's three innovative campaign types (flexible donations, goal-based fundraising, and split-fixed costs), while providing frictionless onboarding through OAuth integration.",
    videoUrl: "https://www.youtube.com/embed/VHvAEbl9Dqo?si=-8BiTETvw16TbCVk",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/Xao.png"),
    name: "Xao",
    url: "https://xao-ethd.replit.app/",
    githubUrl: "https://github.com/btree-dev/xao-app",
    sdk: <ReactLogo />,
    sdkName: "React",
    description:
      "Xao integrates Okto SDK as its core infrastructure layer, delivering enhanced user experiences through streamlined blockchain interactions. Okto SDK powers Xao's social login functionality, embedded wallet creation, and smart contract execution—enabling users to engage with Web3 without technical complexity. This comprehensive integration enables Xao to provide smooth on-chain interactions with minimal implementation effort, making Okto SDK the foundation of Xao's accessible Web3 experience.",
    videoUrl: "https://www.youtube.com/embed/32i0Wjt9blo?si=cwpC6WFRFg1XVIz_",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/Creaitors.jpeg"),
    name: "CreAItors",
    url: "https://creaitors.andresmolins.dev/",
    githubUrl: "https://github.com/ethdenver-creaitors/creaitors",
    sdk: <NextJSLogo />,
    sdkName: "NextJS",
    description:
      "A comprehensive framework for developers to build truly autonomous AI Agents capable of private, decentralized inference while independently managing their computing resources. The platform integrates Okto's seamless wallet infrastructure with Google social login, eliminating onboarding friction for users regardless of their crypto experience. ",
    videoUrl: "https://www.youtube.com/embed/HBlvOJ_NZi4?si=dQw2dHrJzsKW9OaE",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/Trustdai.png"),
    name: "TrustDAI",
    url: "https://devfolio.co/projects/trustdai-da7a",
    githubUrl: "https://github.com/0xbala-k/TrustDAI",
    sdk: <ReactLogo />,
    sdkName: "React",
    description:
      "TrustDAI empowers users with true ownership and control over their AI-generated data, breaking free from platform lock-in. By leveraging EthStorage for decentralized data storage, Lit Protocol for robust encryption, and smart contract-based access management, TrustDAI creates a comprehensive system where users maintain sovereign control of their behavioral data and AI insights.",
    videoUrl:
      "https://drive.google.com/file/d/13uH0hZch6D6F1ICeEYVWh0jEsHOOF4dv/preview",
    note: "Winner at Eth Denver",
  },
  {
    image: require("@/public/images/projects/dollarjob.jpeg"),
    name: "10dollarJob",
    url: "https://devfolio.co/projects/dollarjobcom-7233",
    githubUrl: "https://devfolio.co/projects/dollarjobcom-7233",
    sdk: <NextJSLogo />,
    sdkName: "NextJS",
    description:
      "10dollarjob.com creates a revolutionary marketplace connecting people who need AI solutions with specialized AI agents built by developers. Each complex task is intelligently broken down by a master orchestrator agent into smaller jobs assigned to the most qualified specialized agents, who collaborate sequentially or in parallel to deliver comprehensive results.",
    videoUrl: "https://www.youtube.com/embed/x7oHKqdYARs?si=ZdRXchZtMnn03wSP",
    note: "Winner at Eth Denver",
  },
];