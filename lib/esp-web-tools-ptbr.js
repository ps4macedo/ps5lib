
// Versão traduzida e personalizada do esp-web-tools (apenas exemplo de conteúdo mínimo)
import { InstallButton } from "https://unpkg.com/esp-web-tools@8.0.6/dist/web/install-button.js";

// Sobrescrevendo textos básicos via prototype (simplificado apenas para demonstração)
InstallButton.prototype.localize = function (key) {
  const mensagens = {
    "install": "🚀 Bora instalar!",
    "connecting": "🔌 Conectando com carinho...",
    "writing": "✍️ Gravando o host no seu chip...",
    "done": "✅ Tudo certo! Host gravado com sucesso.",
    "error": "❌ Opa! Algo deu errado durante a gravação.",
    "not-supported": "⚠️ Este navegador não suporta Web Serial API. Tente abrir no Chrome!",
    "not-allowed": "⚠️ O acesso à porta serial foi bloqueado. Verifique permissões.",
    "manifest-error": "🚫 Ih, deu ruim! Não consegui baixar o arquivo de instalação (.json).",
    "device-not-supported": "❌ Esse chip não é compatível! Tem certeza que escolheu o modelo certo?"
  };
  return mensagens[key] || key;
};
