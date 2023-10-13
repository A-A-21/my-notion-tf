<template>
  <div class="note">
    <div class="note__header">{{ note.header }}</div>
    <div class="note__description">{{ note.description }}</div>
    <img v-if="note.TYPE === 'image'" class="note__image" src="#" alt="note-image" />
    <div v-if="note.TYPE === 'checklist'" v-for="item in note.checklist" class="note__checkbox">
      <label>{{ item.name }}</label>
      <input type="checkbox" :checked="item.checked" />
    </div>
  </div>
</template>

<script>
import { onUpdated, reactive, toRefs } from "vue";

export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onUpdated(() => {

    });
    return {};
  }
};
</script>

<style lang="scss" scoped>
.note {
  border: 1px solid black;
  border-radius: 8px;
  width: 500px;
  height: 100px;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
