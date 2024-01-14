<script setup lang="ts">
import { ref } from 'vue'
import { LinkProp, ListItemProps } from '../../types/index'
import { images } from '../../assets';
import './assets/ListItem.scss';

const props = defineProps<ListItemProps>()

const src = ref((images as unknown as LinkProp)[props.url]);

</script>
<template>
    <li>
        <div :class="[props.textBlock ? 'text' : '', 'list_item']">
            <img :src="src" />
            <p v-if="props.textBlock">
            <p class="text-title ibm-plex-sans_18_bold">
                {{ props.textBlock.title }}
            </p>

            <p class="text-body ibm-plex-sans_16_medium">
                {{ props.textBlock.body }}
            </p>
            </p>
        </div>
    </li>
</template>

