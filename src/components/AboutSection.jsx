import React from "react";

const skills = [
	"TypeScript", "JavaScript", "Java",
	"Vue", "Angular", "React", "Svelte", "Astro",
	"Node.js", "NestJS", "Spring",
	"PostgreSQL", "MySQL", "MongoDB",
	"GraphQL", "AWS", "Firebase",
	"Tailwind CSS", "Jenkins",
];

const AboutSection = () => (
	<section className="about-section">
		<h2>About Me</h2>
		<p>
			Full Stack SWE by day, white-hat hacker by night. Based in Tampa, FL.
			University of Miami alumni.
		</p>
		<p>
			I love building with new technology — especially AI. Currently deepening
			my cybersecurity knowledge through HackTheBox.
		</p>
		<ul>
			<li><strong>Focus:</strong> Full-stack web, AI tooling, cybersecurity</li>
			<li><strong>Location:</strong> Tampa, FL</li>
			<li><strong>Education:</strong> University of Miami</li>
		</ul>
		<h3>Skills</h3>
		<ul className="skills-list">
			{skills.map((skill) => (
				<li key={skill}>{skill}</li>
			))}
		</ul>
	</section>
);

export default AboutSection;
