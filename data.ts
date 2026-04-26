export type Category = "money" | "skills" | "self" | "social"

export type Idea = {
    id: number
    title: string
    description: string
    category: Category
    difficulty: "easy" | "medium" | "hard"
    time: string
    cost: "low" | "medium" | "high"
    whyItWorks: string
    firstStep: string
}

export const ideas: Idea[] = [
    {
        id: 1,
        title: "Start a Silent Content Page",
        description: "Create aesthetic or niche videos without showing your face or talking.",
        category: "money",
        difficulty: "medium",
        time: "1–3 months",
        cost: "low",
        whyItWorks: "Short-form content is highly consumable and easy to scale anonymously.",
        firstStep: "Pick a niche and post your first video today."
    },
    {
        id: 2,
        title: "AI Reply Generator Tool",
        description: "Build a simple app that helps users generate smart replies for messages.",
        category: "money",
        difficulty: "medium",
        time: "2–6 weeks",
        cost: "low",
        whyItWorks: "People struggle with communication and want instant, confident responses.",
        firstStep: "Create a basic UI where users paste messages and get replies."
    },
    {
        id: 3,
        title: "Niche Notion Templates",
        description: "Sell simple Notion templates for students, gym tracking, or productivity.",
        category: "money",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "People pay for organization that saves them time.",
        firstStep: "Create one useful template and share it online."
    },
    {
        id: 4,
        title: "Build a Personality-Based Avatar Map App",
        description: "Create an app where users design avatars with their personality traits, appearance, and vibe, and can see other users’ avatars on a map when they are nearby.",
        category: "money",
        difficulty: "hard",
        time: "2–6 months",
        cost: "medium",
        whyItWorks: "Combines identity expression with real-world discovery, making meeting people more interesting and less random.",
        firstStep: "Build a simple map where users can place a basic avatar with a short personality description."
    },
    {
        id: 5,
        title: "Simple Habit Tracker App",
        description: "A minimal app focused on tracking one habit only.",
        category: "money",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "People prefer simple tools over complex systems.",
        firstStep: "Build a UI with one button to track a daily habit."
    },
    {
        id: 6,
        title: "Build a No-Engagement Social App",
        description: "Create a social platform where users can only share and view photos or videos, with no likes, comments, or follower counts.",
        category: "money",
        difficulty: "hard",
        time: "2–6 months",
        cost: "medium",
        whyItWorks: "Removes pressure and comparison from social media, offering a calmer and more authentic experience.",
        firstStep: "Build a simple feed where users can upload and view posts without any interaction features."
    },
    {
        id: 7,
        title: "Build Real-Life Robot Football Players",
        description: "Create a long-term project to develop robots that can play football using AI, starting from simulations and evolving into real-world prototypes.",
        category: "money",
        difficulty: "hard",
        time: "3–10+ years",
        cost: "high",
        whyItWorks: "Combines AI, robotics, and sports into a futuristic concept with huge potential for innovation, attention, and funding.",
        firstStep: "Start by building a simple football simulation where AI players move and make basic decisions."
    },
    {
        id: 8,
        title: "Daily Problem Solver App",
        description: "An app that gives users one solution to a daily problem.",
        category: "money",
        difficulty: "medium",
        time: "3–5 weeks",
        cost: "low",
        whyItWorks: "People like quick answers without searching.",
        firstStep: "Define 10 daily problems and solutions."
    },
    {
        id: 9,
        title: "Mini Course Creator",
        description: "Create short, focused courses on one skill.",
        category: "money",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "People prefer fast learning over long courses.",
        firstStep: "Record a 10-minute lesson on something you know."
    },
    {
        id: 10,
        title: "Tool Directory Website",
        description: "Curate and list useful tools for a specific niche.",
        category: "money",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "People want all tools in one place instead of searching.",
        firstStep: "Collect 10 tools in one niche and publish them."
    },
    {
        id: 111,
        title: "Personalized AI Personality Chat App",
        description: "Create an AI chat app where users can customize the AI’s personality, emotional style, and behavior (e.g. friendly, strict, funny, calm, emotional), and chat with it in a personalized way.",
        category: "money",
        difficulty: "medium",
        time: "1–3 months",
        cost: "medium",
        whyItWorks: "People enjoy interactive AI experiences that feel personal, emotional, and adaptable to their mood.",
        firstStep: "Build a simple chat interface where users can select one personality mode for the AI and start chatting."
    },






    {
        id: 11,
        title: "20-Minute Daily Speaking Practice",
        description: "Practice speaking English out loud every day without interruption.",
        category: "skills",
        difficulty: "easy",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Active speaking builds fluency faster than passive input.",
        firstStep: "Talk about your day for 2 minutes without stopping."
    },
    {
        id: 12,
        title: "Shadowing Technique Training",
        description: "Repeat sentences from videos instantly to improve pronunciation.",
        category: "skills",
        difficulty: "medium",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Trains your brain to think and speak in real-time.",
        firstStep: "Pick a short video and repeat each sentence immediately."
    },
    {
        id: 13,
        title: "Daily 5 New Words Usage",
        description: "Learn 5 words and force yourself to use them in sentences.",
        category: "skills",
        difficulty: "easy",
        time: "3–4 weeks",
        cost: "low",
        whyItWorks: "Using words actively helps long-term memory.",
        firstStep: "Write 5 words and create 1 sentence for each."
    },
    {
        id: 14,
        title: "Explain Like a Teacher",
        description: "Pick any topic and explain it as if teaching someone.",
        category: "skills",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Teaching forces deep understanding and clarity.",
        firstStep: "Explain a simple topic out loud for 3 minutes."
    },
    {
        id: 15,
        title: "Daily Writing Habit",
        description: "Write short paragraphs about your thoughts or experiences.",
        category: "skills",
        difficulty: "easy",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Improves sentence structure and vocabulary usage.",
        firstStep: "Write 5 sentences about your day."
    },
    {
        id: 16,
        title: "Start Karaoke Practice Habit",
        description: "Practice singing by doing karaoke regularly to improve voice control, confidence, and rhythm.",
        category: "skills",
        difficulty: "easy",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Karaoke improves breathing, pronunciation, and confidence in speaking or performing in front of others.",
        firstStep: "Pick one song and sing it using karaoke without worrying about perfection."
    },
    {
        id: 17,
        title: "React Out Loud Practice",
        description: "Watch videos and react verbally as if talking to someone.",
        category: "skills",
        difficulty: "easy",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Builds natural speaking flow and confidence.",
        firstStep: "Watch a video and comment on it out loud."
    },
    {
        id: 18,
        title: "Speed Thinking Training",
        description: "Answer random questions quickly without overthinking.",
        category: "skills",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Improves reaction time and reduces hesitation.",
        firstStep: "Ask yourself random questions and answer instantly."
    },
    {
        id: 19,
        title: "Daily Code Replication",
        description: "Recreate small UI or features from websites daily.",
        category: "skills",
        difficulty: "medium",
        time: "3–6 weeks",
        cost: "low",
        whyItWorks: "Learning by doing builds real development skills.",
        firstStep: "Copy a simple UI component from a website."
    },
    {
        id: 20,
        title: "Micro Skill Focus",
        description: "Focus on improving one tiny skill every week.",
        category: "skills",
        difficulty: "easy",
        time: "1–2 months",
        cost: "low",
        whyItWorks: "Small improvements compound into big results.",
        firstStep: "Choose one skill like pronunciation or typing speed."
    },
    {
        id: 222,
        title: "Start Learning Magic Tricks",
        description: "Begin practicing simple magic tricks to develop hand control, focus, and performance skills.",
        category: "skills",
        difficulty: "easy",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Magic tricks improve coordination, confidence, and presentation skills while making practice fun.",
        firstStep: "Learn one simple trick (like a coin vanish or card control) and practice it slowly in front of a mirror."
    },






    {
        id: 21,
        title: "1-Task Per Day Rule",
        description: "Focus on completing just one important task every day.",
        category: "self",
        difficulty: "easy",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Removes overwhelm and builds consistency.",
        firstStep: "Pick one task today and finish it before anything else."
    },
    {
        id: 22,
        title: "Dopamine Control Habit",
        description: "Reduce instant gratification activities like social media scrolling.",
        category: "self",
        difficulty: "hard",
        time: "2–6 weeks",
        cost: "low",
        whyItWorks: "Improves focus and discipline over time.",
        firstStep: "Avoid social media for the first hour after waking up."
    },
    {
        id: 23,
        title: "Daily Self-Reflection",
        description: "Spend 5 minutes thinking about your actions and decisions.",
        category: "self",
        difficulty: "easy",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Awareness leads to better decisions.",
        firstStep: "Ask yourself: 'What did I do right today?'"
    },
    {
        id: 24,
        title: "Cold Start Routine",
        description: "Start your day with an uncomfortable but productive action.",
        category: "self",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Builds mental toughness early in the day.",
        firstStep: "Do something slightly uncomfortable after waking up."
    },
    {
        id: 25,
        title: "No Zero Days Rule",
        description: "Never let a day pass without doing something productive.",
        category: "self",
        difficulty: "medium",
        time: "1–2 months",
        cost: "low",
        whyItWorks: "Consistency beats intensity over time.",
        firstStep: "Do at least 1 small productive action today."
    },
    {
        id: 26,
        title: "Identity Shift Practice",
        description: "Act like the person you want to become.",
        category: "self",
        difficulty: "medium",
        time: "1–2 months",
        cost: "low",
        whyItWorks: "Behavior shapes identity over time.",
        firstStep: "Ask: 'What would my ideal self do right now?'"
    },
    {
        id: 27,
        title: "Daily Discomfort Training",
        description: "Do one thing daily that you normally avoid.",
        category: "self",
        difficulty: "hard",
        time: "2–6 weeks",
        cost: "low",
        whyItWorks: "Growth comes from discomfort, not comfort.",
        firstStep: "Do something slightly uncomfortable today."
    },
    {
        id: 28,
        title: "Mental Clarity Reset",
        description: "Spend time alone without distractions to think clearly.",
        category: "self",
        difficulty: "easy",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Silence improves focus and self-awareness.",
        firstStep: "Sit alone for 10 minutes without your phone."
    },
    {
        id: 29,
        title: "Limit Overthinking Rule",
        description: "Set a time limit for decisions and act after it.",
        category: "self",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Prevents analysis paralysis.",
        firstStep: "Give yourself 5 minutes to decide something today."
    },
    {
        id: 30,
        title: "Energy Tracking Habit",
        description: "Track when you feel most productive during the day.",
        category: "self",
        difficulty: "easy",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "Helps you align tasks with your natural energy levels.",
        firstStep: "Note your energy level 3 times today."
    },






    {
        id: 31,
        title: "1 Daily Conversation",
        description: "Start one small conversation with someone every day.",
        category: "social",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Repetition removes social anxiety and builds confidence.",
        firstStep: "Say something simple like 'Hey, how’s your day?' to someone."
    },
    {
        id: 32,
        title: "Eye Contact + Smile Habit",
        description: "Maintain eye contact and smile during interactions.",
        category: "social",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "Non-verbal communication builds trust instantly.",
        firstStep: "Make eye contact and smile at 3 people today."
    },
    {
        id: 33,
        title: "Ask Better Questions",
        description: "Focus on asking open-ended and interesting questions.",
        category: "social",
        difficulty: "medium",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "People enjoy talking about themselves.",
        firstStep: "Ask someone 'What was the best part of your day?'"
    },
    {
        id: 34,
        title: "Name Memory Trick",
        description: "Train yourself to remember people’s names easily.",
        category: "social",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "Using names makes interactions more personal.",
        firstStep: "Repeat someone’s name right after hearing it."
    },
    {
        id: 35,
        title: "Storytelling Practice",
        description: "Practice telling short, engaging stories from your life.",
        category: "social",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Stories make you more interesting and memorable.",
        firstStep: "Tell a simple story to a friend or record yourself."
    },
    {
        id: 36,
        title: "Active Listening Habit",
        description: "Focus fully on the speaker without interrupting.",
        category: "social",
        difficulty: "medium",
        time: "2–3 weeks",
        cost: "low",
        whyItWorks: "People value feeling heard and understood.",
        firstStep: "Listen without interrupting in your next conversation."
    },
    {
        id: 37,
        title: "Give Genuine Compliments",
        description: "Notice and mention something positive about others.",
        category: "social",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "Positive energy creates better connections.",
        firstStep: "Give one honest compliment today."
    },
    {
        id: 38,
        title: "Handle Awkward Silence",
        description: "Learn to stay calm and not panic during silence.",
        category: "social",
        difficulty: "medium",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Confidence is shown by comfort in silence.",
        firstStep: "Pause for 2 seconds before responding in conversation."
    },
    {
        id: 39,
        title: "Opinion Sharing Practice",
        description: "Express your thoughts instead of always agreeing.",
        category: "social",
        difficulty: "hard",
        time: "2–5 weeks",
        cost: "low",
        whyItWorks: "People respect those who have their own opinions.",
        firstStep: "Share your honest opinion in one conversation today."
    },
    {
        id: 40,
        title: "Exit Conversation Smoothly",
        description: "Learn how to leave conversations without awkwardness.",
        category: "social",
        difficulty: "easy",
        time: "1–2 weeks",
        cost: "low",
        whyItWorks: "Ending well leaves a good impression.",
        firstStep: "Say 'It was nice talking, I’ll catch you later.'"
    }
]