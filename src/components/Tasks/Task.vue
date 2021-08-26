<template>
  <q-item
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
            task.dueDate
          }}</q-item-label>
          <q-item-label class="row justify-end" caption
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
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
</template>

<script>
import { mapActions } from "vuex";
import EditTask from "./Modals/EditTask.vue";
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
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
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
