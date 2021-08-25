<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space></q-space>
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submit">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            clearable
            autofocus
            outlined
            v-model="taskToSubmit.name"
            label="Task name"
            class="col"
            :rules="[(val) => !!val || 'Field is required']"
            ref="name"
          />
        </div>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            label="Due date"
            clearable
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate"> </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            label="Due time"
            clearable
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end"></div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn type="submit" label="Save" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  emits: ["close"],
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: null,
        dueTime: null,
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submit() {
      console.log("Submitting");
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
  },
};
</script>
