import {Link} from "react-router-dom";
export default function Item_equipamiento({id, name, price, img}){

    return (
        <div className="flex flex-col items-center my-[10px] m-1 p-1 ">

            <Link to={`/products_equipamiento/${id}`} ><img className="transform motion-safe:hover:scale-110 rounded" src={img} alt="Imagen Productos"/></Link>

            <Link to={`/products_equipamiento/${id}`} className="text-sm text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[white] hover:text-[rgb(255,225,21)]">{name}</Link>
            <h4 className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[white] hover:text-[rgb(255,225,21)]">$ {price}</h4>
        </div>

    )
}