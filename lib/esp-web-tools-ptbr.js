// Aguarda o componente original carregar e então sobrescreve os textos
const esperarComponente = () => {
  return new Promise((resolve) => {
    const tentar = () => {
      const InstallButton = customElements.get('esp-web-install-button');
      if (InstallButton) resolve(InstallButton);
      else setTimeout(tentar, 100);
    };
    tentar();
  });
};

esperarComponente().then((InstallButton) => {
  InstallButton.prototype.localize = function (key) {
    const mensagens = {
      "install": "🚀 Bora instalar!",
      "connecting": "🔌 Conectando com carinho...",
      "writing": "🛠️ Gravando o host no seu chip...",
      "done": "✅ Tudo certo! Host gravado com sucesso.",
      "error": "❌ Opaa! Algo deu errado durante a gravação.",
      "not-supported": "⚠️ Este navegador não suporta Web Serial API. Tente abrir no Chrome!",
      "not-allowed": "⚠️ O acesso à porta serial foi bloqueado. Verifique permissões.",
      "manifest-error": "📦 Ih, deu ruim! Não consegui baixar o arquivo de instalação (.json).",
      "device-not-supported": "❌ Esse chip não é compatível! Tem certeza que escolheu o modelo certo?"
    };
    return mensagens[key] || key;
  };
});
