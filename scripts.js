$(function(){

    // this iife updates the copyright year in the footer
    (function(){
        let now = new Date();
        $("#year").html(now.getFullYear());
    })();

    // this creates our accordion, one section for each year
    $("#accordion").accordion({
        icons: false,
        collapsible: true,
        animate: 500
    });
});