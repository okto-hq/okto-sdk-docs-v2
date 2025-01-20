
export default [
  {
    "content": "![Building with Okto SDK](/images/building_the_future_with_okto_sdk_blog_cover.png)\n\n<em><strong>TL;DR:</strong> Okto SDK enables developers to build Web3 apps with Web2-like ease, offering features like easy authentication, simple transactions, and cross-chain interoperability. Whether you're creating consumer apps, DeFi protocols, or blockchain games, Okto SDK accelerates development and enhances user experiences. This blog covers what makes Okto special, real-world use cases, and how to get started in 3 simple steps.</em>\n\nBlockchain technology is revolutionizing the way we interact with the digital world, but let’s face it—it can be complicated. For developers, integrating blockchain features into apps often means dealing with complex protocols, managing multiple chains, and handling tricky user onboarding processes. For users, it can mean navigating confusing wallet setups, remembering seed phrases, and dealing with clunky transaction flows. Enter **Okto SDK**, a game-changing toolkit designed to make blockchain development and user experiences as simple as using any regular app.\n\n---\n\n## What is Okto SDK?\n\n**Okto SDK** is a powerful toolkit that acts as a bridge between traditional web development and blockchain technology. It’s designed to help developers build blockchain-enabled applications without needing to dive deep into the complexities of blockchain networks. Whether you’re building a Web2 app that’s dipping its toes into Web3 or a full-fledged decentralized application (dApp), Okto SDK makes the process smoother and faster.\n\nAt its core, Okto SDK is a **chain abstraction layer**. This means it handles all the heavy lifting of blockchain operations—like wallet management, transaction handling, and multi-chain support—so developers can focus on creating great user experiences. For end users, this translates to seamless, Web2-like interactions, such as single-click transactions and easy cross-chain asset management.\n\n---\n\n## What Makes Okto SDK Stand Out?\n\n### 1. Easy Authentication\n\nOne of the biggest hurdles in blockchain adoption is user onboarding. Traditional blockchain apps require users to install browser extensions, manage private keys, and remember seed phrases. Okto changes this by offering familiar authentication methods like **Google OAuth**, **Email OTP**, and **Phone OTP**.\n\nBehind the scenes, Okto uses **Multi-Party Computation (MPC)** to securely create and manage user wallets. This means users can log in with their preferred method, and Okto takes care of the rest—no seed phrases, no complicated setups, all while ensuring secure handling and maintenance of user wallets. The result? A smooth onboarding experience that feels just like logging into any regular app.\n\n### 2. Simple Transactions\n\nBlockchain transactions can be a headache for developers. From gas fee estimations to handling different blockchain ecosystems, there’s a lot that can go wrong. Okto simplifies this process by abstracting away the complexity.\n\nFor example, if your app needs to send tokens or interact with a smart contract, you simply tell Okto what you want to do, and it handles the rest. It manages payload creations based on the ecosystem you are interacting with, estimating gas fees in a volatile environment, retries failed transactions, and monitors transaction statuses—all behind the scenes. This allows developers to focus on building features rather than wrestling with blockchain intricacies.\n\n### 3. Multi-Chain Support\n\nMany blockchain apps are limited to a single chain because supporting multiple ecosystems is complex and time-consuming. Okto changes this by providing a unified interface for interacting with multiple blockchains. Whether your app is on **Ethereum**, **Polygon**, **Aptos**, or another chain, Okto makes it easy to manage assets and transactions across networks.\n\nThis opens up exciting possibilities, like seamless cross-chain asset transfers, unified token balances, and interactions with multiple protocols—all without needing to rewrite your app for each chain.\n\n---\n\n## Real-World Use Cases for Okto SDK\n\nNow that we’ve covered what Okto SDK can do, let’s look at some practical ways you can use it to build amazing applications.\n\n### 1. Consumer Apps with Web3 Features\n\nImagine building a consumer app that feels as simple as Instagram or TikTok but has blockchain-powered features like token rewards or NFT collectibles. With Okto, you can onboard users with familiar logins (like Google or email) and automatically create wallets for them. This makes it easy to integrate features like token gating, NFT-based memberships, or even crypto payments—all without overwhelming your users.\n\n### 2. DeFi Protocols with Mobile-Friendly Interfaces\n\nDecentralized finance (DeFi) is one of the most exciting areas of blockchain, but it’s often held back by complex user interfaces. Okto makes it easy to build mobile-friendly DeFi apps where users can stake, borrow, or trade assets with just a few taps. Okto allows the option of sponsoring gas fees, transaction retries, and multi-chain interactions, so your users can focus on managing their finances, not wrestling with the app or paying additional charges.\n\n### 3. Blockchain-Based Gaming\n\nBlockchain gaming is booming, with players owning in-game assets like NFTs and tokens. Okto makes it easy to build games where players can securely manage their assets, trade them across chains, and even use them in multiple games with Okto’s interoperable wallets. With Okto’s MPC-backed wallets, players don’t have to worry about losing their valuable items, and developers can focus on creating engaging gameplay.\n\n### 4. Multi-Chain Super Apps\n\nWhat if you could build an app that lets users manage assets, NFTs, and transactions across multiple blockchains in one place? With Okto, this is possible. You can create a unified dashboard that aggregates user balances, handles cross-chain swaps, and even automates complex processes like yield harvesting and rebalancing.\n\n### 5. Chatbots for DeFi and Crypto\n\nChatbots are becoming increasingly popular for managing crypto and DeFi activities. With Okto, you can build bots that handle tasks like trading, staking, or fetching user balances—all within popular messaging apps like Telegram or Discord. Okto’s APIs make it easy to integrate blockchain functionality into your bot, so users can manage their crypto without leaving their favorite chat app.\n\n---\n\n## Why Developers Love Okto SDK\n\nOkto SDK isn’t just a tool—it’s a developer’s best friend. It offers:\n\n- **Faster Development:** By handling blockchain complexities, Okto lets developers focus on building features, not boilerplate code. This can cut development time by up to 90%.\n- **Simplified Multi-Chain Support:** Okto’s unified interface makes it easy to build apps that work across multiple blockchains.\n- **Better User Experiences:** With Okto, you can create apps that feel as simple and intuitive as any Web2 app, making it easier to onboard new users.\n- **Robust Security:** Okto’s MPC-based wallets ensure user accounts are secure without requiring users to manage private keys or seed phrases.\n\n---\n\n## Getting Started with Okto SDK\n\nYou can start building with Okto in just **3 simple steps**:\n\n1. **Get Your App Secret (API Key):**  \n   Go to the [Okto Dashboard](https://dashboard.okto.tech/login) and grab your **App Secret**. This key is essential for authenticating your API requests and integrating Okto’s features into your app.\n\n2. **Enable Chains and Tokens:**  \n   On the dashboard, enable the **chains and tokens** you want to build within your dApp. This ensures your app can interact seamlessly with the supported blockchain networks.\n\n3. **Choose Your Platform:**  \n   Select a platform for your application from the various SDKs we offer:  \n   - **[React SDK](https://docs.okto.tech/docs/react-sdk/getting-started/new-okto-react-setup):** For web applications built with React.  \n   - **[React Native SDK](https://docs.okto.tech/docs/react-native-sdk/getting-started/new-okto-react-native-setup):** For mobile apps using React Native.  \n   - **[Flutter SDK](https://docs.okto.tech/docs/flutter-sdk/getting-started/new-okto-flutter-setup):** For cross-platform mobile development with Flutter.  \n   - **[Unity SDK](https://docs.okto.tech/docs/unity-sdk):** For game developers using Unity.  \n   \n   Alternatively, you can directly invoke our **[APIs](https://docs.okto.tech/api-docs)** for more flexibility.\n\n---\n\n### For More Information and Detailed Steps\n\n1. **Check Out the Getting Started Blog:**  \n   For a detailed step-by-step guide, read the [Getting Started with Okto SDK blog](https://docs.okto.tech/blogs/getting-started-with-okto). It covers everything from setting up your Okto App Secret to integrating authentication methods and choosing the right SDK for your project.\n\n2. **Explore the Docs:**  \n   Dive into the [SDK Overview](https://docs.okto.tech/docs/sdk-overview) and [API Reference](https://docs.okto.tech/api-docs) to learn more about Okto’s features and how to use them.\n\n3. **Build a Proof of Concept:**  \n   Use one of Okto’s [quickstart templates](https://github.com/okto-hq/okto-sdk-react-template-app) to experiment with the SDK and see how it works.\n\n4. **Scale Your App:**  \n   Once you’ve built a basic prototype, you can add more features, like **NFT minting**, **cross-chain swaps**, or **advanced transaction flows**.\n\n---\n\n## Conclusion\n\nBlockchain technology holds immense potential, but its complexity has been a barrier to widespread adoption. Okto SDK changes that by making blockchain development accessible and user-friendly. Whether you’re building a consumer app, a DeFi protocol, or a blockchain-based game, Okto provides the tools you need to create seamless, secure, and scalable applications.\n\nSo, what are you waiting for? Dive into the world of Web3 with Okto SDK and start building the future today. Happy coding! 🚀",
    "title": "Building the Future with Okto SDK: Simplifying Blockchain for Everyone",
    "description": "Learn how Okto SDK simplifies blockchain development, enabling developers to build powerful Web3 applications with ease.",
    "_meta": {
      "filePath": "building-the-future-with-okto-sdk.mdx",
      "fileName": "building-the-future-with-okto-sdk.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "building-the-future-with-okto-sdk"
    },
    "toc": [
      {
        "title": "What is Okto SDK?",
        "url": "#what-is-okto-sdk",
        "depth": 2
      },
      {
        "title": "What Makes Okto SDK Stand Out?",
        "url": "#what-makes-okto-sdk-stand-out",
        "depth": 2
      },
      {
        "title": "1. Easy Authentication",
        "url": "#1-easy-authentication",
        "depth": 3
      },
      {
        "title": "2. Simple Transactions",
        "url": "#2-simple-transactions",
        "depth": 3
      },
      {
        "title": "3. Multi-Chain Support",
        "url": "#3-multi-chain-support",
        "depth": 3
      },
      {
        "title": "Real-World Use Cases for Okto SDK",
        "url": "#real-world-use-cases-for-okto-sdk",
        "depth": 2
      },
      {
        "title": "1. Consumer Apps with Web3 Features",
        "url": "#1-consumer-apps-with-web3-features",
        "depth": 3
      },
      {
        "title": "2. DeFi Protocols with Mobile-Friendly Interfaces",
        "url": "#2-defi-protocols-with-mobile-friendly-interfaces",
        "depth": 3
      },
      {
        "title": "3. Blockchain-Based Gaming",
        "url": "#3-blockchain-based-gaming",
        "depth": 3
      },
      {
        "title": "4. Multi-Chain Super Apps",
        "url": "#4-multi-chain-super-apps",
        "depth": 3
      },
      {
        "title": "5. Chatbots for DeFi and Crypto",
        "url": "#5-chatbots-for-defi-and-crypto",
        "depth": 3
      },
      {
        "title": "Why Developers Love Okto SDK",
        "url": "#why-developers-love-okto-sdk",
        "depth": 2
      },
      {
        "title": "Getting Started with Okto SDK",
        "url": "#getting-started-with-okto-sdk",
        "depth": 2
      },
      {
        "title": "For More Information and Detailed Steps",
        "url": "#for-more-information-and-detailed-steps",
        "depth": 3
      },
      {
        "title": "Conclusion",
        "url": "#conclusion",
        "depth": 2
      }
    ],
    "structuredData": {
      "contents": [
        {
          "heading": "",
          "content": "Blockchain technology is revolutionizing the way we interact with the digital world, but let’s face it—it can be complicated. For developers, integrating blockchain features into apps often means dealing with complex protocols, managing multiple chains, and handling tricky user onboarding processes. For users, it can mean navigating confusing wallet setups, remembering seed phrases, and dealing with clunky transaction flows. Enter Okto SDK, a game-changing toolkit designed to make blockchain development and user experiences as simple as using any regular app."
        },
        {
          "heading": "what-is-okto-sdk",
          "content": "Okto SDK is a powerful toolkit that acts as a bridge between traditional web development and blockchain technology. It’s designed to help developers build blockchain-enabled applications without needing to dive deep into the complexities of blockchain networks. Whether you’re building a Web2 app that’s dipping its toes into Web3 or a full-fledged decentralized application (dApp), Okto SDK makes the process smoother and faster."
        },
        {
          "heading": "what-is-okto-sdk",
          "content": "At its core, Okto SDK is a chain abstraction layer. This means it handles all the heavy lifting of blockchain operations—like wallet management, transaction handling, and multi-chain support—so developers can focus on creating great user experiences. For end users, this translates to seamless, Web2-like interactions, such as single-click transactions and easy cross-chain asset management."
        },
        {
          "heading": "1-easy-authentication",
          "content": "One of the biggest hurdles in blockchain adoption is user onboarding. Traditional blockchain apps require users to install browser extensions, manage private keys, and remember seed phrases. Okto changes this by offering familiar authentication methods like Google OAuth, Email OTP, and Phone OTP."
        },
        {
          "heading": "1-easy-authentication",
          "content": "Behind the scenes, Okto uses Multi-Party Computation (MPC) to securely create and manage user wallets. This means users can log in with their preferred method, and Okto takes care of the rest—no seed phrases, no complicated setups, all while ensuring secure handling and maintenance of user wallets. The result? A smooth onboarding experience that feels just like logging into any regular app."
        },
        {
          "heading": "2-simple-transactions",
          "content": "Blockchain transactions can be a headache for developers. From gas fee estimations to handling different blockchain ecosystems, there’s a lot that can go wrong. Okto simplifies this process by abstracting away the complexity."
        },
        {
          "heading": "2-simple-transactions",
          "content": "For example, if your app needs to send tokens or interact with a smart contract, you simply tell Okto what you want to do, and it handles the rest. It manages payload creations based on the ecosystem you are interacting with, estimating gas fees in a volatile environment, retries failed transactions, and monitors transaction statuses—all behind the scenes. This allows developers to focus on building features rather than wrestling with blockchain intricacies."
        },
        {
          "heading": "3-multi-chain-support",
          "content": "Many blockchain apps are limited to a single chain because supporting multiple ecosystems is complex and time-consuming. Okto changes this by providing a unified interface for interacting with multiple blockchains. Whether your app is on Ethereum, Polygon, Aptos, or another chain, Okto makes it easy to manage assets and transactions across networks."
        },
        {
          "heading": "3-multi-chain-support",
          "content": "This opens up exciting possibilities, like seamless cross-chain asset transfers, unified token balances, and interactions with multiple protocols—all without needing to rewrite your app for each chain."
        },
        {
          "heading": "real-world-use-cases-for-okto-sdk",
          "content": "Now that we’ve covered what Okto SDK can do, let’s look at some practical ways you can use it to build amazing applications."
        },
        {
          "heading": "1-consumer-apps-with-web3-features",
          "content": "Imagine building a consumer app that feels as simple as Instagram or TikTok but has blockchain-powered features like token rewards or NFT collectibles. With Okto, you can onboard users with familiar logins (like Google or email) and automatically create wallets for them. This makes it easy to integrate features like token gating, NFT-based memberships, or even crypto payments—all without overwhelming your users."
        },
        {
          "heading": "2-defi-protocols-with-mobile-friendly-interfaces",
          "content": "Decentralized finance (DeFi) is one of the most exciting areas of blockchain, but it’s often held back by complex user interfaces. Okto makes it easy to build mobile-friendly DeFi apps where users can stake, borrow, or trade assets with just a few taps. Okto allows the option of sponsoring gas fees, transaction retries, and multi-chain interactions, so your users can focus on managing their finances, not wrestling with the app or paying additional charges."
        },
        {
          "heading": "3-blockchain-based-gaming",
          "content": "Blockchain gaming is booming, with players owning in-game assets like NFTs and tokens. Okto makes it easy to build games where players can securely manage their assets, trade them across chains, and even use them in multiple games with Okto’s interoperable wallets. With Okto’s MPC-backed wallets, players don’t have to worry about losing their valuable items, and developers can focus on creating engaging gameplay."
        },
        {
          "heading": "4-multi-chain-super-apps",
          "content": "What if you could build an app that lets users manage assets, NFTs, and transactions across multiple blockchains in one place? With Okto, this is possible. You can create a unified dashboard that aggregates user balances, handles cross-chain swaps, and even automates complex processes like yield harvesting and rebalancing."
        },
        {
          "heading": "5-chatbots-for-defi-and-crypto",
          "content": "Chatbots are becoming increasingly popular for managing crypto and DeFi activities. With Okto, you can build bots that handle tasks like trading, staking, or fetching user balances—all within popular messaging apps like Telegram or Discord. Okto’s APIs make it easy to integrate blockchain functionality into your bot, so users can manage their crypto without leaving their favorite chat app."
        },
        {
          "heading": "why-developers-love-okto-sdk",
          "content": "Okto SDK isn’t just a tool—it’s a developer’s best friend. It offers:"
        },
        {
          "heading": "why-developers-love-okto-sdk",
          "content": "Faster Development: By handling blockchain complexities, Okto lets developers focus on building features, not boilerplate code. This can cut development time by up to 90%."
        },
        {
          "heading": "why-developers-love-okto-sdk",
          "content": "Simplified Multi-Chain Support: Okto’s unified interface makes it easy to build apps that work across multiple blockchains."
        },
        {
          "heading": "why-developers-love-okto-sdk",
          "content": "Better User Experiences: With Okto, you can create apps that feel as simple and intuitive as any Web2 app, making it easier to onboard new users."
        },
        {
          "heading": "why-developers-love-okto-sdk",
          "content": "Robust Security: Okto’s MPC-based wallets ensure user accounts are secure without requiring users to manage private keys or seed phrases."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "You can start building with Okto in just 3 simple steps:"
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Get Your App Secret (API Key):Go to the Okto Dashboard and grab your App Secret. This key is essential for authenticating your API requests and integrating Okto’s features into your app."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Enable Chains and Tokens:On the dashboard, enable the chains and tokens you want to build within your dApp. This ensures your app can interact seamlessly with the supported blockchain networks."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Choose Your Platform:Select a platform for your application from the various SDKs we offer:"
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "React SDK: For web applications built with React."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "React Native SDK: For mobile apps using React Native."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Flutter SDK: For cross-platform mobile development with Flutter."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Unity SDK: For game developers using Unity."
        },
        {
          "heading": "getting-started-with-okto-sdk",
          "content": "Alternatively, you can directly invoke our APIs for more flexibility."
        },
        {
          "heading": "for-more-information-and-detailed-steps",
          "content": "Check Out the Getting Started Blog:For a detailed step-by-step guide, read the Getting Started with Okto SDK blog. It covers everything from setting up your Okto App Secret to integrating authentication methods and choosing the right SDK for your project."
        },
        {
          "heading": "for-more-information-and-detailed-steps",
          "content": "Explore the Docs:Dive into the SDK Overview and API Reference to learn more about Okto’s features and how to use them."
        },
        {
          "heading": "for-more-information-and-detailed-steps",
          "content": "Build a Proof of Concept:Use one of Okto’s quickstart templates to experiment with the SDK and see how it works."
        },
        {
          "heading": "for-more-information-and-detailed-steps",
          "content": "Scale Your App:Once you’ve built a basic prototype, you can add more features, like NFT minting, cross-chain swaps, or advanced transaction flows."
        },
        {
          "heading": "conclusion",
          "content": "Blockchain technology holds immense potential, but its complexity has been a barrier to widespread adoption. Okto SDK changes that by making blockchain development accessible and user-friendly. Whether you’re building a consumer app, a DeFi protocol, or a blockchain-based game, Okto provides the tools you need to create seamless, secure, and scalable applications."
        },
        {
          "heading": "conclusion",
          "content": "So, what are you waiting for? Dive into the world of Web3 with Okto SDK and start building the future today. Happy coding! 🚀"
        }
      ],
      "headings": [
        {
          "id": "what-is-okto-sdk",
          "content": "What is Okto SDK?"
        },
        {
          "id": "what-makes-okto-sdk-stand-out",
          "content": "What Makes Okto SDK Stand Out?"
        },
        {
          "id": "1-easy-authentication",
          "content": "1. Easy Authentication"
        },
        {
          "id": "2-simple-transactions",
          "content": "2. Simple Transactions"
        },
        {
          "id": "3-multi-chain-support",
          "content": "3. Multi-Chain Support"
        },
        {
          "id": "real-world-use-cases-for-okto-sdk",
          "content": "Real-World Use Cases for Okto SDK"
        },
        {
          "id": "1-consumer-apps-with-web3-features",
          "content": "1. Consumer Apps with Web3 Features"
        },
        {
          "id": "2-defi-protocols-with-mobile-friendly-interfaces",
          "content": "2. DeFi Protocols with Mobile-Friendly Interfaces"
        },
        {
          "id": "3-blockchain-based-gaming",
          "content": "3. Blockchain-Based Gaming"
        },
        {
          "id": "4-multi-chain-super-apps",
          "content": "4. Multi-Chain Super Apps"
        },
        {
          "id": "5-chatbots-for-defi-and-crypto",
          "content": "5. Chatbots for DeFi and Crypto"
        },
        {
          "id": "why-developers-love-okto-sdk",
          "content": "Why Developers Love Okto SDK"
        },
        {
          "id": "getting-started-with-okto-sdk",
          "content": "Getting Started with Okto SDK"
        },
        {
          "id": "for-more-information-and-detailed-steps",
          "content": "For More Information and Detailed Steps"
        },
        {
          "id": "conclusion",
          "content": "Conclusion"
        }
      ]
    },
    "body": "var Component=(()=>{var p=Object.create;var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var b=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),f=(n,e)=>{for(var i in e)o(n,i,{get:e[i],enumerable:!0})},r=(n,e,i,s)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let a of g(e))!k.call(n,a)&&a!==i&&o(n,a,{get:()=>e[a],enumerable:!(s=u(e,a))||s.enumerable});return n};var y=(n,e,i)=>(i=n!=null?p(m(n)):{},r(e||!n||!n.__esModule?o(i,\"default\",{value:n,enumerable:!0}):i,n)),w=n=>r(o({},\"__esModule\",{value:!0}),n);var c=b((D,l)=>{l.exports=_jsx_runtime});var v={};f(v,{default:()=>d});var t=y(c());function h(n){let e={a:\"a\",br:\"br\",h2:\"h2\",h3:\"h3\",hr:\"hr\",img:\"img\",li:\"li\",ol:\"ol\",p:\"p\",strong:\"strong\",ul:\"ul\",...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:\"/images/building_the_future_with_okto_sdk_blog_cover.png\",alt:\"Building with Okto SDK\"})}),`\n`,(0,t.jsxs)(\"em\",{children:[(0,t.jsx)(\"strong\",{children:\"TL;DR:\"}),\" Okto SDK enables developers to build Web3 apps with Web2-like ease, offering features like easy authentication, simple transactions, and cross-chain interoperability. Whether you're creating consumer apps, DeFi protocols, or blockchain games, Okto SDK accelerates development and enhances user experiences. This blog covers what makes Okto special, real-world use cases, and how to get started in 3 simple steps.\"]}),`\n`,(0,t.jsxs)(e.p,{children:[\"Blockchain technology is revolutionizing the way we interact with the digital world, but let\\u2019s face it\\u2014it can be complicated. For developers, integrating blockchain features into apps often means dealing with complex protocols, managing multiple chains, and handling tricky user onboarding processes. For users, it can mean navigating confusing wallet setups, remembering seed phrases, and dealing with clunky transaction flows. Enter \",(0,t.jsx)(e.strong,{children:\"Okto SDK\"}),\", a game-changing toolkit designed to make blockchain development and user experiences as simple as using any regular app.\"]}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"what-is-okto-sdk\",children:\"What is Okto SDK?\"}),`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Okto SDK\"}),\" is a powerful toolkit that acts as a bridge between traditional web development and blockchain technology. It\\u2019s designed to help developers build blockchain-enabled applications without needing to dive deep into the complexities of blockchain networks. Whether you\\u2019re building a Web2 app that\\u2019s dipping its toes into Web3 or a full-fledged decentralized application (dApp), Okto SDK makes the process smoother and faster.\"]}),`\n`,(0,t.jsxs)(e.p,{children:[\"At its core, Okto SDK is a \",(0,t.jsx)(e.strong,{children:\"chain abstraction layer\"}),\". This means it handles all the heavy lifting of blockchain operations\\u2014like wallet management, transaction handling, and multi-chain support\\u2014so developers can focus on creating great user experiences. For end users, this translates to seamless, Web2-like interactions, such as single-click transactions and easy cross-chain asset management.\"]}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"what-makes-okto-sdk-stand-out\",children:\"What Makes Okto SDK Stand Out?\"}),`\n`,(0,t.jsx)(e.h3,{id:\"1-easy-authentication\",children:\"1. Easy Authentication\"}),`\n`,(0,t.jsxs)(e.p,{children:[\"One of the biggest hurdles in blockchain adoption is user onboarding. Traditional blockchain apps require users to install browser extensions, manage private keys, and remember seed phrases. Okto changes this by offering familiar authentication methods like \",(0,t.jsx)(e.strong,{children:\"Google OAuth\"}),\", \",(0,t.jsx)(e.strong,{children:\"Email OTP\"}),\", and \",(0,t.jsx)(e.strong,{children:\"Phone OTP\"}),\".\"]}),`\n`,(0,t.jsxs)(e.p,{children:[\"Behind the scenes, Okto uses \",(0,t.jsx)(e.strong,{children:\"Multi-Party Computation (MPC)\"}),\" to securely create and manage user wallets. This means users can log in with their preferred method, and Okto takes care of the rest\\u2014no seed phrases, no complicated setups, all while ensuring secure handling and maintenance of user wallets. The result? A smooth onboarding experience that feels just like logging into any regular app.\"]}),`\n`,(0,t.jsx)(e.h3,{id:\"2-simple-transactions\",children:\"2. Simple Transactions\"}),`\n`,(0,t.jsx)(e.p,{children:\"Blockchain transactions can be a headache for developers. From gas fee estimations to handling different blockchain ecosystems, there\\u2019s a lot that can go wrong. Okto simplifies this process by abstracting away the complexity.\"}),`\n`,(0,t.jsx)(e.p,{children:\"For example, if your app needs to send tokens or interact with a smart contract, you simply tell Okto what you want to do, and it handles the rest. It manages payload creations based on the ecosystem you are interacting with, estimating gas fees in a volatile environment, retries failed transactions, and monitors transaction statuses\\u2014all behind the scenes. This allows developers to focus on building features rather than wrestling with blockchain intricacies.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"3-multi-chain-support\",children:\"3. Multi-Chain Support\"}),`\n`,(0,t.jsxs)(e.p,{children:[\"Many blockchain apps are limited to a single chain because supporting multiple ecosystems is complex and time-consuming. Okto changes this by providing a unified interface for interacting with multiple blockchains. Whether your app is on \",(0,t.jsx)(e.strong,{children:\"Ethereum\"}),\", \",(0,t.jsx)(e.strong,{children:\"Polygon\"}),\", \",(0,t.jsx)(e.strong,{children:\"Aptos\"}),\", or another chain, Okto makes it easy to manage assets and transactions across networks.\"]}),`\n`,(0,t.jsx)(e.p,{children:\"This opens up exciting possibilities, like seamless cross-chain asset transfers, unified token balances, and interactions with multiple protocols\\u2014all without needing to rewrite your app for each chain.\"}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"real-world-use-cases-for-okto-sdk\",children:\"Real-World Use Cases for Okto SDK\"}),`\n`,(0,t.jsx)(e.p,{children:\"Now that we\\u2019ve covered what Okto SDK can do, let\\u2019s look at some practical ways you can use it to build amazing applications.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"1-consumer-apps-with-web3-features\",children:\"1. Consumer Apps with Web3 Features\"}),`\n`,(0,t.jsx)(e.p,{children:\"Imagine building a consumer app that feels as simple as Instagram or TikTok but has blockchain-powered features like token rewards or NFT collectibles. With Okto, you can onboard users with familiar logins (like Google or email) and automatically create wallets for them. This makes it easy to integrate features like token gating, NFT-based memberships, or even crypto payments\\u2014all without overwhelming your users.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"2-defi-protocols-with-mobile-friendly-interfaces\",children:\"2. DeFi Protocols with Mobile-Friendly Interfaces\"}),`\n`,(0,t.jsx)(e.p,{children:\"Decentralized finance (DeFi) is one of the most exciting areas of blockchain, but it\\u2019s often held back by complex user interfaces. Okto makes it easy to build mobile-friendly DeFi apps where users can stake, borrow, or trade assets with just a few taps. Okto allows the option of sponsoring gas fees, transaction retries, and multi-chain interactions, so your users can focus on managing their finances, not wrestling with the app or paying additional charges.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"3-blockchain-based-gaming\",children:\"3. Blockchain-Based Gaming\"}),`\n`,(0,t.jsx)(e.p,{children:\"Blockchain gaming is booming, with players owning in-game assets like NFTs and tokens. Okto makes it easy to build games where players can securely manage their assets, trade them across chains, and even use them in multiple games with Okto\\u2019s interoperable wallets. With Okto\\u2019s MPC-backed wallets, players don\\u2019t have to worry about losing their valuable items, and developers can focus on creating engaging gameplay.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"4-multi-chain-super-apps\",children:\"4. Multi-Chain Super Apps\"}),`\n`,(0,t.jsx)(e.p,{children:\"What if you could build an app that lets users manage assets, NFTs, and transactions across multiple blockchains in one place? With Okto, this is possible. You can create a unified dashboard that aggregates user balances, handles cross-chain swaps, and even automates complex processes like yield harvesting and rebalancing.\"}),`\n`,(0,t.jsx)(e.h3,{id:\"5-chatbots-for-defi-and-crypto\",children:\"5. Chatbots for DeFi and Crypto\"}),`\n`,(0,t.jsx)(e.p,{children:\"Chatbots are becoming increasingly popular for managing crypto and DeFi activities. With Okto, you can build bots that handle tasks like trading, staking, or fetching user balances\\u2014all within popular messaging apps like Telegram or Discord. Okto\\u2019s APIs make it easy to integrate blockchain functionality into your bot, so users can manage their crypto without leaving their favorite chat app.\"}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"why-developers-love-okto-sdk\",children:\"Why Developers Love Okto SDK\"}),`\n`,(0,t.jsx)(e.p,{children:\"Okto SDK isn\\u2019t just a tool\\u2014it\\u2019s a developer\\u2019s best friend. It offers:\"}),`\n`,(0,t.jsxs)(e.ul,{children:[`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:\"Faster Development:\"}),\" By handling blockchain complexities, Okto lets developers focus on building features, not boilerplate code. This can cut development time by up to 90%.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:\"Simplified Multi-Chain Support:\"}),\" Okto\\u2019s unified interface makes it easy to build apps that work across multiple blockchains.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:\"Better User Experiences:\"}),\" With Okto, you can create apps that feel as simple and intuitive as any Web2 app, making it easier to onboard new users.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:\"Robust Security:\"}),\" Okto\\u2019s MPC-based wallets ensure user accounts are secure without requiring users to manage private keys or seed phrases.\"]}),`\n`]}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"getting-started-with-okto-sdk\",children:\"Getting Started with Okto SDK\"}),`\n`,(0,t.jsxs)(e.p,{children:[\"You can start building with Okto in just \",(0,t.jsx)(e.strong,{children:\"3 simple steps\"}),\":\"]}),`\n`,(0,t.jsxs)(e.ol,{children:[`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Get Your App Secret (API Key):\"}),(0,t.jsx)(e.br,{}),`\n`,\"Go to the \",(0,t.jsx)(e.a,{href:\"https://dashboard.okto.tech/login\",children:\"Okto Dashboard\"}),\" and grab your \",(0,t.jsx)(e.strong,{children:\"App Secret\"}),\". This key is essential for authenticating your API requests and integrating Okto\\u2019s features into your app.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Enable Chains and Tokens:\"}),(0,t.jsx)(e.br,{}),`\n`,\"On the dashboard, enable the \",(0,t.jsx)(e.strong,{children:\"chains and tokens\"}),\" you want to build within your dApp. This ensures your app can interact seamlessly with the supported blockchain networks.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Choose Your Platform:\"}),(0,t.jsx)(e.br,{}),`\n`,\"Select a platform for your application from the various SDKs we offer:\"]}),`\n`,(0,t.jsxs)(e.ul,{children:[`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/getting-started/new-okto-react-setup\",children:\"React SDK\"}),\":\"]}),\" For web applications built with React.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/getting-started/new-okto-react-native-setup\",children:\"React Native SDK\"}),\":\"]}),\" For mobile apps using React Native.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/getting-started/new-okto-flutter-setup\",children:\"Flutter SDK\"}),\":\"]}),\" For cross-platform mobile development with Flutter.\"]}),`\n`,(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/docs/unity-sdk\",children:\"Unity SDK\"}),\":\"]}),\" For game developers using Unity.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.p,{children:[\"Alternatively, you can directly invoke our \",(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/api-docs\",children:\"APIs\"})}),\" for more flexibility.\"]}),`\n`]}),`\n`]}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h3,{id:\"for-more-information-and-detailed-steps\",children:\"For More Information and Detailed Steps\"}),`\n`,(0,t.jsxs)(e.ol,{children:[`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Check Out the Getting Started Blog:\"}),(0,t.jsx)(e.br,{}),`\n`,\"For a detailed step-by-step guide, read the \",(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/blogs/getting-started-with-okto\",children:\"Getting Started with Okto SDK blog\"}),\". It covers everything from setting up your Okto App Secret to integrating authentication methods and choosing the right SDK for your project.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Explore the Docs:\"}),(0,t.jsx)(e.br,{}),`\n`,\"Dive into the \",(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/docs/sdk-overview\",children:\"SDK Overview\"}),\" and \",(0,t.jsx)(e.a,{href:\"https://docs.okto.tech/api-docs\",children:\"API Reference\"}),\" to learn more about Okto\\u2019s features and how to use them.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Build a Proof of Concept:\"}),(0,t.jsx)(e.br,{}),`\n`,\"Use one of Okto\\u2019s \",(0,t.jsx)(e.a,{href:\"https://github.com/okto-hq/okto-sdk-react-template-app\",children:\"quickstart templates\"}),\" to experiment with the SDK and see how it works.\"]}),`\n`]}),`\n`,(0,t.jsxs)(e.li,{children:[`\n`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:\"Scale Your App:\"}),(0,t.jsx)(e.br,{}),`\n`,\"Once you\\u2019ve built a basic prototype, you can add more features, like \",(0,t.jsx)(e.strong,{children:\"NFT minting\"}),\", \",(0,t.jsx)(e.strong,{children:\"cross-chain swaps\"}),\", or \",(0,t.jsx)(e.strong,{children:\"advanced transaction flows\"}),\".\"]}),`\n`]}),`\n`]}),`\n`,(0,t.jsx)(e.hr,{}),`\n`,(0,t.jsx)(e.h2,{id:\"conclusion\",children:\"Conclusion\"}),`\n`,(0,t.jsx)(e.p,{children:\"Blockchain technology holds immense potential, but its complexity has been a barrier to widespread adoption. Okto SDK changes that by making blockchain development accessible and user-friendly. Whether you\\u2019re building a consumer app, a DeFi protocol, or a blockchain-based game, Okto provides the tools you need to create seamless, secure, and scalable applications.\"}),`\n`,(0,t.jsx)(e.p,{children:\"So, what are you waiting for? Dive into the world of Web3 with Okto SDK and start building the future today. Happy coding! \\u{1F680}\"})]})}function d(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}return w(v);})();\n;return Component;"
  },
  {
    "content": "<img src=\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*79mPjUXWnj6Vv4v3Y2E5tQ.png\" alt=\"Executing Raw Transactions with Okto SDK: A Comprehensive Guide\" />\n\n<strong>TL;DR:</strong>  \n<em>Learn how to execute raw transactions across EVM, Solana, and Aptos using the Okto SDK. Gain full control over smart contracts and blockchain interactions with dynamic transaction objects, while benefiting from Okto’s abstractions for signing, gas, and seamless execution.</em>\n\n## Introduction\n\nBuilding sophisticated Web3 applications often requires interacting directly with smart contracts at a granular level. While pre-built functionalities and abstractions streamline common operations, sometimes you need a more flexible approach to execute on-chain actions not covered by pre-existing Blocs or APIs.\n\nThis is where <strong>raw transactions</strong> come into play. A raw transaction gives you full control, allowing you to:\n\n- Invoke any smart contract function.\n- Customize transaction data for complex operations.\n- Interact seamlessly across multiple chains without blockchain-specific complexities.\n\n<strong>Enter Okto.</strong> With Okto, you can execute raw transactions on EVM-compatible networks, Solana, and Aptos — all through a single interface. The Okto SDK’s raw transaction APIs handle gas, signing, and transaction execution behind the scenes, enabling you to focus on your application logic rather than the intricacies of blockchain networks.\n\nIn this guide, you’ll learn how to construct dynamic transaction objects for different networks and execute raw transactions programmatically. By the end, you’ll have the tools to build more flexible, future-proof, and powerful Web3 applications.\n\n## Understanding Raw Transactions\n\nA <strong>raw transaction</strong> is an unsigned, low-level transaction that can be broadcasted to a blockchain network. Executing raw transactions is ideal for developers who need to:\n\n- Interact with smart contracts not supported by higher-level SDK methods.\n- Run complex operations requiring custom transaction data.\n- Execute transactions across multiple blockchain networks with different protocols.\n\nWhile Okto’s <strong>Bloc Hub</strong> provides ready-to-use Blocs for common Web3 tasks (like token transfers, NFT operations, and DeFi actions), there are situations where a specific Bloc may not exist. The raw transaction API fills this gap, enabling you to call <strong>any function on any smart contract</strong>, across diverse ecosystems, while still leveraging Okto’s abstractions for gas, signing, and retries.\n\n## Dynamic Transaction Objects: The Key to Multi-Chain Flexibility\n\nEach blockchain network has its unique architecture and transaction model:\n\n- <strong>EVM Networks (Ethereum, Polygon, etc.):</strong> Account-based models with `from`, `to`, `value`, and `data` fields.\n- <strong>Solana:</strong> Instruction-based models involving programs and accounts.\n- <strong>Aptos:</strong> Transactions built around Move language functions with type and function arguments.\n\nTo handle these differences, Okto uses <strong>dynamic transaction objects</strong> that adapt to the requirements of each network. This approach ensures:\n\n- **Network Compatibility:** Transactions are always valid for the target network.\n- **Full Control:** You can include any custom data needed by your contract.\n- **Future-Proofing:** Easily integrate new networks or changes to existing ones without overhauling your code.\n\n## Network-Specific Transaction Structures\n\n### EVM Networks (Ethereum, Polygon, etc.)\n\nFor EVM-compatible networks, transactions typically include fields like `from`, `to`, `data`, and `value`. Here’s an example structure for an EVM network like Polygon:\n\n```json\n{\n  \"network_name\": \"POLYGON\",\n  \"transaction\": {\n    \"from\": \"0xYourAddress\",\n    \"to\": \"0xContractAddress\",\n    \"data\": \"0xContractCallData\",\n    \"value\": \"0x0\"\n  }\n}\n```\n\n### Solana\n\nSolana uses a transaction model built around <strong>instructions</strong>. Each instruction specifies a program to execute and the accounts it interacts with:\n\n```json\n{\n  \"network_name\": \"SOLANA\",\n  \"transaction\": {\n    \"instructions\": [\n      {\n        \"keys\": [\n          {\n            \"pubkey\": \"PublicKey\",\n            \"isSigner\": true,\n            \"isWritable\": false\n          }\n        ],\n        \"programId\": \"ProgramID\",\n        \"data\": [1, 2, 3, 4]\n      }\n    ],\n    \"signer\": \"SignerPublicKey\"\n  }\n}\n```\n\n### Aptos\n\nAptos focuses on Move-based function calls with type arguments and function arguments:\n\n```json\n{\n  \"network_name\": \"APTOS\",\n  \"transaction\": {\n    \"transactions\": [\n      {\n        \"function\": \"ModuleAddress::ModuleName::FunctionName\",\n        \"typeArguments\": [\"TypeArgument1\"],\n        \"functionArguments\": [\"Argument1\"]\n      }\n    ]\n  }\n}\n```\n\nBy providing the correct transaction object structure based on the target network, you can seamlessly execute any operation on any smart contract.\n\n## Executing Raw Transactions via Okto SDK APIs\n\nOnce you’ve structured your transaction object, you can leverage the Okto SDK APIs to send and track these raw transactions. Okto’s unified interface handles the complexity of each network, empowering you to focus on your logic rather than low-level blockchain mechanics.\n\n### 1. Executing Raw Transactions\n\n<strong>Endpoint:</strong> `POST /api/v1/rawtransaction/execute`\n\n<strong>Sample Request (EVM):</strong>\n\n```bash\nPOST https://sandbox-api.okto.tech/api/v1/rawtransaction/execute\nContent-Type: application/json\n{\n  \"network_name\": \"POLYGON\",\n  \"transaction\": {\n    \"from\": \"0xYourAddress\",\n    \"to\": \"0xContractAddress\",\n    \"data\": \"0xYourContractData\",\n    \"value\": \"0x0\"\n  }\n}\n```\n\n<strong>Sample Response:</strong>\n\n```json\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"jobId\": \"f15c07cb-2d29-4670-8492-b1236fdd41dc\"\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this is wrapped in a function like `executeRawTransaction(transactionData)`.\n\n<strong>Documentation Links:</strong>\n\n*   [React SDK — Execute Raw Transactions](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction)\n*   [Flutter SDK — Execute Raw Transactions](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction)\n*   [React Native SDK — Execute Raw Transactions](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction)\n\n### 2. Getting Raw Transaction Status\n\nTo monitor your transaction’s progress, use the <strong>Get Raw Transaction Status</strong> API. This endpoint retrieves transaction details, including its status and blockchain transaction hash, using the order_id from the execution response.\n\n<strong>Endpoint:</strong> `GET /api/v1/rawtransaction/status`\n\n<strong>Sample Request:</strong>\n\n```bash\nGET https://sandbox-api.okto.tech/api/v1/rawtransaction/status?order_id=YOUR_ORDER_ID\n```\n\n<strong>Sample Response:</strong>\n\n```json\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"jobs\": [\n      {\n        \"order_id\": \"YOUR_ORDER_ID\",\n        \"network_name\": \"POLYGON\",\n        \"status\": \"SUCCESS\",\n        \"transaction_hash\": \"0xTRANSACTION_HASH\"\n      }\n    ]\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this is available as `getRawTransactionStatus(order_id)`.\n\n<strong>Documentation Links:</strong>\n\n*   [React SDK — Get Raw Transaction Status](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status)\n*   [Flutter SDK — Get Raw Transaction Status](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status)\n*   [React Native SDK — Get Raw Transaction Status](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status)\n\n## Conclusion\n\nIn this guide, we explored how to execute raw transactions using the Okto SDK. By understanding dynamic transaction objects and network-specific data structures, you can:\n\n- Invoke any smart contract function on EVM, Solana, or Aptos.\n- Retain complete control over transaction data and logic.\n- Leverage Okto’s abstractions for signing, gas handling, and seamless execution.\n\nRaw transaction execution with Okto unlocks powerful capabilities, letting you integrate complex, custom functionalities into your applications without getting bogged down in the underlying blockchain specifics.\n\nFor more details and advanced use cases, head over to the [Official Okto Documentation](https://docs.okto.tech/).\n\nStop worrying about low-level blockchain mechanics — <strong>start building your next great application with Okto!</strong> 🚀",
    "title": "Executing Raw Transactions with Okto SDK: A Comprehensive Guide",
    "description": "Executing raw transactions across EVM, Solana, and Aptos using the Okto SDK allows developers to invoke any smart contract function and gain full control over blockchain interactions. This comprehensive guide will help you understand dynamic transaction objects, execute raw transactions, and leverage Okto’s abstractions for seamless signing, gas management, and execution.",
    "_meta": {
      "filePath": "executing-raw-transactions-with-okto.mdx",
      "fileName": "executing-raw-transactions-with-okto.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "executing-raw-transactions-with-okto"
    },
    "toc": [
      {
        "title": "Introduction",
        "url": "#introduction",
        "depth": 2
      },
      {
        "title": "Understanding Raw Transactions",
        "url": "#understanding-raw-transactions",
        "depth": 2
      },
      {
        "title": "Dynamic Transaction Objects: The Key to Multi-Chain Flexibility",
        "url": "#dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
        "depth": 2
      },
      {
        "title": "Network-Specific Transaction Structures",
        "url": "#network-specific-transaction-structures",
        "depth": 2
      },
      {
        "title": "EVM Networks (Ethereum, Polygon, etc.)",
        "url": "#evm-networks-ethereum-polygon-etc",
        "depth": 3
      },
      {
        "title": "Solana",
        "url": "#solana",
        "depth": 3
      },
      {
        "title": "Aptos",
        "url": "#aptos",
        "depth": 3
      },
      {
        "title": "Executing Raw Transactions via Okto SDK APIs",
        "url": "#executing-raw-transactions-via-okto-sdk-apis",
        "depth": 2
      },
      {
        "title": "1. Executing Raw Transactions",
        "url": "#1-executing-raw-transactions",
        "depth": 3
      },
      {
        "title": "2. Getting Raw Transaction Status",
        "url": "#2-getting-raw-transaction-status",
        "depth": 3
      },
      {
        "title": "Conclusion",
        "url": "#conclusion",
        "depth": 2
      }
    ],
    "structuredData": {
      "contents": [
        {
          "heading": "",
          "content": "TL;DR:Learn how to execute raw transactions across EVM, Solana, and Aptos using the Okto SDK. Gain full control over smart contracts and blockchain interactions with dynamic transaction objects, while benefiting from Okto’s abstractions for signing, gas, and seamless execution."
        },
        {
          "heading": "introduction",
          "content": "Building sophisticated Web3 applications often requires interacting directly with smart contracts at a granular level. While pre-built functionalities and abstractions streamline common operations, sometimes you need a more flexible approach to execute on-chain actions not covered by pre-existing Blocs or APIs."
        },
        {
          "heading": "introduction",
          "content": "This is where raw transactions come into play. A raw transaction gives you full control, allowing you to:"
        },
        {
          "heading": "introduction",
          "content": "Invoke any smart contract function."
        },
        {
          "heading": "introduction",
          "content": "Customize transaction data for complex operations."
        },
        {
          "heading": "introduction",
          "content": "Interact seamlessly across multiple chains without blockchain-specific complexities."
        },
        {
          "heading": "introduction",
          "content": "Enter Okto. With Okto, you can execute raw transactions on EVM-compatible networks, Solana, and Aptos — all through a single interface. The Okto SDK’s raw transaction APIs handle gas, signing, and transaction execution behind the scenes, enabling you to focus on your application logic rather than the intricacies of blockchain networks."
        },
        {
          "heading": "introduction",
          "content": "In this guide, you’ll learn how to construct dynamic transaction objects for different networks and execute raw transactions programmatically. By the end, you’ll have the tools to build more flexible, future-proof, and powerful Web3 applications."
        },
        {
          "heading": "understanding-raw-transactions",
          "content": "A raw transaction is an unsigned, low-level transaction that can be broadcasted to a blockchain network. Executing raw transactions is ideal for developers who need to:"
        },
        {
          "heading": "understanding-raw-transactions",
          "content": "Interact with smart contracts not supported by higher-level SDK methods."
        },
        {
          "heading": "understanding-raw-transactions",
          "content": "Run complex operations requiring custom transaction data."
        },
        {
          "heading": "understanding-raw-transactions",
          "content": "Execute transactions across multiple blockchain networks with different protocols."
        },
        {
          "heading": "understanding-raw-transactions",
          "content": "While Okto’s Bloc Hub provides ready-to-use Blocs for common Web3 tasks (like token transfers, NFT operations, and DeFi actions), there are situations where a specific Bloc may not exist. The raw transaction API fills this gap, enabling you to call any function on any smart contract, across diverse ecosystems, while still leveraging Okto’s abstractions for gas, signing, and retries."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Each blockchain network has its unique architecture and transaction model:"
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "EVM Networks (Ethereum, Polygon, etc.): Account-based models with from, to, value, and data fields."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Solana: Instruction-based models involving programs and accounts."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Aptos: Transactions built around Move language functions with type and function arguments."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "To handle these differences, Okto uses dynamic transaction objects that adapt to the requirements of each network. This approach ensures:"
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Network Compatibility: Transactions are always valid for the target network."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Full Control: You can include any custom data needed by your contract."
        },
        {
          "heading": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Future-Proofing: Easily integrate new networks or changes to existing ones without overhauling your code."
        },
        {
          "heading": "evm-networks-ethereum-polygon-etc",
          "content": "For EVM-compatible networks, transactions typically include fields like from, to, data, and value. Here’s an example structure for an EVM network like Polygon:"
        },
        {
          "heading": "solana",
          "content": "Solana uses a transaction model built around instructions. Each instruction specifies a program to execute and the accounts it interacts with:"
        },
        {
          "heading": "aptos",
          "content": "Aptos focuses on Move-based function calls with type arguments and function arguments:"
        },
        {
          "heading": "aptos",
          "content": "By providing the correct transaction object structure based on the target network, you can seamlessly execute any operation on any smart contract."
        },
        {
          "heading": "executing-raw-transactions-via-okto-sdk-apis",
          "content": "Once you’ve structured your transaction object, you can leverage the Okto SDK APIs to send and track these raw transactions. Okto’s unified interface handles the complexity of each network, empowering you to focus on your logic rather than low-level blockchain mechanics."
        },
        {
          "heading": "1-executing-raw-transactions",
          "content": "Endpoint: POST /api/v1/rawtransaction/execute"
        },
        {
          "heading": "1-executing-raw-transactions",
          "content": "If you’re using the Okto SDK, this is wrapped in a function like executeRawTransaction(transactionData)."
        },
        {
          "heading": "1-executing-raw-transactions",
          "content": "React SDK — Execute Raw Transactions"
        },
        {
          "heading": "1-executing-raw-transactions",
          "content": "Flutter SDK — Execute Raw Transactions"
        },
        {
          "heading": "1-executing-raw-transactions",
          "content": "React Native SDK — Execute Raw Transactions"
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "To monitor your transaction’s progress, use the Get Raw Transaction Status API. This endpoint retrieves transaction details, including its status and blockchain transaction hash, using the order_id from the execution response."
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "Endpoint: GET /api/v1/rawtransaction/status"
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "If you’re using the Okto SDK, this is available as getRawTransactionStatus(order_id)."
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "React SDK — Get Raw Transaction Status"
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "Flutter SDK — Get Raw Transaction Status"
        },
        {
          "heading": "2-getting-raw-transaction-status",
          "content": "React Native SDK — Get Raw Transaction Status"
        },
        {
          "heading": "conclusion",
          "content": "In this guide, we explored how to execute raw transactions using the Okto SDK. By understanding dynamic transaction objects and network-specific data structures, you can:"
        },
        {
          "heading": "conclusion",
          "content": "Invoke any smart contract function on EVM, Solana, or Aptos."
        },
        {
          "heading": "conclusion",
          "content": "Retain complete control over transaction data and logic."
        },
        {
          "heading": "conclusion",
          "content": "Leverage Okto’s abstractions for signing, gas handling, and seamless execution."
        },
        {
          "heading": "conclusion",
          "content": "Raw transaction execution with Okto unlocks powerful capabilities, letting you integrate complex, custom functionalities into your applications without getting bogged down in the underlying blockchain specifics."
        },
        {
          "heading": "conclusion",
          "content": "For more details and advanced use cases, head over to the Official Okto Documentation."
        },
        {
          "heading": "conclusion",
          "content": "Stop worrying about low-level blockchain mechanics — start building your next great application with Okto! 🚀"
        }
      ],
      "headings": [
        {
          "id": "introduction",
          "content": "Introduction"
        },
        {
          "id": "understanding-raw-transactions",
          "content": "Understanding Raw Transactions"
        },
        {
          "id": "dynamic-transaction-objects-the-key-to-multi-chain-flexibility",
          "content": "Dynamic Transaction Objects: The Key to Multi-Chain Flexibility"
        },
        {
          "id": "network-specific-transaction-structures",
          "content": "Network-Specific Transaction Structures"
        },
        {
          "id": "evm-networks-ethereum-polygon-etc",
          "content": "EVM Networks (Ethereum, Polygon, etc.)"
        },
        {
          "id": "solana",
          "content": "Solana"
        },
        {
          "id": "aptos",
          "content": "Aptos"
        },
        {
          "id": "executing-raw-transactions-via-okto-sdk-apis",
          "content": "Executing Raw Transactions via Okto SDK APIs"
        },
        {
          "id": "1-executing-raw-transactions",
          "content": "1. Executing Raw Transactions"
        },
        {
          "id": "2-getting-raw-transaction-status",
          "content": "2. Getting Raw Transaction Status"
        },
        {
          "id": "conclusion",
          "content": "Conclusion"
        }
      ]
    },
    "body": "var Component=(()=>{var o=Object.create;var l=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var y=(n,s)=>()=>(s||n((s={exports:{}}).exports,s),s.exports),m=(n,s)=>{for(var e in s)l(n,e,{get:s[e],enumerable:!0})},h=(n,s,e,t)=>{if(s&&typeof s==\"object\"||typeof s==\"function\")for(let a of p(s))!u.call(n,a)&&a!==e&&l(n,a,{get:()=>s[a],enumerable:!(t=E(s,a))||t.enumerable});return n};var F=(n,s,e)=>(e=n!=null?o(g(n)):{},h(s||!n||!n.__esModule?l(e,\"default\",{value:n,enumerable:!0}):e,n)),C=n=>h(l({},\"__esModule\",{value:!0}),n);var c=y((b,r)=>{r.exports=_jsx_runtime});var w={};m(w,{default:()=>k});var i=F(c());function d(n){let s={a:\"a\",br:\"br\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",ul:\"ul\",...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*79mPjUXWnj6Vv4v3Y2E5tQ.png\",alt:\"Executing Raw Transactions with Okto SDK: A Comprehensive Guide\"}),`\n`,(0,i.jsxs)(s.p,{children:[(0,i.jsx)(\"strong\",{children:\"TL;DR:\"}),(0,i.jsx)(s.br,{}),`\n`,(0,i.jsx)(\"em\",{children:\"Learn how to execute raw transactions across EVM, Solana, and Aptos using the Okto SDK. Gain full control over smart contracts and blockchain interactions with dynamic transaction objects, while benefiting from Okto\\u2019s abstractions for signing, gas, and seamless execution.\"})]}),`\n`,(0,i.jsx)(s.h2,{id:\"introduction\",children:\"Introduction\"}),`\n`,(0,i.jsx)(s.p,{children:\"Building sophisticated Web3 applications often requires interacting directly with smart contracts at a granular level. While pre-built functionalities and abstractions streamline common operations, sometimes you need a more flexible approach to execute on-chain actions not covered by pre-existing Blocs or APIs.\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"This is where \",(0,i.jsx)(\"strong\",{children:\"raw transactions\"}),\" come into play. A raw transaction gives you full control, allowing you to:\"]}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsx)(s.li,{children:\"Invoke any smart contract function.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Customize transaction data for complex operations.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Interact seamlessly across multiple chains without blockchain-specific complexities.\"}),`\n`]}),`\n`,(0,i.jsxs)(s.p,{children:[(0,i.jsx)(\"strong\",{children:\"Enter Okto.\"}),\" With Okto, you can execute raw transactions on EVM-compatible networks, Solana, and Aptos \\u2014 all through a single interface. The Okto SDK\\u2019s raw transaction APIs handle gas, signing, and transaction execution behind the scenes, enabling you to focus on your application logic rather than the intricacies of blockchain networks.\"]}),`\n`,(0,i.jsx)(s.p,{children:\"In this guide, you\\u2019ll learn how to construct dynamic transaction objects for different networks and execute raw transactions programmatically. By the end, you\\u2019ll have the tools to build more flexible, future-proof, and powerful Web3 applications.\"}),`\n`,(0,i.jsx)(s.h2,{id:\"understanding-raw-transactions\",children:\"Understanding Raw Transactions\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"A \",(0,i.jsx)(\"strong\",{children:\"raw transaction\"}),\" is an unsigned, low-level transaction that can be broadcasted to a blockchain network. Executing raw transactions is ideal for developers who need to:\"]}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsx)(s.li,{children:\"Interact with smart contracts not supported by higher-level SDK methods.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Run complex operations requiring custom transaction data.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Execute transactions across multiple blockchain networks with different protocols.\"}),`\n`]}),`\n`,(0,i.jsxs)(s.p,{children:[\"While Okto\\u2019s \",(0,i.jsx)(\"strong\",{children:\"Bloc Hub\"}),\" provides ready-to-use Blocs for common Web3 tasks (like token transfers, NFT operations, and DeFi actions), there are situations where a specific Bloc may not exist. The raw transaction API fills this gap, enabling you to call \",(0,i.jsx)(\"strong\",{children:\"any function on any smart contract\"}),\", across diverse ecosystems, while still leveraging Okto\\u2019s abstractions for gas, signing, and retries.\"]}),`\n`,(0,i.jsx)(s.h2,{id:\"dynamic-transaction-objects-the-key-to-multi-chain-flexibility\",children:\"Dynamic Transaction Objects: The Key to Multi-Chain Flexibility\"}),`\n`,(0,i.jsx)(s.p,{children:\"Each blockchain network has its unique architecture and transaction model:\"}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(\"strong\",{children:\"EVM Networks (Ethereum, Polygon, etc.):\"}),\" Account-based models with \",(0,i.jsx)(s.code,{children:\"from\"}),\", \",(0,i.jsx)(s.code,{children:\"to\"}),\", \",(0,i.jsx)(s.code,{children:\"value\"}),\", and \",(0,i.jsx)(s.code,{children:\"data\"}),\" fields.\"]}),`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(\"strong\",{children:\"Solana:\"}),\" Instruction-based models involving programs and accounts.\"]}),`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(\"strong\",{children:\"Aptos:\"}),\" Transactions built around Move language functions with type and function arguments.\"]}),`\n`]}),`\n`,(0,i.jsxs)(s.p,{children:[\"To handle these differences, Okto uses \",(0,i.jsx)(\"strong\",{children:\"dynamic transaction objects\"}),\" that adapt to the requirements of each network. This approach ensures:\"]}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:\"Network Compatibility:\"}),\" Transactions are always valid for the target network.\"]}),`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:\"Full Control:\"}),\" You can include any custom data needed by your contract.\"]}),`\n`,(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:\"Future-Proofing:\"}),\" Easily integrate new networks or changes to existing ones without overhauling your code.\"]}),`\n`]}),`\n`,(0,i.jsx)(s.h2,{id:\"network-specific-transaction-structures\",children:\"Network-Specific Transaction Structures\"}),`\n`,(0,i.jsx)(s.h3,{id:\"evm-networks-ethereum-polygon-etc\",children:\"EVM Networks (Ethereum, Polygon, etc.)\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"For EVM-compatible networks, transactions typically include fields like \",(0,i.jsx)(s.code,{children:\"from\"}),\", \",(0,i.jsx)(s.code,{children:\"to\"}),\", \",(0,i.jsx)(s.code,{children:\"data\"}),\", and \",(0,i.jsx)(s.code,{children:\"value\"}),\". Here\\u2019s an example structure for an EVM network like Polygon:\"]}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"network_name\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"POLYGON\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"transaction\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"from\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"0xYourAddress\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"to\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"0xContractAddress\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"data\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"0xContractCallData\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"value\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"0x0\"'})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(s.h3,{id:\"solana\",children:\"Solana\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"Solana uses a transaction model built around \",(0,i.jsx)(\"strong\",{children:\"instructions\"}),\". Each instruction specifies a program to execute and the accounts it interacts with:\"]}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"network_name\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"SOLANA\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"transaction\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"instructions\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"keys\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"          {\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'            \"pubkey\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"PublicKey\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'            \"isSigner\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"true\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'            \"isWritable\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"false\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"          }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"        ],\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"programId\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"ProgramID\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"data\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"1\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\", \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"2\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\", \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"3\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\", \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"4\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"]\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ],\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"signer\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"SignerPublicKey\"'})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(s.h3,{id:\"aptos\",children:\"Aptos\"}),`\n`,(0,i.jsx)(s.p,{children:\"Aptos focuses on Move-based function calls with type arguments and function arguments:\"}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"network_name\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"APTOS\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"transaction\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"transactions\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"function\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"ModuleAddress::ModuleName::FunctionName\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"typeArguments\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"TypeArgument1\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"],\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"functionArguments\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"Argument1\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"]\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(s.p,{children:\"By providing the correct transaction object structure based on the target network, you can seamlessly execute any operation on any smart contract.\"}),`\n`,(0,i.jsx)(s.h2,{id:\"executing-raw-transactions-via-okto-sdk-apis\",children:\"Executing Raw Transactions via Okto SDK APIs\"}),`\n`,(0,i.jsx)(s.p,{children:\"Once you\\u2019ve structured your transaction object, you can leverage the Okto SDK APIs to send and track these raw transactions. Okto\\u2019s unified interface handles the complexity of each network, empowering you to focus on your logic rather than low-level blockchain mechanics.\"}),`\n`,(0,i.jsx)(s.h3,{id:\"1-executing-raw-transactions\",children:\"1. Executing Raw Transactions\"}),`\n`,(0,i.jsxs)(s.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(s.code,{children:\"POST /api/v1/rawtransaction/execute\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request (EVM):\"}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"POST\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/rawtransaction/execute\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"Content-Type:\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" application/json\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"network_name\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\",'})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"transaction\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"from\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0xYourAddress\",'})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"to\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0xContractAddress\",'})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"data\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0xYourContractData\",'})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"value\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0x0\"'})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Response:\"}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"status\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"success\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"data\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"jobId\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"f15c07cb-2d29-4670-8492-b1236fdd41dc\"'})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"If you\\u2019re using the Okto SDK, this is wrapped in a function like \",(0,i.jsx)(s.code,{children:\"executeRawTransaction(transactionData)\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction\",children:\"React SDK \\u2014 Execute Raw Transactions\"})}),`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction\",children:\"Flutter SDK \\u2014 Execute Raw Transactions\"})}),`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#execute-raw-transaction\",children:\"React Native SDK \\u2014 Execute Raw Transactions\"})}),`\n`]}),`\n`,(0,i.jsx)(s.h3,{id:\"2-getting-raw-transaction-status\",children:\"2. Getting Raw Transaction Status\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"To monitor your transaction\\u2019s progress, use the \",(0,i.jsx)(\"strong\",{children:\"Get Raw Transaction Status\"}),\" API. This endpoint retrieves transaction details, including its status and blockchain transaction hash, using the order_id from the execution response.\"]}),`\n`,(0,i.jsxs)(s.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(s.code,{children:\"GET /api/v1/rawtransaction/status\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsx)(s.code,{children:(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"GET\"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/rawtransaction/status?order_id=YOUR_ORDER_ID\"})]})})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Response:\"}),`\n`,(0,i.jsx)(s.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"status\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"success\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'  \"data\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": {\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'    \"jobs\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": [\"})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"order_id\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"YOUR_ORDER_ID\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"network_name\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"POLYGON\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"status\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"SUCCESS\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\",\"})]}),`\n`,(0,i.jsxs)(s.span,{className:\"line\",children:[(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:'        \"transaction_hash\"'}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\": \"}),(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"0xTRANSACTION_HASH\"'})]}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(s.span,{className:\"line\",children:(0,i.jsx)(s.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"If you\\u2019re using the Okto SDK, this is available as \",(0,i.jsx)(s.code,{children:\"getRawTransactionStatus(order_id)\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status\",children:\"React SDK \\u2014 Get Raw Transaction Status\"})}),`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status\",children:\"Flutter SDK \\u2014 Get Raw Transaction Status\"})}),`\n`,(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/raw-transactions#get-raw-transaction-status\",children:\"React Native SDK \\u2014 Get Raw Transaction Status\"})}),`\n`]}),`\n`,(0,i.jsx)(s.h2,{id:\"conclusion\",children:\"Conclusion\"}),`\n`,(0,i.jsx)(s.p,{children:\"In this guide, we explored how to execute raw transactions using the Okto SDK. By understanding dynamic transaction objects and network-specific data structures, you can:\"}),`\n`,(0,i.jsxs)(s.ul,{children:[`\n`,(0,i.jsx)(s.li,{children:\"Invoke any smart contract function on EVM, Solana, or Aptos.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Retain complete control over transaction data and logic.\"}),`\n`,(0,i.jsx)(s.li,{children:\"Leverage Okto\\u2019s abstractions for signing, gas handling, and seamless execution.\"}),`\n`]}),`\n`,(0,i.jsx)(s.p,{children:\"Raw transaction execution with Okto unlocks powerful capabilities, letting you integrate complex, custom functionalities into your applications without getting bogged down in the underlying blockchain specifics.\"}),`\n`,(0,i.jsxs)(s.p,{children:[\"For more details and advanced use cases, head over to the \",(0,i.jsx)(s.a,{href:\"https://docs.okto.tech/\",children:\"Official Okto Documentation\"}),\".\"]}),`\n`,(0,i.jsxs)(s.p,{children:[\"Stop worrying about low-level blockchain mechanics \\u2014 \",(0,i.jsx)(\"strong\",{children:\"start building your next great application with Okto!\"}),\" \\u{1F680}\"]})]})}function k(n={}){let{wrapper:s}=n.components||{};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}return C(w);})();\n;return Component;"
  },
  {
    "content": "<img src=\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*ypV3mYzjZvoqJx2ecyB7yA.png\" alt=\"Getting Started with Okto\" />\n\n<em><strong>TL;DR:</strong> This blog introduces the Okto SDK, a comprehensive toolkit that simplifies Web3 development by abstracting blockchain complexities. You’ll learn how to get started with Okto SDKs, check out the different available SDKs, and set up your first project using it. By the end, you’ll be ready to build simple yet powerful Web3 applications with ease.</em>\n\nThe world of Web3 is revolutionizing how we interact with the internet, bringing decentralized applications (dApps) that empower users like never before. However, despite its potential, developing on Web3 can be challenging because of the complexities of blockchain technology and unfamiliar protocols. But what if you could build Web3 applications as easily as traditional web apps?\n\nEnter the <strong>Okto SDK</strong> — your gateway to easy Web3 development. Designed to abstract blockchain complexities, the Okto SDK enables you to create powerful and user-friendly applications without getting bogged down by technical challenges. In this blog, we’ll guide you through everything you need to know to get started with the Okto SDK and confidently begin your Web3 journey.\n\n## What is Okto SDK?\n\nBefore diving into the setup, let’s discuss what makes the Okto SDK a game-changer for developers.\n\nThe <strong>Okto SDK</strong> is a comprehensive toolkit that simplifies the development of Web3 applications. It provides a chain abstraction layer that allows you to build consumer apps in a way that feels familiar. By managing the complex blockchain interactions behind the scenes, the SDK lets you focus on delivering the seamless user experiences expected from modern web applications.\n\nThe Okto SDK makes blockchain development much easier by providing features like single function calls for any blockchain action, a unified portfolio across different ecosystems, and abstraction of chain, account, and gas details. This means you can focus on creating easy-to-use interfaces and fun features without needing to worry about the technical blockchain details. The SDK’s plug-and-play nature also makes it highly customizable, allowing you to adapt it to your specific project needs.\n\n## Ways to Build on Okto\n\nRecognizing that developers have different preferences and project requirements, Okto offers several ways to integrate its powerful features into your applications.\n\n1. **Okto React SDK**: Ideal for building web applications using React.\n2. **Okto React Native SDK**: Perfect for creating mobile apps with React Native.\n3. **Okto Flutter SDK**: Designed for mobile developers working with Flutter/Dart.\n4. **Unity SDK**: Ideal for game developers using Unity for web/mobile/desktop/playstation games.\n5. **Direct API Integration**: For those who prefer to interact directly via APIs or working on any other platform not supported by the SDKs.\n\nNo matter your platform of choice, Okto ensures a smooth development experience across various technologies.\n\n## Prerequisites\n\nBefore you start building your app using Okto, there are a couple of things you need to set up.\n\n### 1. Get Your Okto App Secret\nThe first step is to sign up on the Okto Dashboard to obtain your Okto App Secret. This key is crucial for authenticating your API requests. Make sure to keep it secure and never expose it publicly or include it in client-side code.\n\n<strong>Steps to Get Your App Secret:</strong>\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I_nzQE2kACXwVPh9d2wxQQ.png\" alt=\"Getting Started with Okto\" />\n\n1. <strong>Navigate to the Dashboard Login Page:</strong> Go to [Okto Dashboard](https://dashboard.okto.tech/login).\n2. <strong>Enter Your Email Address:</strong> Input your preferred email to log in.\n3. <strong>Verify Your Email:</strong> Enter the OTP you received in your inbox.\n4. <strong>Access Your Dashboard:</strong> Once verified, you’ll be logged into your new dashboard account.\n5. <strong>Get Your App Secret:</strong> Navigate to the “API Keys” section and click on “Get App Secret.”\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O3hVW2UbZgErPmY_oibl7Q.png\" alt=\"Getting Started with Okto\" />\n\n<strong>Note:</strong> <em>The “App ID”, which is also revealed in the “API Keys” page, is different. It is a public unique ID, but the “App Secret” is the actual key you need to download and keep safe. You can use this key to access all SDK and client-side APIs.</em>\n\n### 2. Authentication Methods\n\nUser authentication is a vital component of any application. The Okto SDK supports multiple authentication methods to onboard users seamlessly.\n\nCurrently, Okto offers the following authentication options:\n\n<strong>1. Google OAuth:</strong>\nTo authenticate users via Google, you’ll need to set up a Google Console Project.\n\n- Follow our [Google OAuth2 Setup Guide](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/authenticate-users/google-oauth/learn) to create a project in Google Cloud Console.\n- Once configured, you’ll receive a Google Client ID that will be used in your application for secure authentication.\n\n<strong>2. Email OTP:</strong>\nOkto allows users to log in using their email addresses with a secure One-Time Password (OTP). The SDK manages the process of generating, sending, and verifying OTPs, ensuring a smooth user experience.\n\n<strong>3. Phone OTP:</strong>\nWith phone OTP authentication, users can log in using their phone numbers with a secure One-Time Password (OTP). The SDK securely handles OTP generation, sending, and verification.\n\nOkto also plans to support other methods like Apple ID, Telegram, and Farcaster in the future.\n\n### 3. Enable Chains and Tokens\n\nIt is compulsory to enable chains and tokens on the Okto Dashboard. This step is necessary to ensure your application can interact with supported blockchain networks.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sH5Nz0JwwZ4P79fMCZjBIw.png\" alt=\"Getting Started with Okto\" />\n\n### 4. Optional: Enable Sponsorship\n\nYou may also choose to enable sponsorship, which is a feature that allows you to cover transaction fees (gas fees) for your users. This creates a smoother user experience by removing the need for users to hold native tokens for transaction fees.\n\nSponsorship integrates with Okto’s wallet infrastructure to automatically cover gas fees for transactions on supported chains. When a user initiates a transaction, the sponsorship system pays the required gas fee, allowing the transaction to proceed even if the user doesn’t have the native token for gas.\n\n<strong>Note:</strong> <em>For Solana chains like mainnet and devnet, account creation involves adding rent, so sponsorship is compulsory. If you enable the Solana chain, you must enable sponsorship and add funds to that chain.</em>\n\n## Available SDKs\n\nNow that you’ve completed the prerequisites, let’s take a closer look at the SDKs Okto offers. Each SDK is designed to integrate seamlessly with your preferred development platform.\n\n### 1. Okto React SDK\n\nIf you’re building a web application with React, the <strong>Okto React SDK</strong> is your go-to solution. It streamlines the integration of Web3 functionalities, allowing you to onboard users into the Web3 ecosystem effortlessly. With minimal setup, you can start providing users with a seamless Web3 experience.\n\n1. <strong>Learn More:</strong> [Okto React SDK Overview](https://docs.okto.tech/docs/react-sdk)\n2. <strong>Quick Start Guide:</strong> [Get Started with Okto React SDK](https://docs.okto.tech/docs/react-sdk/getting-started/new-okto-react-setup)\n\n### 2. Okto Flutter SDK\n\nFor developers using Flutter, the <strong>Okto Flutter SDK</strong> provides a straightforward way to add Web3 features to your app. It’s designed to minimize setup time so you can focus on delivering a smooth and engaging user experience, all while taking advantage of Flutter’s cross-platform capabilities.\n\n1. <strong>Learn More:</strong> [Okto Flutter SDK Overview](https://docs.okto.tech/docs/flutter-sdk)\n2. <strong>Quick Start Guide:</strong> [Get Started with Okto Flutter SDK](https://docs.okto.tech/docs/flutter-sdk/getting-started/new-okto-flutter-setup)\n\n### 3. Okto React Native SDK\n\nMobile app developers working with React Native will find the <strong>Okto React Native SDK</strong> invaluable. It simplifies the process of integrating Web3 functionalities into your mobile applications, providing users with a smooth Web3 journey from any device.\n\n1. <strong>Learn More:</strong> [Okto React Native SDK Overview](https://docs.okto.tech/docs/react-native-sdk)\n2. <strong>Quick Start Guide:</strong> [Get Started with Okto React Native SDK](https://docs.okto.tech/docs/react-native-sdk/getting-started/new-okto-react-native-setup)\n\n### 4. Okto Unity SDK\n\nGame developers can now bring Web3 functionalities to their Unity projects with the Okto Unity SDK. Whether you’re developing games for web, mobile, or desktop, the Unity SDK allows you to integrate authentication, wallet management, token transfers, and NFT operations seamlessly and help you unlock blockchain-powered gaming experiences quickly and effectively.\n\n1. <strong>Learn More:</strong> [Okto Unity SDK Overview](https://docs.okto.tech/docs/unity-sdk)\n2. <strong>Quick Start Guide:</strong> [Get Started with Okto Unity SDK](https://docs.google.com/document/d/1V7guvCvgYzjKsJUK9xKRdSPSbg3RAoC0Bu_AnH9t7Og/edit?tab=t.0#heading=h.n2y9pwxzfsby)\n\n## Create Okto App\n\nFor an even faster start, Okto provides a pre-configured setup for <strong>React, Next.js, and React Native applications</strong>. This setup utilizes a CLI tool that scaffolds your project with all the essential configurations, saving you time and effort.\n\n### Here's How You Can Do It:\n\n<strong>Step 1:Create a New Project</strong>\nOpen your terminal and run the following command:\n\n```bash\nnpx create-okto-app@latest\n```\n\nYou’ll be prompted to choose a template and enter your project name:\n\n```bash\nWelcome to create-okto-app!\n✔ Choose a template: › (React, React Native or Next.js)\n✔ Enter your project name: › my-okto-app\n```\n\n<em>You can select <strong>React, React Native, or Next.js</strong> based on your project requirements.</em>\n\nAfter the setup is complete, navigate into your project directory and install dependencies:\n\n```bash\ncd my-okto-app\nnpm install\n```\n\n<strong>Step 2: Configure Environment Variables</strong>\n\nNext, create a `.env` file in the root of your project with the following content:\n\n```bash\nREACT_APP_GOOGLE_CLIENT_ID=\"YOUR_GOOGLE_CLIENT_ID\"\nREACT_APP_OKTO_CLIENT_API_KEY=\"YOUR_OKTO_CLIENT_API_KEY\"\n```\n\n<em>Replace “YOUR_GOOGLE_CLIENT_ID” and “YOUR_OKTO_CLIENT_API_KEY” with the actual values you obtained earlier.</em>\n\n<strong>Step 3: Start the Development Server</strong>\n\nRun the following command to start your app:\n\n```bash\nnpm run dev\n```\n\nYour application should now be running at `http://localhost:3000`.\n\n<strong>Congratulations!</strong>\n\n🎉 You’ve successfully set up a fully configured Okto-powered application! All the necessary components are in place, and you’re ready to start building amazing Web3 features.\n\n## Explore Showcase\n\nOne of the best ways to understand the potential of the Okto SDK is by seeing it in action. Many developers have already built innovative and exciting projects using Okto. From decentralized finance apps to interactive gaming experiences, the possibilities are endless.\n\nVisit our [Showcase Page](https://docs.okto.tech/showcase) to explore these projects. You’ll find a variety of applications that demonstrate the versatility and power of the Okto SDK. Not only can you see what others have created, but you might also find inspiration for your own projects.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*G46jj0ww9_PlSaNs\" alt=\"Getting Started with Okto\" />\n\nThe showcase highlights how Okto’s features can be applied across different industries and use cases. It’s a testament to what’s possible when complex blockchain technologies are made accessible.\n\n## Conclusion\n\nEmbracing Web3 development doesn’t have to be overwhelming. With the Okto SDK, you have a powerful and flexible toolkit designed to make your development process smooth and efficient. By abstracting away the complexities of blockchain interactions, Okto allows you to focus on what truly matters — creating exceptional user experiences.\n\nWhether you’re building a simple dApp or a complex multi-chain application, the Okto SDK equips you with the tools you need. Its plug-and-play solutions, combined with customizable features, offer the perfect balance between simplicity and power.\n\nTo dive deeper into the implementation details and explore additional features, head over to the [Official Okto Documentation](https://docs.okto.tech/).\n\nNow is the perfect time to jump into Web3 development. With the Okto SDK, you can turn your innovative ideas into reality. Don’t let the complexities of blockchain technology hold you back — <strong>Start building with Okto today!</strong>\n\n<em>Happy Coding! 🚀</em>",
    "title": "Getting Started with Okto SDK",
    "description": "Learn how to get started with Okto SDKs, check out the different available SDKs, and set up your first project using it.",
    "_meta": {
      "filePath": "getting-started-with-okto.mdx",
      "fileName": "getting-started-with-okto.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "getting-started-with-okto"
    },
    "toc": [
      {
        "title": "What is Okto SDK?",
        "url": "#what-is-okto-sdk",
        "depth": 2
      },
      {
        "title": "Ways to Build on Okto",
        "url": "#ways-to-build-on-okto",
        "depth": 2
      },
      {
        "title": "Prerequisites",
        "url": "#prerequisites",
        "depth": 2
      },
      {
        "title": "1. Get Your Okto App Secret",
        "url": "#1-get-your-okto-app-secret",
        "depth": 3
      },
      {
        "title": "2. Authentication Methods",
        "url": "#2-authentication-methods",
        "depth": 3
      },
      {
        "title": "3. Enable Chains and Tokens",
        "url": "#3-enable-chains-and-tokens",
        "depth": 3
      },
      {
        "title": "4. Optional: Enable Sponsorship",
        "url": "#4-optional-enable-sponsorship",
        "depth": 3
      },
      {
        "title": "Available SDKs",
        "url": "#available-sdks",
        "depth": 2
      },
      {
        "title": "1. Okto React SDK",
        "url": "#1-okto-react-sdk",
        "depth": 3
      },
      {
        "title": "2. Okto Flutter SDK",
        "url": "#2-okto-flutter-sdk",
        "depth": 3
      },
      {
        "title": "3. Okto React Native SDK",
        "url": "#3-okto-react-native-sdk",
        "depth": 3
      },
      {
        "title": "4. Okto Unity SDK",
        "url": "#4-okto-unity-sdk",
        "depth": 3
      },
      {
        "title": "Create Okto App",
        "url": "#create-okto-app",
        "depth": 2
      },
      {
        "title": "Here's How You Can Do It:",
        "url": "#heres-how-you-can-do-it",
        "depth": 3
      },
      {
        "title": "Explore Showcase",
        "url": "#explore-showcase",
        "depth": 2
      },
      {
        "title": "Conclusion",
        "url": "#conclusion",
        "depth": 2
      }
    ],
    "structuredData": {
      "contents": [
        {
          "heading": "",
          "content": "The world of Web3 is revolutionizing how we interact with the internet, bringing decentralized applications (dApps) that empower users like never before. However, despite its potential, developing on Web3 can be challenging because of the complexities of blockchain technology and unfamiliar protocols. But what if you could build Web3 applications as easily as traditional web apps?"
        },
        {
          "heading": "",
          "content": "Enter the Okto SDK — your gateway to easy Web3 development. Designed to abstract blockchain complexities, the Okto SDK enables you to create powerful and user-friendly applications without getting bogged down by technical challenges. In this blog, we’ll guide you through everything you need to know to get started with the Okto SDK and confidently begin your Web3 journey."
        },
        {
          "heading": "what-is-okto-sdk",
          "content": "Before diving into the setup, let’s discuss what makes the Okto SDK a game-changer for developers."
        },
        {
          "heading": "what-is-okto-sdk",
          "content": "The Okto SDK is a comprehensive toolkit that simplifies the development of Web3 applications. It provides a chain abstraction layer that allows you to build consumer apps in a way that feels familiar. By managing the complex blockchain interactions behind the scenes, the SDK lets you focus on delivering the seamless user experiences expected from modern web applications."
        },
        {
          "heading": "what-is-okto-sdk",
          "content": "The Okto SDK makes blockchain development much easier by providing features like single function calls for any blockchain action, a unified portfolio across different ecosystems, and abstraction of chain, account, and gas details. This means you can focus on creating easy-to-use interfaces and fun features without needing to worry about the technical blockchain details. The SDK’s plug-and-play nature also makes it highly customizable, allowing you to adapt it to your specific project needs."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Recognizing that developers have different preferences and project requirements, Okto offers several ways to integrate its powerful features into your applications."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Okto React SDK: Ideal for building web applications using React."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Okto React Native SDK: Perfect for creating mobile apps with React Native."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Okto Flutter SDK: Designed for mobile developers working with Flutter/Dart."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Unity SDK: Ideal for game developers using Unity for web/mobile/desktop/playstation games."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "Direct API Integration: For those who prefer to interact directly via APIs or working on any other platform not supported by the SDKs."
        },
        {
          "heading": "ways-to-build-on-okto",
          "content": "No matter your platform of choice, Okto ensures a smooth development experience across various technologies."
        },
        {
          "heading": "prerequisites",
          "content": "Before you start building your app using Okto, there are a couple of things you need to set up."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "The first step is to sign up on the Okto Dashboard to obtain your Okto App Secret. This key is crucial for authenticating your API requests. Make sure to keep it secure and never expose it publicly or include it in client-side code."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "Navigate to the Dashboard Login Page: Go to Okto Dashboard."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "Enter Your Email Address: Input your preferred email to log in."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "Verify Your Email: Enter the OTP you received in your inbox."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "Access Your Dashboard: Once verified, you’ll be logged into your new dashboard account."
        },
        {
          "heading": "1-get-your-okto-app-secret",
          "content": "Get Your App Secret: Navigate to the “API Keys” section and click on “Get App Secret.”"
        },
        {
          "heading": "2-authentication-methods",
          "content": "User authentication is a vital component of any application. The Okto SDK supports multiple authentication methods to onboard users seamlessly."
        },
        {
          "heading": "2-authentication-methods",
          "content": "Currently, Okto offers the following authentication options:"
        },
        {
          "heading": "2-authentication-methods",
          "content": "1. Google OAuth:\nTo authenticate users via Google, you’ll need to set up a Google Console Project."
        },
        {
          "heading": "2-authentication-methods",
          "content": "Follow our Google OAuth2 Setup Guide to create a project in Google Cloud Console."
        },
        {
          "heading": "2-authentication-methods",
          "content": "Once configured, you’ll receive a Google Client ID that will be used in your application for secure authentication."
        },
        {
          "heading": "2-authentication-methods",
          "content": "2. Email OTP:\nOkto allows users to log in using their email addresses with a secure One-Time Password (OTP). The SDK manages the process of generating, sending, and verifying OTPs, ensuring a smooth user experience."
        },
        {
          "heading": "2-authentication-methods",
          "content": "3. Phone OTP:\nWith phone OTP authentication, users can log in using their phone numbers with a secure One-Time Password (OTP). The SDK securely handles OTP generation, sending, and verification."
        },
        {
          "heading": "2-authentication-methods",
          "content": "Okto also plans to support other methods like Apple ID, Telegram, and Farcaster in the future."
        },
        {
          "heading": "3-enable-chains-and-tokens",
          "content": "It is compulsory to enable chains and tokens on the Okto Dashboard. This step is necessary to ensure your application can interact with supported blockchain networks."
        },
        {
          "heading": "4-optional-enable-sponsorship",
          "content": "You may also choose to enable sponsorship, which is a feature that allows you to cover transaction fees (gas fees) for your users. This creates a smoother user experience by removing the need for users to hold native tokens for transaction fees."
        },
        {
          "heading": "4-optional-enable-sponsorship",
          "content": "Sponsorship integrates with Okto’s wallet infrastructure to automatically cover gas fees for transactions on supported chains. When a user initiates a transaction, the sponsorship system pays the required gas fee, allowing the transaction to proceed even if the user doesn’t have the native token for gas."
        },
        {
          "heading": "available-sdks",
          "content": "Now that you’ve completed the prerequisites, let’s take a closer look at the SDKs Okto offers. Each SDK is designed to integrate seamlessly with your preferred development platform."
        },
        {
          "heading": "1-okto-react-sdk",
          "content": "If you’re building a web application with React, the Okto React SDK is your go-to solution. It streamlines the integration of Web3 functionalities, allowing you to onboard users into the Web3 ecosystem effortlessly. With minimal setup, you can start providing users with a seamless Web3 experience."
        },
        {
          "heading": "1-okto-react-sdk",
          "content": "Learn More: Okto React SDK Overview"
        },
        {
          "heading": "1-okto-react-sdk",
          "content": "Quick Start Guide: Get Started with Okto React SDK"
        },
        {
          "heading": "2-okto-flutter-sdk",
          "content": "For developers using Flutter, the Okto Flutter SDK provides a straightforward way to add Web3 features to your app. It’s designed to minimize setup time so you can focus on delivering a smooth and engaging user experience, all while taking advantage of Flutter’s cross-platform capabilities."
        },
        {
          "heading": "2-okto-flutter-sdk",
          "content": "Learn More: Okto Flutter SDK Overview"
        },
        {
          "heading": "2-okto-flutter-sdk",
          "content": "Quick Start Guide: Get Started with Okto Flutter SDK"
        },
        {
          "heading": "3-okto-react-native-sdk",
          "content": "Mobile app developers working with React Native will find the Okto React Native SDK invaluable. It simplifies the process of integrating Web3 functionalities into your mobile applications, providing users with a smooth Web3 journey from any device."
        },
        {
          "heading": "3-okto-react-native-sdk",
          "content": "Learn More: Okto React Native SDK Overview"
        },
        {
          "heading": "3-okto-react-native-sdk",
          "content": "Quick Start Guide: Get Started with Okto React Native SDK"
        },
        {
          "heading": "4-okto-unity-sdk",
          "content": "Game developers can now bring Web3 functionalities to their Unity projects with the Okto Unity SDK. Whether you’re developing games for web, mobile, or desktop, the Unity SDK allows you to integrate authentication, wallet management, token transfers, and NFT operations seamlessly and help you unlock blockchain-powered gaming experiences quickly and effectively."
        },
        {
          "heading": "4-okto-unity-sdk",
          "content": "Learn More: Okto Unity SDK Overview"
        },
        {
          "heading": "4-okto-unity-sdk",
          "content": "Quick Start Guide: Get Started with Okto Unity SDK"
        },
        {
          "heading": "create-okto-app",
          "content": "For an even faster start, Okto provides a pre-configured setup for React, Next.js, and React Native applications. This setup utilizes a CLI tool that scaffolds your project with all the essential configurations, saving you time and effort."
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "Step 1:Create a New Project\nOpen your terminal and run the following command:"
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "You’ll be prompted to choose a template and enter your project name:"
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "After the setup is complete, navigate into your project directory and install dependencies:"
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "Next, create a .env file in the root of your project with the following content:"
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "Run the following command to start your app:"
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "Your application should now be running at http://localhost:3000."
        },
        {
          "heading": "heres-how-you-can-do-it",
          "content": "🎉 You’ve successfully set up a fully configured Okto-powered application! All the necessary components are in place, and you’re ready to start building amazing Web3 features."
        },
        {
          "heading": "explore-showcase",
          "content": "One of the best ways to understand the potential of the Okto SDK is by seeing it in action. Many developers have already built innovative and exciting projects using Okto. From decentralized finance apps to interactive gaming experiences, the possibilities are endless."
        },
        {
          "heading": "explore-showcase",
          "content": "Visit our Showcase Page to explore these projects. You’ll find a variety of applications that demonstrate the versatility and power of the Okto SDK. Not only can you see what others have created, but you might also find inspiration for your own projects."
        },
        {
          "heading": "explore-showcase",
          "content": "The showcase highlights how Okto’s features can be applied across different industries and use cases. It’s a testament to what’s possible when complex blockchain technologies are made accessible."
        },
        {
          "heading": "conclusion",
          "content": "Embracing Web3 development doesn’t have to be overwhelming. With the Okto SDK, you have a powerful and flexible toolkit designed to make your development process smooth and efficient. By abstracting away the complexities of blockchain interactions, Okto allows you to focus on what truly matters — creating exceptional user experiences."
        },
        {
          "heading": "conclusion",
          "content": "Whether you’re building a simple dApp or a complex multi-chain application, the Okto SDK equips you with the tools you need. Its plug-and-play solutions, combined with customizable features, offer the perfect balance between simplicity and power."
        },
        {
          "heading": "conclusion",
          "content": "To dive deeper into the implementation details and explore additional features, head over to the Official Okto Documentation."
        },
        {
          "heading": "conclusion",
          "content": "Now is the perfect time to jump into Web3 development. With the Okto SDK, you can turn your innovative ideas into reality. Don’t let the complexities of blockchain technology hold you back — Start building with Okto today!"
        }
      ],
      "headings": [
        {
          "id": "what-is-okto-sdk",
          "content": "What is Okto SDK?"
        },
        {
          "id": "ways-to-build-on-okto",
          "content": "Ways to Build on Okto"
        },
        {
          "id": "prerequisites",
          "content": "Prerequisites"
        },
        {
          "id": "1-get-your-okto-app-secret",
          "content": "1. Get Your Okto App Secret"
        },
        {
          "id": "2-authentication-methods",
          "content": "2. Authentication Methods"
        },
        {
          "id": "3-enable-chains-and-tokens",
          "content": "3. Enable Chains and Tokens"
        },
        {
          "id": "4-optional-enable-sponsorship",
          "content": "4. Optional: Enable Sponsorship"
        },
        {
          "id": "available-sdks",
          "content": "Available SDKs"
        },
        {
          "id": "1-okto-react-sdk",
          "content": "1. Okto React SDK"
        },
        {
          "id": "2-okto-flutter-sdk",
          "content": "2. Okto Flutter SDK"
        },
        {
          "id": "3-okto-react-native-sdk",
          "content": "3. Okto React Native SDK"
        },
        {
          "id": "4-okto-unity-sdk",
          "content": "4. Okto Unity SDK"
        },
        {
          "id": "create-okto-app",
          "content": "Create Okto App"
        },
        {
          "id": "heres-how-you-can-do-it",
          "content": "Here's How You Can Do It:"
        },
        {
          "id": "explore-showcase",
          "content": "Explore Showcase"
        },
        {
          "id": "conclusion",
          "content": "Conclusion"
        }
      ]
    },
    "body": "var Component=(()=>{var p=Object.create;var s=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var y=(t,i)=>()=>(i||t((i={exports:{}}).exports,i),i.exports),f=(t,i)=>{for(var n in i)s(t,n,{get:i[n],enumerable:!0})},r=(t,i,n,a)=>{if(i&&typeof i==\"object\"||typeof i==\"function\")for(let o of k(i))!m.call(t,o)&&o!==n&&s(t,o,{get:()=>i[o],enumerable:!(a=u(i,o))||a.enumerable});return t};var b=(t,i,n)=>(n=t!=null?p(g(t)):{},r(i||!t||!t.__esModule?s(n,\"default\",{value:t,enumerable:!0}):n,t)),w=t=>r(s({},\"__esModule\",{value:!0}),t);var h=y((O,l)=>{l.exports=_jsx_runtime});var v={};f(v,{default:()=>d});var e=b(h());function c(t){let i={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",ol:\"ol\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",ul:\"ul\",...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*ypV3mYzjZvoqJx2ecyB7yA.png\",alt:\"Getting Started with Okto\"}),`\n`,(0,e.jsxs)(\"em\",{children:[(0,e.jsx)(\"strong\",{children:\"TL;DR:\"}),\" This blog introduces the Okto SDK, a comprehensive toolkit that simplifies Web3 development by abstracting blockchain complexities. You\\u2019ll learn how to get started with Okto SDKs, check out the different available SDKs, and set up your first project using it. By the end, you\\u2019ll be ready to build simple yet powerful Web3 applications with ease.\"]}),`\n`,(0,e.jsx)(i.p,{children:\"The world of Web3 is revolutionizing how we interact with the internet, bringing decentralized applications (dApps) that empower users like never before. However, despite its potential, developing on Web3 can be challenging because of the complexities of blockchain technology and unfamiliar protocols. But what if you could build Web3 applications as easily as traditional web apps?\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"Enter the \",(0,e.jsx)(\"strong\",{children:\"Okto SDK\"}),\" \\u2014 your gateway to easy Web3 development. Designed to abstract blockchain complexities, the Okto SDK enables you to create powerful and user-friendly applications without getting bogged down by technical challenges. In this blog, we\\u2019ll guide you through everything you need to know to get started with the Okto SDK and confidently begin your Web3 journey.\"]}),`\n`,(0,e.jsx)(i.h2,{id:\"what-is-okto-sdk\",children:\"What is Okto SDK?\"}),`\n`,(0,e.jsx)(i.p,{children:\"Before diving into the setup, let\\u2019s discuss what makes the Okto SDK a game-changer for developers.\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"The \",(0,e.jsx)(\"strong\",{children:\"Okto SDK\"}),\" is a comprehensive toolkit that simplifies the development of Web3 applications. It provides a chain abstraction layer that allows you to build consumer apps in a way that feels familiar. By managing the complex blockchain interactions behind the scenes, the SDK lets you focus on delivering the seamless user experiences expected from modern web applications.\"]}),`\n`,(0,e.jsx)(i.p,{children:\"The Okto SDK makes blockchain development much easier by providing features like single function calls for any blockchain action, a unified portfolio across different ecosystems, and abstraction of chain, account, and gas details. This means you can focus on creating easy-to-use interfaces and fun features without needing to worry about the technical blockchain details. The SDK\\u2019s plug-and-play nature also makes it highly customizable, allowing you to adapt it to your specific project needs.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"ways-to-build-on-okto\",children:\"Ways to Build on Okto\"}),`\n`,(0,e.jsx)(i.p,{children:\"Recognizing that developers have different preferences and project requirements, Okto offers several ways to integrate its powerful features into your applications.\"}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:\"Okto React SDK\"}),\": Ideal for building web applications using React.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:\"Okto React Native SDK\"}),\": Perfect for creating mobile apps with React Native.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:\"Okto Flutter SDK\"}),\": Designed for mobile developers working with Flutter/Dart.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:\"Unity SDK\"}),\": Ideal for game developers using Unity for web/mobile/desktop/playstation games.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:\"Direct API Integration\"}),\": For those who prefer to interact directly via APIs or working on any other platform not supported by the SDKs.\"]}),`\n`]}),`\n`,(0,e.jsx)(i.p,{children:\"No matter your platform of choice, Okto ensures a smooth development experience across various technologies.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"prerequisites\",children:\"Prerequisites\"}),`\n`,(0,e.jsx)(i.p,{children:\"Before you start building your app using Okto, there are a couple of things you need to set up.\"}),`\n`,(0,e.jsx)(i.h3,{id:\"1-get-your-okto-app-secret\",children:\"1. Get Your Okto App Secret\"}),`\n`,(0,e.jsx)(i.p,{children:\"The first step is to sign up on the Okto Dashboard to obtain your Okto App Secret. This key is crucial for authenticating your API requests. Make sure to keep it secure and never expose it publicly or include it in client-side code.\"}),`\n`,(0,e.jsx)(\"strong\",{children:\"Steps to Get Your App Secret:\"}),`\n`,(0,e.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I_nzQE2kACXwVPh9d2wxQQ.png\",alt:\"Getting Started with Okto\"}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Navigate to the Dashboard Login Page:\"}),\" Go to \",(0,e.jsx)(i.a,{href:\"https://dashboard.okto.tech/login\",children:\"Okto Dashboard\"}),\".\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Enter Your Email Address:\"}),\" Input your preferred email to log in.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Verify Your Email:\"}),\" Enter the OTP you received in your inbox.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Access Your Dashboard:\"}),\" Once verified, you\\u2019ll be logged into your new dashboard account.\"]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Get Your App Secret:\"}),\" Navigate to the \\u201CAPI Keys\\u201D section and click on \\u201CGet App Secret.\\u201D\"]}),`\n`]}),`\n`,(0,e.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O3hVW2UbZgErPmY_oibl7Q.png\",alt:\"Getting Started with Okto\"}),`\n`,(0,e.jsx)(\"strong\",{children:\"Note:\"}),`\n`,(0,e.jsx)(\"em\",{children:\"The \\u201CApp ID\\u201D, which is also revealed in the \\u201CAPI Keys\\u201D page, is different. It is a public unique ID, but the \\u201CApp Secret\\u201D is the actual key you need to download and keep safe. You can use this key to access all SDK and client-side APIs.\"}),`\n`,(0,e.jsx)(i.h3,{id:\"2-authentication-methods\",children:\"2. Authentication Methods\"}),`\n`,(0,e.jsx)(i.p,{children:\"User authentication is a vital component of any application. The Okto SDK supports multiple authentication methods to onboard users seamlessly.\"}),`\n`,(0,e.jsx)(i.p,{children:\"Currently, Okto offers the following authentication options:\"}),`\n`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(\"strong\",{children:\"1. Google OAuth:\"}),`\nTo authenticate users via Google, you\\u2019ll need to set up a Google Console Project.`]}),`\n`,(0,e.jsxs)(i.ul,{children:[`\n`,(0,e.jsxs)(i.li,{children:[\"Follow our \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/authenticate-users/google-oauth/learn\",children:\"Google OAuth2 Setup Guide\"}),\" to create a project in Google Cloud Console.\"]}),`\n`,(0,e.jsx)(i.li,{children:\"Once configured, you\\u2019ll receive a Google Client ID that will be used in your application for secure authentication.\"}),`\n`]}),`\n`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(\"strong\",{children:\"2. Email OTP:\"}),`\nOkto allows users to log in using their email addresses with a secure One-Time Password (OTP). The SDK manages the process of generating, sending, and verifying OTPs, ensuring a smooth user experience.`]}),`\n`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(\"strong\",{children:\"3. Phone OTP:\"}),`\nWith phone OTP authentication, users can log in using their phone numbers with a secure One-Time Password (OTP). The SDK securely handles OTP generation, sending, and verification.`]}),`\n`,(0,e.jsx)(i.p,{children:\"Okto also plans to support other methods like Apple ID, Telegram, and Farcaster in the future.\"}),`\n`,(0,e.jsx)(i.h3,{id:\"3-enable-chains-and-tokens\",children:\"3. Enable Chains and Tokens\"}),`\n`,(0,e.jsx)(i.p,{children:\"It is compulsory to enable chains and tokens on the Okto Dashboard. This step is necessary to ensure your application can interact with supported blockchain networks.\"}),`\n`,(0,e.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sH5Nz0JwwZ4P79fMCZjBIw.png\",alt:\"Getting Started with Okto\"}),`\n`,(0,e.jsx)(i.h3,{id:\"4-optional-enable-sponsorship\",children:\"4. Optional: Enable Sponsorship\"}),`\n`,(0,e.jsx)(i.p,{children:\"You may also choose to enable sponsorship, which is a feature that allows you to cover transaction fees (gas fees) for your users. This creates a smoother user experience by removing the need for users to hold native tokens for transaction fees.\"}),`\n`,(0,e.jsx)(i.p,{children:\"Sponsorship integrates with Okto\\u2019s wallet infrastructure to automatically cover gas fees for transactions on supported chains. When a user initiates a transaction, the sponsorship system pays the required gas fee, allowing the transaction to proceed even if the user doesn\\u2019t have the native token for gas.\"}),`\n`,(0,e.jsx)(\"strong\",{children:\"Note:\"}),`\n`,(0,e.jsx)(\"em\",{children:\"For Solana chains like mainnet and devnet, account creation involves adding rent, so sponsorship is compulsory. If you enable the Solana chain, you must enable sponsorship and add funds to that chain.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"available-sdks\",children:\"Available SDKs\"}),`\n`,(0,e.jsx)(i.p,{children:\"Now that you\\u2019ve completed the prerequisites, let\\u2019s take a closer look at the SDKs Okto offers. Each SDK is designed to integrate seamlessly with your preferred development platform.\"}),`\n`,(0,e.jsx)(i.h3,{id:\"1-okto-react-sdk\",children:\"1. Okto React SDK\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"If you\\u2019re building a web application with React, the \",(0,e.jsx)(\"strong\",{children:\"Okto React SDK\"}),\" is your go-to solution. It streamlines the integration of Web3 functionalities, allowing you to onboard users into the Web3 ecosystem effortlessly. With minimal setup, you can start providing users with a seamless Web3 experience.\"]}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Learn More:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/react-sdk\",children:\"Okto React SDK Overview\"})]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Quick Start Guide:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/react-sdk/getting-started/new-okto-react-setup\",children:\"Get Started with Okto React SDK\"})]}),`\n`]}),`\n`,(0,e.jsx)(i.h3,{id:\"2-okto-flutter-sdk\",children:\"2. Okto Flutter SDK\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"For developers using Flutter, the \",(0,e.jsx)(\"strong\",{children:\"Okto Flutter SDK\"}),\" provides a straightforward way to add Web3 features to your app. It\\u2019s designed to minimize setup time so you can focus on delivering a smooth and engaging user experience, all while taking advantage of Flutter\\u2019s cross-platform capabilities.\"]}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Learn More:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/flutter-sdk\",children:\"Okto Flutter SDK Overview\"})]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Quick Start Guide:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/getting-started/new-okto-flutter-setup\",children:\"Get Started with Okto Flutter SDK\"})]}),`\n`]}),`\n`,(0,e.jsx)(i.h3,{id:\"3-okto-react-native-sdk\",children:\"3. Okto React Native SDK\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"Mobile app developers working with React Native will find the \",(0,e.jsx)(\"strong\",{children:\"Okto React Native SDK\"}),\" invaluable. It simplifies the process of integrating Web3 functionalities into your mobile applications, providing users with a smooth Web3 journey from any device.\"]}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Learn More:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/react-native-sdk\",children:\"Okto React Native SDK Overview\"})]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Quick Start Guide:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/getting-started/new-okto-react-native-setup\",children:\"Get Started with Okto React Native SDK\"})]}),`\n`]}),`\n`,(0,e.jsx)(i.h3,{id:\"4-okto-unity-sdk\",children:\"4. Okto Unity SDK\"}),`\n`,(0,e.jsx)(i.p,{children:\"Game developers can now bring Web3 functionalities to their Unity projects with the Okto Unity SDK. Whether you\\u2019re developing games for web, mobile, or desktop, the Unity SDK allows you to integrate authentication, wallet management, token transfers, and NFT operations seamlessly and help you unlock blockchain-powered gaming experiences quickly and effectively.\"}),`\n`,(0,e.jsxs)(i.ol,{children:[`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Learn More:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/docs/unity-sdk\",children:\"Okto Unity SDK Overview\"})]}),`\n`,(0,e.jsxs)(i.li,{children:[(0,e.jsx)(\"strong\",{children:\"Quick Start Guide:\"}),\" \",(0,e.jsx)(i.a,{href:\"https://docs.google.com/document/d/1V7guvCvgYzjKsJUK9xKRdSPSbg3RAoC0Bu_AnH9t7Og/edit?tab=t.0#heading=h.n2y9pwxzfsby\",children:\"Get Started with Okto Unity SDK\"})]}),`\n`]}),`\n`,(0,e.jsx)(i.h2,{id:\"create-okto-app\",children:\"Create Okto App\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"For an even faster start, Okto provides a pre-configured setup for \",(0,e.jsx)(\"strong\",{children:\"React, Next.js, and React Native applications\"}),\". This setup utilizes a CLI tool that scaffolds your project with all the essential configurations, saving you time and effort.\"]}),`\n`,(0,e.jsx)(i.h3,{id:\"heres-how-you-can-do-it\",children:\"Here's How You Can Do It:\"}),`\n`,(0,e.jsxs)(i.p,{children:[(0,e.jsx)(\"strong\",{children:\"Step 1:Create a New Project\"}),`\nOpen your terminal and run the following command:`]}),`\n`,(0,e.jsx)(i.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,e.jsx)(i.code,{children:(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"npx\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" create-okto-app@latest\"})]})})}),`\n`,(0,e.jsx)(i.p,{children:\"You\\u2019ll be prompted to choose a template and enter your project name:\"}),`\n`,(0,e.jsx)(i.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,e.jsxs)(i.code,{children:[(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"Welcome\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" to\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" create-okto-app!\"})]}),`\n`,(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"\\u2714\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" Choose\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" a\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" template:\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" \\u203A\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\" (React, \"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\"React\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" Native\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" or\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" Next.js\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\")\"})]}),`\n`,(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"\\u2714\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" Enter\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" your\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" project\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" name:\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" \\u203A\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" my-okto-app\"})]})]})}),`\n`,(0,e.jsxs)(\"em\",{children:[\"You can select \",(0,e.jsx)(\"strong\",{children:\"React, React Native, or Next.js\"}),\" based on your project requirements.\"]}),`\n`,(0,e.jsx)(i.p,{children:\"After the setup is complete, navigate into your project directory and install dependencies:\"}),`\n`,(0,e.jsx)(i.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,e.jsxs)(i.code,{children:[(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"cd\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" my-okto-app\"})]}),`\n`,(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"npm\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" install\"})]})]})}),`\n`,(0,e.jsx)(\"strong\",{children:\"Step 2: Configure Environment Variables\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"Next, create a \",(0,e.jsx)(i.code,{children:\".env\"}),\" file in the root of your project with the following content:\"]}),`\n`,(0,e.jsx)(i.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,e.jsxs)(i.code,{children:[(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"REACT_APP_GOOGLE_CLIENT_ID\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#D73A49\",\"--shiki-dark\":\"#F97583\"},children:\"=\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"YOUR_GOOGLE_CLIENT_ID\"'})]}),`\n`,(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"REACT_APP_OKTO_CLIENT_API_KEY\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#D73A49\",\"--shiki-dark\":\"#F97583\"},children:\"=\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:'\"YOUR_OKTO_CLIENT_API_KEY\"'})]})]})}),`\n`,(0,e.jsx)(\"em\",{children:\"Replace \\u201CYOUR_GOOGLE_CLIENT_ID\\u201D and \\u201CYOUR_OKTO_CLIENT_API_KEY\\u201D with the actual values you obtained earlier.\"}),`\n`,(0,e.jsx)(\"strong\",{children:\"Step 3: Start the Development Server\"}),`\n`,(0,e.jsx)(i.p,{children:\"Run the following command to start your app:\"}),`\n`,(0,e.jsx)(i.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,e.jsx)(i.code,{children:(0,e.jsxs)(i.span,{className:\"line\",children:[(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"npm\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" run\"}),(0,e.jsx)(i.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" dev\"})]})})}),`\n`,(0,e.jsxs)(i.p,{children:[\"Your application should now be running at \",(0,e.jsx)(i.code,{children:\"http://localhost:3000\"}),\".\"]}),`\n`,(0,e.jsx)(\"strong\",{children:\"Congratulations!\"}),`\n`,(0,e.jsx)(i.p,{children:\"\\u{1F389} You\\u2019ve successfully set up a fully configured Okto-powered application! All the necessary components are in place, and you\\u2019re ready to start building amazing Web3 features.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"explore-showcase\",children:\"Explore Showcase\"}),`\n`,(0,e.jsx)(i.p,{children:\"One of the best ways to understand the potential of the Okto SDK is by seeing it in action. Many developers have already built innovative and exciting projects using Okto. From decentralized finance apps to interactive gaming experiences, the possibilities are endless.\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"Visit our \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/showcase\",children:\"Showcase Page\"}),\" to explore these projects. You\\u2019ll find a variety of applications that demonstrate the versatility and power of the Okto SDK. Not only can you see what others have created, but you might also find inspiration for your own projects.\"]}),`\n`,(0,e.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*G46jj0ww9_PlSaNs\",alt:\"Getting Started with Okto\"}),`\n`,(0,e.jsx)(i.p,{children:\"The showcase highlights how Okto\\u2019s features can be applied across different industries and use cases. It\\u2019s a testament to what\\u2019s possible when complex blockchain technologies are made accessible.\"}),`\n`,(0,e.jsx)(i.h2,{id:\"conclusion\",children:\"Conclusion\"}),`\n`,(0,e.jsx)(i.p,{children:\"Embracing Web3 development doesn\\u2019t have to be overwhelming. With the Okto SDK, you have a powerful and flexible toolkit designed to make your development process smooth and efficient. By abstracting away the complexities of blockchain interactions, Okto allows you to focus on what truly matters \\u2014 creating exceptional user experiences.\"}),`\n`,(0,e.jsx)(i.p,{children:\"Whether you\\u2019re building a simple dApp or a complex multi-chain application, the Okto SDK equips you with the tools you need. Its plug-and-play solutions, combined with customizable features, offer the perfect balance between simplicity and power.\"}),`\n`,(0,e.jsxs)(i.p,{children:[\"To dive deeper into the implementation details and explore additional features, head over to the \",(0,e.jsx)(i.a,{href:\"https://docs.okto.tech/\",children:\"Official Okto Documentation\"}),\".\"]}),`\n`,(0,e.jsxs)(i.p,{children:[\"Now is the perfect time to jump into Web3 development. With the Okto SDK, you can turn your innovative ideas into reality. Don\\u2019t let the complexities of blockchain technology hold you back \\u2014 \",(0,e.jsx)(\"strong\",{children:\"Start building with Okto today!\"})]}),`\n`,(0,e.jsx)(\"em\",{children:\"Happy Coding! \\u{1F680}\"})]})}function d(t={}){let{wrapper:i}=t.components||{};return i?(0,e.jsx)(i,{...t,children:(0,e.jsx)(c,{...t})}):c(t)}return w(v);})();\n;return Component;"
  },
  {
    "content": "<img src=\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*BNp4r3Ri3nMm26gBaQQGRg.png\" alt=\"Interacting with Tokens on Okto SDK: A Comprehensive Guide\" />\n\n<strong>TL;DR:</strong>\n<em>Learn how to enable chains and tokens, interact with APIs, and manage tokens seamlessly using the Okto SDK. A single API call empowers developers to build powerful token-based dApps without blockchain complexities.</em>\n\n## Introduction: The Power of Tokens with Okto\n\nTokens are at the heart of blockchain applications. Whether you’re building DeFi platforms, gaming ecosystems, or NFT marketplaces, tokens drive user interactions and utility. However, <strong>working with tokens across multiple chains</strong> has historically been a nightmare.\n\nEach blockchain has its own standards for accounts, token handling, and transaction flows, forcing developers to:\n\n- Learn chain-specific models (e.g., account-based vs. UTXO).\n- Construct intricate transaction objects.\n- Manage gas fees, nonce handling, and retries.\n\nThis fragmented experience has made cross-chain development a daunting task.\n\n<strong>Enter Okto.</strong> Okto abstracts away these challenges, offering a seamless and unified way to interact with tokens across diverse ecosystems. With Okto, transferring tokens (whether native, ERC20, or other fungible assets) across any of the diverse chains becomes as simple as one API call. No chain-specific nuances, no transaction complexity. Just a clean, developer-friendly experience.\n\nIn this guide, we’ll walk you through the steps to enable blockchain networks (chains) and whitelist tokens on the Okto dashboard. We’ll also dive into various API functions provided by the Okto SDK that allow you to interact with tokens.\n\nBy the end of this guide, you’ll be equipped to integrate token interactions into your applications, unlocking the full potential of cross-chain development without the blockchain headaches.\n\n## Enabling Chains and Whitelisting Tokens\n\nBefore you can start interacting with tokens, it’s essential to configure which <strong>blockchain networks (chains)</strong> and <strong>tokens</strong> your application will support. This configuration is done through the Okto dashboard’s <strong>Wallet Controls</strong> feature.\n\n### Enabling Chains\n\nChains represent the blockchain networks your users can access. By enabling specific chains, you determine which blockchain ecosystems your users can interact with through their Okto wallet.\n\n<strong>To enable a chain:</strong>\n\n1. Log in to the <strong>[Okto Dashboard](https://dashboard.okto.tech/login)</strong> and navigate to the <strong>Chains & Tokens</strong> section of the <strong>Wallet Controls</strong> page on your Okto dashboard.\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c0EkmhNNHjk5skKanJmgcQ.png\" alt=\"Enable Chain\" />\n\n2. Click on the <strong>Enable Chain</strong> button.\n\n3. In the pop-up window, you’ll see a list of available chains, including <strong>mainnet</strong> and <strong>testnet</strong> options.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KIhZL0TYAW80kfILkmWucg.png\" alt=\"Enable Chain\" />\n\n4. Select the <strong>chain(s)</strong> you want to enable for your users.\n\n5. Click <strong>Enable Chain(s)</strong> to confirm your selection.\n\n### Enabling Tokens\n\nTokens represent the cryptocurrencies and digital assets your users can manage within their Okto wallet. You can choose from a list of whitelisted tokens for each enabled chain to ensure the assets relevant to your app are available to users.\n\n1. Log in to the [Okto Dashboard](https://dashboard.okto.tech/login) and navigate to the <strong>Chains & Tokens</strong> section of the <strong>Wallet Controls</strong> page on your Okto dashboard.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c0EkmhNNHjk5skKanJmgcQ.png\" alt=\"Enable Token\" />\n\n2. Click on the <strong>Enable Token(s)</strong> button.\n\n3. In the pop-up window, you’ll see a list of available tokens for the enabled chains.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*RFmq7tM21-Iu5rUhkKHxlg.png\" alt=\"Enable Token\" />\n\n4. Select the token(s) you want to enable for your users.\n\n5. Click <strong>Enable Token(s)</strong> to confirm your selection.\n\n<img src=\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sH5Nz0JwwZ4P79fMCZjBIw.png\" alt=\"Enable Token\" />\n\n## Interacting with Tokens via Okto SDK APIs\n\nNow that you’ve enabled the desired chains and tokens, you can start interacting with them using the <strong>Okto SDK APIs</strong>. These APIs abstract the complexities of cross-chain operations, allowing you to perform critical actions like token transfers, portfolio management, and transaction tracking — all with just a few API calls.\n\n## 1. Transferring Tokens: One API Call to Rule Them All\n\nTransferring tokens across blockchains can be daunting due to differing account structures, gas fee mechanisms, and transaction object requirements. With <strong>Okto SDK</strong>, it’s as simple as one API call . You don’t need to manage chain-specific transaction logic.\n\n<strong>Key Benefits:</strong>\n\n- <strong>Unified Experience:</strong> Transfer native and non-native tokens across multiple chains with the same API structure.\n- <strong>Simplified Process:</strong> No manual gas estimation, nonce management, or transaction construction.\n- <strong>Cross-Chain Compatibility:</strong> Works seamlessly for blockchains like Ethereum, Polygon, and more.\n\n<strong>Endpoint:</strong> `POST /api/v1/transfer/tokens/execute`\n\n<strong>Sample Request:</strong>\n\n```bash\nPOST https://sandbox-api.okto.tech/api/v1/transfer/tokens/execute\nContent-Type: application/json\n{\n  \"network_name\": \"POLYGON\",\n  \"token_address\": \"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174\",\n  \"quantity\": \"50.00\",\n  \"recipient_address\": \"0x8AA55B5CE2D6325F6c6e0922dF91793722f0f8eF\"\n}\n```\n\n<strong>Sample Request:</strong>\n\n```bash\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"orderId\": \"a49bbd8b-d26a-4c0f-840d-65d2727f486d\"\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this API is wrapped in a function like `transferTokens(data: TransferTokens)`.\n\n<strong>Documentation Links:</strong>\n\n- [React SDK — Transfer Tokens](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens)\n- [Flutter SDK — Transfer Tokens](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens)\n- [React Native SDK — Transfer Tokens](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens)\n\n## 2. Retrieving User Portfolio\n\nThe <strong>User Portfolio API</strong> fetches the portfolio data of a user, including all the tokens they own across all enabled networks. This is useful for displaying the user’s asset holdings within your application.\n\n<strong>Endpoint:</strong> `GET /api/v1/portfolio`\n\n<strong>Sample Request:</strong>\n\n```bash\nGET https://sandbox-api.okto.tech/api/v1/portfolio\n```\n\n<strong>Sample Request:</strong>\n\n```bash\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"total\": 2,\n    \"tokens\": [\n      {\n        \"token_name\": \"USDC\",\n        \"quantity\": \"150.50\",\n        \"amount_in_inr\": \"11250.75\",\n        \"network_name\": \"POLYGON\"\n      },\n      {\n        \"token_name\": \"MATIC\",\n        \"quantity\": \"500.00\",\n        \"amount_in_inr\": \"75000.00\",\n        \"network_name\": \"POLYGON\"\n      }\n    ]\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this API is wrapped in a function like `getPortfolio()`.\n\n<strong>Documentation Links:</strong>\n\n- [React SDK — Get Portfolio](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user)\n- [Flutter SDK — Get Portfolio](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user)\n- [React Native SDK — Get Portfolio](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user)\n\n## 3. Fetching Order History\n\nThe <strong>Order History API</strong> fetches all the orders (transactions) of the user, including the history of tokens sent and received. It’s useful for tracking the status of various transactions.\n\n<strong>Endpoint:</strong> `GET /api/v1/orders`\n\n<strong>Sample Request:</strong>\n\n```bash\nGET https://sandbox-api.okto.tech/api/v1/orders?limit=5&offset=0\n```\n\n<strong>Sample Request:</strong>\n\n```bash\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"total\": 1,\n    \"jobs\": [\n      {\n        \"order_id\": \"a49bbd8b-d26a-4c0f-840d-65d2727f486d\",\n        \"order_type\": \"TOKEN_TRANSFER_EXECUTE\",\n        \"network_name\": \"POLYGON\",\n        \"status\": \"SUCCESS\",\n        \"transaction_hash\": \"0xabcdef1234567890\",\n        \"created_at\": \"2024-10-22 05:46:04.626179 +0000 UTC\"\n      }\n    ]\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this API is wrapped in a function like `orderHistory(query?: Partial<OrderQuery>)`.\n\n<strong>Documentation Links:</strong>\n\n- [React SDK — Order History](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history)\n- [Flutter SDK — Order History](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history)\n- [React Native SDK — Order History](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history)\n\n## 4. Getting Supported Networks\n\nThe <strong>Supported Networks API</strong> retrieves all the blockchain networks (chains) that are whitelisted on your API key. It’s essential to know which networks are available so you can manage wallets and transactions accordingly.\n\n<strong>Endpoint:</strong> `GET /api/v1/supported/networks`\n\n<strong>Sample Request:</strong>\n\n```bash\nGET https://sandbox-api.okto.tech/api/v1/supported/networks\n```\n\n<strong>Sample Request:</strong>\n\n```bash\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"network\": [\n      {\n        \"network_name\": \"POLYGON\",\n        \"chain_id\": \"137\",\n        \"logo\": \"https://s2.coinmarketcap.com/static/img/coins/64x64/28321.png\"\n      },\n      {\n        \"network_name\": \"ETHEREUM\",\n        \"chain_id\": \"1\",\n        \"logo\": \"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\"\n      }\n    ]\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this API is wrapped in a function like `getSupportedNetworks()`.\n\n<strong>Documentation Links:</strong>\n\n- [React SDK — Supported Networks](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks)\n- [Flutter SDK — Supported Networks](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks)\n- [React Native SDK — Supported Networks](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks)\n\n## 5. Getting Supported Tokens\n\nThe <strong>Supported Tokens API</strong> provides a list of all the tokens that are whitelisted on your API key for the enabled networks. Knowing which tokens are available allows you to display them in your application and facilitate transactions.\n\n<strong>Endpoint:</strong> `GET /api/v1/supported/tokens`\n\n<strong>Sample Request:</strong>\n\n```bash\nGET https://sandbox-api.okto.tech/api/v1/supported/tokens\n```\n\n<strong>Sample Request:</strong>\n\n```bash\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"tokens\": [\n      {\n        \"token_name\": \"USDC\",\n        \"token_address\": \"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174\",\n        \"network_name\": \"POLYGON\"\n      },\n      {\n        \"token_name\": \"MATIC\",\n        \"token_address\": \"\",\n        \"network_name\": \"POLYGON\"\n      }\n    ]\n  }\n}\n```\n\n<strong>SDK Function Equivalent:</strong>\n\nIf you’re using the Okto SDK, this API is wrapped in a function like `getSupportedTokens()`.\n\n<strong>Documentation Links:</strong>\n\n- [React SDK — Supported Tokens](https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens)\n- [Flutter SDK — Supported Tokens](https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens)\n- [React Native SDK — Supported Tokens](https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens)\n\n### Conclusion\n\nIn this guide, we explored how the Okto SDK simplifies token management and blockchain interactions. From enabling chains and tokens to transferring assets, viewing balances, and fetching transaction histories, the Okto SDK gives you all the tools you need to build powerful, token-based features with ease.\n\nBy abstracting away the complexities of different blockchains, Okto ensures you don’t have to worry about learning the nuances of each network. Whether you’re working with Ethereum, Solana, Aptos, or other ecosystems, Okto provides a unified way to interact with tokens — allowing you to <strong>build faster, smarter, and with confidence.</strong>\n\nTo dive deeper into the implementation details and explore additional features, head over to the [Official Okto Documentation](https://docs.okto.tech/).\n\nStop worrying about blockchain specifics — <strong>start building your next great application with Okto!</strong> 🚀",
    "title": "Interacting with Tokens on Okto SDK: A Comprehensive Guide",
    "description": "Interacting with tokens on Okto SDK is a crucial part of building Web3 applications. This guide provides a comprehensive overview of how to interact with tokens using Okto SDK, including how to get token balances, send tokens, and more.",
    "_meta": {
      "filePath": "interact-tokens-with-okto.mdx",
      "fileName": "interact-tokens-with-okto.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "interact-tokens-with-okto"
    },
    "toc": [
      {
        "title": "Introduction: The Power of Tokens with Okto",
        "url": "#introduction-the-power-of-tokens-with-okto",
        "depth": 2
      },
      {
        "title": "Enabling Chains and Whitelisting Tokens",
        "url": "#enabling-chains-and-whitelisting-tokens",
        "depth": 2
      },
      {
        "title": "Enabling Chains",
        "url": "#enabling-chains",
        "depth": 3
      },
      {
        "title": "Enabling Tokens",
        "url": "#enabling-tokens",
        "depth": 3
      },
      {
        "title": "Interacting with Tokens via Okto SDK APIs",
        "url": "#interacting-with-tokens-via-okto-sdk-apis",
        "depth": 2
      },
      {
        "title": "1. Transferring Tokens: One API Call to Rule Them All",
        "url": "#1-transferring-tokens-one-api-call-to-rule-them-all",
        "depth": 2
      },
      {
        "title": "2. Retrieving User Portfolio",
        "url": "#2-retrieving-user-portfolio",
        "depth": 2
      },
      {
        "title": "3. Fetching Order History",
        "url": "#3-fetching-order-history",
        "depth": 2
      },
      {
        "title": "4. Getting Supported Networks",
        "url": "#4-getting-supported-networks",
        "depth": 2
      },
      {
        "title": "5. Getting Supported Tokens",
        "url": "#5-getting-supported-tokens",
        "depth": 2
      },
      {
        "title": "Conclusion",
        "url": "#conclusion",
        "depth": 3
      }
    ],
    "structuredData": {
      "contents": [
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Tokens are at the heart of blockchain applications. Whether you’re building DeFi platforms, gaming ecosystems, or NFT marketplaces, tokens drive user interactions and utility. However, working with tokens across multiple chains has historically been a nightmare."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Each blockchain has its own standards for accounts, token handling, and transaction flows, forcing developers to:"
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Learn chain-specific models (e.g., account-based vs. UTXO)."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Construct intricate transaction objects."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Manage gas fees, nonce handling, and retries."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "This fragmented experience has made cross-chain development a daunting task."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "Enter Okto. Okto abstracts away these challenges, offering a seamless and unified way to interact with tokens across diverse ecosystems. With Okto, transferring tokens (whether native, ERC20, or other fungible assets) across any of the diverse chains becomes as simple as one API call. No chain-specific nuances, no transaction complexity. Just a clean, developer-friendly experience."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "In this guide, we’ll walk you through the steps to enable blockchain networks (chains) and whitelist tokens on the Okto dashboard. We’ll also dive into various API functions provided by the Okto SDK that allow you to interact with tokens."
        },
        {
          "heading": "introduction-the-power-of-tokens-with-okto",
          "content": "By the end of this guide, you’ll be equipped to integrate token interactions into your applications, unlocking the full potential of cross-chain development without the blockchain headaches."
        },
        {
          "heading": "enabling-chains-and-whitelisting-tokens",
          "content": "Before you can start interacting with tokens, it’s essential to configure which blockchain networks (chains) and tokens your application will support. This configuration is done through the Okto dashboard’s Wallet Controls feature."
        },
        {
          "heading": "enabling-chains",
          "content": "Chains represent the blockchain networks your users can access. By enabling specific chains, you determine which blockchain ecosystems your users can interact with through their Okto wallet."
        },
        {
          "heading": "enabling-chains",
          "content": "Log in to the Okto Dashboard and navigate to the Chains & Tokens section of the Wallet Controls page on your Okto dashboard."
        },
        {
          "heading": "enabling-chains",
          "content": "Click on the Enable Chain button."
        },
        {
          "heading": "enabling-chains",
          "content": "In the pop-up window, you’ll see a list of available chains, including mainnet and testnet options."
        },
        {
          "heading": "enabling-chains",
          "content": "Select the chain(s) you want to enable for your users."
        },
        {
          "heading": "enabling-chains",
          "content": "Click Enable Chain(s) to confirm your selection."
        },
        {
          "heading": "enabling-tokens",
          "content": "Tokens represent the cryptocurrencies and digital assets your users can manage within their Okto wallet. You can choose from a list of whitelisted tokens for each enabled chain to ensure the assets relevant to your app are available to users."
        },
        {
          "heading": "enabling-tokens",
          "content": "Log in to the Okto Dashboard and navigate to the Chains & Tokens section of the Wallet Controls page on your Okto dashboard."
        },
        {
          "heading": "enabling-tokens",
          "content": "Click on the Enable Token(s) button."
        },
        {
          "heading": "enabling-tokens",
          "content": "In the pop-up window, you’ll see a list of available tokens for the enabled chains."
        },
        {
          "heading": "enabling-tokens",
          "content": "Select the token(s) you want to enable for your users."
        },
        {
          "heading": "enabling-tokens",
          "content": "Click Enable Token(s) to confirm your selection."
        },
        {
          "heading": "interacting-with-tokens-via-okto-sdk-apis",
          "content": "Now that you’ve enabled the desired chains and tokens, you can start interacting with them using the Okto SDK APIs. These APIs abstract the complexities of cross-chain operations, allowing you to perform critical actions like token transfers, portfolio management, and transaction tracking — all with just a few API calls."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Transferring tokens across blockchains can be daunting due to differing account structures, gas fee mechanisms, and transaction object requirements. With Okto SDK, it’s as simple as one API call . You don’t need to manage chain-specific transaction logic."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Unified Experience: Transfer native and non-native tokens across multiple chains with the same API structure."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Simplified Process: No manual gas estimation, nonce management, or transaction construction."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Cross-Chain Compatibility: Works seamlessly for blockchains like Ethereum, Polygon, and more."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Endpoint: POST /api/v1/transfer/tokens/execute"
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "If you’re using the Okto SDK, this API is wrapped in a function like transferTokens(data: TransferTokens)."
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "React SDK — Transfer Tokens"
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "Flutter SDK — Transfer Tokens"
        },
        {
          "heading": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "React Native SDK — Transfer Tokens"
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "The User Portfolio API fetches the portfolio data of a user, including all the tokens they own across all enabled networks. This is useful for displaying the user’s asset holdings within your application."
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "Endpoint: GET /api/v1/portfolio"
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "If you’re using the Okto SDK, this API is wrapped in a function like getPortfolio()."
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "React SDK — Get Portfolio"
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "Flutter SDK — Get Portfolio"
        },
        {
          "heading": "2-retrieving-user-portfolio",
          "content": "React Native SDK — Get Portfolio"
        },
        {
          "heading": "3-fetching-order-history",
          "content": "The Order History API fetches all the orders (transactions) of the user, including the history of tokens sent and received. It’s useful for tracking the status of various transactions."
        },
        {
          "heading": "3-fetching-order-history",
          "content": "Endpoint: GET /api/v1/orders"
        },
        {
          "heading": "3-fetching-order-history",
          "content": "If you’re using the Okto SDK, this API is wrapped in a function like orderHistory(query?: Partial<OrderQuery>)."
        },
        {
          "heading": "3-fetching-order-history",
          "content": "React SDK — Order History"
        },
        {
          "heading": "3-fetching-order-history",
          "content": "Flutter SDK — Order History"
        },
        {
          "heading": "3-fetching-order-history",
          "content": "React Native SDK — Order History"
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "The Supported Networks API retrieves all the blockchain networks (chains) that are whitelisted on your API key. It’s essential to know which networks are available so you can manage wallets and transactions accordingly."
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "Endpoint: GET /api/v1/supported/networks"
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "If you’re using the Okto SDK, this API is wrapped in a function like getSupportedNetworks()."
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "React SDK — Supported Networks"
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "Flutter SDK — Supported Networks"
        },
        {
          "heading": "4-getting-supported-networks",
          "content": "React Native SDK — Supported Networks"
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "The Supported Tokens API provides a list of all the tokens that are whitelisted on your API key for the enabled networks. Knowing which tokens are available allows you to display them in your application and facilitate transactions."
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "Endpoint: GET /api/v1/supported/tokens"
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "If you’re using the Okto SDK, this API is wrapped in a function like getSupportedTokens()."
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "React SDK — Supported Tokens"
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "Flutter SDK — Supported Tokens"
        },
        {
          "heading": "5-getting-supported-tokens",
          "content": "React Native SDK — Supported Tokens"
        },
        {
          "heading": "conclusion",
          "content": "In this guide, we explored how the Okto SDK simplifies token management and blockchain interactions. From enabling chains and tokens to transferring assets, viewing balances, and fetching transaction histories, the Okto SDK gives you all the tools you need to build powerful, token-based features with ease."
        },
        {
          "heading": "conclusion",
          "content": "By abstracting away the complexities of different blockchains, Okto ensures you don’t have to worry about learning the nuances of each network. Whether you’re working with Ethereum, Solana, Aptos, or other ecosystems, Okto provides a unified way to interact with tokens — allowing you to build faster, smarter, and with confidence."
        },
        {
          "heading": "conclusion",
          "content": "To dive deeper into the implementation details and explore additional features, head over to the Official Okto Documentation."
        },
        {
          "heading": "conclusion",
          "content": "Stop worrying about blockchain specifics — start building your next great application with Okto! 🚀"
        }
      ],
      "headings": [
        {
          "id": "introduction-the-power-of-tokens-with-okto",
          "content": "Introduction: The Power of Tokens with Okto"
        },
        {
          "id": "enabling-chains-and-whitelisting-tokens",
          "content": "Enabling Chains and Whitelisting Tokens"
        },
        {
          "id": "enabling-chains",
          "content": "Enabling Chains"
        },
        {
          "id": "enabling-tokens",
          "content": "Enabling Tokens"
        },
        {
          "id": "interacting-with-tokens-via-okto-sdk-apis",
          "content": "Interacting with Tokens via Okto SDK APIs"
        },
        {
          "id": "1-transferring-tokens-one-api-call-to-rule-them-all",
          "content": "1. Transferring Tokens: One API Call to Rule Them All"
        },
        {
          "id": "2-retrieving-user-portfolio",
          "content": "2. Retrieving User Portfolio"
        },
        {
          "id": "3-fetching-order-history",
          "content": "3. Fetching Order History"
        },
        {
          "id": "4-getting-supported-networks",
          "content": "4. Getting Supported Networks"
        },
        {
          "id": "5-getting-supported-tokens",
          "content": "5. Getting Supported Tokens"
        },
        {
          "id": "conclusion",
          "content": "Conclusion"
        }
      ]
    },
    "body": "var Component=(()=>{var o=Object.create;var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var m=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports),y=(s,e)=>{for(var n in e)l(s,n,{get:e[n],enumerable:!0})},a=(s,e,n,t)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let h of g(e))!u.call(s,h)&&h!==n&&l(s,h,{get:()=>e[h],enumerable:!(t=p(e,h))||t.enumerable});return s};var E=(s,e,n)=>(n=s!=null?o(F(s)):{},a(e||!s||!s.__esModule?l(n,\"default\",{value:s,enumerable:!0}):n,s)),C=s=>a(l({},\"__esModule\",{value:!0}),s);var d=m((b,r)=>{r.exports=_jsx_runtime});var f={};y(f,{default:()=>k});var i=E(d());function c(s){let e={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",ol:\"ol\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*BNp4r3Ri3nMm26gBaQQGRg.png\",alt:\"Interacting with Tokens on Okto SDK: A Comprehensive Guide\"}),`\n`,(0,i.jsx)(\"strong\",{children:\"TL;DR:\"}),`\n`,(0,i.jsx)(\"em\",{children:\"Learn how to enable chains and tokens, interact with APIs, and manage tokens seamlessly using the Okto SDK. A single API call empowers developers to build powerful token-based dApps without blockchain complexities.\"}),`\n`,(0,i.jsx)(e.h2,{id:\"introduction-the-power-of-tokens-with-okto\",children:\"Introduction: The Power of Tokens with Okto\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"Tokens are at the heart of blockchain applications. Whether you\\u2019re building DeFi platforms, gaming ecosystems, or NFT marketplaces, tokens drive user interactions and utility. However, \",(0,i.jsx)(\"strong\",{children:\"working with tokens across multiple chains\"}),\" has historically been a nightmare.\"]}),`\n`,(0,i.jsx)(e.p,{children:\"Each blockchain has its own standards for accounts, token handling, and transaction flows, forcing developers to:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:\"Learn chain-specific models (e.g., account-based vs. UTXO).\"}),`\n`,(0,i.jsx)(e.li,{children:\"Construct intricate transaction objects.\"}),`\n`,(0,i.jsx)(e.li,{children:\"Manage gas fees, nonce handling, and retries.\"}),`\n`]}),`\n`,(0,i.jsx)(e.p,{children:\"This fragmented experience has made cross-chain development a daunting task.\"}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Enter Okto.\"}),\" Okto abstracts away these challenges, offering a seamless and unified way to interact with tokens across diverse ecosystems. With Okto, transferring tokens (whether native, ERC20, or other fungible assets) across any of the diverse chains becomes as simple as one API call. No chain-specific nuances, no transaction complexity. Just a clean, developer-friendly experience.\"]}),`\n`,(0,i.jsx)(e.p,{children:\"In this guide, we\\u2019ll walk you through the steps to enable blockchain networks (chains) and whitelist tokens on the Okto dashboard. We\\u2019ll also dive into various API functions provided by the Okto SDK that allow you to interact with tokens.\"}),`\n`,(0,i.jsx)(e.p,{children:\"By the end of this guide, you\\u2019ll be equipped to integrate token interactions into your applications, unlocking the full potential of cross-chain development without the blockchain headaches.\"}),`\n`,(0,i.jsx)(e.h2,{id:\"enabling-chains-and-whitelisting-tokens\",children:\"Enabling Chains and Whitelisting Tokens\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"Before you can start interacting with tokens, it\\u2019s essential to configure which \",(0,i.jsx)(\"strong\",{children:\"blockchain networks (chains)\"}),\" and \",(0,i.jsx)(\"strong\",{children:\"tokens\"}),\" your application will support. This configuration is done through the Okto dashboard\\u2019s \",(0,i.jsx)(\"strong\",{children:\"Wallet Controls\"}),\" feature.\"]}),`\n`,(0,i.jsx)(e.h3,{id:\"enabling-chains\",children:\"Enabling Chains\"}),`\n`,(0,i.jsx)(e.p,{children:\"Chains represent the blockchain networks your users can access. By enabling specific chains, you determine which blockchain ecosystems your users can interact with through their Okto wallet.\"}),`\n`,(0,i.jsx)(\"strong\",{children:\"To enable a chain:\"}),`\n`,(0,i.jsxs)(e.ol,{children:[`\n`,(0,i.jsxs)(e.li,{children:[\"Log in to the \",(0,i.jsx)(\"strong\",{children:(0,i.jsx)(e.a,{href:\"https://dashboard.okto.tech/login\",children:\"Okto Dashboard\"})}),\" and navigate to the \",(0,i.jsx)(\"strong\",{children:\"Chains & Tokens\"}),\" section of the \",(0,i.jsx)(\"strong\",{children:\"Wallet Controls\"}),\" page on your Okto dashboard.\"]}),`\n`]}),`\n`,(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c0EkmhNNHjk5skKanJmgcQ.png\",alt:\"Enable Chain\"}),`\n`,(0,i.jsxs)(e.ol,{start:\"2\",children:[`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"Click on the \",(0,i.jsx)(\"strong\",{children:\"Enable Chain\"}),\" button.\"]}),`\n`]}),`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"In the pop-up window, you\\u2019ll see a list of available chains, including \",(0,i.jsx)(\"strong\",{children:\"mainnet\"}),\" and \",(0,i.jsx)(\"strong\",{children:\"testnet\"}),\" options.\"]}),`\n`]}),`\n`]}),`\n`,(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KIhZL0TYAW80kfILkmWucg.png\",alt:\"Enable Chain\"}),`\n`,(0,i.jsxs)(e.ol,{start:\"4\",children:[`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"Select the \",(0,i.jsx)(\"strong\",{children:\"chain(s)\"}),\" you want to enable for your users.\"]}),`\n`]}),`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"Click \",(0,i.jsx)(\"strong\",{children:\"Enable Chain(s)\"}),\" to confirm your selection.\"]}),`\n`]}),`\n`]}),`\n`,(0,i.jsx)(e.h3,{id:\"enabling-tokens\",children:\"Enabling Tokens\"}),`\n`,(0,i.jsx)(e.p,{children:\"Tokens represent the cryptocurrencies and digital assets your users can manage within their Okto wallet. You can choose from a list of whitelisted tokens for each enabled chain to ensure the assets relevant to your app are available to users.\"}),`\n`,(0,i.jsxs)(e.ol,{children:[`\n`,(0,i.jsxs)(e.li,{children:[\"Log in to the \",(0,i.jsx)(e.a,{href:\"https://dashboard.okto.tech/login\",children:\"Okto Dashboard\"}),\" and navigate to the \",(0,i.jsx)(\"strong\",{children:\"Chains & Tokens\"}),\" section of the \",(0,i.jsx)(\"strong\",{children:\"Wallet Controls\"}),\" page on your Okto dashboard.\"]}),`\n`]}),`\n`,(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c0EkmhNNHjk5skKanJmgcQ.png\",alt:\"Enable Token\"}),`\n`,(0,i.jsxs)(e.ol,{start:\"2\",children:[`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"Click on the \",(0,i.jsx)(\"strong\",{children:\"Enable Token(s)\"}),\" button.\"]}),`\n`]}),`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsx)(e.p,{children:\"In the pop-up window, you\\u2019ll see a list of available tokens for the enabled chains.\"}),`\n`]}),`\n`]}),`\n`,(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*RFmq7tM21-Iu5rUhkKHxlg.png\",alt:\"Enable Token\"}),`\n`,(0,i.jsxs)(e.ol,{start:\"4\",children:[`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsx)(e.p,{children:\"Select the token(s) you want to enable for your users.\"}),`\n`]}),`\n`,(0,i.jsxs)(e.li,{children:[`\n`,(0,i.jsxs)(e.p,{children:[\"Click \",(0,i.jsx)(\"strong\",{children:\"Enable Token(s)\"}),\" to confirm your selection.\"]}),`\n`]}),`\n`]}),`\n`,(0,i.jsx)(\"img\",{src:\"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sH5Nz0JwwZ4P79fMCZjBIw.png\",alt:\"Enable Token\"}),`\n`,(0,i.jsx)(e.h2,{id:\"interacting-with-tokens-via-okto-sdk-apis\",children:\"Interacting with Tokens via Okto SDK APIs\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"Now that you\\u2019ve enabled the desired chains and tokens, you can start interacting with them using the \",(0,i.jsx)(\"strong\",{children:\"Okto SDK APIs\"}),\". These APIs abstract the complexities of cross-chain operations, allowing you to perform critical actions like token transfers, portfolio management, and transaction tracking \\u2014 all with just a few API calls.\"]}),`\n`,(0,i.jsx)(e.h2,{id:\"1-transferring-tokens-one-api-call-to-rule-them-all\",children:\"1. Transferring Tokens: One API Call to Rule Them All\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"Transferring tokens across blockchains can be daunting due to differing account structures, gas fee mechanisms, and transaction object requirements. With \",(0,i.jsx)(\"strong\",{children:\"Okto SDK\"}),\", it\\u2019s as simple as one API call . You don\\u2019t need to manage chain-specific transaction logic.\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Key Benefits:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(\"strong\",{children:\"Unified Experience:\"}),\" Transfer native and non-native tokens across multiple chains with the same API structure.\"]}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(\"strong\",{children:\"Simplified Process:\"}),\" No manual gas estimation, nonce management, or transaction construction.\"]}),`\n`,(0,i.jsxs)(e.li,{children:[(0,i.jsx)(\"strong\",{children:\"Cross-Chain Compatibility:\"}),\" Works seamlessly for blockchains like Ethereum, Polygon, and more.\"]}),`\n`]}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(e.code,{children:\"POST /api/v1/transfer/tokens/execute\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"POST\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/transfer/tokens/execute\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"Content-Type:\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" application/json\"})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"token_address\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"quantity\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"50.00\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"recipient_address\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0x8AA55B5CE2D6325F6c6e0922dF91793722f0f8eF\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"success\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"data\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"orderId\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"a49bbd8b-d26a-4c0f-840d-65d2727f486d\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"If you\\u2019re using the Okto SDK, this API is wrapped in a function like \",(0,i.jsx)(e.code,{children:\"transferTokens(data: TransferTokens)\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens\",children:\"React SDK \\u2014 Transfer Tokens\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens\",children:\"Flutter SDK \\u2014 Transfer Tokens\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#transfer-tokens\",children:\"React Native SDK \\u2014 Transfer Tokens\"})}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:\"2-retrieving-user-portfolio\",children:\"2. Retrieving User Portfolio\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"The \",(0,i.jsx)(\"strong\",{children:\"User Portfolio API\"}),\" fetches the portfolio data of a user, including all the tokens they own across all enabled networks. This is useful for displaying the user\\u2019s asset holdings within your application.\"]}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(e.code,{children:\"GET /api/v1/portfolio\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsx)(e.code,{children:(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"GET\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/portfolio\"})]})})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"success\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"data\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"total\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" 2,\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"tokens\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\" [\"})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"USDC\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"quantity\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"150.50\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"amount_in_inr\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"11250.75\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      },\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"MATIC\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"quantity\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"500.00\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"amount_in_inr\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"75000.00\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"If you\\u2019re using the Okto SDK, this API is wrapped in a function like \",(0,i.jsx)(e.code,{children:\"getPortfolio()\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user\",children:\"React SDK \\u2014 Get Portfolio\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user\",children:\"Flutter SDK \\u2014 Get Portfolio\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/get-user-balance-portfolio#get-portfolio-details-of-the-current-user\",children:\"React Native SDK \\u2014 Get Portfolio\"})}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:\"3-fetching-order-history\",children:\"3. Fetching Order History\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"The \",(0,i.jsx)(\"strong\",{children:\"Order History API\"}),\" fetches all the orders (transactions) of the user, including the history of tokens sent and received. It\\u2019s useful for tracking the status of various transactions.\"]}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(e.code,{children:\"GET /api/v1/orders\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsx)(e.code,{children:(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"GET\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/orders?limit=\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\"5\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"&offset\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#D73A49\",\"--shiki-dark\":\"#F97583\"},children:\"=\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\"0\"})]})})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"success\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"data\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"total\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" 1,\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"jobs\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\" [\"})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"order_id\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"a49bbd8b-d26a-4c0f-840d-65d2727f486d\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"order_type\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"TOKEN_TRANSFER_EXECUTE\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"SUCCESS\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"transaction_hash\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0xabcdef1234567890\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"created_at\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"2024-10-22 05:46:04.626179 +0000 UTC\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"If you\\u2019re using the Okto SDK, this API is wrapped in a function like \",(0,i.jsx)(e.code,{children:\"orderHistory(query?: Partial<OrderQuery>)\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history\",children:\"React SDK \\u2014 Order History\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history\",children:\"Flutter SDK \\u2014 Order History\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/okto-embedded-wallet/use-user-embedded-wallet/transfer-tokens#fetch-order-history\",children:\"React Native SDK \\u2014 Order History\"})}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:\"4-getting-supported-networks\",children:\"4. Getting Supported Networks\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"The \",(0,i.jsx)(\"strong\",{children:\"Supported Networks API\"}),\" retrieves all the blockchain networks (chains) that are whitelisted on your API key. It\\u2019s essential to know which networks are available so you can manage wallets and transactions accordingly.\"]}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(e.code,{children:\"GET /api/v1/supported/networks\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsx)(e.code,{children:(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"GET\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/supported/networks\"})]})})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"success\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"data\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"network\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\" [\"})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"chain_id\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"137\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"logo\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"https://s2.coinmarketcap.com/static/img/coins/64x64/28321.png\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      },\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"ETHEREUM\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"chain_id\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"1\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"logo\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"If you\\u2019re using the Okto SDK, this API is wrapped in a function like \",(0,i.jsx)(e.code,{children:\"getSupportedNetworks()\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks\",children:\"React SDK \\u2014 Supported Networks\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks\",children:\"Flutter SDK \\u2014 Supported Networks\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-networks\",children:\"React Native SDK \\u2014 Supported Networks\"})}),`\n`]}),`\n`,(0,i.jsx)(e.h2,{id:\"5-getting-supported-tokens\",children:\"5. Getting Supported Tokens\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"The \",(0,i.jsx)(\"strong\",{children:\"Supported Tokens API\"}),\" provides a list of all the tokens that are whitelisted on your API key for the enabled networks. Knowing which tokens are available allows you to display them in your application and facilitate transactions.\"]}),`\n`,(0,i.jsxs)(e.p,{children:[(0,i.jsx)(\"strong\",{children:\"Endpoint:\"}),\" \",(0,i.jsx)(e.code,{children:\"GET /api/v1/supported/tokens\"})]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsx)(e.code,{children:(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:\"GET\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" https://sandbox-api.okto.tech/api/v1/supported/tokens\"})]})})}),`\n`,(0,i.jsx)(\"strong\",{children:\"Sample Request:\"}),`\n`,(0,i.jsx)(e.pre,{className:\"shiki shiki-themes github-light github-dark\",style:{\"--shiki-light\":\"#24292e\",\"--shiki-dark\":\"#e1e4e8\",\"--shiki-light-bg\":\"#fff\",\"--shiki-dark-bg\":\"#24292e\"},tabIndex:\"0\",icon:'<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>',children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"{\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"status\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"success\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'  \"data\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:\" {\"})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'    \"tokens\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\" [\"})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"USDC\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_address\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      },\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      {\"})}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"MATIC\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"token_address\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"\",'})]}),`\n`,(0,i.jsxs)(e.span,{className:\"line\",children:[(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#6F42C1\",\"--shiki-dark\":\"#B392F0\"},children:'        \"network_name\"'}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#005CC5\",\"--shiki-dark\":\"#79B8FF\"},children:\":\"}),(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#032F62\",\"--shiki-dark\":\"#9ECBFF\"},children:' \"POLYGON\"'})]}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"      }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"    ]\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"  }\"})}),`\n`,(0,i.jsx)(e.span,{className:\"line\",children:(0,i.jsx)(e.span,{style:{\"--shiki-light\":\"#24292E\",\"--shiki-dark\":\"#E1E4E8\"},children:\"}\"})})]})}),`\n`,(0,i.jsx)(\"strong\",{children:\"SDK Function Equivalent:\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"If you\\u2019re using the Okto SDK, this API is wrapped in a function like \",(0,i.jsx)(e.code,{children:\"getSupportedTokens()\"}),\".\"]}),`\n`,(0,i.jsx)(\"strong\",{children:\"Documentation Links:\"}),`\n`,(0,i.jsxs)(e.ul,{children:[`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens\",children:\"React SDK \\u2014 Supported Tokens\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/flutter-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens\",children:\"Flutter SDK \\u2014 Supported Tokens\"})}),`\n`,(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/docs/react-native-sdk/advanced-sdk-config/chains-tokens/supported-networks#get-all-supported-tokens\",children:\"React Native SDK \\u2014 Supported Tokens\"})}),`\n`]}),`\n`,(0,i.jsx)(e.h3,{id:\"conclusion\",children:\"Conclusion\"}),`\n`,(0,i.jsx)(e.p,{children:\"In this guide, we explored how the Okto SDK simplifies token management and blockchain interactions. From enabling chains and tokens to transferring assets, viewing balances, and fetching transaction histories, the Okto SDK gives you all the tools you need to build powerful, token-based features with ease.\"}),`\n`,(0,i.jsxs)(e.p,{children:[\"By abstracting away the complexities of different blockchains, Okto ensures you don\\u2019t have to worry about learning the nuances of each network. Whether you\\u2019re working with Ethereum, Solana, Aptos, or other ecosystems, Okto provides a unified way to interact with tokens \\u2014 allowing you to \",(0,i.jsx)(\"strong\",{children:\"build faster, smarter, and with confidence.\"})]}),`\n`,(0,i.jsxs)(e.p,{children:[\"To dive deeper into the implementation details and explore additional features, head over to the \",(0,i.jsx)(e.a,{href:\"https://docs.okto.tech/\",children:\"Official Okto Documentation\"}),\".\"]}),`\n`,(0,i.jsxs)(e.p,{children:[\"Stop worrying about blockchain specifics \\u2014 \",(0,i.jsx)(\"strong\",{children:\"start building your next great application with Okto!\"}),\" \\u{1F680}\"]})]})}function k(s={}){let{wrapper:e}=s.components||{};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(c,{...s})}):c(s)}return C(f);})();\n;return Component;"
  }
]