<script setup lang="ts">
import { CardItemProp } from "../../types/index";
import './assets/Card.scss';

const props = defineProps<CardItemProp>();
</script>

<template>
    <section class="card">
        <div class="wrapper">
            <div class="card_text ibm-plex-sans_16_bold">{{ props.text }}
                <div class="card_link">
                <a :href="props.link" class="ibm-plex-sans_16_medium">{{ props.textLink }}</a>
            </div>
        </div>
        </div>
    </section>
</template>