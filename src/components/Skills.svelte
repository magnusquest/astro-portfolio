<script>
  export let skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Svelte',
    'Vue',
    'Node.js',
    'Astro'
  ];
</script>

<section class="skills-section">
  <h2>Skills</h2>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
