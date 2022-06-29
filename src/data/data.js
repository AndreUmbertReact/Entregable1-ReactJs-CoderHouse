export const products = [
    {
        id: 1,
        name: "Bella",
        price: 3000,
        pictureUrl: "https://i.ibb.co/Tkv2Xr1/Bella.png",
        stock: 20,
        category: "Bandolera",
        categoryId: 1,
        details: "Es una bandolera para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    },
    {
        id: 2,
        name: "Nina",
        price: 2000,
        pictureUrl: "https://i.ibb.co/2PbTb0p/Nina.png",
        stock: 10,
        category: "Mochila",
        categoryId: 2,
        details: "Es una mochila para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    },
    {
        id: 3,
        name: "Emma",
        price: 1000,
        pictureUrl: "https://i.ibb.co/JvQYFBV/Emma.png",
        stock: 5,
        category: "Riñonera",
        categoryId: 3,
        details: "Es una riñonera para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    },
    {
        id: 4,
        name: "Dalli",
        price: 1500,
        pictureUrl: "https://i.ibb.co/mS2Kd01/Dalli.png",
        stock: 30,
        category: "Sobre",
        categoryId: 4,
        details: "Es una sobre para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    },
    {
        id: 5,
        name: "Dua",
        price: 4000,
        pictureUrl: "https://i.ibb.co/F5FYTp0/Dua.png",
        stock: 10,
        category: "Riñonera",
        categoryId: 3,
        details: "Es una riñonera para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    },
    {
        id: 6,
        name: "Mia",
        price: 800,
        pictureUrl: "https://i.ibb.co/dQkXjpL/Mia.png",
        stock: 50,
        category: "Billetera",
        categoryId: 5,
        details: "Es una billetera para el uso de todos los dias. Combina con gran numero de prendas y tenemos existencia en varios colores de tela."
    }
];



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products.find(product => product.id === parseInt(id)))
            }
            else {
                reject('We dont have this product jet. Try again in a few hours')
            }
        }, 1500);
    })
}

export const getProductsByCategoryId = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products.filter(category => category.categoryId === parseInt(categoryId)))
            }
            else {
                reject('We dont have this product jet. Try again in a few hours')
            }
        }, 1500);
    })
}

