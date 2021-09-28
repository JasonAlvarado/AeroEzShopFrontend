const products = [
    {
        "id": "7790040929906",
        "name": "Galletitas Chocolate Chocolinas",
        "price": 55,
        "presentation": "170 gr",
        "brand": "Chocolinas",
        "photo": "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
        "originalPrice": 55,
        "updatedAt": "2021-08-30T10:32:13+00:00"
    },
    {
        "id": "7613035067837",
        "name": "Cafe Instantaneo Suave NesCafe Dolca",
        "price": 269.9,
        "presentation": "170 gr",
        "brand": "Nescafé",
        "photo": "https://challenge-api.aerolab.co/static/products/7613035067837.jpg",
        "originalPrice": 555.1,
        "updatedAt": "2021-08-26T10:32:13+00:00"
    },
    {
        "id": "7790040932708",
        "name": "Galletitas de Vainilla Sabor Frutilla Merengadas",
        "price": 44,
        "presentation": "93 gr",
        "brand": "Merengadas",
        "photo": "https://challenge-api.aerolab.co/static/products/7790040932708.jpg",
        "originalPrice": 44,
        "updatedAt": "2021-09-12T10:32:13+00:00"
    },
    {
        "id": "7794000597723",
        "name": "Caldo de Verduras Wilde",
        "price": 45.9,
        "presentation": "12 un",
        "brand": "Wilde",
        "photo": "https://challenge-api.aerolab.co/static/products/7794000597723.jpg",
        "originalPrice": 45.9,
        "updatedAt": "2021-09-21T10:32:13+00:00"
    },
    // {
    //     "id": "7794000960145",
    //     "name": "Mayonesa Light Doypack Hellmanns",
    //     "price": 55.9,
    //     "presentation": "237 gr",
    //     "brand": "Hellmann's",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
    //     "originalPrice": 55.9,
    //     "updatedAt": "2021-09-12T10:32:13+00:00"
    // },
    // {
    //     "id": "7790040930209",
    //     "name": "Galletitas Sabor Vainilla con Relleno de Limon Mellizas",
    //     "price": 44,
    //     "presentation": "112 gr",
    //     "brand": "Mellizas",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790040930209.jpg",
    //     "originalPrice": 44,
    //     "updatedAt": "2021-09-05T10:32:13+00:00"
    // },
    // {
    //     "id": "7613034235404",
    //     "name": "Cafe Instantaneo Torrado Dolca NesCafe",
    //     "price": 208.9,
    //     "presentation": "170 gr",
    //     "brand": "Nescafé",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7613034235404.jpg",
    //     "originalPrice": 208.9,
    //     "updatedAt": "2021-09-07T10:32:13+00:00"
    // },
    // {
    //     "id": "7791004000099",
    //     "name": "Sal Gruesa en Paquete Celusal",
    //     "price": 44.5,
    //     "presentation": "1 kg",
    //     "brand": "Celusal",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7791004000099.jpg",
    //     "originalPrice": 64.52,
    //     "updatedAt": "2021-09-12T10:32:13+00:00"
    // },
    // {
    //     "id": "7790360720115",
    //     "name": "Picadillo de Carne en Lata Swift",
    //     "price": 31.38,
    //     "presentation": "90 gr",
    //     "brand": "Swift",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790360720115.jpg",
    //     "originalPrice": 52.1,
    //     "updatedAt": "2021-09-17T10:32:13+00:00"
    // },
    // {
    //     "id": "7790580511609",
    //     "name": "Mermelada de Naranja Light Frasco Arcor",
    //     "price": 87.5,
    //     "presentation": "390 gr",
    //     "brand": "Arcor",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790580511609.jpg",
    //     "originalPrice": 87.5,
    //     "updatedAt": "2021-08-21T10:32:13+00:00"
    // },
    // {
    //     "id": "7622300829643",
    //     "name": "Galletitas Vainilla Lincoln Angry Birds",
    //     "price": 60,
    //     "presentation": "153 gr",
    //     "brand": "Lincoln",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7622300829643.jpg",
    //     "originalPrice": 60,
    //     "updatedAt": "2021-09-05T10:32:13+00:00"
    // },
    // {
    //     "id": "7793360800900",
    //     "name": "Mermelada de Frutilla La Campagnola",
    //     "price": 119,
    //     "presentation": "454 gr",
    //     "brand": "La campagnola",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7793360800900.jpg",
    //     "originalPrice": 119,
    //     "updatedAt": "2021-08-26T10:32:13+00:00"
    // },
    // {
    //     "id": "7790040930407",
    //     "name": "Galletitas Rellena Amor",
    //     "price": 44,
    //     "presentation": "112 gr",
    //     "brand": "Bagley",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790040930407.jpg",
    //     "originalPrice": 44,
    //     "updatedAt": "2021-08-22T10:32:13+00:00"
    // },
    // {
    //     "id": "7790070318329",
    //     "name": "Fideos Tirabuzones Lucchetti",
    //     "price": 51.9,
    //     "presentation": "500 gr",
    //     "brand": "Lucchetti",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790070318329.jpg",
    //     "originalPrice": 51.9,
    //     "updatedAt": "2021-09-03T10:32:13+00:00"
    // },
    // {
    //     "id": "7790070318282",
    //     "name": "Fideos Spaghetti Lucchetti",
    //     "price": 52,
    //     "presentation": "500 gr",
    //     "brand": "Lucchetti",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790070318282.jpg",
    //     "originalPrice": 52,
    //     "updatedAt": "2021-08-26T10:32:13+00:00"
    // },
    // {
    //     "id": "7790360720382",
    //     "name": "Pate de Foie Swift Lata",
    //     "price": 43.49,
    //     "presentation": "90 gr",
    //     "brand": "Swift",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790360720382.jpg",
    //     "originalPrice": 43.49,
    //     "updatedAt": "2021-09-15T10:32:13+00:00"
    // },
    // {
    //     "id": "7790710000126",
    //     "name": "Yerba Mate con Hierbas Serranas Cbse",
    //     "price": 156.8,
    //     "presentation": "1 kg",
    //     "brand": "Cbse",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790710000126.jpg",
    //     "originalPrice": 156.8,
    //     "updatedAt": "2021-09-11T10:32:13+00:00"
    // },
    // {
    //     "id": "7790580956400",
    //     "name": "Salsa Portuguesa Doypack Arcor",
    //     "price": 37,
    //     "presentation": "340 gr",
    //     "brand": "Arcor",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790580956400.jpg",
    //     "originalPrice": 37,
    //     "updatedAt": "2021-09-04T10:32:13+00:00"
    // },
    // {
    //     "id": "7790070318114",
    //     "name": "Fideos Tallarin Don Vicente",
    //     "price": 79.05,
    //     "presentation": "500 gr",
    //     "brand": "Don vicente",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790070318114.jpg",
    //     "originalPrice": 79.05,
    //     "updatedAt": "2021-09-02T10:32:13+00:00"
    // },
    // {
    //     "id": "7790270336307",
    //     "name": "Galletitas Clasicas Mediatarde Pack 3 Un",
    //     "price": 52,
    //     "presentation": "330 gr",
    //     "brand": "Media tarde",
    //     "photo": "https://challenge-api.aerolab.co/static/products/7790270336307.jpg",
    //     "originalPrice": 107.61,
    //     "updatedAt": "2021-09-19T10:32:13+00:00"
    // }
]

export default products;