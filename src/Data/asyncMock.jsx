export const products = [
    {
        id: 1,
        name: 'Termo Aix 1000 Ml.',
        price: 35000,
        despcription: 'Termo de doble pared de acero inoxidable de 1 litro de capacidad, mantiene la temperatura de bebidas calientes y frías gracias a su excelente capacidad de aislación. Peso: 520 grs aprox. ',
        stock: 5,
        category: 'termo',
        img: 'https://doite.cl/media/catalog/product/5/6/562c3415645de4f82ab6644993b4bc.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds'

    },
    {
        id: 2,
        name: ' Mate Cucao 360ml',
        price: 23000,
        despcription: 'Disfruta tus infusiones en cualquier lugar con nuestro mug de 360 ml. Doble pared de acero inoxidable, recubrimiento engomado y bombilla con filtro ¡Disfruta cada sorbo!',
        stock: 10,
        category: 'mates',
        img: 'https://doite.cl/media/catalog/product/1/5/1568cf2ed05df54b959a35e29e7059.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds'
    },
    {
        id: 3,
        name: 'Mochila Excursion 60lt',
        price: 199000,
        despcription: 'Esta mochila de diseño simple y elegante es perfecta para cualquier ocasión. Cuenta con un compartimento para laptop y correas pectorales y lumbares que brindan mayor estabilidad.',
        stock: 5,
        category: 'mochila',
        img: 'https://doite.cl/media/catalog/product/3/2/32a69be700bc7440fb8b5a33d5fe9c.jpg?width=300&height=380&canvas=300,350&quality=2000&bg-color=255,255,255&fit=bounds'
    },
    {
        id: 4,
        name: 'Zapatilla Caña Baja',
        price: 87990,
        despcription: 'Linea Trekking, está orientando a quien realiza excursionismo, recorre zonas de alta montaña a pie.',
        stock: 5,
        category: 'zapato',
        img: 'https://doite.cl/media/catalog/product/7/0/701dd8f2e39ff247b4a5166ee8c123.jpg?width=300&height=380&canvas=300,350&quality=80&bg-color=255,255,255&fit=bounds',
        sizes:["M","s","L"],
    },


]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};