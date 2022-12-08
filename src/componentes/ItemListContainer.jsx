// import { NavItem } from "react-bootstrap";
import Bebidas from "../componentes/Bebidas/Bebidas";
import {data} from "./Data";

const ItemListContainer = () => {
    return(
    <>
    {
    data.map(item=> (
        <Bebidas 
        key= {item.id}
        nombre={item.nombre}
        precio= {item.precio}
        thumbnail= {item.thumbnail}/>
    ))
}
    </>)
}

export default ItemListContainer;