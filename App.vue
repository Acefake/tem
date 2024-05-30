<script setup>
import utils from './utils'
import { provide, inject } from 'vue'

// 提供全局方法和变量
provide('$utils', utils)
console.log('全局方法：', utils)

// 其他组件可以直接使用inject获取
// const { isEmpty } = inject('$utils')
</script>

<style lang="scss">
	@import '@/uni_modules/uview-plus/theme.scss';
</style>
