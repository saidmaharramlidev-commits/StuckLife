"use client"

import { useEffect, useState } from "react"
import { ideas, Idea } from "@/data"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setClicksLeft } from "@/redux/counterSlice"

function IdeaCard() {
    const { catagory, clicksLeft } = useSelector((state: RootState) => state.counter)
    const [idea, setIdea] = useState<Idea | null>(null)
    const [animate, setAnimate] = useState(false)

    const dispatch = useDispatch()



    useEffect(() => {
        const today = new Date().toDateString()
        const lastDate = localStorage.getItem("lastDate")
        const storedClicks = Number(localStorage.getItem("clickCount") || "0")

        if (lastDate !== today) {
            localStorage.setItem("lastDate", today)
            localStorage.setItem("clickCount", "0")
            dispatch(setClicksLeft(3))
        } else {
            dispatch(setClicksLeft(3 - storedClicks))
        }
    }, [])

    const getIdea = () => {
        const count = Number(localStorage.getItem("clickCount") || "0")

        if (count >= 3) return

        const newCount = count + 1
        localStorage.setItem("clickCount", newCount.toString())
        dispatch(setClicksLeft(3 - newCount))

        let filtered = ideas

        if (catagory) {
            filtered = ideas.filter(i => i.category === catagory)
        }

        const randomIndex = Math.floor(Math.random() * filtered.length)
        setIdea(filtered[randomIndex])
    }

    useEffect(() => {
        getIdea()
    }, [catagory])

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
            onAnimationEnd={() => setAnimate(false)}
        >
            <h1>{idea.title}</h1>

            <p>{idea.description}</p>

            <div className="idea-info-row">

                <div className="info-pill">
                    <span className="icon">⏳</span>
                    <span>{idea.time}</span>
                </div>

                <div className="info-pill">
                    <span className="icon">⚡</span>
                    <span className="capitalize">{idea.difficulty}</span>
                </div>

                <div className="info-pill">
                    <span className="icon">💰</span>
                    <span className="capitalize">{idea.cost} cost</span>
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
                onClick={getIdea}
                disabled={isDisabled}
                className={isDisabled ? "disabled-btn" : ""}
            >
                {isDisabled ? "No clicks left" : "Next Idea"}
            </button>
        </div>
    )
}

export default IdeaCard