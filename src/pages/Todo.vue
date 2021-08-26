<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>
      <p v-if="search && !tasksTodoExist && !tasksCompletedExist">
        No search results.
      </p>
      <q-scroll-area class="q-scroll-area-tasks">
        <tasks-todo
          bgColor="bg-orange-4"
          v-if="tasksTodoExist"
          :tasks="tasksTodo"
          >Todo</tasks-todo
        >
        <no-tasks v-if="showNoTasks" />
        <div class="q-mt-lg">
          <tasks-todo
            bgColor="bg-red-4"
            v-if="tasksCompletedExist"
            class="q-mb-xg"
            :tasks="tasksCompleted"
            >Completed</tasks-todo
          >
        </div>
      </q-scroll-area>
      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          round
          class="all-pointer-events"
          color="primary"
          size="24px"
          icon="add"
          @click="showAddTask = true"
        />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";
export default defineComponent({
  name: "PageTodo",
  data() {
    return {
      showAddTask: false,
    };
  },

  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"]),
    tasksTodoExist() {
      return Object.keys(this.tasksTodo).length;
    },
    tasksCompletedExist() {
      return Object.keys(this.tasksCompleted).length;
    },
    showNoTasks() {
      return !Object.keys(this.tasksTodo).length && !this.search;
    },
  },
  components: {
    "add-task": require("components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("../components/Tasks/Tasks.vue").default,
    "no-tasks": require("../components/Tasks/NoTasks.vue").default,
    search: require("../components/Tools/Search.vue").default,
    Sort: require("../components/Tools/Sort.vue").default,
  },
});
</script>
<style scoped>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
