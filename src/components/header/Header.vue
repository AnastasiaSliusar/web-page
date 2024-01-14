<script setup lang="ts">
import HeaderLogos from './HeaderLogos.vue';
import HeaderInfo from './HeaderInfo.vue';
import HeaderFooter from './HeaderFooter.vue';
import HeaderTop from './HeaderTop.vue';
</script>

<template>
    <section class="header_section">
        <HeaderTop />
        <HeaderInfo />
        <HeaderLogos />
        <HeaderFooter />
    </section>
</template>
<style scoped>
.header_section {
    width: 1440px;
    height: 804px;

    border: 2px dotted red;
    position: relative;
}
</style>