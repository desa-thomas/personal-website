//Importing my components
import NavHeader from "./Components/NavHeader";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import Project from "./Components/Project";
import { ProjectGallery } from "./Components/Project";
import Foot from "./Components/Foot";

const projects = require("./projects.json").projects;

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function App() {
  return (
    <div className="App">
      {/*Nav bar and side bar*/}
      <NavHeader />
      <Sidebar />

      {/*Main content section wrapper*/}
      <Main>
        {/*The reasonn "mainContent" isn't a part of the Main component is so the footer doesnt contain the "main" styling*/}
        <div className="mainContent">
          <About />
          <ProjectGallery>
            {projects.map((project) => {
              return (
                <Project
                  name={project.name}
                  date={project.date}
                  description={project.description}
                />
              );
            })}
          </ProjectGallery>
        </div>
        
        //footer
        <Foot />
      </Main>
    </div>
  );
}

export default App;
