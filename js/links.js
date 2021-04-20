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

    //fundamentos de inteligencia artificial: aprendizado de maquina
    $("#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_en").on('click', function () {
        $("#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_en").attr("href", "/files/certificate/online/Fundam_IA_Aprend_Maq_ASVTW1Axj0eoZ330zKTOdGqOsfN-_EN.pdf")
    });

    $('#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_pt").on('click', function () {
        $("#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_pt").attr("href", "/files/certificate/online/Fundam_IA_Aprend_Maq_ASVTW1Axj0eoZ330zKTOdGqOsfN-_PT.pdf")
    });

    $('#certificate_ASVTW1Axj0eoZ330zKTOdGqOsfN-_pt').magnificPopup({
        type: 'iframe'
    });

    //fundamentos de gestao de projectos:etica
    $("#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_en").on('click', function () {
        $("#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_en").attr("href", "/files/certificate/online/Fundam_Gestao_Proje_Etica_AU15d2HiEopAJLmi1YsAD5NkqbY0_EN.pdf")
    });

    $('#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_pt").on('click', function () {
        $("#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_pt").attr("href", "/files/certificate/online/Fundam_Gestao_Proje_Etica_AU15d2HiEopAJLmi1YsAD5NkqbY0_PT.pdf")
    });

    $('#certificate_AU15d2HiEopAJLmi1YsAD5NkqbY0_pt').magnificPopup({
        type: 'iframe'
    });

    //financas para gestores nao financeiros
    $("#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_en").on('click', function () {
        $("#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_en").attr("href", "/files/certificate/online/Pensamento_Critico_AbN4nDfagTkiBlRL3Rc92rpkp68E_EN.pdf")
    });

    $('#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_pt").on('click', function () {
        $("#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_pt").attr("href", "/files/certificate/online/Pensamento_Critico_AbN4nDfagTkiBlRL3Rc92rpkp68E_EN.pdf")
    });

    $('#certificate_AW82Cl-iWU27ZO1NA08AM3R7ql0C_pt').magnificPopup({
        type: 'iframe'
    });

    //pensamento critico
    $("#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_en").on('click', function () {
        $("#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_en").attr("href", "/files/certificate/online/Pensamento_Critico_AbN4nDfagTkiBlRL3Rc92rpkp68E_EN.pdf")
    });

    $('#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_pt").on('click', function () {
        $("#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_pt").attr("href", "/files/certificate/online/Pensamento_Critico_AbN4nDfagTkiBlRL3Rc92rpkp68E_PT.pdf")
    });

    $('#certificate_AbN4nDfagTkiBlRL3Rc92rpkp68E_pt').magnificPopup({
        type: 'iframe'
    });

    //fundamentos de ecommerce
    $("#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_en").on('click', function () {
        $("#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_en").attr("href", "/files/certificate/online/Ecommerce_Fundam_AWxaxpc0m-hY2b-1-11DMShxRcXW_EN.pdf")
    });

    $('#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_pt").on('click', function () {
        $("#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_pt").attr("href", "/files/certificate/online/Ecommerce_Fundam_AWxaxpc0m-hY2b-1-11DMShxRcXW_PT.pdf")
    });

    $('#certificate_AWxaxpc0m-hY2b-1-11DMShxRcXW_pt').magnificPopup({
        type: 'iframe'
    });

    //fundamentos de gestao de operacoes
    $("#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_en").on('click', function () {
        $("#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_en").attr("href", "/files/certificate/online/Fundam_Gestao_Op_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_EN.pdf")
    });

    $('#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_pt").on('click', function () {
        $("#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_pt").attr("href", "/files/certificate/online/Fundam_Gestao_Op_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_PT.pdf")
    });

    $('#certificate_AQ4y8kHPnSTzQgy1bxgk3-kXVlXi_pt').magnificPopup({
        type: 'iframe'
    });

    //tecnicas de resolucao de problemas
    $("#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_en").on('click', function () {
        $("#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_en").attr("href", "/files/certificate/online/Tec_Resol_Prob_AcxIYnPhibTa9pduObq9TptCwfoV_EN.pdf")
    });

    $('#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_pt").on('click', function () {
        $("#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_pt").attr("href", "/files/certificate/online/Tec_Resol_Prob_AcxIYnPhibTa9pduObq9TptCwfoV_PT.pdf")
    });

    $('#certificate_AcxIYnPhibTa9pduObq9TptCwfoV_pt').magnificPopup({
        type: 'iframe'
    });
    
    //etica e lei na analise de dados
    $("#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_en").on('click', function () {
        $("#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_en").attr("href", "/files/certificate/online/Ethics_Law_Data_Analytics_AZjzwifPR9pmYUOOankkSprQB89Q_EN.pdf")
    });

    $('#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_pt").on('click', function () {
        $("#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_pt").attr("href", "/files/certificate/online/Ethics_Law_Data_Analytics_AZjzwifPR9pmYUOOankkSprQB89Q_PT.pdf")
    });

    $('#certificate_AZjzwifPR9pmYUOOankkSprQB89Q_pt').magnificPopup({
        type: 'iframe'
    });
    
    //aprendendo R
    $("#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_en").on('click', function () {
        $("#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_en").attr("href", "/files/certificate/online/Learning_R_Abhcbg63rRLeLcwWyMS0qJXLzxyA_EN.pdf")
    });

    $('#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_en').magnificPopup({
        type: 'iframe'
    });

    $("#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_pt").on('click', function () {
        $("#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_pt").attr("href", "/files/certificate/online/Learning_R_Abhcbg63rRLeLcwWyMS0qJXLzxyA_PT.pdf")
    });

    $('#certificate_Abhcbg63rRLeLcwWyMS0qJXLzxyA_pt').magnificPopup({
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