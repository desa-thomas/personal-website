//Default export containg the About section
export default function About() {
  return (
    <div className="about">
      <AboutTitle />
      <AboutContent />
    </div>
  );
}

//The content in the about section
function AboutContent() {
  return (
    <div className="aboutContent">
      My name is Thomas, and I am a third year computer science and mathematics
      student learning React!
    </div>
  );
}

function AboutTitle() {
  return <b className="aboutTitle">About Me</b>;
}
