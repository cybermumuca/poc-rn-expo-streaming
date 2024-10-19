# Poc React Native Expo Streaming

Este projeto é uma prova de conceito (PoC) simples para streaming de áudio utilizando React Native e Expo.

O servidor de streaming é feito em Java com Spring Boot, acesse o repositorio [poc-spring-boot-streaming](https://github.com/cybermumuca/poc-spring-boot-streaming)

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [react-native-track-player](https://rntp.dev)

## Como executar

1. Clone o repositório
    ```shell 
    git clone https://github.com/cybermumuca/poc-rn-expo-streaming.git 
    cd poc-rn-expo-streaming
    ```
2. Instale as dependências
    ```shell
    pnpm install
    ```
3. Compile o projeto usando o EAS
    ```shell
    eas build --profile development
    ```
4. Execute o projeto
    ```shell
    pnpm run start
    ```