$(document).ready(function() {
    $('#form-tarefa').submit(function (e) {
        e.preventDefault();
        const nomeTarefa = $('#campo-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            $('#lista-tarefa').append('<li>' + nomeTarefa + '</li>');
            $('#campo-tarefa').val('');
        }

    });


    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});