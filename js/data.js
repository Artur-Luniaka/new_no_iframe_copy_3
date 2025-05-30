const websiteContent = {
  header: {
    logo: "domain.com",
    navigation: [
      { name: "Mercenary Hub", url: "./" },
      { name: "Mission Logs", url: "battle-reports.html" },
      { name: "Driver's Manual", url: "./#combat-briefing" },
      { name: "Call for Rides", url: "call-for-backup.html" },
      { name: "Rules of the Road", url: "terms-of-engagement.html" },
    ],
  },
  footer: {
    contact: {
      email: "driver@domain.com",
      address: "1234 Granville Street, Vancouver, BC V6Z 1M7, Canada",
      phone: "+1 604 804 0751",
    },
    links: [
      { name: "Cookie Policy", url: "data-protocol.html" },
      { name: "Privacy Rules", url: "command-rules.html" },
    ],
    copyright: "© 2025 domain.com. All rights reserved.",
  },
  homePage: {
    operationKickoff: {
      title: "Start Your Engines",
      description:
        "Welcome to Crazy GTA Mercenary Driver, the ultimate open-world driving adventure. Take on the streets, complete missions, and become the top mercenary driver.",
      features: [
        "100 action-packed levels",
        "Dynamic open-world environment",
        "Variety of missions: parking, combat, and collection",
        "Customizable vehicles and controls",
      ],
    },
    missionIntel: {
      title: "Mission Brief",
      description:
        "Crazy GTA Mercenary Driver is a high-octane driving game where you steal cars, complete daring missions, and dominate the streets. Navigate through 100 levels, collect coins, and outsmart your enemies.",
      gameModes: [
        {
          name: "Campaign Mode",
          description:
            "Embark on a thrilling journey through 100 levels of car theft, combat, and cash collection missions",
        },
        {
          name: "Free Roam Mode",
          description:
            "Explore the open world, steal cars, and cause chaos at your own pace",
        },
        {
          name: "Challenge Mode",
          description:
            "Take on special missions with unique objectives like precision parking or high-speed chases",
        },
      ],
    },
    arsenalBriefing: {
      title: "Vehicle Garage",
      description:
        "Access a wide range of vehicles, from sports cars to armored trucks. Customize your ride and master the controls to dominate every mission.",
      weaponCategories: [
        {
          name: "Primary Weapons",
          items: ["Assault Rifles", "Shotguns", "Sniper Rifles"],
        },
        {
          name: "Secondary Weapons",
          items: ["Pistols", "SMGs", "Melee Weapons"],
        },
        {
          name: "Special Equipment",
          items: ["Grenades", "Tactical Gear", "Support Items"],
        },
      ],
    },
    reconGallery: {
      title: "Street Snapshots",
      images: [
        { url: "images/img-1.png", caption: "Downtown Car Chase" },
        { url: "images/img-2.png", caption: "Desert Drift" },
        { url: "images/img-3.png", caption: "Nighttime Heist" },
      ],
    },
    debriefingRoom: {
      title: "Driver's Lounge",
      reviews: [
        {
          author: "Street Racer X",
          text: "This game is pure adrenaline! Stealing cars and completing missions feels so real.",
          rating: 5,
        },
        {
          author: "Mercenary Mike",
          text: "The variety of vehicles and missions keeps the game fresh and exciting.",
          rating: 4,
        },
        {
          author: "Drift King",
          text: "Addictive gameplay with perfect controls for high-speed action.",
          rating: 5,
        },
      ],
    },
    combatBriefing: {
      title: "Driver's Manual",
      subtitle: "Essential Driving Information",
      sections: [
        {
          title: "Driving Tactics",
          content:
            "Master the art of high-speed driving with WASD controls. Use E to enter/exit vehicles, Space for braking, and G to reset your car when things go wrong.",
        },
        {
          title: "Vehicle Types",
          content:
            "Choose from a variety of vehicles, each with unique handling and speed. Sports cars are fast but fragile, while armored trucks offer durability for tough missions.",
        },
        {
          title: "City Environments",
          content:
            "Navigate through bustling city streets, desert highways, and industrial zones. Adapt your driving style to the terrain and traffic conditions.",
        },
        {
          title: "Mission Types",
          content:
            "Take on diverse missions like parking challenges, coin collection, and combat tasks. Each mission requires precision driving and strategic planning.",
        },
      ],
    },
    developmentTeam: {
      title: "Behind the Wheel",
      description: "Meet the crew behind Crazy GTA Mercenary Driver",
      team: [
        {
          role: "Lead Developer",
          description:
            "Veteran game developer with a passion for open-world driving simulations",
        },
        {
          role: "Art Director",
          description:
            "Expert in creating vibrant cityscapes and realistic vehicle designs",
        },
        {
          role: "Sound Engineer",
          description: "Master of immersive engine roars and urban soundscapes",
        },
      ],
    },
    faq: {
      title: "Driver's Handbook",
      questions: [
        {
          question: "What are the minimum system requirements?",
          answer:
            "The game runs smoothly on most modern devices with basic graphics capabilities.",
        },
        {
          question: "Is multiplayer available?",
          answer:
            "Multiplayer features are currently in development and will be deployed soon.",
        },
        {
          question: "How often do you release new content?",
          answer:
            "New levels, vehicles, and missions are added monthly, with major updates every quarter.",
        },
        {
          question: "Are there in-game purchases?",
          answer:
            "The game is free to play, with optional cosmetic vehicle skins available.",
        },
      ],
    },
  },
  battleReports: {
    tacticalUpdates: {
      title: "Mission Updates",
      subtitle: "Latest News from the Streets",
      updates: [
        {
          version: "v2.5.0",
          date: "2025-03-15",
          description:
            "New vehicle customization system added. Drivers can now modify cars with unique paint jobs and performance upgrades.",
        },
        {
          version: "v2.4.2",
          date: "2025-02-28",
          description:
            "Improved driving physics for more realistic car handling and collision detection.",
        },
        {
          version: "v2.4.0",
          date: "2025-02-10",
          description:
            "New mission type: High-Speed Pursuit. Chase down targets and evade the cops in thrilling races.",
        },
      ],
    },
    combatLogs: {
      title: "Mission Logs",
      subtitle: "Street Operation Archives",
      reports: [
        {
          title: "Operation Street King",
          date: "2025-03-10",
          location: "Downtown District",
          type: "Heist Mission",
          image: "images/img-4.png",
          description:
            "Mercenary drivers successfully pulled off a high-stakes car heist in the city center. All coins collected, no arrests made.",
        },
        {
          title: "Desert Dash",
          date: "2025-03-05",
          location: "Desert Highway",
          type: "Racing Mission",
          image: "images/img-5.png",
          description:
            "High-speed chase through the desert, securing key objectives and evading pursuers.",
        },
        {
          title: "Nighttime Getaway",
          date: "2025-02-25",
          location: "Industrial Zone",
          type: "Stealth Mission",
          image: "images/img-6.png",
          description:
            "Covert operation to steal a luxury car under the cover of night. Mission completed without detection.",
        },
        {
          title: "Coin Run Blitz",
          date: "2025-02-15",
          location: "City Outskirts",
          type: "Collection Mission",
          image: "images/img-7.png",
          description:
            "Successful coin collection run, testing new vehicle handling and speed upgrades.",
        },
      ],
    },
  },
  contactPage: {
    title: "Call for Rides",
    subtitle: "Join the mercenary driver crew",
    form: {
      title: "Send Dispatch",
      fields: {
        name: {
          label: "Driver Name",
          placeholder: "Enter your name",
        },
        email: {
          label: "Contact Channel",
          placeholder: "Enter your email",
        },
        message: {
          label: "Job Details",
          placeholder: "Enter your message",
        },
      },
      submitButton: "Send Dispatch",
      successMessage: "Your message has been successfully sent.",
      errorMessage: "Something went wrong. Please try again later.",
    },
    contactInfo: {
      title: "Garage Headquarters",
      address: {
        label: "Base Location",
        value: "1234 Granville Street, Vancouver, BC V6Z 1M7, Canada",
      },
      phone: {
        label: "Direct Line",
        value: "+1 604 804 0751",
      },
      email: {
        label: "Secure Channel",
        value: "driver@domain.com",
      },
    },
    map: {
      title: "Garage Coordinates",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.666421892829!2d-123.13894768431153!3d49.27809417933075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f1f6c4f49%3A0x5b6a6a5b8b6a6a5b!2s1234%20Granville%20St%2C%20Vancouver%2C%20BC%20V6Z%201M7%2C%20Canada!5e0!3m2!1sen!2sca!4v1697050700000!5m2!1sen!2sca",
    },
  },
  termsPage: {
    title: "Rules of the Road",
    subtitle: "Legal Framework and Driving Guidelines",
    sections: [
      {
        title: "Disclaimer",
        content:
          "The information provided in Crazy GTA Mercenary Driver ('the Game') is for general entertainment purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Game or the information, products, services, or related graphics contained in the Game for any purpose.",
      },
      {
        title: "Acceptance of Terms",
        content:
          "By accessing and playing Crazy GTA Mercenary Driver, you acknowledge that you have read, understood, and agree to be bound by these Rules of the Road. If you do not agree with any part of these terms, you must not use the Game.",
      },
      {
        title: "Intellectual Property",
        content:
          "All intellectual property rights in relation to Crazy GTA Mercenary Driver, including but not limited to copyrights, trademarks, trade names, and game content, are owned by or licensed to us. Any unauthorized use, reproduction, modification, distribution, or republication of game materials without our prior written consent is strictly prohibited.",
      },
      {
        title: "Limitation of Liability",
        content:
          "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of the Game.",
      },
      {
        title: "User Conduct",
        content:
          "You agree to use the Game in accordance with all applicable laws and regulations. You must not engage in any activity that interferes with or disrupts the Game or servers and networks connected to the Game. Any attempt to gain unauthorized access to the Game's systems or networks is strictly prohibited.",
      },
      {
        title: "Modifications to Terms",
        content:
          "We reserve the right to modify or replace these Rules of the Road at any time without prior notice. Your continued use of the Game after any such changes constitutes your acceptance of the new Rules of the Road.",
      },
      {
        title: "Governing Law",
        content:
          "These Rules of the Road shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.",
      },
      {
        title: "Severability",
        content:
          "If any provision of these Rules of the Road is found to be invalid, illegal, or unenforceable, the remaining provisions shall nevertheless continue in full force and effect.",
      },
    ],
  },
  cookiePolicyPage: {
    title: "Data Protocol",
    subtitle: "Cookie Policy and Data Management",
    sections: [
      {
        title: "What Are Cookies",
        content:
          "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better gaming experience by remembering your preferences and game progress. These files are completely safe and don't contain any sensitive information.",
      },
      {
        title: "Why We Use Cookies",
        content:
          "We use cookies to enhance your gaming experience in Crazy GTA Mercenary Driver. They help us remember your vehicle preferences, maintain your session security, analyze game performance, and provide you with personalized content. This allows us to continuously improve our service and deliver a more engaging driving experience.",
      },
      {
        title: "Types of Cookies We Use",
        subsections: [
          {
            title: "Essential Cookies",
            content:
              "These cookies are necessary for the game to function properly. They enable core features like game save states, secure login, and session management. You cannot opt out of these cookies as they are essential for the game's operation.",
          },
          {
            title: "Performance Cookies",
            content:
              "These cookies collect information about how you interact with our game, helping us improve its functionality. They track metrics like loading times, game performance, and feature usage patterns.",
          },
          {
            title: "Functionality Cookies",
            content:
              "These cookies remember your preferences and settings, such as your chosen vehicle, control configurations, and audio settings, making your gaming experience more personalized.",
          },
          {
            title: "Analytics Cookies",
            content:
              "We use these cookies to understand how players interact with different game features. This helps us make data-driven decisions about game improvements and new features.",
          },
        ],
      },
      {
        title: "Cookie Management",
        content:
          "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our game, and some services and functionalities may not work.",
      },
      {
        title: "Browser Settings",
        content:
          "Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The following links provide information on how to modify your cookie settings on the most popular browsers:",
      },
      {
        title: "Updates to This Policy",
        content:
          "We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to periodically review this page to stay informed about how we are using cookies.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about our use of cookies, please contact us through our Garage Headquarters communication channels. Our support team is ready to assist you with any concerns regarding data privacy and cookie management.",
      },
    ],
  },
  privacyPolicyPage: {
    title: "Privacy Rules",
    subtitle: "Privacy Policy and Data Protection Guidelines",
    sections: [
      {
        title: "Introduction",
        content:
          "At Crazy GTA Mercenary Driver, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our game. Please read this policy carefully. If you disagree with its terms, please discontinue using the game immediately.",
      },
      {
        title: "Information We Collect",
        subsections: [
          {
            title: "Game Data",
            content:
              "We collect information about your game progress, including levels completed, coins collected, and in-game preferences. This helps us provide a seamless gaming experience and save your progress.",
          },
          {
            title: "Device Information",
            content:
              "We automatically collect certain information about your device, including your operating system, device type, and unique device identifiers. This helps us optimize game performance and troubleshoot technical issues.",
          },
          {
            title: "Usage Data",
            content:
              "We gather data about how you interact with our game, including features used, time spent playing, and gameplay patterns. This information helps us improve the game experience and develop new features.",
          },
        ],
      },
      {
        title: "How We Use Your Information",
        subsections: [
          {
            title: "Game Improvement",
            content:
              "We analyze gameplay data to enhance game features, fix bugs, and optimize performance for a better gaming experience.",
          },
          {
            title: "Personalization",
            content:
              "We use your preferences and gameplay history to customize your gaming experience and provide relevant content.",
          },
          {
            title: "Communication",
            content:
              "With your consent, we may send you game updates, news, and promotional materials. You can opt out of these communications at any time.",
          },
        ],
      },
      {
        title: "Data Security",
        content:
          "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.",
      },
      {
        title: "Data Sharing",
        content:
          "We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data with our partners for game analytics and improvement purposes. Any shared data is stripped of personally identifiable information.",
      },
      {
        title: "Your Rights",
        subsections: [
          {
            title: "Access",
            content:
              "You have the right to access the personal information we hold about you and request a copy of your data.",
          },
          {
            title: "Correction",
            content:
              "You can request corrections to your personal information if it is inaccurate or incomplete.",
          },
          {
            title: "Deletion",
            content:
              "You can request the deletion of your personal information, subject to certain exceptions required by law.",
          },
          {
            title: "Opt-Out",
            content:
              "You can opt out of non-essential data collection and marketing communications at any time.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
      },
      {
        title: "Changes to This Policy",
        content:
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. Continued use of the game after such modifications constitutes your acknowledgment of the modified Privacy Policy.",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about this Privacy Policy or our data practices, please contact us through our Garage Headquarters communication channels. We will respond to your inquiry as soon as possible.",
      },
    ],
  },
};
