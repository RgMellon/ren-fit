https://developers.google.com/oauthplayground/?code=4/0AX4XfWjcsmmHxmWpBNf4ayWbMaBKuQlbsiRNHRUV-XVyQNpRhViRPQUsZ6oOUl_Sm0fi1w&scope=https://www.googleapis.com/auth/fitness.sleep.read%20https://www.googleapis.com/auth/fitness.activity.read%20https://www.googleapis.com/auth/fitness.location.read%20https://www.googleapis.com/auth/fitness.body.read%20https://www.googleapis.com/auth/fitness.nutrition.read%20https://www.googleapis.com/auth/fitness.blood_pressure.read%20https://www.googleapis.com/auth/fitness.oxygen_saturation.read%20https://www.googleapis.com/auth/fitness.blood_glucose.read%20https://www.googleapis.com/auth/fitness.body_temperature.read%20https://www.googleapis.com/auth/fitness.reproductive_health.read%20https://www.googleapis.com/auth/fitness.heart_rate.read

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

ONDE PAREI => DOC DATATYPE
https://developers.google.com/fit/datatypes#rest

LISTA DE TIPOS DE ATIVIDADE
https://developers.google.com/fit/rest/v1/reference/activity-types
