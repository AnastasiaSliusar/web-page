<script setup lang="ts">
import { ref } from 'vue'
import ListItem from './ListItem.vue'
import './assets/ListWhy.scss';
import { listWhy } from '../../data';

const list = ref(listWhy);

</script>

<template>
    <section class="list_why">
        <ul class="list">
            <ListItem v-for="item in list" :url="item.url" :textBlock="item.textBlock" :key="item.id"></ListItem>
        </ul>
    </section>
</template>
