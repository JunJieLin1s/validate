<script setup lang="ts">
import VAlert from '@/components/VAlert/VAlert.vue';
import { AlertType, AlertSize } from '@/components/VAlert/VAlert.types';
</script>

<template>
    <div class="p-8 space-y-4">
        <h1 class="text-2xl font-bold mb-6">VAlert Component Examples</h1>
        
        <!-- Basic Alerts -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Basic Alerts</h2>
            <VAlert :type="AlertType.info">
                This is a basic info alert
            </VAlert>
            <VAlert :type="AlertType.success">
                This is a basic success alert
            </VAlert>
            <VAlert :type="AlertType.warning">
                This is a basic warning alert
            </VAlert>
            <VAlert :type="AlertType.error">
                This is a basic error alert
            </VAlert>
        </div>

        <!-- Alerts with Titles -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Alerts with Titles</h2>
            <VAlert :type="AlertType.info" title="Information">
                This is an info alert with a title
            </VAlert>
            <VAlert :type="AlertType.success" title="Success!">
                This is a success alert with a title
            </VAlert>
        </div>

        <!-- Outlined Alerts -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Outlined Alerts</h2>
            <VAlert :type="AlertType.info" outlined>
                This is an outlined info alert
            </VAlert>
            <VAlert :type="AlertType.success" outlined>
                This is an outlined success alert
            </VAlert>
        </div>

        <!-- Different Sizes -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Different Sizes</h2>
            <VAlert :type="AlertType.info" :size="AlertSize.small">
                This is a small alert
            </VAlert>
            <VAlert :type="AlertType.info" :size="AlertSize.medium">
                This is a medium alert
            </VAlert>
            <VAlert :type="AlertType.info" :size="AlertSize.large">
                This is a large alert
            </VAlert>
        </div>

        <!-- Disabled Alerts -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Disabled Alerts</h2>
            <VAlert :type="AlertType.info" disabled>
                This is a disabled info alert
            </VAlert>
            <VAlert :type="AlertType.error" outlined disabled>
                This is a disabled outlined error alert
            </VAlert>
        </div>


        <!-- Combined Examples -->
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Combined Examples</h2>
            <VAlert :type="AlertType.success" :size="AlertSize.large" outlined title="Great Success!">
                This is a large, outlined success alert with a title
            </VAlert>
            <VAlert :type="AlertType.warning" :size="AlertSize.small" disabled title="Warning">
                This is a small, disabled warning alert with a title
            </VAlert>
        </div>
    </div>
</template>