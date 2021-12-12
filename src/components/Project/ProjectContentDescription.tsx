import ProjectBoldText from "./ProjectBoldText";

const ProjectContentDescription: React.FC = ({ children }) => {
  return (
    <div>
      <ProjectBoldText>DESCRIPTION</ProjectBoldText>
      {children}
    </div>
  );
};

export default ProjectContentDescription;
