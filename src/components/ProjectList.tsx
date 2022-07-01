import { ProjectItem } from "./ProjectItem";

const ProjectList = () => {
  return (
    <div className="lg:w-4/5 mx-auto space-y-6">
      <ProjectItem>
        <ProjectItem.Content>
          <ProjectItem.Title href="https://lnkky.com">lnkky</ProjectItem.Title>
          <p>
            Solution for creating unique links that lead to completely
            customzied pages. Allows you to create customized thank you pages,
            surveys, messages, etc.
          </p>
          <p className="mt-4 text-gray-700 font-semibold">
            Fastify, React, NextJS
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
          <p className="mt-4 text-gray-700 font-semibold">
            React, NextJS, Express, Rust
          </p>
        </ProjectItem.Content>
        <ProjectItem.Visual>
          <img src="/featuretrail-image.png" alt="FeatureTrail" />
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
    </div>
  );
};

export default ProjectList;
