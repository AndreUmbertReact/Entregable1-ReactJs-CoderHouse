export const products = [
    {
        id: 1,
        name: "Bella",
        price: 3000,
        pictureUrl: "https://i.ibb.co/Tkv2Xr1/Bella.png",
        stock: 20,
        category: "Bandoliers",
        categoryId: 1,
        details: "It is a shoulder bag for everyday use. It combines with a large number of garments and we have stock in various colors of fabric.",
        quantity: 0
    },
    {
        id: 2,
        name: "Nina",
        price: 2000,
        pictureUrl: "https://i.ibb.co/2PbTb0p/Nina.png",
        stock: 10,
        category: "Backpacks",
        categoryId: 2,
        details: "This backpack is great to wear with casual looks. We manufacture it in different colors to combine according to the seasons.",
        quantity: 0
    },
    {
        id: 3,
        name: "Emma",
        price: 1000,
        pictureUrl: "https://i.ibb.co/JvQYFBV/Emma.png",
        stock: 5,
        category: "FannyPacks",
        categoryId: 3,
        details: "The Emma belt bag is slim and casual, perfect for going out to eat with friends.",
        quantity: 0
    },
    {
        id: 4,
        name: "Dalli",
        price: 1500,
        pictureUrl: "https://i.ibb.co/mS2Kd01/Dalli.png",
        stock: 30,
        category: "Packets",
        categoryId: 4,
        details: "Dalli is an elegant envelope that we manufacture in multiple colors. It combines very well with going out clothes.",
        quantity: 0
    },
    {
        id: 5,
        name: "Dua",
        price: 4000,
        pictureUrl: "https://i.ibb.co/F5FYTp0/Dua.png",
        stock: 10,
        category: "FannyPacks",
        categoryId: 3,
        details: "Dua is a fanny pack to show off. It combines with a large number of garments and works very well with events looks.",
        quantity: 0
    },
    {
        id: 6,
        name: "Mia",
        price: 800,
        pictureUrl: "https://i.ibb.co/dQkXjpL/Mia.png",
        stock: 50,
        category: "Wallets",
        categoryId: 5,
        details: "It is a wallet for everyday use. It comes in many colors and can be combined with other Namour products.",
        quantity: 0
    }
];



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            resolve(products.find(product => product.id === parseInt(id)))
        }
        else {
            reject('We dont have this product jet. Try again in a few hours')
        }

    })
}