<script setup lang="ts">
import { useField, useForm, Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

const schema = yup.object({
    name: yup.string().required('Naam is verplicht'),
    email: yup.string().email('Email is onjuist').required('email is verplicht'),
    password: yup.string().min(6, 'Wachtwoord moet minimaal 6 karakters zijn').required('Wachtwoord is verplicht'),
    age: yup.number().required('Age is verplicht').positive('Age moet een positief getal zijn').integer('Age moet een heel getal zijn').min(18, 'Je moet ouder zijn dan 18 jaar').max(60, 'Je jonger zijn dan 60 jaar'),
    bio: yup.string().required('Bio is verplicht'),
    select: yup.string().required('Select is verplicht'),
    radio: yup.string().required('Radio is verplicht'),
    checkbox: yup.boolean().oneOf([true], 'checkbox is verplicht').required('Agree to terms and conditions is verplicht'),
})

const { errors, handleSubmit  } = useForm({
    validationSchema: toTypedSchema(schema)
})

const { value: name, errorMessage: nameErrorMessage } = useField("name");
const { value: email, errorMessage: emailErrorMessage } = useField('email');
const { value: password, errorMessage: passwordErrorMessage } = useField('password');
const { value: age, errorMessage: ageErrorMessage } = useField('age');
const { value: bio, errorMessage: bioErrorMessage } = useField('bio');
const { value: select, errorMessage: selectErrorMessage } = useField('select');
const { value: radio, errorMessage: radioErrorMessage } = useField('radio');
const { value: checkbox, errorMessage: checkboxErrorMessage } = useField('checkbox');

const onSubmit = handleSubmit(value => {
    console.log(value);
    console.log(JSON.stringify(value, null, 2));
})
</script>
<template>
    <Form class="flex flex-col w-1/2 mx-auto bg-white p-6 rounded shadow-md"
        @submit="onSubmit()"
    >
        <label for="name" class="text-lg font-bold mb-2">Name</label>
        <Field type="text" name="name" v-model="name" :error-message="nameErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ nameErrorMessage }}</pre>

        <label for="email" class="text-lg font-bold mb-2">Email</label>
        <Field type="email" name="email" v-model="email" :error-message="emailErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ emailErrorMessage }}</pre>

        <label for="password" class="text-lg font-bold mb-2">Password</label>
        <Field type="password" name="password" v-model="password" :error-message="passwordErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ passwordErrorMessage }}</pre>

        <label for="Age" class="text-lg font-bold mb-2">Age</label>
        <Field type="number" name="age" v-model="age" :error-message="ageErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ ageErrorMessage }}</pre>

        <label for="bio" class="text-lg font-bold mb-2">Bio</label>
        <Field type="textarea" name="bio" v-model="bio" :error-message="bioErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ bioErrorMessage }}</pre>

        <label for="select" class="text-lg font-bold mb-2">Select Land</label>
        <Field as="select" name="select" v-model="select" :error-message="selectErrorMessage" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'">
         <option value="" disabled>Selecteer een land</option>
            <option value="NL">Nederland</option>
            <option value="BE">Belgie</option>
            <option value="DE">Duitsland</option>
            <option value="FR">Frankrijk</option>
            <option value="PL">Polen</option>
        </Field>
        <pre class="text-red-500 text-sm mb-5">{{ selectErrorMessage }}</pre>

        <label for="radio" class="text-lg font-bold mb-2">Radio</label>
        <div class="flex items-center" :class="errors.select ? 'mb-1' : 'mb-4'">
            <Field type="radio" name="radio" value="Email" v-model="radio" :error-message="radioErrorMessage" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Email</label>
            <Field type="radio" name="radio" value="Phone" v-model="radio" :error-message="radioErrorMessage" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Telefoon</label>
            <Field type="radio" name="radio" value="Personally" v-model="radio" :error-message="radioErrorMessage" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Persoonlijk</label>
        </div>  
        <pre class="text-red-500 text-sm mb-5">{{ radioErrorMessage }}</pre>

        <div class="flex items-center" :class="errors.select ? 'mb-1' : 'mb-4'">
            <Field type="checkbox" value="true" name="checkbox" v-model="checkbox" :error-message="checkboxErrorMessage" class="border-b-2 border-blue-500 mr-3" />
            <label for="checkbox" class="">I agree to the terms and conditions</label>
        </div>
        <pre class="text-red-500 text-sm mb-5">{{ checkboxErrorMessage }}</pre>

        <button class="bg-blue-500 text-white font-bold py-2 mt-4 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Submit</button>
        </Form>
</template>