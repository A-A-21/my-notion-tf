<template>
  <div>
    <form class="form" @submit.prevent="$emit('submitHandler', inputValue)">
      <div class="form__header">Создание заметки базового типа</div>
      <input v-model="inputValue.header" class="form__inputs" name="header" placeholder="Заголовок" />
      <input v-model="inputValue.description" class="form__inputs" name="description" placeholder="Описание" />
      <button class="form__submit" type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const inputValue = reactive({ header: "", description: "", type: "default" });


    return { inputValue };
  }
};
</script>

<style lang="scss" scoped>

@import "styles";

</style>
