
<script setup lang="ts">
import Card from './Card.vue';
import { carouselData } from '../../data/index';
import { ref } from 'vue'
import './assets/Carousel.scss';

let cards = ref(carouselData);

</script>

<template>
    <section class="news_feed_carousel">
        <section class="carousel">
            <Card v-for="item in cards" :text="item.text" :link="item.link" :textLink="item.textLink" :key="item.id"
                :activeItem="item.active" />
        </section>
    </section>
</template>