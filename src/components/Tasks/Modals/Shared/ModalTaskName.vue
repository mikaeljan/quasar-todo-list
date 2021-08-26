<template>
  <div class="row q-mb-sm">
    <q-input
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
};
</script>
