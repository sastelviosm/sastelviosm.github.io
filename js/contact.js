
$('#enviar_email').click(function () {
    var name = $('#name').val();
    var surname = $('#surname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var messageLineBreak = message.replace(/\r\n|\r|\n/g, "%0D%0A");
    window.open(
            'mailto:sastelvios@gmail.com?subject=CONTACTO PELO WEBSITE&body='
            + messageLineBreak
            + '%0D%0A'
            + name
            + ' '
            + surname
            + '%0D%0A'
            + phone
            + '%0D%0A'
            + email,
            '_blank');
});
$('#enviar_whatsapp').click(function () {
    var name = $('#name').val();
    var surname = $('#surname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var messageLineBreak = message.replace(/\r\n|\r|\n/g, "%0D%0A");
    window.open(
            'https://wa.me/258846052576?text=' + messageLineBreak
            + '%0D%0A'
            + name
            + ' '
            + surname
            + '%0D%0A'
            + phone
            + '%0D%0A'
            + email,
            '_blank');
});