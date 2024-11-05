import './App.css'
import Header_componente from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Equipamiento from "./components/Equipamiento/Equipamiento.jsx";
import Calzado from "./components/Calzado/Calzado.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Logo_nav from "../public/montañaspng.png";
import ItemDetail_equipamiento from "@/components/ItemDetail/ItemDetail_equipamiento.jsx";
import Nosotros from "@/components/Nosotros/Nosotros.jsx";
import ProductsCategory from './components/Category/Category.jsx';
import Terms from './components/Terms/Terms.jsx'

function App() {



    return (
      <>

          <BrowserRouter>
              <Header_componente/>
              <div className="bg-Mountain bg-fixed h-[480px] bg-cover bg-center flex items-center justify-center text-white ">
                  <img id="logo" src={Logo_nav} alt="..." width="400" height="400"/>
              </div>

              <Routes>

                  <Route path="/" element={<Home/>}/>

                          <Route path="/equipamiento" element={<Equipamiento/>}/>
                          <Route path="/Nosotros" element={<Nosotros/>}/>
                          <Route path="/Terms" element={<Terms/>}/>
                          <Route path="/Calzado" element={<Calzado/>}/>
                          <Route path='/products/:productId' element={<ItemDetail />} />
                          <Route path='/category/:categoryId' element={<ProductsCategory />} />
                          <Route path='/products_equipamiento/:productId' element={<ItemDetail_equipamiento />} />

              </Routes>


                  <Footer/>

          </BrowserRouter>
      </>

)
}

export default App
