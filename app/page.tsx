"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import { FcIdea } from "react-icons/fc";
import { BsLightningChargeFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setClicksLeft, setStep } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import IdeaCard from "@/components/IdeaCard";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";

export default function Home() {
  const dispatch = useDispatch()

  const { step, clicksLeft } = useSelector((state: RootState) => state.counter)
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

  const handleClick = (e: any) => {
    e.preventDefault()

    let count = Number(localStorage.getItem("clickCount") || "0")

    if (count >= 3) return

    count += 1

    localStorage.setItem("clickCount", count.toString())
    dispatch(setClicksLeft(3 - count))
    dispatch(setStep("card"))
  }

  const isDisabled = clicksLeft <= 0

  return (
    <div className="mainHomeWrapper">
      <Navbar />

      <div id="center-content-home">
        {step === "home" ?
          <>
            <h1 className="home-intro-text">
              Get a Life-Changing Idea in One Click
            </h1>

            <p className="home-intro-text-small">
              Stuck? Click the button and get a unique, actionable idea to change your life.
            </p>

            <button
              className={`home-main-cta ${isDisabled ? "disabled" : ""}`}
              onClick={handleClick}
              disabled={isDisabled}
            >
              Get Idea
            </button>

            {/* 👇 clicks left text */}
            <p className="click-left-span">
              {clicksLeft > 0
                ? `${clicksLeft} clicks left today`
                : "Come back tomorrow"}
            </p>


            <div id="three-element-wrapper">

              <div className="element-home">
                <FcIdea className="icon-element" />
                <h1>Unique Ideas</h1>
                <p>Fresh ideas you can start today.</p>


              </div>

              <div className="element-home">
                <BsLightningChargeFill className="icon-element text-blue-500" />
                <h1>Instant Action Steps</h1>
                <p>Clear first step. No confusion.</p>


              </div>

              <div className="element-home">
                <GoGoal className="icon-element text-purple-600" />
                <h1>Proven to Work</h1>
                <p>Based on real success patterns.</p>


              </div>



            </div>




          </> : ''}


        {step === "card" && <>
          <IdeaCard />

          <button className="cta-card-home m-5 text-gray-600 hover:cursor-pointer hover:text-white transition duration-300" onClick={() => dispatch(setStep('home'))}>
            {`<< Home >>`}
          </button>



        </>}


        {step === "howitworks" && <>
          <HowItWorks />





        </>}

        {step === "categories" && <>
          <Categories />

        </>}


      </div>
    </div>
  )
}