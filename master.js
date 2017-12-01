new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Googlez</a>',
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		},
		sayHello: function() {
			this.title = 'Hello!';
			return this.title;
		},
		increment: function(int, event) {
			console.log(event);
			this.counter += int;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		dummy: function(event) {
			event.stopPropagation();
		},
		alertMe: function() {
			alert('Alert!');
		}
	}
});