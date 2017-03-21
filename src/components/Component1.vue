<template>
  <div class='Component1'>
    <form>
      <div class="form-group">
        <label for="inputName">Your name (1)</label>
        <input v-model="person.name" type="text" class="form-control" id="inputName" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="inputProfession">Your profession (1)</label>
        <input v-model="person.profession" type="text" class="form-control" id="inputProfession" placeholder="Profession">
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['person'])
    }
  }
</script>

<style>

</style>
