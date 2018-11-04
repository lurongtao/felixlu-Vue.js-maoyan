import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Movies from 'pages/movies/Movies'
import MoviesInTheater from 'pages/movies/MoviesInTheater'
import MoviesComing from 'pages/movies/MoviesComing'

import Theaters from 'pages/theaters/Theaters'
import Profile from 'pages/profile/Profile'

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    redirect: '/movies/intheater'
  },
  {
    name: 'movies',
    path: '/movies',
    component: Movies,
    children: [
      {
        name: 'intheater',
        path: 'intheater',
        meta: { index: 1 },
        component: MoviesInTheater
      },
      {
        name: 'coming',
        path: 'coming',
        meta: { index: 2 },
        component: MoviesComing
      }
    ]
  },
  {
    name: 'theaters',
    path: '/theaters',
    component: Theaters
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router