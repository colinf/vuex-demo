<template>
  <div class='Component1'>
    <form>
      <div class="form-group">
        <label for="inputName">Your name (2)</label>
        <input v-model="localPerson.name" type="text" class="form-control" id="inputName" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="inputProfession">Your profession (2)</label>
        <input v-model="localPerson.profession" type="text" class="form-control" id="inputProfession" placeholder="Profession">
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="button" class="btn btn-default" @click="revert">Revert</button>
          <button type="button" class="btn btn-success" @click="savePerson2(localPerson)">Save</button>
        </div>
      </div>
      <div v-if="apiError" class="col-sm-offset-3 error">
        {{ apiError }}
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        localPerson: Object.assign({}, this.$store.state.person)
      }
    },
    computed: {
      ...mapState(['person', 'apiError'])
    },
    methods: {
      revert () {
        this.localPerson = Object.assign({}, this.$store.state.person)
      },
      ...mapActions(['savePerson2'])
    }
  }
</script>

<style>

</style>
