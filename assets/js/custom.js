var SECTION_INTRO = 1;
var SECTION_SALTOMORTALE_1 = 2;
var SECTION_SALTOMORTALE_2 = 3;
var SECTION_TEAM = 4;
var SECTION_REDTREE = 5;

var ANCHOR_INTRO = "intro";
var ANCHOR_SALTOMORTALE_1 = "saltomortale-1";
var ANCHOR_SALTOMORTALE_2 = "saltomortale-2";
var ANCHOR_TEAM = "team";
var ANCHOR_REDTREE = "red-tree";


$(document).ready(function() {
    $("#footer_trailer").hide();
    $("#footer_created_by").hide();
    init_fullpage();
    small_display();
    relative_header_position();
});

function init_fullpage() {
    $('#fullpage').fullpage({
        anchors:[ANCHOR_INTRO, ANCHOR_SALTOMORTALE_1, ANCHOR_SALTOMORTALE_2, ANCHOR_TEAM, ANCHOR_REDTREE],
        sectionsColor: ['#F0FFFF', '#000000', '#000000', '#F5F5DC', '#000000'],
        navigation: true,
        afterLoad: function(anchorLink, index) {
            if (anchorLink === ANCHOR_SALTOMORTALE_1 || anchorLink === ANCHOR_SALTOMORTALE_2) {
                $("#footer_trailer").show();
            } else if (anchorLink == ANCHOR_REDTREE){
                $("#footer_created_by").show();
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex != SECTION_SALTOMORTALE_1 || nextIndex != SECTION_SALTOMORTALE_2) {
                $("#footer_trailer").hide();
            }
            if (nextIndex != SECTION_REDTREE) {
                $("#footer_created_by").hide();
            }
        }
    });
}

function small_display() {
    var H1 = $("h1");
    var H2 = $("h2");
    var P = $("p")

    if ($(window).width() < '600') {
        P.addClass("xsmall-display-font-main");
        H1.addClass("xsmall-display-font-h1");
        H2.addClass("xsmall-display-font-h2");
        $("footer").children().addClass("small-footer-div")
        trailer_in_new_window();
    } else if ($(window).width() < '800') {
        P.addClass("small-display-font-main");
        H1.addClass("small-display-font-h1");
        H2.addClass("small-display-font-h2");
        $("footer").children().addClass("small-footer-div")
        trailer_in_modal();
    } else {
        trailer_in_modal();
    }
};

function relative_header_position() {
    var margin = -Math.floor($(window).height()/3);
    $('[id^="relative_header"]').css("margin-top", margin + "px");
}

function trailer_in_new_window() {
    var a_trailer = $("#a-trailer");
    a_trailer.attr("href", "http://vimeo.com/100604694");
    a_trailer.attr("target", "_blank");
    a_trailer.removeAttr("data-toggle");
}

function trailer_in_modal() {
    var a_trailer = $("#a-trailer");
    a_trailer.attr("href", "#trailer-modal");
    a_trailer.attr("data-toggle", "modal");
    a_trailer.removeAttr("target");
}
