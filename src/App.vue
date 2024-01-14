<script setup lang="ts">
import Header from './components/header/Header.vue';
import List from './components/lists/List.vue';
import NewsFeed from './components/newsFeed/NewsFeed.vue';
import WhyBlock from './components/note/WhyBlock.vue';
</script>

<template>
  <Header></Header>
  <WhyBlock />
  <NewsFeed/>
  <List />
</template>