<template>
  <q-list v-if="show" bordered separator>
    <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
  </q-list>
</template>
<script>
export default {
  props: ["show", "tasks"],
  components: {
    task: require("components/Tasks/Task.vue").default,
  },
};
</script>
