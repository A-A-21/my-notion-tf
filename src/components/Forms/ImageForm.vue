<template>
  <div>
    <form class="form" @submit.prevent="$emit('submitHandler', inputValue)">
      <div class="form__header">Создание заметки с картинкой</div>
      <input v-model="inputValue.header" class="form__inputs" name="header" placeholder="Заголовок" />
      <input v-model="inputValue.description" class="form__inputs" name="description" placeholder="Описание" />
      <input @change="handleImageUpload" class="form__inputs" type="file" name="image">
      <img v-if="imageDataUrl" :src="imageDataUrl" alt="image" />
      <button class="form__submit" type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const imageDataUrl = ref("");
    const inputValue = ref({ header: "", description: "" });
    const saveImageLocally = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageDataUrl.value = e.target.result;
      };
      reader.readAsDataURL(file);
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        saveImageLocally(file);
      }
    };

    return { handleImageUpload, imageDataUrl, inputValue };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
