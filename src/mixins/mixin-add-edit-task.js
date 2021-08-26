import ModalHeader from "src/components/Tasks/Modals/Shared/ModalHeader.vue";
import ModalButton from "src/components/Tasks/Modals/Shared/ModalButton.vue";
import ModalTaskName from "src/components/Tasks/Modals/Shared/ModalTaskName.vue";
import ModalDueDate from "src/components/Tasks/Modals/Shared/ModalDueDate.vue";
import ModalDueTime from "src/components/Tasks/Modals/Shared/ModalDueTime.vue";

export default {
  methods: {
    submit() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
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
  components: {
    ModalButton,
    ModalHeader,
    ModalTaskName,
    ModalDueTime,
    ModalDueDate,
  },
};
