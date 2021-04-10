//BLOG
$('#ir_blog').click(function () {
    window.open('http://blog.sastelvio.com', '_blank');
});

//CV
$("#cv_pt").on('click', function (e) {
    e.preventDefault();
    url = '/files/cv//CV_SASTELVIO_SERAFIM_MANUEL_Versao27.01.2021_Europass_PT.pdf';
    window.open(url, "_blank");
    trackOutboundLink(url);
});

$("#cv_en").on('click', function (e) {
    e.preventDefault();
    url = '/files/cv//CV_SASTELVIO_SERAFIM_MANUEL_Versao27.01.2021_Europass_EN.pdf';
    window.open(url, "_blank");
    trackOutboundLink(url);
});

//CERTIFICATES AND LICENCES
/*
 POPUP DE PDF
 */

$(document).ready(function () {
    //desenvolvimento agil de software
    $("#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_en").on('click', function () {
        $("#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_en").attr("href", "/files/certificate/online/Dev_Agil_Software_Aeqso6kwZAAxuRwvHScgPLBEk5rz_EN.pdf")
    });

    $('#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_pt").on('click', function () {
        $("#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_pt").attr("href", "/files/certificate/online/Dev_Agil_Software_Aeqso6kwZAAxuRwvHScgPLBEk5rz_PT.pdf")
    });

    $('#certificate_Aeqso6kwZAAxuRwvHScgPLBEk5rz_pt').magnificPopup({
        type: 'iframe'
    });


    //fundamentos de financas
    $("#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_en").on('click', function () {
        $("#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_en").attr("href", "/files/certificate/online/Fundam_Financas_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_EN.pdf")
    });

    $('#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_pt").on('click', function () {
        $("#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_pt").attr("href", "/files/certificate/online/Fundam_Financas_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_PT.pdf")
    });

    $('#certificate_ARZu0w2IvgTNmyQMmLRpAS9jGJLB_pt').magnificPopup({
        type: 'iframe'
    });
});

//SOCIAL
$('#social_twitter').click(function () {
    window.open('https://www.twitter.com/sstlv_seraph', '_blank');
});

$('#social_github').click(function () {
    window.open('https://github.com/sastelvio', '_blank');
});

$('#social_instagram').click(function () {
    window.open('https://www.instagram.com/sstlv_seraph/', '_blank');
});

$('#social_stackoverflow').click(function () {
    window.open('https://stackoverflow.com/users/7080129/sstlv-seraph', '_blank');
});

$('#social_linkedin').click(function () {
    window.open('https://www.linkedin.com/in/sastelviomanuel/', '_blank');
});