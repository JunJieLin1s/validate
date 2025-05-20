<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import CustomInput from '@/components/CustomInput.vue';

const { values, errors, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email(). required(),
    })
});

const [email, emailProps] = defineField('email', {
  props: state => ({
    error: state.errors[0],
  }),
});
</script>

<template>
    <CustomInput 
        v-model="email"
        v-bind="emailProps"
    />
    <pre>Values: {{ values }}</pre>
    <pre>Errors: {{ errors }}</pre>
</template>