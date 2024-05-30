<template>
    <span :class="className" @click="clickIcon">
        <text class="err-text" v-if="imgError">{{ type }}</text>
        <image
            :draggable="false"
            :src="iconSrc"
            mode=""
            class="img"
            @error="imgLoadError"
        ></image>
    </span>
</template>

<script setup>
import { computed, ref } from 'vue'
import icon from './icon'
const props = defineProps(['type', 'className'])
const emit = defineEmits(['onClick'])

const iconSrc = computed(() => icon[props.type] || icon.notSupportFile)
const imgError = ref(false)

const imgLoadError = () => {
    console.log('icon加载失败')
    imgError.value = true
}

const clickIcon = () => {
    emit('onClick')
}
</script>

<style scoped>
.img {
    width: 48upx;
    height: 48upx;
}
.err-text {
    font-size: 24upx;
}
</style>
