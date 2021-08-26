<template>
  <div class="row q-mb-sm">
    <q-input
      @focus="selectAll($event)"
      autofocus
      clearable
      outlined
      label="Task name"
      class="col"
      ref="name"
      :rules="[(val) => !!val || 'Field is required']"
      :model-value="name"
      @update:modelValue="$emit('setName', $event)"
    />
  </div>
</template>
<script>
export default {
  props: ["name"],
  methods: {
    selectAll(event) {
      event.target.select();
    },
  },
};
</script>
