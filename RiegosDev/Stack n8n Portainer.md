version: "3.7"

services:
  n8n_editor:
    image: n8nio/n8n:latest
    command: start
    networks:
      - riegosdevnet
    environment:
      - N8N_FIX_MIGRATIONS=true
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_DATABASE=n8n_queue
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=bb7ce41a5e1002c3e630d74cd8bb6bba
      - N8N_ENCRYPTION_KEY=dcc760e510c2704f4fc2de83e9de95e0
      - N8N_HOST=n8n.riegosdev.cloud
      - N8N_EDITOR_BASE_URL=https://n8n.riegosdev.cloud/
      - WEBHOOK_URL=https://webhook.riegosdev.cloud/
      - N8N_PROTOCOL=https
      - N8N_PROXY_HOPS=1
      - N8N_ONBOARDING_FLOW_DISABLED=true
      - N8N_BLOCK_ENV_ACCESS_IN_NODE=false
      - N8N_SKIP_AUTH_ON_OAUTH_CALLBACK=false
      - NODE_ENV=production
      - EXECUTIONS_MODE=queue
      - EXECUTIONS_TIMEOUT=3600
      - EXECUTIONS_TIMEOUT_MAX=7200
      - OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS=true
      - N8N_RUNNERS_ENABLED=true
      - N8N_RUNNERS_MODE=internal
      - N8N_RESTRICT_FILE_ACCESS_TO=~/.n8n-files
      - NODES_EXCLUDE=[]
      - N8N_REINSTALL_MISSING_PACKAGES=true
      - N8N_COMMUNITY_PACKAGES_ENABLED=true
      - N8N_NODE_PATH=/home/node/.n8n/nodes
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_SMTP_SENDER=tiagoriegos2@gmail.com
      - N8N_SMTP_USER=tiagoriegos2@gmail.com
      - N8N_SMTP_PASS=scqzjopalfvquest
      - N8N_SMTP_HOST=smtp.gmail.com
      - N8N_SMTP_PORT=587
      - N8N_SMTP_SSL=false
      - QUEUE_BULL_REDIS_HOST=n8n_redis
      - QUEUE_BULL_REDIS_PORT=6379
      - QUEUE_BULL_REDIS_DB=1
      - N8N_METRICS=true
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=336
      - N8N_AI_ENABLED=false
      - N8N_AI_PROVIDER=openai
      - N8N_AI_OPENAI_API_KEY=
      - NODE_FUNCTION_ALLOW_BUILTIN=*
      - NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
      - GENERIC_TIMEZONE=America/Sao_Paulo
      - TZ=America/Sao_Paulo
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M
      labels:
        - traefik.enable=true
        - traefik.http.routers.n8n_editor.rule=Host(`n8n.riegosdev.cloud`)
        - traefik.http.routers.n8n_editor.entrypoints=websecure
        - traefik.http.routers.n8n_editor.priority=10
        - traefik.http.routers.n8n_editor.tls.certresolver=letsencryptresolver
        - traefik.http.routers.n8n_editor.service=n8n_editor
        - traefik.http.services.n8n_editor.loadbalancer.server.port=5678
        - traefik.http.services.n8n_editor.loadbalancer.passHostHeader=1

  n8n_webhook:
    image: n8nio/n8n:latest
    command: webhook
    networks:
      - riegosdevnet
    environment:
      - N8N_FIX_MIGRATIONS=true
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_DATABASE=n8n_queue
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=bb7ce41a5e1002c3e630d74cd8bb6bba
      - N8N_ENCRYPTION_KEY=dcc760e510c2704f4fc2de83e9de95e0
      - N8N_HOST=n8n.riegosdev.cloud
      - N8N_EDITOR_BASE_URL=https://n8n.riegosdev.cloud/
      - WEBHOOK_URL=https://webhook.riegosdev.cloud/
      - N8N_PROTOCOL=https
      - N8N_PROXY_HOPS=1
      - N8N_ONBOARDING_FLOW_DISABLED=true
      - N8N_BLOCK_ENV_ACCESS_IN_NODE=false
      - N8N_SKIP_AUTH_ON_OAUTH_CALLBACK=false
      - NODE_ENV=production
      - EXECUTIONS_MODE=queue
      - EXECUTIONS_TIMEOUT=3600
      - EXECUTIONS_TIMEOUT_MAX=7200
      - OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS=true
      - N8N_RUNNERS_ENABLED=true
      - N8N_RUNNERS_MODE=internal
      - N8N_RESTRICT_FILE_ACCESS_TO=~/.n8n-files
      - NODES_EXCLUDE=[]
      - N8N_REINSTALL_MISSING_PACKAGES=true
      - N8N_COMMUNITY_PACKAGES_ENABLED=true
      - N8N_NODE_PATH=/home/node/.n8n/nodes
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_SMTP_SENDER=tiagoriegos2@gmail.com
      - N8N_SMTP_USER=tiagoriegos2@gmail.com
      - N8N_SMTP_PASS=scqzjopalfvquest
      - N8N_SMTP_HOST=smtp.gmail.com
      - N8N_SMTP_PORT=587
      - N8N_SMTP_SSL=false
      - QUEUE_BULL_REDIS_HOST=n8n_redis
      - QUEUE_BULL_REDIS_PORT=6379
      - QUEUE_BULL_REDIS_DB=1
      - N8N_METRICS=true
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=336
      - N8N_AI_ENABLED=false
      - N8N_AI_PROVIDER=openai
      - N8N_AI_OPENAI_API_KEY=
      - NODE_FUNCTION_ALLOW_BUILTIN=*
      - NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
      - GENERIC_TIMEZONE=America/Sao_Paulo
      - TZ=America/Sao_Paulo
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M
      labels:
        - traefik.enable=true
        - traefik.http.routers.n8n_webhook.rule=Host(`webhook.riegosdev.cloud`)
        - traefik.http.routers.n8n_webhook.entrypoints=websecure
        - traefik.http.routers.n8n_webhook.priority=5
        - traefik.http.routers.n8n_webhook.tls.certresolver=letsencryptresolver
        - traefik.http.routers.n8n_webhook.service=n8n_webhook
        - traefik.http.services.n8n_webhook.loadbalancer.server.port=5678
        - traefik.http.services.n8n_webhook.loadbalancer.passHostHeader=1

  n8n_worker:
    image: n8nio/n8n:latest
    command: worker --concurrency=10
    networks:
      - riegosdevnet
    environment:
      - N8N_FIX_MIGRATIONS=true
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_DATABASE=n8n_queue
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_USER=postgres
      - DB_POSTGRESDB_PASSWORD=bb7ce41a5e1002c3e630d74cd8bb6bba
      - N8N_ENCRYPTION_KEY=dcc760e510c2704f4fc2de83e9de95e0
      - N8N_HOST=n8n.riegosdev.cloud
      - N8N_EDITOR_BASE_URL=https://n8n.riegosdev.cloud/
      - WEBHOOK_URL=https://webhook.riegosdev.cloud/
      - N8N_PROTOCOL=https
      - N8N_PROXY_HOPS=1
      - N8N_ONBOARDING_FLOW_DISABLED=true
      - N8N_BLOCK_ENV_ACCESS_IN_NODE=false
      - N8N_SKIP_AUTH_ON_OAUTH_CALLBACK=false
      - NODE_ENV=production
      - EXECUTIONS_MODE=queue
      - EXECUTIONS_TIMEOUT=3600
      - EXECUTIONS_TIMEOUT_MAX=7200
      - OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS=true
      - N8N_RUNNERS_ENABLED=true
      - N8N_RUNNERS_MODE=internal
      - N8N_RESTRICT_FILE_ACCESS_TO=~/.n8n-files
      - NODES_EXCLUDE=[]
      - N8N_REINSTALL_MISSING_PACKAGES=true
      - N8N_COMMUNITY_PACKAGES_ENABLED=true
      - N8N_NODE_PATH=/home/node/.n8n/nodes
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_SMTP_SENDER=tiagoriegos2@gmail.com
      - N8N_SMTP_USER=tiagoriegos2@gmail.com
      - N8N_SMTP_PASS=scqzjopalfvquest
      - N8N_SMTP_HOST=smtp.gmail.com
      - N8N_SMTP_PORT=587
      - N8N_SMTP_SSL=false
      - QUEUE_BULL_REDIS_HOST=n8n_redis
      - QUEUE_BULL_REDIS_PORT=6379
      - QUEUE_BULL_REDIS_DB=1
      - N8N_METRICS=true
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=336
      - N8N_AI_ENABLED=false
      - N8N_AI_PROVIDER=openai
      - N8N_AI_OPENAI_API_KEY=
      - NODE_FUNCTION_ALLOW_BUILTIN=*
      - NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
      - GENERIC_TIMEZONE=America/Sao_Paulo
      - TZ=America/Sao_Paulo
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M

  n8n_redis:
    image: redis:latest
    command:
      - redis-server
      - --appendonly
      - "yes"
      - --port
      - "6379"
    volumes:
      - n8n_redis:/data
    networks:
      - riegosdevnet
    deploy:
      placement:
        constraints:
          - node.role == manager
      resources:
        limits:
          cpus: "1"
          memory: 1024M

volumes:
  n8n_redis:
    external: true
    name: n8n_redis

networks:
  riegosdevnet:
    external: true
    name: riegosdevnet