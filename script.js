const form = document.getElementById('formAgendamento');
const lista = document.getElementById('lista');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    const dataFormatada = new Date(data+ 'T00:00:00').toLocaleDateString('pt-br');

    const item = document.createElement('li');
    item.innerHTML = `<strong>${nome}</strong> - ${servico} <br> 📅 ${dataFormatada} às ${horario}`;
    lista.appendChild(item);

    form.reset();
});
