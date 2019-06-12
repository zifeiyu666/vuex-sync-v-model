<template>
  <div class="hello">
    <h1>Hello</h1>
    <input
      type="text"
      v-xmodel="formData.form1.name"
    >
    {{formData.form1.name}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      formData: state => state.formData.formData,
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
