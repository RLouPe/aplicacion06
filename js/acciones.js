// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#beep').tap(function () {
			navigator.notification.beep(1);
		});//beep
		$('#btnvibrar').on('tap', function () {
			navigator.notification.vibrate(5555);
		});
	},false);
});

