$(document).ready(function () {

	$("button#hello").click(function (e) { 
		$("ul#user").prepend("<li>Hello!</li>");
		$("ul#webpage").prepend("<li>Why hello there!</li>");
	});

	$("button#goodbye").click(function (e) {
		$("ul#user").prepend("<li>Goodbye!</li>");
		$("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
	});

	$("button#stop").click(function (e) {
		$("ul#user").prepend("<li>Stop copying me!</li>");
		$("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
	});

});