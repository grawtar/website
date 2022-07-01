const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col container m-auto pb-24">
      <div className="mx-3 md:mx-8">{children}</div>
    </div>
  );
};

export default PageContent;
