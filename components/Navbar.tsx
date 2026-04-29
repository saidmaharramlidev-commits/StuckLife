"use client"

import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"
import { setStep } from "@/redux/counterSlice"
import { useUser, SignUpButton, UserButton } from "@clerk/nextjs";

function Navbar() {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const { isSignedIn, isLoaded } = useUser()

    // optional: avoid flicker while loading
    if (!isLoaded) return null

    return (
        <>
            <div id="mainNavbar">
                <h1 className="navbar-title" onClick={() => dispatch(setStep('home'))}>
                    StuckLife
                </h1>

                <div className="navbar-endpoints-wrapper">
                    <div onClick={() => dispatch(setStep('home'))} className="endpoint">Home</div>
                    <div onClick={() => dispatch(setStep('howitworks'))} className="endpoint">How it works</div>
                    <div onClick={() => dispatch(setStep('categories'))} className="endpoint">Categories</div>
                </div>

                {/* AUTH LOGIC */}
                {!isSignedIn ? (
                    <SignUpButton mode="modal">
                        <button className="sign-up-btn">Sign Up</button>
                    </SignUpButton>
                ) : (
                    <div className="userProfile">
                        <UserButton
                        />
                    </div>
                )}

                <div className="menu-icon" onClick={() => setOpen(true)}>
                    <MdMenu />
                </div>
            </div>

            {/* Overlay */}
            {open && <div className="overlay" onClick={() => setOpen(false)} />}

            {/* Sidebar */}
            <div className={`sidebar ${open ? "open" : ""}`}>


                <div className="sidebar-header">
                    <MdClose onClick={() => setOpen(false)} />
                </div>

                {/* AUTH SIDEBAR */}
                {!isSignedIn ? (
                    <SignUpButton mode="modal">
                        <button className="sidebar-btn">Sign Up</button>
                    </SignUpButton>
                ) : (
                    <div className="flex justify-center mt-4 ">
                        <UserButton />
                    </div>
                )}

                <div onClick={() => {
                    setOpen(false)
                    dispatch(setStep('home'))
                }}>Home</div>

                <div onClick={() => {
                    setOpen(false)
                    dispatch(setStep('howitworks'))
                }}>How it works</div>

                <div onClick={() => {
                    setOpen(false)
                    dispatch(setStep('categories'))
                }}>Categories</div>


            </div>
        </>
    )
}

export default Navbar