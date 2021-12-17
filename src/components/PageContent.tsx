const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col max-w-3xl m-auto pb-24">
      <div className="mx-3 md:mx-8">{children}</div>
    </div>
  );
};

export default PageContent;
