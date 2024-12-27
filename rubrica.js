//simuliamo un database per la rubrica
var rubrica = [
    { nome: 'Sara', numero: 12345678 },
    { nome: 'Chiara', numero: 34356891 },
    { nome: 'Lorenza', numero: 32356822 }
];

//Funzione per aggiornare la rubrica
function aggiornaRubrica() {
    var rubricaItems = document.getElementById('rubrica-items');
    rubricaItems.innerHTML = '';
    //popoliamo la tabella con foreach
    rubrica.forEach((rubrica, index) => {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${rubrica.nome}</td>
                        <td>${rubrica.numero}</td>
                        <td><button onclick="rimuoviNumero(${index})">Rimuovi</button> <button onclick="modificaNumero(${index})">Modifica</button></td>`;
        //aggiunta della riga alla tabella
        rubricaItems.appendChild(row);
    });
}

//Funzione per rimuovere un contatto dalla rubrica e quindi dal suo array
function rimuoviNumero(index) {
    rubrica.splice(index, 1);
    aggiornaRubrica();
}

//Funzione per modificare un contatto dalla rubrica e quindi dal suo array
function modificaNumero(index) {
    var nuovoNome = prompt('Inserisci nuovo nome', rubrica[index].nome);
    var nuovoNumero = prompt('Inserisci nuovo numero', rubrica[index].numero);
    if (nuovoNome && nuovoNumero) {
        rubrica[index].nome = nuovoNome;
        rubrica[index].numero = nuovoNumero;
        aggiornaRubrica();
        //ripuliamo i  campi di input
        document.getElementById('nominativo').value = '';
        document.getElementById('numero').value = '';
    } else {
        alert('Inserisci nome e numero di telefono validi.');
    }
}

// Funzione per controllare la singolarità degli elementi
function verificaSingolarita(nome, numero) {
    for (var i = 0; i < rubrica.length; i++) {
        if (rubrica[i].nome === nome || rubrica[i].numero === numero) {
            return true;
        }
    }
    return false;
}

aggiornaRubrica();
//Funzione per aggiungere un nuovo numero alla rubrica
function aggiungiNumero() {
    var nome = document.getElementById('nominativo').value;
    var numero = parseFloat(document.getElementById('numero').value);
    // Verifica singolarità e interruzione in caso contario dell'aggiunta alla rubrica
    if (verificaSingolarita(nome, numero)) {
        alert('Esiste già un contatto con questo nome o numero.');
        return;
    }
    //controllo verifica dati input
    if (nome && numero) {
        rubrica.push({ nome, numero });
        aggiornaRubrica();
        //ripuliamo i  campi di input
        document.getElementById('nominativo').value = '';
        document.getElementById('numero').value = '';
    } else {
        alert('Inserisci nome e numero di telefono validi.');
    }
}
//inizializza la visualizzazione della rubrica
aggiornaRubrica();
