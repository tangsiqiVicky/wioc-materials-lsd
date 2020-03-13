<template>
    <div class="header-model">
        <h1 class="info">
            <img src="static/image/favicon.ico" alt=""> IOC通用组件库
        </h1>
        <div class="color-list">
            <span class="color-item" :style="'background-color:#'+item" v-for="(item,index) in colorList"
                  @click="changeColor(item)"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colorList: ['00052f', "ffffff", "e7e4f1"]
            }
        },
        mounted() {
            this.toggleClass(document.body, "custom-" + this.$store.state.themeColor);
        },
        methods: {
            changeColor(item) {
                this.$store.commit('setThemeColor', item);
                this.toggleClass(document.body, "custom-" + item);
            },
            toggleClass(element, className) {
                if (!element || !className) {
                    return
                }
                element.className = className;
            }
        }

    }
</script>
