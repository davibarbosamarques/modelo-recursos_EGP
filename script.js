$(".st1").click(function(){
    $(".profile").prop("checked", true);
});
$(".st2").click(function(){
    $(".settings").prop("checked", true);
});
$(".st3").click(function(){
    $(".posts").prop("checked", true);
});
$(".st4").click(function(){
    $(".books").prop("checked", true);
});



// TOOLTIP 

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))