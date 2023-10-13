<template>
  <div>
    <form class="form" @submit.prevent="$emit('submitHandler', inputValue)">
      <div class="form__header">Создание заметки с чекбоксом</div>
      <input v-model="inputValue.header" class="form__inputs" type="text" name="header" placeholder="Заголовок" />
      <input v-model="inputValue.description" class="form__inputs" type="text" name="description"
             placeholder="Описание" />
      <template v-for="(input, index) in inputValue.checklist">
        <input v-model="inputValue.checklist[index].name" type="text" />
      </template>
      <button @click="inputValue.checklist.push({name: '', checked: false})" type="button">Добавить ещё</button>
      <button class="form__submit" type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import { onUpdated, reactive } from "vue";

export default {
  setup() {
    const inputValue = reactive({
      TYPE: "checklist",
      header: "",
      description: "",
      checklist: [{ name: "", checked: false }]
    });

    return { inputValue };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
