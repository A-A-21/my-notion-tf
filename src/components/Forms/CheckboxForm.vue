<template>
  <div>
    <form class="form" @submit="$emit('submitHandler')">
      <div class="form__header">Создание заметки с чекбоксом</div>
      <input class="form__inputs" type="text" name="header" placeholder="Заголовок" />
      <input class="form__inputs" type="text" name="description" placeholder="Описание" />
      <input class="form__inputs" type="checkbox" name="checkbox">
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
