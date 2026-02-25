import "./ProjectDescription.css";

interface ProjectDescriptionProps {
  description: string;
  goal: string;
  todo: string;
}

function ProjectDescription({
  description,
  goal,
  todo,
}: ProjectDescriptionProps) {
  return (
    <>
      <ul className="ProjectDescriptionListContainer">
        <li>{description}</li>
        <li>{goal}</li>
        <li>{todo}</li>
      </ul>
    </>
  );
}

export default ProjectDescription;
