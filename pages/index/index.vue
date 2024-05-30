<template>
	<view class="flex gap-s">
		<u-button type="primary" @click="demo">按钮</u-button>
	</view>
</template>

<script setup>
import { inject } from 'vue';
const { toast }= inject('$utils')

function demo(){
	toast.msg('Hello World!')
}

</script>
