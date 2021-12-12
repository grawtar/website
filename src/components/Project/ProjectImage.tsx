const ProjectImage: React.FC<{ color: string }> = ({ children, color }) => {
  return (
    <span
      className={`w-3/4 sm:w-1/2 md:w-4/12 min-h-0 md:min-h-256  bg-${color} justify-center items-center flex rounded-lg shadow-lg m-2 p-4`}
    >
      {children}
    </span>
  );
};

export default ProjectImage;
