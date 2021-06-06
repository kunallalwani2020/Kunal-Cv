$(function () {
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tab-content > div').hide();
        $( $(this).data('class')).show();
    });
});