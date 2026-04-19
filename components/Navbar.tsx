"use client"

import { useState } from "react"
import Link from "next/link"
import { MdMenu, MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"
import { setStep } from "@/redux/counterSlice"

function Navbar() {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    return (
        <>
            <div id="mainNavbar">
                <h1 className="navbar-title" onClick={() => dispatch(setStep('home'))}>StuckLife</h1>

                <div className="navbar-endpoints-wrapper">
                    <Link onClick={() => dispatch(setStep('home'))} className="endpoint" href="/">Home</Link>
                    <Link onClick={() => dispatch(setStep('howitworks'))} className="endpoint" href="/how-it-works">How it works</Link>
                    <Link onClick={() => dispatch(setStep('categories'))} className="endpoint" href="/categories">Categories</Link>
                </div>

                <Link href={'/sign-up'} className="sign-up-btn">
                    Sign Up
                </Link>

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

                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
                <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>

                <Link href="/sign-up" className="sidebar-btn" onClick={() => setOpen(false)}>
                    Sign Up
                </Link>
            </div>
        </>
    )
}

export default Navbar