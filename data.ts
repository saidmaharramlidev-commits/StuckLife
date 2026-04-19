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
        description: "Create aesthetic videos without showing your face or talking.",
        category: "money",
        difficulty: "medium",
        time: "1–3 months",
        cost: "low",
        whyItWorks: "Short-form content is in high demand and doesn’t require personality.",
        firstStep: "Post your first aesthetic video today using your phone."
    },
    {
        id: 2,
        title: "Daily English Speaking Routine",
        description: "Improve your speaking by practicing 20 minutes daily.",
        category: "skills",
        difficulty: "easy",
        time: "2–4 weeks",
        cost: "low",
        whyItWorks: "Consistency builds fluency faster than passive learning.",
        firstStep: "Record yourself speaking for 2 minutes today."
    },
    {
        id: 3,
        title: "30-Day Confidence Challenge",
        description: "Build confidence through small daily social actions.",
        category: "self",
        difficulty: "medium",
        time: "30 days",
        cost: "low",
        whyItWorks: "Exposure reduces fear and builds real confidence.",
        firstStep: "Start by making eye contact and smiling at 3 people today."
    },
    {
        id: 4,
        title: "Weekly Networking Habit",
        description: "Meet new people and grow your social circle weekly.",
        category: "social",
        difficulty: "medium",
        time: "1–2 months",
        cost: "low",
        whyItWorks: "Opportunities come from people, not isolation.",
        firstStep: "Message 1 new person or join 1 community today."
    }
]