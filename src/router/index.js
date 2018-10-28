import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Movies from 'pages/movies/Movies'
import Cinema from 'pages/cinema/Cinema'
import Profile from 'pages/profile/Profile'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      name: 'movies',
      path: '/movies',
      component: Movies
    },
    {
      name: 'cinema',
      path: '/cinema',
      component: Cinema
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile
    }
  ]
})