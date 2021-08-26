<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :model-value="dueDate"
      @update:modelValue="$emit('setDueDate', $event)"
      label="Due date"
      clearable
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date
              :model-value="dueDate"
              @update:modelValue="$emit('set-due-date', $event)"
            >
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
export default {
  props: ["dueDate"],
};
</script>
