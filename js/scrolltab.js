// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset(200).top
//     }, 500);
// });

$('a[href^="#"]').on('click',function (e) {
    // e.preventDefault();

    var target = this.hash,
    $target = $(target);

   $('html, body').animate({
     'scrollTop': $target.offset().top-100
    }, 500, 'swing', function () {
     window.location.hash = target;
    });
});