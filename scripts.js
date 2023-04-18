$(function(){

    // this iife updates the copyright year in the footer
    (function(){
        let now = new Date();
        $("#year").html(now.getFullYear());
    })();

    // this creates our accordion, one section for each year
    // all panels collapsed by default
    // icons removed to add FontAwesome for brand
    $("#accordion").accordion({
        icons: false,
        collapsible: true,
        active: false,
        animate: 500
    });
});