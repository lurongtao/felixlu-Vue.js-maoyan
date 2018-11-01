import Vue from 'vue'
Vue.filter('replaceWH', function (value, size) {
  return value.replace(/w\.h/, size)
})