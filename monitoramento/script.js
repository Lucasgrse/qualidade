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

document.getElementById("alerts-btn").addEventListener("click", function() {
    document.getElementById("alert-modal").style.display = "flex";
});

document.getElementById("settings-btn").addEventListener("click", function() {
    document.getElementById("settings-modal").style.display = "flex";
});

document.getElementById("close-alerts-btn").addEventListener("click", function() {
    document.getElementById("alert-modal").style.display = "none";
});

document.getElementById("close-settings-btn").addEventListener("click", function() {
    document.getElementById("settings-modal").style.display = "none";
});

document.getElementById("semaphore-1").addEventListener("click", function() {
    alert("Semáforo 1 foi alterado.");
});

document.getElementById("semaphore-2").addEventListener("click", function() {
    alert("Semáforo 2 foi alterado.");
});

document.getElementById("semaphore-3").addEventListener("click", function() {
    alert("Semáforo 3 foi alterado.");
});

// Exemplo simples de gráfico com o Chart.js
window.onload = function() {
    var ctx1 = document.getElementById('traffic-chart').getContext('2d');
    var trafficChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Veículos Monitorados',
                data: [1000000, 1200000, 1150000, 1300000, 1400000, 1500000, 1550000],
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
            }]
        },
    });

    var ctx2 = document.getElementById('infractions-chart').getContext('2d');
    var infractionsChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Infrações Registradas',
                data: [5, 7, 3, 9, 11, 8, 6],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }]
        },
    });
};
