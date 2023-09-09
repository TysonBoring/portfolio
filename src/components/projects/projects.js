import React from 'react';

const projectsData = [
  {
    title: 'act-on.com made responsive & interactive.',
    description: 'A local start-up\'s website landing page made more responsive and with added interactivity.',
    livePreviewLink: 'https://example.com/live-preview',
    githubLink: 'https://github.com/yourusername/project1',
    imageUrl: 'url-to-your-image1.jpg',
  },
  {
    title: 'Discord Web App Clone',
    description: 'A full-stack implementation of Discord\'s functionality in my own project, utilizing TailwindCSS, React, and shadcn-UI for my UI/UX.',
    livePreviewLink: 'https://example.com/live-preview2',
    githubLink: 'https://github.com/yourusername/project2',
    imageUrl: 'url-to-your-image2.jpg',
  },
  {
    title: 'TysonBdev.com',
    description: 'My personal portfolio site, yeah! The one you\'re on right now!',
    livePreviewLink: 'https://example.com/live-preview4',
    githubLink: 'https://github.com/yourusername/project4',
    imageUrl: 'url-to-your-image3.jpg',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Notable Projects</h2>
        <hr className="border-indigo-500 w-32 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between transition-transform transform hover:scale-105 hover:bg-gray-200 hover:bg-opacity-90" // Added hover:bg-opacity-80
            >
              <div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 cursor-pointer"
                  onClick={() => window.open(project.livePreviewLink, '_blank')}
                />
                <h3 className="text-xl text-black font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={project.livePreviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 text-black hover:underline inline-block mr-4"
                >
                  Live Preview &#x2197;
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 text-black hover:underline inline-block"
                >
                  GitHub &#x2197;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
