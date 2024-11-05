export const products_equipamiento = [

    {
        id: 1,
        name: 'Carpa Pradera 4+2 Doite',
        price: 529.999,
        despcription: 'Carpa de línea Técnica - Familiar. Está diseñada para tener dos habitaciones independientes y un pasillo central. PESO: 11,8 Kg aprox.',
        stock: 10,
        img: 'https://doite.cl/media/catalog/product/4/8/4850dd25b4102a42128f4d4248c204.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 2,
        name: 'Silla Camping Outdoor',
        price: 62.995,
        despcription: 'SILLA CAMPING OUTDOOR ROCKER GRIS DOITE',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/3/1/319c09e489180b45a6b04aeefdabba.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 3,
        name: 'Mesa De Camping Outdoor',
        price: 99.995,
        despcription: 'MESA DE CAMPING OUTDOOR PATAGON CAMEL DOITE',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/7/9/79a368174be36e44e6876980f77f30.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 4,
        name: 'Mochila Excursion azul',
        price: 95.995,
        despcription: 'Linea Trekking, está orientando a quien realiza excursionismo, recorre zonas de alta montaña a pie.',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/8/1/81e540618b67174b76a8dc1e4b6501.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 5,
        name: 'Bolso Sling Tempest',
        price: 29.995,
        despcription: 'Bolso urbano con correa de hombro cruzada, se puede usar por ambos lados.',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/6/4/645a5027d98de49c4b36ae795381a1.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 6,
        name: 'Carpa Expedition Base 12 Doite',
        price: 2.890599,
        despcription: 'Carpa de la línea Especial. Esta diseñada para períodos largos en climas adversos o para ser usado como campamento base. Su forma de domo le da mayor estabilidad y resistencia al viento.',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/7/e/7eb2ec9f4b2294145979497d0fe56b.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 7,
        name: 'Cocinilla Sobremesa Doite',
        price: 22.995,
        despcription: 'Cocinilla sobremesa con robusta construcción, apta para exteriores. Fácil manejo y rápida cocción. Ideal para camping, picnic o reuniones al aire libre.',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/9/9/99383f22ac6e6249d9ae1af0de2937.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },
    {
        id: 8,
        name: 'Botín Caña Alta doite',
        price: 87.990,
        despcription: 'Linea Trekking, está orientando a quien realiza excursionismo, recorre zonas de alta montaña a pie.',
        stock: 5,
        img: 'https://doite.cl/media/catalog/product/6/5/65d3373ba9934641c9b5242da19d31.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },



]
export const getProducts_equipamiento = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products_equipamiento);
        }, 2500);
    });
};

export const getProductById_equipamiento = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products_equipamiento.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory_equipamiento = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products_equipamiento.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};