# Case técnico - Yellot

## Sobre

Esse repositório contém a resolução para um case técnico da [Yellot](https://yellot.com.br/). A resolução deste teste consiste em um aplicativo em React Native que consome dados de uma API que fornece informações sobre a geração de energia de uma usina solar ao longo do tempo. O aplicativo apresentar gráficos para visualizar a geração de energia e comparar os valores reais com os valores esperados.

## Instalação

Siga esse guia para executar a aplicação em sua máquina.

1. Certifique-se que tenha instalado em sua máquina:

- Node.js (LTS);
- npm (já vem instalado com o Node);
- git
- [Expo GO](https://expo.dev/client) (app a ser instalado no dispositivo [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) e/ou [iOS](https://apps.apple.com/app/apple-store/id982107779))

2. Faça uma cópia ou um [download](https://github.com/JefersonLucas/my-yellot/archive/refs/heads/main.zip) deste projeto em sua máquina.

3. Abra a pasta deste projeto em um terminal ou propt de comando e execute o seguinte comando abaixo:

```bash
npm install
# or
npm i
```

4. Com os recursos necessários e o projeto instalado em sua máquina, inicie o aplicativo com o seguinte comando:

```bash
npm start
```

5. Inicie a aplicação com um emulador Android iOS e/ou Expo GO.

### Testes

Para visualizar os testes deste aplicativo, execute o seguinte comando no terminal ou no prompt de comando:

```bash
$ npm run test
```

A resposta desses comandos deve ser algo como isto:

```bash
$ jest
 PASS  __tests__/firsTest.spec.ts (00.001 s)
 PASS  __tests__/server.spec.ts (00.001 s)

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1 s
Ran all test suites.
Done in 1s.
```

Para outros comandos de scripts, consulte o arquivo `package.json` deste projeto.

## Stacks

Este projeto está configurado com as seguintes stacks:

- Node: `18.13.0`
- npm: `8.19.3`
- TypeScript: `4.9.4`
- React: `18.2.0`
- React Native: `0.71.8`
- Native Base: `3.4.28`
- Axios: `1.4.0`
- Expo: `48.0.18`
- Jest: `29.2.1`
- Victory Native: `36.6.11`
- Git: `2.39.1`
- Git Flow: `1.12.3`

## Licença

Este projeto está licenciado sob a licença MIT - veja o [LICENSE.md](LICENSE.md) para detalhes.
