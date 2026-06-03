import './navbar.css'
export default function Navbar(){
  return(
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Get Started</a>
      </nav>
    </div>
  )
}