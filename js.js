window.onload = function () {
    var linkNew = document.getElementById('New');
    if (linkNew) {
        linkNew.addEventListener('click', function () {
            window.location.href = "New.html";
        });
    }

    var linkMen = document.getElementById('Men');
    if (linkMen) {
        linkMen.addEventListener('click', function () {
            window.location.href = "Men.html";
        });
    }

    var linkWomen = document.getElementById('Women');
    if (linkWomen) {
        linkWomen.addEventListener('click', function () {
            window.location.href = "Women.html";
        });
    }

    var Min = document.getElementById('minus');
    var size = document.getElementById('size');
    if (size && Min) {
        size.addEventListener('click', function () {
            var form = document.getElementById('form');
            if (Min.classList.contains('fa-minus')) {
                Min.classList.remove('fa-minus');
                Min.classList.add('fa-plus');
                if (form) form.style.display = 'none';
            } else {
                Min.classList.remove('fa-plus');
                Min.classList.add('fa-minus');
                if (form) form.style.display = 'block';
            }
        });
    }

    var Buy = document.getElementById('buy');
    if (Buy) {
        Buy.addEventListener('click', function () {
            var show = document.getElementById('show')
            show.style.display = 'block'; 
        });
    }
    var Close = document.getElementById('close');
    if (Close) {
        Close.addEventListener('click', function () {
            var show = document.getElementById('show')
            show.style.display = 'none'; 
        });
    }
    var Close = document.getElementById('left-close');
    if (Close) {
        Close.addEventListener('click', function () {
            var show = document.getElementById('show')
            show.style.display = 'none'; 
        });
    }  
    AOS.init();
};

var dropdown = document.getElementById('DropDown');
var subtext = document.getElementById('sub-text');

dropdown.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page reload

    if (subtext.style.display === 'none' || subtext.style.display === '') {
        subtext.style.display = 'flex';
        subtext.style.flexDirection = 'column'; 
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
    } else {
        subtext.style.display = 'none';
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
    }
});