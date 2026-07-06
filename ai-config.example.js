/* ============================================================
   IA LOCAL (opcional) — Banco do Além
   ------------------------------------------------------------
   Para ligar a geração por IA enquanto roda em LOCALHOST:

   1. Copie este arquivo para  ai-config.local.js
      (esse nome está no .gitignore — NUNCA vai pro GitHub).
   2. Pegue uma chave GRÁTIS do Gemini em  https://aistudio.google.com/apikey
      (use uma chave NOVA / rotacionada — nunca reaproveite chave exposta).
   3. Cole a chave abaixo e descomente a linha.

   Regras de ouro:
   - NUNCA comite uma chave. Só ai-config.local.js (ignorado) recebe a chave.
   - Este arquivo só é carregado quando o site roda em localhost.
   - Em PRODUÇÃO a chave NÃO fica no site: fica num backend (proxy serverless).
   - Sem chave, o site funciona igual: usa a variação local (offline, privada).
   ============================================================ */

// window.__ALEM_AI = { provider: 'gemini', model: 'gemini-2.5-flash', key: 'COLE_SUA_CHAVE_NOVA_AQUI' };
