//Deault export containing the navigation bar
export default function NavHeader() {
  return (
    <>
      <nav className="NavHeader">
        <Logo />
        <NavIcons/>
        <SocialLinks/>
      </nav>
    </>
  );
}

//Logo (aka just my name), displayed on left side of navigation bar 
function Logo() {
  return (
    <div className="left">
      <div className="logo">
        <b>Thomas De Sa</b>
      </div>
    </div>
  );
}

//NavIcons, displayed at the center of the navigation bar
function NavIcons() {
  return (
    <div className="navIcons">
      <a>Projects</a>
      <a>Contact</a>
    </div>
  );
}

//social media links,, to be displayed at the right side of navigation
function SocialLinks(){
  return (<div className="right">
    <div className="links">
      <a href="https://www.github.com/desa-thomas">Github</a>
      <a>LinkedIn</a>
      <a>Instagram</a>
    </div>
  </div>)
}
