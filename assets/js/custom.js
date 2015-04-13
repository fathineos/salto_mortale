
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
    if ($(window).height() < '480') {
        $("p").addClass("xsmall-display-font-main");
        $("h1").addClass("xsmall-display-font-h1");
        $("h2").addClass("xsmall-display-font-h2");
        trailer_link_in_new_window();
    } else if ($(window).height() < '800') {
        $("p").addClass("small-display-font-main");
        $("h1").addClass("small-display-font-h1");
        $("h2").addClass("small-display-font-h2");
        trailer_link_in_new_window();
    } else {
        trailer_link_in_modal();
    }
};

function relative_header_position() {
    var margin = -Math.floor($(window).height()/3);
    $('[id^="relative_header"]').css("margin-top", margin + "px");
}

function trailer_link_in_new_window() {
    var a_trailer = $("#a-trailer");
    a_trailer.attr("href", "http://vimeo.com/100604694");
    a_trailer.attr("target", "_blank");
    a_trailer.removeAttr("data-toggle");
}

function trailer_link_in_modal() {
    var a_trailer = $("#a-trailer");
    a_trailer.attr("href", "#trailer-modal");
    a_trailer.attr("data-toggle", "modal");
    a_trailer.removeAttr("target");
}
