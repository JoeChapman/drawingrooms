
var Gallery = function () {
    this.gallery = document.getElementById('gallery');
    this.poster = document.getElementById('poster');
    this.bindThumbs();

    this.poster.getElementsByTagName('img')[0].addEventListener('click', this.fullscreen, false);
};

Gallery.prototype.bindThumbs = function () {
    var thumbs = this.gallery.getElementsByTagName('ul')[0].getElementsByTagName('img'),
        gallery = this;

    for (var i = 0, l = thumbs.length; i < l; i++) {
        thumbs[i].addEventListener('click', function (e) {
            gallery.showPoster(this);
        }, false);
    }
};

Gallery.prototype.showPoster = function (img) {
    var image = this.poster.getElementsByTagName('img')[0],
        caption = this.poster.getElementsByTagName('p')[0];
    image.src = img.src;
    caption.innerHTML = img.alt;
};

Gallery.prototype.scroll = function () {};

Gallery.prototype.fullscreen = function () {
    console.log(this)
    var modal = new Modal(this);
};