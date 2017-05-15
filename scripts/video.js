var videos = {
	'kim': "https://www.youtube.com/embed/a9ZmKvROgY0?autoplay=1",
	'david': "https://www.youtube.com/embed/k4zrDsJfBn8?autoplay=1",
	'scott': "https://www.youtube.com/embed/OMtWmlzx9HM?autoplay=1",
	'alyshia':"https://www.youtube.com/embed/JT85-rGSIWs?autoplay=1",
	'areo':"https://www.youtube.com/embed/mXt5NiQG-h4?autoplay=1",
	'richard':"https://www.youtube.com/embed/fN85d1dDZec?autoplay=1"
};

function renderVideoToElement(videoId, renderToElementId) {
	var videoUrl = videos[videoId];

	if (videoUrl && renderToElementId) {
		renderVideo(videoUrl, renderToElementId);
	}
}

function renderVideo(videoUrl, renderToElementId) {

	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", videoUrl);
	ifrm.className = "embed-responsive-item"

	$("#".concat(renderToElementId)).hide().html(ifrm).fadeIn(1000);
}