<template>
  <banner v-if="!settings.showTasksInOneList" :bgColor="bgColor"
    ><slot></slot>
  </banner>
  <q-list bordered separator>
    <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
  </q-list>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasks", "bgColor"],
  components: {
    task: require("components/Tasks/Task.vue").default,
    banner: require("components/Shared/Banner.vue").default,
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
};
</script>
