<template>
  <div>
    <button @click="openModal">Добавить</button>
    <select v-model="currentType">
      <option v-for="(key, value) in formsList" :value="value">{{ value }}</option>
    </select>
    <BaseModal v-if="showModal" @closeModal="closeModal">
      <component @submitHandler="submitHandler" :is="formsList[currentType]"></component>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../../components/BaseModal/BaseModal.vue";
import { ref, defineComponent, onMounted } from "vue";
import CheckboxForm from "../../components/Forms/CheckboxForm.vue";
import ImageForm from "../../components/Forms/ImageForm.vue";
import DefaultForm from "../../components/Forms/DefaultForm.vue";

export default defineComponent({
  components: { DefaultForm, ImageForm, CheckboxForm, BaseModal },
  setup() {
    const notes = ref(null);
    const showModal = ref(false);
    const currentType = ref("default");
    const formsList = { "default": DefaultForm, "image": ImageForm, "checkbox": CheckboxForm };

    onMounted(() => {
      const notedFromLS = localStorage.getItem("notes");
      notes.value = notedFromLS ? JSON.parse(notedFromLS) : [];
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


    return { showModal, openModal, closeModal, currentType, formsList, submitHandler };
  }
});
</script>
