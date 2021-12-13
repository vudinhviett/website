$(document).ready(function() {
	
	$(".gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Ảnh đang được tải...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Ảnh này đã bị xoá hoặc bị thay đổi đường dẫn'
		}
	});
});