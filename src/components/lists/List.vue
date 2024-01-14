<script setup lang="ts">
import { ref } from 'vue'
import ListItem from './ListItem.vue';
import { listCompany } from '../../data'
import './assets/List.scss';

const list = ref(listCompany);
</script>

<template>
  <section class="list_arbitration">
    <p class="textBlock lato_14_medium">
      Trusted by the Best Arbitration Teams Worldwide
    </p>

    <ul class="list">
      <ListItem v-for="item in list" :url="item.url" :key="item.id" />
    </ul>
  </section>
</template>