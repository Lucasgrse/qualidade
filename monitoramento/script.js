document.addEventListener("DOMContentLoaded", () => {
    const semaforosMock = [
        { id: 1, estado: "Verde", localizacao: "Rua A" },
        { id: 2, estado: "Vermelho", localizacao: "Avenida B" },
        { id: 3, estado: "Amarelo", localizacao: "Rua C" }
    ];

    const listaSemaforos = document.getElementById("semaforos-lista");
    semaforosMock.forEach(semaforo => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${semaforo.localizacao} - Estado: ${semaforo.estado}</p>`;
        listaSemaforos.appendChild(div);
    });

    const infraçõesMock = [
        { placa: "ABC-1234", infracao: "Avanço de sinal", data: "02/12/2024", localizacao: "Rua D" },
        { placa: "XYZ-9876", infracao: "Excesso de velocidade", data: "02/12/2024", localizacao: "Avenida E" }
    ];

    const listaInfracoes = document.getElementById("listaInfracoes");
    infraçõesMock.forEach(infracao => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${infracao.placa}</td><td>${infracao.infracao}</td><td>${infracao.data}</td><td>${infracao.localizacao}</td>`;
        listaInfracoes.appendChild(row);
    });
});

function gerarRelatorio() {
    document.getElementById("relatorio").innerHTML = "Relatório gerado com sucesso.";
}
