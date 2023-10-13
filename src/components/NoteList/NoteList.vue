<template>
  <div class="note-list">
    <NoteView v-for="note in notes" :note="note"></NoteView>
  </div>
</template>

<script>
import NoteView from "../NoteView/NoteView.vue";

export default {
  components: { NoteView },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  setup() {

    return {};
  }
};
</script>

<style lang="scss" scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
