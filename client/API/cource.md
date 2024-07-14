### COURCE

## ADD COURCE 

Endpoint : POST /api/add/cource

Request Body (Success) :

```json
{
        "category" : "1",
        "categoryCource" : "1",
        "details" : {
            "status" : "PREMIUM",
            "picture" : "file.png",
            "price" : 50000
        },
        "cources" : [
            {
                "name" : "apa aja 1"
            },
            {
                "name" : "apa aja 2"
            },
            {
                "name" : "apa aja 3"
            }
        ],
        "detailsvideo" : [
            {
                "name" : "apa aja 1",
                "video" : "video.mp4"
            },
            {
                "name" : "apa aja 3",
                "video" : "video.mp4"
            }
        ],
        "learn" : [
            {
                "desc" : "apa aja 1"
            },
            {
                "desc" : "apa aja 2"
            },
            {
                "desc" : "apa aja 3"
            }
        ],
        "name" : "Belajar Java Untuk Pemula"
}

```

Response Body (Success) :

```json 

{
    "data" : {
        "id" : "1",
        "category" : "1",
        "status" : "PREMIUM",
        "picture" : "file.png",
        "price" : 50000,
        "name" : "Belajar Java Untuk Pemula"
    },
    "error" : "null",
    "idRequest" : "19",
    "time" : "current time stamp",
    "message" : "Success Add"

}

```

Response Body (Failed) : 

```json 

{
    "data" : "null",
    "error" : [
        {
            "typeError" : "typeArror"
        },
        {
            "typeError" : "typeArror"
        }
    ],
    "idRequest" : "19",
    "time" : "current time stamp",
    "message" : "Failed Add"
}

```

