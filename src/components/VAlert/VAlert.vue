<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { cva } from 'class-variance-authority';
import { AlertType, AlertSize } from './VAlert.types'
import type { VAlertProps } from './VAlert.types'

const props = withDefaults(defineProps<VAlertProps>(), {
    type: AlertType.info,
    outlined: false,
    disabled: false
})

const alertCva = cva('p-4 rounded-md border-2', {
    variants: {
        type: {
            info: 'bg-blue-50 border-blue-300 text-blue-700',
            success: 'bg-green-50 border-green-300 text-green-700',
            warning: 'bg-yellow-50 border-yellow-300 text-yellow-700',
            error: 'bg-red-50 border-red-300 text-red-700',
        }
    },
    defaultVariants: {
        type: 'info'
    }
})

const alertClasses = computed(() => {
    return alertCva({ type: props.type })
})
</script>

<template>
    <div :class="alertClasses">
        <div>  
            <h5 v-if="title" class="font-semibold mb-2">{{ title }}</h5>
            <slot />
        </div>
    </div>
</template>