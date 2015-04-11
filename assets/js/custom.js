
$(document).ready(function() {
    init_fullpage();
    small_display();
    relative_header_position();
});

function init_fullpage() {
    $('#fullpage').fullpage({
        anchors:['intro', 'saltomortale-1', 'saltomortale-2', 'team', 'red-tree'],
        sectionsColor: ['#F0FFFF', '#000000', '#000000', '#F5F5DC', '#000000'],
        navigation: true,
        fixedElements: '.footer',
        paddingBottom: '100px'
    });
}

function small_display() {
    if ($(window).width() < '768') {
        $("p").addClass("small-display-font-main");
        $("h1").addClass("small-display-font-h1");
        $("h2").addClass("small-display-font-h2");
        $("h1").removeClass("mid-top")
    }
};

function relative_header_position() {
    margin = -Math.floor($(window).height()/3)
    $('[id^="relative_header"]').css("margin-top", margin + "px")
}
