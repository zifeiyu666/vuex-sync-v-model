import Vue from 'vue'
const state = {
  formData: {
    form1: {
      name: 'tom'
    }
  }
}

const mutations = {
  UPDATE_FROM: (state, payload) => {
    let pathArr = payload.key.split('.')
    let formData = pathArr.splice(0, pathArr.length - 1).reduce((res, item) => {
      res = res + '.' + item
      return res
    }, 'state')

    let valStr = payload.val
    let key = pathArr[pathArr.length - 1].toString()
    eval(`${formData} = { ...${formData}, ${key}: valStr }`)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
