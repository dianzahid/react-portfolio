import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>I’m an ambitious computer engineering student at Toronto Metropolitan University with a strong passion for software development and problem-solving. My focus lies in software engineering, with experience building interactive tools, full-stack applications, and algorithm visualizers.</p>
        <p>I’ve developed projects such as an algorithm visualizer, a Java-based bookstore system using the State Design Pattern, and a responsive mock e-commerce website with live API integration and testing frameworks. Each project has strengthened my ability to combine technical precision with creative problem-solving.</p>
        <p>Beyond coursework, I’ve gained real-world experience tutoring Grade 12 students in advanced functions, calculus, and physics. This role taught me how to break down complex ideas into simple, step-by-step explanations—skills I carry into my development work when tackling challenging concepts.</p>
        <p>If I had to sum myself up in one sentence, I’d say I’m a curious learner, problem-solver, and builder—constantly looking for ways to grow as a developer while balancing my love for technology, sports, and creative projects.</p>
      </div>

      <div className="container-about-showcase">
          <div className="showcase-skills">
           <div className="skill-title">
            <h1>Skills</h1>
           </div>
           <div className="skills-grid">
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">Software Testing</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">Java</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">JavaScript</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">React</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">HTML & CSS</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">Git/GitHub</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">SQL</div>
             </div>
             <div className="skill-item">
               <div className="skill-icon"></div>
               <div className="skill-label">+ More</div>
             </div>
           </div>
          </div>
          <div className="showcase-projects">
          <div className="projects-title">
            <h1>Projects</h1>
           </div>
           <div className="projects-grid">
             <div className="project-item">
               <div className="project-image"></div>
               <div className="project-content">
                 <h3 className="project-title">Algorithm Visualizer</h3>
                 <p className="project-description">An interactive tool built with React, Tailwind CSS, and JavaScript to visualize sorting and pathfinding algorithms such as Merge Sort, Quick Sort, BFS/DFS, and Dijkstra's. Designed with a responsive UI to make complex algorithms intuitive and accessible for learners.</p>
               </div>
             </div>
             <div className="project-item">
               <div className="project-image"></div>
               <div className="project-content">
                 <h3 className="project-title">Mock E-Commerce Website</h3>
                 <p className="project-description">A responsive e-commerce platform developed with React, JavaScript, and API integration, featuring dynamic product listings and a real-time shopping cart system. Automated testing with Jasmine ensured reliability and scalability.</p>
               </div>
             </div>
             <div className="project-item">
               <div className="project-image"></div>
               <div className="project-content">
                 <h3 className="project-title">Bookstore Application (Java, State Design Pattern)</h3>
                 <p className="project-description">A Java-based bookstore management system implementing the State Design Pattern to handle inventory, checkout, and transaction flows. Built with clean, modular, and maintainable code following OOP principles.</p>
               </div>
             </div>
           </div>

          </div>
      </div>
    </div>
  );
};

export default About 