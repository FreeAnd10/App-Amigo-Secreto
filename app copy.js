let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  document.getElementById("resultado").textContent = `O amigo secreto é: ${amigoSorteado}! `;
}
