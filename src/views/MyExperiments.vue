<template>
  <div class="sandbox">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SandBox msg="Welcome to Your Vue.js + TypeScript Sandbox!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SandBox from "@/components/SandBox.vue"; // @ is an alias to /src

export default defineComponent({
  name: "MyExperiments",
  components: {
    SandBox,
  },
});
</script>
