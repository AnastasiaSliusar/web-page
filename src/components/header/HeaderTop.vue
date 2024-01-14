<script setup lang="ts">

</script>

<template>
    <section class="header_partner">
        <span class="hr top">
            <img src="../../assets/images/filettopleft.svg" /> </span>

        <button class="try_button lato_14_bold">
            <span><img class="arrow" src="../../assets/images/ico-arrow_up.svg" width="16" height="16" /></span>
            <span>TRY JUS
                MUNDI</span>
        </button>
    </section>
</template>

<style scoped>
.header_partner {
    width: 1311px;
    height: 80px;
    top: 32px;
    position: absolute;
    left: 64px;
    right: 64px;
}

.header_partner span.top {
    top: 40px;
    position: absolute;
    left: 0;
}

.try_button {
    width: 193px;
    height: 49px;
    padding: 16px;
    border-radius: 4px;
    gap: 16px;
    box-shadow: 0px 8px 32px 0px #254f6d3d;
    right: 0;
    position: absolute;
}

.try_button .arrow {
    display: inline-block;
    vertical-align: middle;
}

.try_button span {
    display: inline-block;
    text-align: left;

}
</style>

