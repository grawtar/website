import { ProjectItem } from "./ProjectItem";

const ProjectList = () => {
  return (
    <div className="lg:w-4/5 mx-auto space-y-6">
      <ProjectItem>
        <ProjectItem.Content>
          <ProjectItem.Title href="https://mailisk.com">
            Mailisk
          </ProjectItem.Title>
          <p>
            Mailisk is an end-to-end email testing platform. It allows you to
            receive emails with code and automate email flows. You get a unique
            subdomain and access to unlimited custom email addresses.
          </p>
        </ProjectItem.Content>
        <ProjectItem.Visual>
          <img src="/mailisk-image.png" alt="lnkky" />
        </ProjectItem.Visual>
      </ProjectItem>
      <ProjectItem>
        <ProjectItem.Content>
          <ProjectItem.Title href="https://pakkly.com">
            Pakkly
          </ProjectItem.Title>
          <p>
            Complete solution for deploying and updating desktop apps. Ensures
            your clients are on the latest version, cross-platform support
            included.
          </p>
          <p className="mt-4 text-gray-700 font-semibold">
            React, NextJS, Express, Rust
          </p>
        </ProjectItem.Content>
        <ProjectItem.Visual>
          <img src="/pakkly-image.png" alt="Pakkly" />
        </ProjectItem.Visual>
      </ProjectItem>
      <ProjectItem>
        <ProjectItem.Content>
          <ProjectItem.Title href="https://lnkky.com">lnkky</ProjectItem.Title>
          <p>
            Solution for creating unique links that lead to completely
            customzied pages. Allows you to create customized thank you pages,
            surveys, messages, etc.
          </p>
        </ProjectItem.Content>
        <ProjectItem.Visual>
          <img src="/lnkky-image.png" alt="lnkky" />
        </ProjectItem.Visual>
      </ProjectItem>
      <ProjectItem>
        <ProjectItem.Content>
          <ProjectItem.Title href="https://featuretrail.com">
            FeatureTrail
          </ProjectItem.Title>
          <p>
            An embeddable widget that helps you make awesome public roadmaps.
          </p>
        </ProjectItem.Content>
        <ProjectItem.Visual>
          <img src="/featuretrail-image.png" alt="FeatureTrail" />
        </ProjectItem.Visual>
      </ProjectItem>
    </div>
  );
};

export default ProjectList;
