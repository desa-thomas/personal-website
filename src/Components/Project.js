export default function Project({ name, date, description }) {
  return (
    <div className="project">
      <p>
        <Title name={name}/>
        <br />
        {date}
        <br /> <br/>
        {description}
      </p>
    </div>
  );
}

export function ProjectGallery({ children }) {
  return <div className="projectGallery">
    {children}
    </div>;
}

function Title({name}){
    return (<>
    <b style={{fontSize:"30px"}}>{name}</b>
    </>)
}