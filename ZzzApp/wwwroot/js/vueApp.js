import Vue from 'vue'

new Vue({
	el: '#app',
	data: {
		message: 'hello world using vue js on Asp.net core mvc.'
	},
	mounted: function() {
		console.log(this.message);
	}
});


