import ItemList from "@/components/ItemList/ItemList.jsx";

import Logo_nat from "../../../public/NATI.jpg";
export default function Home() {
    return (
        <div>

            <div className="text-[30px] bg-green-900">
            <marquee><img id="logo" src={Logo_nat} alt="..." width="150" height="150"/></marquee>
            </div>
            <ItemList/>
        </div>
    )
}