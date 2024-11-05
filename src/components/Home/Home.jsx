import ItemList from "@/components/ItemList/ItemList.jsx";


export default function Home() {
    return (
        <div>

            <div className="text-[30px] bg-green-900 text-white">
            <marquee><h1>BIENVENIDO A MOUNTAIN HEAT</h1></marquee>
            </div>
            <ItemList/>
        </div>
    )
}