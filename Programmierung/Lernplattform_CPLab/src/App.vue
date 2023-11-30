<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();
router.push('/')
</script>

<template>
    <div>
        <router-view></router-view>
    </div>
</template>

