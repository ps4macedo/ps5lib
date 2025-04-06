customElements.whenDefined('esp-web-install-button').then(() => {
  const InstallButton = customElements.get('esp-web-install-button');
  if (!InstallButton) return;

  InstallButton.prototype.localize = function (key) {
    const mensagens = {
      "install": "🚀 Bora instalar!",
      "connecting": "🔌 Conectando com carinho...",
      "writing": "📡 Gravando o host no seu chip...",
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
