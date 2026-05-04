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