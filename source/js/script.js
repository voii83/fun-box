var mouse_out = false;
var mouse_click = false;
var product = document.getElementsByClassName("product");
var product_link = document.getElementsByClassName("action-link");


setProductText();

document.addEventListener("DOMContentLoaded", function() {
    var i;

    for (i = 0; i < product.length; i++) {
        product[i].addEventListener('click', click, true);
        product[i].addEventListener('mouseout', mouseout, true);
    }

    for (i=0; i < product_link.length; i++) {
        product_link[i].addEventListener('click', clickLink, true);
    }
});

function clickLink() {
    this.parentNode.parentNode.parentNode.getElementsByClassName("product")[0].className = 'product selected';
    this.parentNode.parentNode.parentNode.getElementsByClassName("product-action-default")[0].className = 'product-action-default hidden';
    this.parentNode.parentNode.parentNode.getElementsByClassName("product-action-selected")[0].className = 'product-action-selected visible';
}

function click() {
    mouse_click = true;
}

function mouseout() {
    mouse_out = true;
    var text_active;
    var text_disable;

    if (mouse_click && mouse_out) {
        if (this.className === 'product default') {

            this.className = 'product selected';

            text_active = this.parentNode.getElementsByClassName('product-action-selected')
            text_active[0].className = 'product-action-selected visible';

            text_disable = this.parentNode.getElementsByClassName('product-action-default');
            text_disable[0].className = 'product-action-default hidden';
        }
        else if (this.className === 'product selected') {

            this.className = 'product default';

            text_active = this.parentNode.getElementsByClassName('product-action-default');
            text_active[0].className = 'product-action-default visible';

            text_disable = this.parentNode.getElementsByClassName('product-action-selected');
            text_disable[0].className = 'product-action-selected hidden';

        }
    }
    mouse_click = false;
    mouse_click = false;
}

function setProductText () {
    var i;
    var text;

    for (i = 0; i < product.length; i++) {

        if (product[i].className === 'product default') {
            text = product[i].parentNode.getElementsByClassName('product-action-default');
            text[0].className = 'product-action-default visible';
        }

        if (product[i].className === 'product selected') {
            text = product[i].parentNode.getElementsByClassName('product-action-selected');
            text[0].className = 'product-action-selected visible';
        }

        if (product[i].className === 'product disable') {
            text = product[i].parentNode.getElementsByClassName('product-action-disable');
            text[0].className = 'product-action-disable visible';
        }
    }
}