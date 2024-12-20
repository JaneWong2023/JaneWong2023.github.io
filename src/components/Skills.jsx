import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Node.js' },
    { name: 'PostgreSQL' },
    { name: 'Java' },
    { name: 'Python' },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
