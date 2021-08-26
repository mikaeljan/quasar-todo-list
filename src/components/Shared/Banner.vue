<template>
  <q-banner
    dense
    inline-actions
    class="list-header text-white text-center"
    :class="classObj"
  >
    <span class="text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>
<script>
export default {
  props: ["bgColor"],
  computed: {
    classObj() {
      let classObj = this.bgColor;
      return {
        [classObj]: true,
      };
    },
  },
};
</script>
<style scoped>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
