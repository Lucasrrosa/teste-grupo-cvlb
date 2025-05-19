# Instruções para executar as aplicações

## Backend
Para subir a aplicação localmente, executar o seguinte comando dentro da pasta `backend`:

```
    docker compose up 
    // ou
    docker-compose up
```
### Testes unitários
O backend possui testes unitários cobrindo a aplicação. Para executá-los efetue um dos seguintes comandos:

```bash
    //Para executar os testes e calcular a cobertura do codigo
    yarn test:cov
    //Para somente executar os testes
    yarn test
```


## Frontend

Para subir a aplicação localmente, executar o seguinte comando dentro da pasta `frontend`:

```bash
    docker compose up
    // ou
    docker-compose up
```


