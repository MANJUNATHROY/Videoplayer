var video = document.querySelector('.video');
var juice = document.querySelector('.orange');
var btn = document.querySelector('.pp');
function togglepp() {
	if (video.paused) {
		btn.className = "pause";
		video.play();
	}
	else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function () {
	togglepp();
};

video.addEventListener("timeupdate", function () {
	var juicepos = video.currentTime / video.duration;
	juice.style.width = juice * 100 + "%";
	if (video.ended) {
		btn.className = "play";
	}
});
