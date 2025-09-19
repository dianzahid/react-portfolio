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
           <div className="skill">
            <p>JavaScript, React, Node.js, Python, Java, HTML/CSS, Git, MongoDB, Express.js</p>
           </div>
          </div>
          <div className="showcase-projects">
          <div className="projects-title">
            <h1>Projects</h1>
           </div>
           <div className="projects">
            <p>Algorithm Visualizer, Bookstore System, E-commerce Website, Tutoring Platform</p>
           </div>

          </div>
      </div>
    </div>
  );
};

export default About 