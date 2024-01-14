<script setup lang="ts">
import HeaderLogos from './HeaderLogos.vue';
import HeaderInfo from './HeaderInfo.vue';
import HeaderFooter from './HeaderFooter.vue';
import HeaderTop from './HeaderTop.vue';
import './assets/Header.scss';
</script>

<template>
    <section class="header_section">
        <HeaderTop />
        <HeaderInfo />
        <HeaderLogos />
        <HeaderFooter />
    </section>
</template>