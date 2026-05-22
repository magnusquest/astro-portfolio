<script lang="ts">
  import type { Project } from '../lib/hygraph';

  export let projects: Project[] = [];
</script>

<section class="projects-section">
  <h2>Projects</h2>
  {#if projects.length === 0}
    <p>No projects yet.</p>
  {:else}
    <ul>
      {#each projects as project}
        <li>
          {#if project.coverPhoto}
            <img src={project.coverPhoto.url} alt={project.title} width="400" />
          {/if}
          <strong>{project.title}</strong>
          <div>{@html project.content.html}</div>
          {#if project.link}
            <a href={project.link} target="_blank" rel="noopener">View Project</a>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>
