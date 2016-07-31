[![Build Status](https://travis-ci.org/alissonperez/dribbble-shots-test.svg?branch=master)](https://travis-ci.org/alissonperez/dribbble-shots-test)


Dribbble shots - Test
========================

Lista e detalhe dos shots do site Dribbble.

Veja em funcionamento aqui: http://alissonperez.com/dribbble-shots/

Setup
-------

Instale as dependencias:

```
$ npm install
```

Para subir o servidor local:

```
$ gulp webserver
```

Para subir o 'watcher' para compilar os arquivos stylus:

```
$ gulp
```

Testes
-------

Para executar os testes:

```
$ npm test
```

Anotações
-----------

- A responsividade ficou bem simples, como as telas já eram simples apenas faço uns ajustes quando as telas são pequenas.
- Sobre o fluxo de trabalho git, não utilizei um branch 'develop' apenas por praticidade, como o teste era algo bem simples optei por me manter no master e fazer branches quando alterações maiores fossem necessárias.
- Por motivos de praticidade não incluí recursos de UX como feedback's de loading para o usuário. Seria uma primeira melhoria a se fazer.