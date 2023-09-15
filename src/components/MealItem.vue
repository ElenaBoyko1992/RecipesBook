<template>
	<div class="bg-white shadow rounded-xl">
		<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
			<img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
		</router-link>
		<div class="p-3">
			<h3 class="font-bold">{{ meal.strMeal }}</h3>
			<p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, et suscipit sint nostrum
				vero voluptas
				itaque quaerat quasi veniam.</p>
			<div class="flex items-center justify-between">
				<YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const props = defineProps({
	meal: {
		required: true,
		type: Object
	}
})

</script>