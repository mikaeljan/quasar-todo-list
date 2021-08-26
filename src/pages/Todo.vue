<template>
  <q-page class="q-pa-md">
    <tasks-todo bgColor="bg-orange-4" v-if="tasksTodoExist" :tasks="tasksTodo"
      >Todo</tasks-todo
    >
    <no-tasks v-else />
    <div class="q-mt-lg">
      <tasks-todo
        bgColor="bg-red-4"
        v-if="tasksCompletedExist"
        :tasks="tasksCompleted"
        >Completed</tasks-todo
      >
    </div>
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
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    tasksTodoExist() {
      return Object.keys(this.tasksTodo).length;
    },
    tasksCompletedExist() {
      return Object.keys(this.tasksCompleted).length;
    },
  },
  components: {
    "add-task": require("components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("../components/Tasks/Tasks.vue").default,
    "no-tasks": require("../components/Tasks/NoTasks.vue").default,
  },
});
</script>
