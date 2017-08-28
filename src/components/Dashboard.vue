<template>
	<div id="">
		<h3>Events Dashboard</h3>
		<button class='btn btn-danger btn-sm signout-btn' @click='signOut'>Sign Out</button>
		<hr>
		<AddEvent />
		<hr>
		<div class='col-md-12'>
			<Eventitem 
				v-for='(event_item,index) in this.$store.state.events'
				:event='event_item' 
				key='index'
			/>
		</div>
	</div>
</template>

<script>
	import { firebaseApp,eventsRef } from '../firebaseApp'
	import AddEvent from './AddEvent.vue'
	import Eventitem from './Eventitem.vue'
	export default{
		methods:{
			signOut(){
				this.$store.dispatch('signOut')
				firebaseApp.auth().signOut()
			}
		},

		components:{
			AddEvent,
			Eventitem
		},
		mouted(){
			eventsRef.on('value',snap=>{
				let events=[]
				snap.forEach(event=>{
					events.push(event.val())
				})
				this.$store.dispatch('setEvents',events)
				//console.log('events',events)
			})
		}
	}
</script>
	
<style>
	
</style>