<template>
	<form class="contact-form" @submit.prevent="handleSubmit">
		<h2>Contact Me</h2>
		<label>
			Name:
			<input v-model="name" type="text" required />
		</label>
		<label>
			Email:
			<input v-model="email" type="email" required />
		</label>
		<label>
			Message:
			<textarea v-model="message" required></textarea>
		</label>
		<button type="submit">Send</button>
		<p v-if="submitted" class="success">Thank you for your message!</p>
	</form>
</template>

<script setup>
	import { ref } from "vue";
	const name = ref("");
	const email = ref("");
	const message = ref("");
	const submitted = ref(false);

	function handleSubmit() {
		// Placeholder for form submission logic (e.g., Formspree, Netlify Forms)
		submitted.value = true;
		name.value = "";
		email.value = "";
		message.value = "";
	}
</script>

<style scoped>
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
		margin: 2rem auto;
	}
	label {
		display: flex;
		flex-direction: column;
		font-weight: bold;
	}
	input,
	textarea {
		margin-top: 0.5rem;
		padding: 0.5rem;
		border-radius: 4px;
		border: 1px solid #ccc;
	}
	button {
		padding: 0.75rem;
		background: #4f46e5;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.success {
		color: green;
		font-weight: bold;
	}
</style>
