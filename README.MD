<h1 align="center">
  <img alt="Logo" src="https://i.imgur.com/m2og18C.jpg" width="100%">
</h1>

## Indice

- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Preview do projeto](#-preview-do-projeto)
- [Funcionalidades](#-Funcionalidades)
- [Download](#-Download)

---

## 🎧 Sobre

Projeto **RenFit**

---

## 📱 Preview do projeto

segue alguns prints do projeto

<div>
  <img style="margin: 5px" alt="login" src="https://i.imgur.com/CXedDQJ.jpg" width="200">

  <img style="margin: 5px" alt="dashboard" src="https://i.imgur.com/qHYUUGN.jpg" width="200">

</div>

---

## 💻 Tecnologias utilizadas

O projeto foi feito utilizando das seguines tecnologias

- React Native
- Expo
- Jest
- Styled-Components
- Typescript
- React Hooks
- Axios

---

## 📦 Como baixar o projeto

```bash
  #clonar o repositorio
  $ git clone https://github.com/RgMellon/ren-fit

  #entrar na pasta do projeto
  $ cd ren-fit

  #instalar as dependencias
  $ yarn

  #executar o projeto caso de android
  $ expo start


```

---

## 💻 Funcionalidades

- Listagem dos seus dados diarios de saúde;

- Listagem dos seus dados semanais;

## ⬇ Doc da api

API
https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate

## Lista os passos :aggregate

_Recupera todos os passos de 1 mês de diferença_

```json
  "aggregateBy": [{
    "dataSourceId":
      "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
  }],
  "bucketByTime": { "durationMillis": 86400000 },
  "startTimeMillis": 1636426800000,  => Inicio de novembro
  "endTimeMillis": 1639018800000 => Inicio de dezembro
```

## Lista todas as fontes de dados (data source)

_Nessa fonte de dados temos dados associados a ela o_

> dataStreamId é utilizado para obter os dados especificos
> dataStreamName é um nome para descreve o tipo de dado

```json
  https://www.googleapis.com/fitness/v1/users/me/dataSources
```

## Listar todos os gastos caloricos

_Listar as calorias gastas em um determinado tempo_

```json
  POST : https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate

  {"aggregateBy": [

  {
    "dataTypeName": "com.google.calories.expended", //ESSE TALVEZ N PRECISE
    "dataSourceId":
      "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
  },


  ],
    "bucketByTime": { "durationMillis": 86400000 },
    "startTimeMillis": 1636426800000,
    "endTimeMillis": 1639018800000,

}

```

# Pegar todos os exercicios por uma data

_Corpo da requisicao_

```json
{
  "aggregateBy": [
    {
      "dataSourceId": "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments"
    }
  ],

  "bucketByTime": { "durationMillis": 86400000 },
  "startTimeMillis": 1636621200000,
  "endTimeMillis": 1636682400000
}
```

_Response_

```json
{
  "bucket": [
    {
      "startTimeMillis": "1636621200000",
      "endTimeMillis": "1636682400000",
      "dataset": [
        {
          "dataSourceId": "derived:com.google.activity.summary:com.google.android.gms:aggregated",
          "point": [
            {
              "startTimeNanos": "1636663957439000000",
              "originDataSourceId": "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments",
              "endTimeNanos": "1636664687743000000",
              "value": [
                {
                  "mapVal": [],
                  "intVal": 7 // => tipo do exercicio
                },
                {
                  "mapVal": [],
                  "intVal": 730304 // => duracao do exercicio
                },
                {
                  "mapVal": [],
                  "intVal": 2
                }
              ],
              "dataTypeName": "com.google.activity.summary"
            }
          ]
        }
      ]
    }
  ]
}
```

### POntos de cardio

_Responsavel por pegar os pontos de cardios por determinada data_
https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate

```json
{
  "aggregateBy": [
    {
      "dataTypeName": "com.google.heart_minutes"
    }
  ],
  "bucketByTime": { "durationMillis": 86400000 },
  "startTimeMillis": 1636426800000,
  "endTimeMillis": 1639018800000
}
```

Desenvolvido com ♥ por Renan Melo
