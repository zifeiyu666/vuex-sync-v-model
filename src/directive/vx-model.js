const vxModel = {}

vxModel.install = Vue => {
  Vue.directive('xmodel', {
    bind(el, binding, vnode) {
      el.value = binding.value
      let expression = binding.expression
      el.oninput = function(e) {
        let store = vnode.context.$store
        store.commit('formData/UPDATE_FROM', { val: e.target.value, key: expression })
      }
    }
  })
}

export default vxModel
