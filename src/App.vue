<template>
  <section class="hero is-fullheight">
    <Sidebar />
    <router-view />
  </section>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>
