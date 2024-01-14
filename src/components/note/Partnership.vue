<script setup lang="ts">
</script>

<template>
    <section class="partnership_block ibm-plex-sans_18_medium">
        <p class="header larken_56_bold">
            <span class="hr right">
                <img src="../../assets/images/rectangle.svg">
            </span>
            <span class="text">
                Why this partnership?
            </span>
            <span class="hr left">
                <img src="../../assets/images/rectangle.svg">
            </span>
        </p>

        <p>
            Throughout its 100-year history, ICC has brought global business together to support an international
            rules-based order, including the promotion of global trade and commerce through the work of the ICC
            International Court of Arbitration.
        </p>
        <p>
            ICC has partnered with Jus Mundi to provide full public access to all publishable ICC International Court of
            Arbitration awards and related documents made as of 1 January 2019
        </p>
    </section>
</template>

<style scoped>
.partnership_block {
    width: 1310px;
    border: 2px dotted red;
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
}

.partnership_block p {
    text-align: center;
    color: #2C2B2E;
    width: 862px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.partnership_block p.header {
    text-align: center;
    width: 1310px;
    display: inline-block;
}

.partnership_block p.header .hr{
   height: inherit;
   display: inline-block;
   position: absolute;
}

.hr.left{
  left:0;
}

.hr.right{
  right:0;
}

p.header hr.left{
  position: absolute;
  left:0;
}
.partnership_block p.header img{
    vertical-align: middle;
}
</style>