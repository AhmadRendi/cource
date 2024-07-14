### Order

## Add Order Cource

Endpoint : POST /api/order/course/{id}

Request Body :

```json

{
    ""
}

```

Response Body (Success) :

```json

{
    "data" : {
        "price" : 5000,
        "name" : "Java Programming",
        "createDate" : "10-07-2024",
        "updateLastDate" : "13-07-2024",
        "peringkat" : "74",
        "peserta" : 5000,
        "author" : "rendi",
        "WhatDoLear" : [
            {
                "desc" : "Banyak"
            },
            {
                "desc" : "Banyak Kedua"
            }
        ],
        "cources" : [
            {
                "id" : 1,
                "Judul" : "Generic",
                "subCource" : [
                    {
                        "id" : 1,
                        "subJudul" : "Pengenal Generic"
                    },
                    {
                        "id" : 2,
                        "subJudul" : "Dasar Generic"
                    }
                ]
            },
            {
              "id" : 2,
                "Judul" : "OOP",
                "subCource" : [
                    {
                        "id" : 1,
                        "subJudul" : "Java Dasar"
                    },
                    {
                        "id" : 2,
                        "subJudul" : "Class"
                    }
                ]   
            }
        ]
    }
}

```

