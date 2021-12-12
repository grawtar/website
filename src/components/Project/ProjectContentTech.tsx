import ProjectBoldText from "./ProjectBoldText";

const ProjectContentTech: React.FC = ({ children }) => {
  return (
    <div>
      <ProjectBoldText>TECH</ProjectBoldText>
      {children}
    </div>
  );
};

export default ProjectContentTech;
