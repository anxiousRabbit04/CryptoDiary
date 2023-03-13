document.addEventListener('DOMContentLoaded', function () {
	// инициализация слайдера
	var slider = new SimpleAdaptiveSlider('.slider', {
		loop: true,
		autoplay: false,
		swipe: true,
	})
	var thumbnailsItem = document.querySelectorAll('.slider__thumbnails-item')

	function setActiveThumbnail() {
		var sliderItemActive = document.querySelector('.slider__item_active')
		var index = parseInt(sliderItemActive.dataset.index)
		for (var i = 0, length = thumbnailsItem.length; i < length; i++) {
			if (i !== index) {
				thumbnailsItem[i].classList.remove('active')
			} else {
				thumbnailsItem[index].classList.add('active')
			}
		}
	}
	setActiveThumbnail()
	document
		.querySelector('.slider')
		.addEventListener('slider.set.active', setActiveThumbnail)
	var sliderThumbnails = document.querySelector('.slider__thumbnails')
	sliderThumbnails.addEventListener('click', function (e) {
		$target = e.target.closest('.slider__thumbnails-item')
		if (!$target) {
			return
		}
		var index = parseInt($target.dataset.slideTo, 10)
		slider.moveTo(index)
	})
})