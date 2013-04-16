var Modal = function (element) {
    modal = this;
    this.element = element;
    this.parent = document.getElementsByTagName('body')[0];
    this.create();


};

Modal.prototype.create = function () {
    this.element
    var width = this.element.outerWidth;
    this.parent.appendChild(this.element);
    this.element.style.position = 'absolute';
    this.element.style.top = '10px';
    this.element.style.left = (width / 2) + '%';

    this.element.addEventListener('click', function () {
        modal.close();
    }, false);
};

Modal.prototype.close = function () {
    this.element = this.parent.removeChild(this.element);
};