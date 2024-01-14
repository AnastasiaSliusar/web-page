
<script setup lang="ts">
import Carousel from './Carousel.vue';
import NewsFeedHeader from './NewsFeedHeader.vue';
import './assets/NewsFeed.scss';

</script>

<template>
    <section class="news_feed_section">
        <NewsFeedHeader />
        <Carousel />
        <div class="read_all_news lato_14_bold"><a href="">READ ALL NEWS</a></div>
    </section>
</template>