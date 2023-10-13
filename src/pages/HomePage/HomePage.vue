<template>
  <div class="home-page">
    <button @click="openModal">Добавить</button>
    <select v-model="currentType">
      <option v-for="(key, value) in formsList" :value="value">{{ value }}</option>
    </select>
    <BaseModal v-if="showModal" @closeModal="closeModal">
      <component @submitHandler="submitHandler" :is="formsList[currentType]"></component>
    </BaseModal>
    <NoteList :notes="notes" />
  </div>
</template>

<script>
import BaseModal from "../../components/BaseModal/BaseModal.vue";
import { ref, defineComponent, onMounted, onUpdated } from "vue";
import CheckboxForm from "../../components/Forms/CheckboxForm.vue";
import ImageForm from "../../components/Forms/ImageForm.vue";
import DefaultForm from "../../components/Forms/DefaultForm.vue";
import NoteList from "../../components/NoteList/NoteList.vue";

export default defineComponent({
  components: { NoteList, DefaultForm, ImageForm, CheckboxForm, BaseModal },
  setup() {
    const notes = ref([]);
    const showModal = ref(false);
    const currentType = ref("default");
    const formsList = { "default": DefaultForm, "image": ImageForm, "checkbox": CheckboxForm };

    onMounted(() => {
      const notedFromLS = localStorage.getItem("notes");
      if (notedFromLS) notes.value = JSON.parse(notedFromLS);
    });
    const submitHandler = (inputValue) => {
      notes.value.push(inputValue);
      localStorage.setItem("notes", JSON.stringify(notes.value));
      closeModal();
    };
    const openModal = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };


    return { showModal, openModal, closeModal, currentType, formsList, submitHandler, notes };
  }
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
