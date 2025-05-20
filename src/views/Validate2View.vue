<script setup lang="ts">
import { useForm, Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// 1ste optie 
// const schema = yup.object({
//     email: yup.string().required().email(),
// });

// const { values, errors, defineField } = useForm({
//     validationSchema: schema,
// });

// 2de optie
const { values, errors, defineField  } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
    })
})

// trigger om te verzorgen dat de validatie alleen gebeurt bij de submit
// const [email, emailattrs] = defineField('email', {
//     validateOnModelUpdate: false,
// });

// State function om te checken wanneer de validatie moet gebeuren
const [email, emailattrs] = defineField('email', state => { 
    return {
        // validate aggressively as long as there are errors on the input
        validateOnModelUpdate: state.errors.length > 0,
    }
});

</script>
<template>
    <h1 class="text-3xl font-bold underline">
        composition API
    </h1>
    <input type="text" v-model="email" v-bind="emailattrs" />
    <pre>{{ values }}</pre>
    <pre>{{ errors }}</pre>
</template>