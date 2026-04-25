"use client"

import { useEffect, useState } from "react"
import { ideas, Idea } from "@/data"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { getClicksLeft, useClick } from "@/utils/clicks"

function IdeaCard() {
    const { catagory } = useSelector((state: RootState) => state.counter)

    const [idea, setIdea] = useState<Idea | null>(null)
    const [clicksLeft, setClicksLeft] = useState(3)
    const [animate, setAnimate] = useState(false)

    // ✅ only generate idea (NO click)
    const generateIdea = () => {
        let filtered = ideas

        if (catagory) {
            filtered = ideas.filter(i => i.category === catagory)
        }

        const randomIndex = Math.floor(Math.random() * filtered.length)
        setIdea(filtered[randomIndex])
    }

    // ✅ initialize
    useEffect(() => {
        setClicksLeft(getClicksLeft())
        generateIdea() // first idea FREE
    }, [catagory])

    // ✅ next idea (USES click)
    const handleNextIdea = () => {
        const success = useClick()

        if (!success) return

        setClicksLeft(getClicksLeft())
        generateIdea()
    }

    // animation
    useEffect(() => {
        if (!idea) return

        setAnimate(true)
        const timeout = setTimeout(() => setAnimate(false), 700)
        return () => clearTimeout(timeout)
    }, [idea])

    if (!idea) return null

    const isDisabled = clicksLeft <= 0

    return (
        <div
            id="mainIdeaCard"
            className={animate ? "premium-coming" : ""}
        >
            <h1>{idea.title}</h1>

            <p>{idea.description}</p>

            <div className="idea-info-row">
                <div className="info-pill">
                    <span>⏳</span>
                    <span>{idea.time}</span>
                </div>

                <div className="info-pill">
                    <span>⚡</span>
                    <span>{idea.difficulty}</span>
                </div>

                <div className="info-pill">
                    <span>💰</span>
                    <span>{idea.cost} cost</span>
                </div>
            </div>

            <div>
                <h3>Why It Works</h3>
                <p>{idea.whyItWorks}</p>
            </div>

            <div>
                <h3>First Step</h3>
                <p>{idea.firstStep}</p>
            </div>

            <button
                onClick={handleNextIdea}
                disabled={isDisabled}
                className={isDisabled ? "disabled-btn" : ""}
            >
                {isDisabled ? "No clicks left" : "Next Idea"}
            </button>
        </div>
    )
}

export default IdeaCard