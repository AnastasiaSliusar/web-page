<script setup lang="ts">

</script>

<template>
    <section class="header_logo">
        <div class="partner">
            <span class="logo">
                <img src="../../assets/images/logo_icc.svg" />
            </span>
            <span class="circle"></span>
        </div>
        <div class="js">
            <span class="logo">
                <span class="ellipse"></span>
                <img src="../../assets/images/logo_jm.svg" />
            </span>
            <span class="circle"></span>
        </div>
        <div class="gif">
            <img src="../../assets/images/case_bg.gif" />
        </div>
    </section>
</template>
<style scoped>
.partner {
    width: 483px;
    height: 483px;
    top: 42px;
    left: 94px;
    position: absolute;
    border: 2px dotted green;
    background: #FFFFFF;
}

.partner .logo {
    width: 323.94px;
    height: 165.19px;
    margin: 0 auto;
    padding: 0px 0px 0px 0px;
    border: 2px dotted violet;
    display: block;
    opacity: 1;
    margin-top: 200px;
    animation-name: partner_logo_anim;
    animation-duration: 4s;
}

.js .logo {
    width: 107.65px;
    height: 38.75px;
    top: 165px;
    left: 115.24px;
    padding: 0px 0px 0.37px 0px;
    border: 2px dotted orange;
    display: block;
    position: absolute;

    animation-name: js_logo_anim;
    animation-duration: 4.5s;
}

.js .logo .ellipse {
    width: 187.13px;
    height: 187.13px;
    top: -74px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.675) 0%, rgba(255, 255, 255, 0.375) 100%);
    box-shadow: 0px 0px 192px 0px #00000026;
    border-radius: 50%;

    display: block;
    position: absolute;
    z-index: -9;

    background: white;
    z-index: 1;
    opacity: 0.3;
}

.js .logo img {
    margin-left: 39.56px;
    margin-right: 39.56px;
}

.gif {
    width: 478.98px;
    height: 496.31px;
    top: 255.49px;
    left: 150px;
    border: 2px dotted blue;
    position: absolute;
    z-index: -1;
    animation-name: gif_text_anim;
    animation-duration: 1s;
}

.gif img {
    width: 29.936rem;
    height: 31.019rem;
}

.partner .circle {

    box-shadow: 0px 0px 128px 0px #0000001A;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    animation-name: circle_anim;
    animation-duration: 2s;

    top: 0px;
    width: 483px;
    height: 483px;
    left: 0px;
}

.js {
    width: 424.82px;
    height: 354.8px;
    top: 390px;
    left: 20px;
    position: absolute;
    border: 2px dotted orange;
}

@keyframes circle_anim {
    from {
        top: 80px;
        width: 322px;
        height: 322px;
        left: 80px;
    }

    to {
        top: 0px;
        width: 483px;
        height: 483px;
        left: 0px;
    }
}

@keyframes gif_text_anim {
    from {
        display: none;
    }

    to {
        display: block;
    }
}

@keyframes partner_logo_anim {
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

@keyframes js_logo_anim {
    from {
        opacity: 0;
        top: 400px;
        left: -84px;
    }

    60%{
        opacity: 0;
    }

    70% {
        opacity: 0.5;
    }

    to {
        opacity: 1;
        top: 165px;
        left: 115.24px;
    }
}


@media only screen and (max-width: 768px) {
  .header_logo {
    display: none;
  }
}


</style>
