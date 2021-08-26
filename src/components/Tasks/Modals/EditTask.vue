<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <q-form @submit.prevent="submit">
      <q-card-section class="q-pt-none">
        <modal-task-name
          ref="modalTaskName"
          :name="name"
          @set-name="setName"
        ></modal-task-name>
        <modal-due-date
          ref="modalDueDate"
          :dueDate="dueDate"
          @set-due-date="setDueDate"
        ></modal-due-date>
        <modal-due-time
          v-if="dueDate"
          ref="modalDueTime"
          :dueTime="dueTime"
          @set-due-time="setDueTime"
        />
      </q-card-section>

      <modal-button />
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
import mixinAddEdit from "src/mixins/mixin-add-edit-task";

export default {
  props: ["id", "task"],
  emits: ["close"],
  data() {
    return {
      name: "",
      dueDate: "",
      dueTime: "",
      completed: false,
    };
  },
  mixins: [mixinAddEdit],
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      const taskToSubmit = {
        name: this.name,
        dueDate: this.dueDate,
        dueTime: this.dueTime,
        completed: this.completed,
      };
      this.updateTask({
        id: this.id,
        updates: taskToSubmit,
      });
      this.$emit("close");
    },
  },
  created() {
    this.name = this.task.name;
    this.dueTime = this.task.dueTime;
    this.dueDate = this.task.dueDate;
  },
};
</script>
