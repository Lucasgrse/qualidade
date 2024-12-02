// Mock de produtos
const produtos = [
    { id: 1, nome: "Produto A", descricao: "Descrição do Produto A", preco: 99.90, imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Produto B", descricao: "Descrição do Produto B", preco: 149.90, imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Produto C", descricao: "Descrição do Produto C", preco: 59.90, imagem: "https://via.placeholder.com/150" },
    { id: 4, nome: "Produto D", descricao: "Descrição do Produto D", preco: 199.90, imagem: "https://via.placeholder.com/150" }
];

// Carrinho de compras (mock)
let carrinho = [];

// Função para mostrar os produtos na tela
function mostrarProdutos() {
    const produtosList = document.getElementById("products-list");
    produtosList.innerHTML = ""; // Limpa os produtos atuais

    produtos.forEach(produto => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtosList.appendChild(productCard);
    });
}

// Função para adicionar produto ao carrinho
function adicionarCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }
}

// Função para atualizar o carrinho no cabeçalho
function atualizarCarrinho() {
    const cartLink = document.getElementById("cart-link");
    cartLink.innerHTML = `Carrinho (${carrinho.length})`;
}

// Função para buscar produtos
function buscarProdutos() {
    const pesquisa = document.getElementById("search-bar").value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(pesquisa));
    produtos.length = 0; // Limpa a lista de produtos
    produtos.push(...produtosFiltrados);
    mostrarProdutos();
}

// Função para filtrar produtos enquanto o usuário digita
function filtrarProdutos() {
    buscarProdutos();
}

// Função de visualização do carrinho
function verCarrinho() {
    if (carrinho.length > 0) {
        let itensCarrinho = carrinho.map(item => `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`).join("");
        itensCarrinho += `<p>Total: R$ ${calcularTotal().toFixed(2)}</p>`;
        alert("Itens no Carrinho: \n" + itensCarrinho);
    } else {
        alert("O carrinho está vazio.");
    }
}

// Função para calcular o total do carrinho
function calcularTotal() {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
}

// Função para ir para o checkout
function irParaCheckout() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio.");
        return;
    }
    
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.style.display = "block"; // Exibe o formulário de checkout
}

// Função para finalizar a compra
function finalizarCompra(event) {
    event.preventDefault(); // Previne o envio do formulário
    
    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const cartao = document.getElementById("cartao").value;

    if (nome && endereco && cartao) {
        alert(`Compra realizada com sucesso!\n\nNome: ${nome}\nEndereço: ${endereco}\nCartão: ${cartao.substring(0, 4)}-XXXX-XXXX-XXXX`);

        // Simula o esvaziamento do carrinho após a compra
        carrinho = [];
        atualizarCarrinho();

        // Oculta o formulário de checkout
        document.getElementById("checkout-form").style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para rastrear o pedido
function rastrearPedido() {
    if (carrinho.length === 0) {
        alert("Você não tem pedidos para rastrear.");
        return;
    }

    // Simula um status de rastreamento
    const status = ["Em processamento", "Em transito", "Entregue"];
    const randomStatus = status[Math.floor(Math.random() * status.length)];

    const trackingStatus = document.getElementById("tracking-status");
    const statusText = document.getElementById("status-text");

    statusText.innerHTML = `Status do pedido: ${randomStatus}`;
    trackingStatus.style.display = "block"; // Exibe o status
}

// Função para avaliar um produto
function avaliarProduto() {
    const rating = document.getElementById("rating").value;
    if (rating >= 1 && rating <= 5) {
        alert(`Avaliação do produto: ${rating} estrelas.`);
    } else {
        alert("Por favor, insira uma nota de 1 a 5.");
    }

    // Esconde o formulário de avaliação
    document.getElementById("product-evaluation").style.display = "none";
}

// Exibir o formulário de avaliação (mockado para exibir ao clicar em um botão)
function mostrarFormularioDeAvaliacao() {
    document.getElementById("product-evaluation").style.display = "block";
}

// Função para abrir o chat
function abrirChat() {
    document.getElementById("chat-window").style.display = "block"; // Exibe o chat
}

// Função para enviar mensagem no chat
function enviarMensagem() {
    const mensagem = document.getElementById("chat-input").value;
    if (mensagem.trim() !== "") {
        const chatMessages = document.getElementById("chat-messages");
        const userMessage = document.createElement("p");
        userMessage.innerHTML = `<b>Você:</b> ${mensagem}`;
        chatMessages.appendChild(userMessage);

        // Resposta simulada do suporte
        const botMessage = document.createElement("p");
        botMessage.innerHTML = `<b>Suporte:</b> Sua dúvida foi registrada. Em breve um atendente entrará em contato.`;
        chatMessages.appendChild(botMessage);

        // Limpa a entrada de mensagem
        document.getElementById("chat-input").value = "";

        // Rola para o final da conversa
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}


// Exibir os produtos ao carregar a página
mostrarProdutos();
