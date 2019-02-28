<template>
  <div class="material-input">
    <input :type="type" 
        :value="value" 
        @input="$emit('input', $event.target.value)"
        required placeholder="_" v-bind:name="name" :id="id">
    <label :for="id">
      <span v-text="placeholder"></span>
    </label>
  </div>
</template>

<script>
export default {
    props: {
        type: {type: String, default: 'text'},
        id: {type: String},
        name: {type: String},
        placeholder: {type: String},
        value: {type: String}
    }
}
</script>

<style scoped>
* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

body {
  background-color: whitesmoke;
}

form#survey-form {
  background-color: #fff;
  border-color: lightgray;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.3rem;
  padding: 0 1rem;
}

.material-input {
  padding: 0 1rem;
  padding-bottom: 1rem;
}

.material-input input,
.material-input label {
  display: block;
}

.material-input input {
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border-width: 0.1rem;
  border-color: grey;
  border-style: solid;
  outline: none;
  padding: 0.5rem;
}

.material-input input:focus,
.material-input input:active {
  border-color: #1a73e8;
}

.material-input input::placeholder {
  visibility: hidden;
}

.material-input label {
  margin-top: -2rem;
  margin-left: 0.6rem;
  background-color: white;
  width: fit-content;
  padding: 0 0.3rem;
  color: grey;
  margin-bottom: 2rem;

  transition-property: margin-top, margin-left, margin-bottom;
  transition-duration: 0.3s;
}

.material-input input:not(:placeholder-shown) + label,
.material-input input:focus + label,
.material-input input:active + label {
  margin-top: -3.2rem;
  margin-left: 0.4rem;
  margin-bottom: 3.2rem;

  transition-property: margin-top, margin-left, margin-bottom;
  transition-duration: 0.3s;
}

.material-input input:focus + label,
.material-input input:active + label {
  color: #1a73e8;
}

.material-input label span {
  transition-property: font-size;
  transition-duration: 0.3s;
}

.material-input input:not(:placeholder-shown) + label span,
.material-input input:focus + label span,
.material-input input:active + label span {
  font-size: 0.8rem;
  transition-property: font-size;
  transition-duration: 0.3s;
}

.text-center,
.text-center > * {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
