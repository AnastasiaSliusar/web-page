<script setup lang="ts">

</script>

<template>
    <section class="info">
            <div class="info_header larken_56_bold">A Unique Partnership for the Publication of ICC Arbitration Awards</div>
            <div class="info_text">The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC
                Arbitration Awards and related materials freely available to the global legal community.</div>
            <button class="info_button">
                <span class="icon"><img class="arrow" src="../../assets/images/ico.svg" width="24"
                        height="24" /></span><span class="text lato_14_bold">Access ICC Awards</span>

            </button>
    </section>
</template>

<style scoped>

.info {
    width: 582px;
    height: 565px;
    right: 122px;
    top: 175px;
    gap: 32px;
    border: 2px dotted yellow;
    position: absolute;
}
.info .info_header {
    width: inherit;
    height: 256px;
    text-align: left;
    color: #2C2B2E;
    animation-name: info_header_anim;
    animation-duration: 2s;
    position: inherit;
}

.info .info_text {
    width: inherit;
    height: 96px;
    top: 288px;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
    color: #2C2B2E;
    position: inherit;

    animation-name: info_text_anim;
    animation-duration: 0.3s;

}
.info .info_button {
    width: 263px;
    height: 64px;
    top: 477px;
    padding: 20px 32px 20px 32px;
    border-radius: 4px;
    gap: 8px;
    background: #009EFE;
    box-shadow: 0px 8px 32px 0px #254F6D3D;
    position: absolute;
    left: 0;
    animation-name: info_button_anim;
    animation-duration: 6s;
}

.info .info_button .text {
    text-align: left;
    display: inline;
    color: #FFFFFF;
    width: 173px;
    height: 17px;
}

.info .info_button .icon img {
    vertical-align: middle;
}

@keyframes info_header_anim {
    from {
        top: 100px;
        opacity: 0;

    }

    to {
        top: 0;
        opacity: 1;
    }
}

@keyframes info_text_anim {
    from {
        display: none;
    }

    to {
        display: block;
    }
}

@keyframes info_button_anim {
    from {
        opacity: 0;
    }

    60%{
        opacity: 0;
    }

    70% {
        opacity: 0.5;
    }

    to {
        opacity: 1;
    }
}

@keyframes header_anim {
    from {
        opacity: 0;
    }

    60%{
        opacity: 0;
    }

    70% {
        opacity: 0.5;
    }

    to {
        opacity: 1;
    }
}

</style>

