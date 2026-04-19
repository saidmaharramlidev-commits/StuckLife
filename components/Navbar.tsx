import Link from "next/link"

function Navbar() {
    return (
        <div id="mainNavbar">
            <h1 className="navbar-title">StuckLife</h1>


            <div className="navbar-endpoints-wrapper">
                <Link className="endpoint" href="/">Home</Link>
                <Link className="endpoint" href="/how-it-works">How it works</Link>
                <Link className="endpoint" href="/categories">Categories</Link>

            </div>

            <Link href={'/sign-up'} className="sign-up-btn">
                Sign Up

            </Link>

        </div>
    )
}

export default Navbar