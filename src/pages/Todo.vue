<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "PageTodo",
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
  },
});
</script>
