<template>
  <q-form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ capitalizedTab }} to access your Todos.
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="email"
        class="col"
        outlined
        v-model="formData.email"
        label="Email"
        type="email"
        lazy-rules
        stack-label
        :rules="[
          (val) => isValidEmailAdress(val) || 'Please use valid email address',
        ]"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="password"
        type="password"
        class="col"
        outlined
        v-model="formData.password"
        label="Password"
        stack-label
        lazy-rules
        :rules="[
          (val) => val.length >= 6 || 'Please use at least 6 characters',
        ]"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn type="submit" :label="tab" color="primary" />
    </div>
  </q-form>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    capitalizedTab() {
      return this.capitalize(this.tab);
    },
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === "login") {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }
      }
    },
    isValidEmailAdress(val) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(val).toLowerCase());
    },
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
  },
};
</script>
