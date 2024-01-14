<script setup lang="ts">
import Header from './components/header/Header.vue';
import ListTest from './components/lists/List.vue';
import NewsFeed from './components/newsFeed/NewsFeed.vue';
import WhyBlock from './components/note/WhyBlock.vue';
//<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" >
</script>

<template>
  <Header></Header>
  <WhyBlock />
  <NewsFeed/>
  <ListTest />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
