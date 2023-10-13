<template>
  <div>
    <form class="form" @submit="$emit('submitHandler')">
      <div class="form__header">Создание заметки с картинкой</div>
      <input class="form__inputs" name="header" placeholder="Заголовок" />
      <input class="form__inputs" name="description" placeholder="Описание" />
      <input class="form__inputs" type="file" name="image">
      <button class="form__submit" type="button" @click="">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {


    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
