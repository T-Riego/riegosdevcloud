# Deploy VPS - Riegos Dev

Atualizado em: 2026-05-14

## Estado atual

- Dominio publico: `https://riegosdev.cloud`.
- Deploy atual: automatico via GitHub Actions em `.github/workflows/deploy.yml`.
- Trigger: push na branch `master`.
- VPS usa o diretorio `/opt/riegosdev-site`.
- Workflow executa:
  - `git pull`
  - cria `.env.local` na VPS com `NEXT_PUBLIC_CLARITY_PROJECT_ID` vindo de GitHub Secrets
  - `docker build -t riegosdev-site:latest .`
  - `docker service update --image riegosdev-site:latest --force site-oficial_web`
- Ultimo deploy confirmado em 2026-05-08 no commit `1faa9e8`.
- Rotas confirmadas em producao: `/`, `/privacidade`, `/termos`, `/exclusao-de-dados`, `/sitemap.xml`.
- A home publica contem a metatag de verificacao da Meta no `<head>`.
- Microsoft Clarity depende de `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9` durante o build.

## Fluxo normal de publicacao

No PC local:

```bash
git status --short --branch
npm run lint
npm run build
git push origin master
```

Depois do push:

```bash
gh run list --limit 3
gh run watch <run-id> --exit-status
```

Validar producao:

```bash
curl -I -L https://riegosdev.cloud/
curl -I -L https://riegosdev.cloud/privacidade
```

Validar Clarity depois do deploy:

```bash
curl -L https://riegosdev.cloud/ | grep -i "clarity.ms/tag/wqzbfoy9h9"
```

Se nao aparecer, conferir se `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9` esta disponivel para o processo que executa `docker build`.

## Portainer / Swarm

O Portainer mostra e gerencia a stack `site-oficial`, mas o fluxo atual nao depende de editar variavel diretamente na interface do Portainer para o Clarity.

Motivo: `NEXT_PUBLIC_CLARITY_PROJECT_ID` e uma variavel publica do Next.js e precisa existir durante o `next build`, que acontece dentro do `docker build`. Colocar essa variavel apenas no ambiente runtime do servico pelo Portainer pode nao funcionar, porque o bundle client-side ja foi gerado antes.

Fluxo recomendado:

1. GitHub Secret `NEXT_PUBLIC_CLARITY_PROJECT_ID` guarda `wqzbfoy9h9`.
2. GitHub Actions conecta na VPS por SSH.
3. O workflow cria `.env.local` em `/opt/riegosdev-site`.
4. `docker build` roda ja com a variavel disponivel.
5. `docker service update --image riegosdev-site:latest --force site-oficial_web` atualiza o servico que aparece no Portainer.

So editar pelo Portainer se o fluxo de deploy mudar para build/deploy manual pela UI. Nesse caso, a variavel precisa estar configurada como build-time env ou build arg, nao apenas como env runtime.

## Variaveis de ambiente importantes

- `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9`
  - publica, usada no bundle client-side;
  - necessaria para Microsoft Clarity;
  - precisa existir no build local e no build da VPS/GitHub Actions.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  - opcional, usada para verificacao do Google Search Console quando o token existir.

## Fluxo manual legado

Esta secao fica como referencia historica caso seja necessario reconstruir a VPS sem o workflow atual.

 Como subir na sua VPS da Hostinger

  1. Acesse a VPS via SSH

  ssh root@SEU_IP_DA_VPS

  2. Instale Node.js (se ainda não tiver)

  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  node -v && npm -v

  3. Clone o repositório

  cd /var/www
  git clone https://github.com/T-Riego/riegosdevcloud.git
  cd riegosdevcloud

  4. Instale dependências e faça o build

  npm install
  npm run build

  5. Inicie com PM2 (processo persistente)

  npm install -g pm2
  pm2 start npm --name "riegosdevcloud" -- start
  pm2 save
  pm2 startup

  6. Configure o Nginx como proxy reverso

  # /etc/nginx/sites-available/riegosdevcloud
  server {
      listen 80;
      server_name seudominio.com www.seudominio.com;

      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }
  }

  sudo ln -s /etc/nginx/sites-available/riegosdevcloud /etc/nginx/sites-enabled/
  sudo nginx -t
  sudo systemctl reload nginx

  Para atualizar depois (fluxo normal):

  # No seu PC local: commita e faz push normalmente
  git push

  # Na VPS:
  cd /var/www/riegosdevcloud
  git pull
  npm run build
  pm2 restart riegosdevcloud

  ---
  Se quiser SSL/HTTPS, me avisa que instruo com o Certbot também. Quando estiver pronto pra continuar desenvolvendo a
  página, é só chamar.
