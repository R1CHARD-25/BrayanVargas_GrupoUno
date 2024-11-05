import Item_equipamiento from "../Item/Item_equipamiento.jsx"
import { getProducts_equipamiento } from "../../data/asyncMock_equipamiento.jsx"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

export default function ItemList_equipamiento(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts_equipamiento().then((data) =>{
            setProducts(data)
            setLoading(false)
        });
    }, []);


    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap justify-center items-center w-full">
                    {products.map((prod) =>(
                        <Item_equipamiento {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}
