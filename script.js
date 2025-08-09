const lista = document.querySelector("{data-list}");

const novaTarefa = document.querySelector("{data-form-button}");

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("{data.fore-input}");
    const valor = input.valeu;
    console.log(valor);
}

novaTarefa.addEventListener('click', criarTarefa);