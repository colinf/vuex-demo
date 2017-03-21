<template>
  <div class='VuexView'>
    <h2 class="std">Vuex State</h2>
    <div class="std">{</div>
    <div class="indent1 std"><span class="var">person</span>: {</div>
    <div class="indent2 std"><span class="var">name:</span> <span class="lit">'{{person.name}}'</span><span class="punc">,</span></div>
    <div class="indent2 std"><span class="var">profession:</span> <span class="lit">'{{person.profession}}'</span></div>
    <div class="indent1 std">},</div>
    <div class="indent1 std"><span class="var">apiError:</span> <span class="lit">'{{apiError}}'</span></div>
    <div class="std">}</div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['person', 'apiError'])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>

<style>
  .VuexView {
    background-color: #2b2b2b;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-weight: bold;
    padding: 10px;
  }
  .VuexView h2 {
    font-family: Arial, sans-serif;
  }
  .indent1 {
    margin-left: 1em;
  }
  .indent2 {
    margin-left: 2em;
  }
  .std {
    color: #a6b4c3;
  }
  .lit {
    color: #6a8759;
  }
  .var {
    color: #886a98;
  }
  .punc {
    color: #bc6e2e;
  }
</style>
