<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { alertCva } from './VAlert.cva'
import type { VAlertProps } from './VAlert.types'
import { AlertType, AlertSize } from './VAlert.types'

const props = withDefaults(defineProps<VAlertProps>(), {
  type: AlertType.info,
  size: AlertSize.medium,
  outlined: false,
  disabled: false,
})

const attrs = useAttrs()

const alertClasses = computed(() => {
  return alertCva({
    type: props.type,
    size: props.size,
    outlined: props.outlined,
    disabled: typeof attrs.disabled !== 'undefined' && attrs.disabled !== false,
  })
})
</script>

<template>
  <div :class="alertClasses">
    <h5 v-if="title" class="font-semibold">{{ title }}</h5>
    <slot />
  </div>
</template>