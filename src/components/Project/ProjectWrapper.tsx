const ProjectWrapper: React.FC<{ mirror?: boolean }> = ({ children, mirror }) => {
  return (
    <div
      className={`flex flex-col items-center md:items-start md:flex-row md:space-x-12 ${
        mirror && "md:flex-row-reverse md:space-x-reverse"
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectWrapper;
