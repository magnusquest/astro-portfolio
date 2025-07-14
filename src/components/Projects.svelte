<script>
  export let projects = [
    {
      name: 'Astro Portfolio',
      description: 'A modern portfolio site built with Astro, React, Svelte, and Vue.',
      url: 'https://github.com/yourusername/astro-portfolio'
    },
    {
      name: 'Blog Platform',
      description: 'A markdown-based blog platform with dynamic content.',
      url: 'https://github.com/yourusername/blog-platform'
    }
  ];
</script>

<section class="projects-section">
  <h2>Projects</h2>
  <ul>
    {#each projects as project}
      <li>
        <strong>{project.name}</strong>: {project.description}
        <a href={project.url} target="_blank" rel="noopener">View</a>
      </li>
    {/each}
  </ul>
</section>
