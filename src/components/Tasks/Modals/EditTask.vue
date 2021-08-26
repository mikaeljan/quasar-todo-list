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
import ModalHeader from "./Shared/ModalHeader.vue";
import ModalButton from "./Shared/ModalButton.vue";
import ModalTaskName from "./Shared/ModalTaskName.vue";
import ModalDueDate from "./Shared/ModalDueDate.vue";
import ModalDueTime from "./Shared/ModalDueTime.vue";
export default {
  props: ["id", "task"],
  components: {
    ModalButton,
    ModalHeader,
    ModalTaskName,
    ModalDueTime,
    ModalDueDate,
  },
  emits: ["close"],
  data() {
    return {
      name: "",
      dueDate: "",
      dueTime: "",
      completed: false,
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submit() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
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
    setName(event) {
      this.name = event;
    },
    setDueDate(event) {
      this.dueDate = event;
    },
    setDueTime(event) {
      this.dueTime = event;
    },
  },
  mounted() {
    this.name = this.task.name;
    this.dueTime = this.task.dueTime;
    this.dueDate = this.task.dueDate;
  },
};
</script>
