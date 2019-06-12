<template>
  <div class="hello">
    <h1>Hello</h1>
    <input
      type="text"
      v-xmodel="formData.form1.name"
    >
    {{formData.form1.name}}

    <el-input
      class='aa'
      @input='updateForm'
      :value='formData.form1.name'
      v-xmodel="formData.form1.name"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bus from '@/bus/index.js'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    console.log(this)
    this.$once('test', function() {
      console.log('test')
    })
    setInterval(() => {
      this.$emit('test')
    }, 1000)
  },
  methods: {
    updateForm(val) {},
  },
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
