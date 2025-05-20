<script setup lang="ts">
    import { useForm, Field, Form, ErrorMessage } from 'vee-validate'
    
    const onSubmit = (value: any) => {
        console.log('Submitted Email: ', value)
        console.log(JSON.stringify(value, null, 2));
    }

    const validateEmail = (value: any) => {
        
        if(!value) {
            return 'Email is required'
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegex.test(value)) {
        return 'This field must be a valid email';
      }

        return true;
    }

</script>
<template>
    <h1>
        Validate
    </h1>
    <Form class="flex flex-col" 
        @submit="onSubmit"
        >
        <Field class="border-b-1" type="email" name="email" placeholder="Email" :rules="validateEmail" />
        <ErrorMessage name="email" class="text-red-500" />
        
        <button type="submit">Sign up for newsletter</button>
    </Form>
</template>
