<template>
  <div>
    THIS IS NOTE DETAILS {{ params }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const params = useRoute().params.id;
    return {
      params
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
