<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :model-value="dueTime"
      @update:modelValue="$emit('set-due-time', $event)"
      label="Due time"
      clearable
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :model-value="dueTime"
              @update:modelValue="$emit('set-due-time', $event)"
            >
              <div class="row items-center justify-end"></div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
export default {
  props: ["dueTime"],
};
</script>
