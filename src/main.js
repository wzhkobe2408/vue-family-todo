import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DashBoard from './components/DashBoard.vue'
import Signin from './components/Signin.vue'
import SignUp from './components/Signup.vue'
import { firebaseApp } from './firebaseApp'


Vue.use(VueRouter)

//store:data center
import store from './store'

//router path=>component
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/dashboard',
			component:DashBoard
		},
		{
			path:'/signin',
			component:Signin
		},
		{
			path:'/signup',
			component:SignUp
		}
	]
})

//firebase user auth
firebaseApp.auth().onAuthStateChanged(user=>{
	if (user){
		//触发signIn action，导致mutation作用改变state
		store.dispatch('signIn',user)
		router.push('/dashboard')
	}else{
		router.replace('/signin')
	}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
