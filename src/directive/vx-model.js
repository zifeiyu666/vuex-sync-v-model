const vxModel = {}

vxModel.install = Vue => {
  Vue.directive('xmodel', {
    bind(el, binding, vnode) {
      let expression = binding.expression
      let store = vnode.context.$store
      // 是否为饿了么的表单组件
      let isEle = el.className.indexOf('el-') != -1
      if (isEle) {
        let val = binding.value
        el.oninput = function(e) {
          console.log(el.className)
          console.log('-------eventObject-------')
          console.log(e)
          if (e.data) {
            val += e.data
          } else {
            val = val.slice(0, val.length - 1)
          }

          store.commit('formData/UPDATE_FROM', { val: val, key: expression })
        }
      } else {
        el.value = binding.value
        el.oninput = function(e) {
          console.log(expression)
          store.commit('formData/UPDATE_FROM', { val: e.target.value, key: expression })
        }
      }
    },
    update(el, binding, vnode) {
      let expression = binding.expression
      console.log('-----vnode-----')
      console.log(vnode)
      let isEle = el.className.indexOf('el-') != -1
      if (isEle) {
        console.log(`vnode.context.${expression} = binding.value`)
        eval(`vnode.context.${expression} = binding.value`)
        // vnode.context[expression] = binding.value
      } else {
        el.value = binding.value
      }
    }
  })
}

export default vxModel
