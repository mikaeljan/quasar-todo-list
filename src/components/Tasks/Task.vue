<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <q-item
      v-touch-hold:1000.mouse="showEditTaskModal"
      clickable
      @click="updateTask({ id, updates: { completed: !task.completed } })"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    >
      <q-item-section side top>
        <q-checkbox :modelValue="task.completed" class="no-pointer-events" />
      </q-item-section>
      <q-item-section>
        <q-item-label :class="{ 'text-strike': task.completed }">{{
          task.name
        }}</q-item-label>
      </q-item-section>
      <q-item-section v-if="task.dueDate" side>
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs" />
          </div>
          <div class="column">
            <q-item-label class="row justify-end" caption>{{
              niceDate
            }}</q-item-label>
            <q-item-label class="row justify-end" caption
              ><small>{{ taskDueTime }}</small></q-item-label
            >
          </div>
        </div>
      </q-item-section>
      <q-item-section side>
        <div class="row">
          <q-btn
            @click.stop="showEditTaskModal"
            flat
            round
            color="primary"
            icon="edit"
            dense
          />
          <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            color="red"
            icon="delete"
            dense
          />
        </div>
      </q-item-section>
      <q-dialog v-model="showEditTask">
        <edit-task @close="showEditTask = false" :task="task" :id="id" />
      </q-dialog>
    </q-item>
  </transition>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";
import EditTask from "./Modals/EditTask.vue";
const { formatDate } = date;
export default {
  props: ["task", "id"],
  components: {
    EditTask,
  },
  data() {
    return {
      showEditTask: false,
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    niceDate() {
      return formatDate(this.task.dueDate, "MMM D");
    },
    taskDueTime() {
      if (this.settings.show12HourTimeFormat)
        return formatDate(this.task.dueDate + " " + this.task.dueTime, "h:mmA");
      else return this.task.dueTime;
    },
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    showEditTaskModal() {
      this.showEditTask = true;
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to turn on the wifi?",
          ok: {
            push: true,
          },
          cancel: { color: "negative" },
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
  },
};
</script>
