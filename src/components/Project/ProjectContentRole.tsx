import React from "react";
import ProjectBoldText from "./ProjectBoldText";

const ProjectContentRole: React.FC = ({ children }) => {
  return (
    <div>
      <ProjectBoldText>ROLE</ProjectBoldText>
      {children}
    </div>
  );
};

export default ProjectContentRole;
