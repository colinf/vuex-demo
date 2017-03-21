<template>
  <div class='Component3'>
    <form>
      <div class="form-group">
        <label for="inputName">Your name (3)</label>
        <input v-model="localPerson.name" type="text" class="form-control" id="inputName" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="inputProfession">Your profession (3)</label>
        <input v-model="localPerson.profession" type="text" class="form-control" id="inputProfession" placeholder="Profession">
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="button" class="btn btn-default" @click="revert">Revert</button>
          <button type="button" class="btn btn-success" @click="saveClosePerson">Save & Close</button>
          <button type="button" class="btn btn-success" @click="savePerson">Save</button>
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
      savePerson () {
        return this.savePerson3(this.localPerson)
      },
      saveClosePerson () {
        this.savePerson()
          .then(() => this.$router.push('/'), () => {})
      },
      ...mapActions(['savePerson3'])
    }
  }
</script>

<style scoped>

</style>
