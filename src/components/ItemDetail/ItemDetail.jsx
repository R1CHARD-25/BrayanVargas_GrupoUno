import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    // ESTADO PARA LA CANTIDAD
    const [quantity, setQuantity] = useState(1);

    // DOS FUNCIONES PARA INCREMENTAR Y DECREMENTAR
    const decrementQuantity = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }

    const incrementQuantity = () => {
        if(quantity < product.stock){
            setQuantity(quantity + 1)
        }
    }

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1000px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]'/>
                </div>
                <div>
                    <h1 className='bg-green-950 text-white text-[45px] font-medium uppercase rounded'>{product.name}</h1>
                    <p className='text-white text-[20px] my-[20px]'>{product.despcription}</p>

                    <p className='text-white text-[20px] my-[20px]'>Stock: {product.stock}</p>

                    <div className='flex'>
                        <button onClick={decrementQuantity}
                                className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">-
                        </button>
                        <p className='text-white text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity}
                                className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">+
                        </button>
                    </div>

                    <p className='text-white text-[20px] my-[20px]'>Precio: ${product.price}</p>

                    <button
                        className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                    >
                        <span className="text-lg">Comprar</span>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                        >
                            <div className="relative h-full w-10 bg-white/20"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}