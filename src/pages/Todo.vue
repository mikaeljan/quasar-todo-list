<template>
  <q-page class="q-pa-md">
    <q-list v-if="tasksExist" bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "PageTodo",
  data() {
    return {
      showAddTask: false,
    };
  },

  computed: {
    ...mapGetters("tasks", ["tasks"]),
    tasksExist() {
      return Object.keys(this.tasks).length;
    },
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
    "add-task": require("components/Modals/AddTask.vue").default,
  },
});
</script>
