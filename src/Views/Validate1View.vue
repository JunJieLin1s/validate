<script setup lang="ts">
import { Field, Form, useForm } from 'vee-validate'
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

const { errors, handleSubmit, defineField } = useForm({
    validationSchema: toTypedSchema(
        yup.object({
            name: yup.string().required('Naam is verplicht'),
            email: yup.string().email('Email is onjuist').required('email is verplicht'),
            password: yup.string().min(6, 'Wachtwoord moet minimaal 6 karakters zijn').required('Wachtwoord is verplicht'),
            age: yup.number().required('Age is verplicht').positive('Age moet een positief getal zijn').integer('Age moet een heel getal zijn'),
            bio: yup.string().required('Bio is verplicht'),
            select: yup.string().required('Select is verplicht'),
            radio: yup.string().required('Radio is verplicht'),
            checkbox: yup.boolean().oneOf([true], 'checkbox is verplicht').required('Agree to terms and conditions is verplicht'),
        })
    )
})

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [age, ageAttrs] = defineField('age');
const [bio, bioAttrs] = defineField('bio');
const [select, selectAttrs] = defineField('select');
const [radio, radioAttrs] = defineField('radio');
const [checkbox, checkboxAttrs] = defineField('checkbox');

const onSubmit = handleSubmit(value => {
    console.log(value);
    console.log(JSON.stringify(value, null, 2));
})

</script>

<template>
    <h1 class="text-3xl font-bold underline text-center mb-3 text-blue-500 mt-4 ">
        Form validate 
    </h1>
    <Form class="flex flex-col w-1/2 mx-auto bg-white p-6 rounded shadow-md"
        @submit="onSubmit()"
    >
        <label for="name" class="text-lg font-bold mb-2">Name</label>
        <Field type="text" name="name" placeholder="Name" v-model="name" v-bind="nameAttrs" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ errors.name }}</pre>
        
        
        <label for="email" class="text-lg font-bold mb-2">Email</label>
        <Field type="email" name="email" placeholder="Email" v-model="email" v-bind="emailAttrs" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ errors.email }}</pre>
        
        <label for="password" class="text-lg font-bold mb-2">Password</label>
        <Field type="password" name="password" placeholder="Password" v-model="password" v-bind="passwordAttrs" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ errors.password }}</pre>
        
        <label for="Age" class="text-lg font-bold mb-2">Age</label>
        <Field type="number" name="age" placeholder="Age" v-model="age" v-bind="ageAttrs" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'" />
        <pre class="text-red-500 text-sm mb-5">{{ errors.age }}</pre>

        <label for="bio" class="text-lg font-bold mb-2">Bio</label>
        <textarea type="textarea" name="bio" placeholder="bio" v-model="bio" v-bind="bioAttrs" 
            rows="3" cols="30"
            class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-1' : 'mb-4'"/>
        <pre class="text-red-500 text-sm mb-5">{{ errors.bio }}</pre>
        
        <label for="select" class="text-lg font-bold mb-2">Selecteer een land</label>
        <Field as="select" name="select" v-model="select" v-bind="selectAttrs" class="border-b-2 border-blue-500 p-2" :class="errors.select ? 'mb-2' : 'mb-3'">
            <option value="" disabled>Selecteer een land</option>
            <option value="NL">Nederland</option>
            <option value="BE">Belgie</option>
            <option value="DE">Duitsland</option>
            <option value="FR">Frankrijk</option>
            <option value="PL">Polen</option>
        </Field>
        <pre class="text-red-500 text-sm mb-5">{{ errors.select }}</pre>
        
        <label for="radio" class="text-lg font-bold mb-2">Hoe wilt u bereikt worden?</label>
        <div class="flex items-center" :class="errors.select ? 'mb-1' : 'mb-4'">
            <Field type="radio" name="radio" value="Email" v-model="radio" v-bind="radioAttrs" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Email</label>
            <Field type="radio" name="radio" value="Phone" v-model="radio" v-bind="radioAttrs" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Telefoon</label>
            <Field type="radio" name="radio" value="Personally" v-model="radio" v-bind="radioAttrs" class="mr-2 border-b-2 border-blue-500" />
            <label for="email" class="mr-4">Persoonlijk</label>
        </div>  
        <pre class="text-red-500 text-sm mb-5">{{ errors.radio }}</pre>
        
        <div class="flex items-center" :class="errors.select ? 'mb-1' : 'mb-4'">
            <Field type="checkbox" value="true" name="checkbox" v-model="checkbox" v-bind="checkboxAttrs" class="border-b-2 border-blue-500 mr-3" />
            <label for="checkbox" class="">I agree to the terms and conditions</label>
        </div>
        <pre class="text-red-500 text-sm mb-5">{{ errors.checkbox }}</pre>

        <button class="bg-blue-500 text-white font-bold py-2 mt-4 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Submit</button>
    </Form>

</template>