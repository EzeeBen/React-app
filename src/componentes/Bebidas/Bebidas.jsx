import { useState } from "react";

const Bebidas = ({nombre, precio, thumbnail}) =>{
    const [cantidadBebida, setCantidadBebida] = useState(0);
    const sumarBebida = ()=> {
        setCantidadBebida(cantidadBebida+1)
    }
    const restarBebida = ()=> {
        setCantidadBebida(cantidadBebida-1)
    }
    
    return(
        <>
        <div className="lista">
        <div className="tarjetaBebida">
            <div >
                <img src={thumbnail} alt= "Bebida" className="imagenBebida"/>
            </div>
            <div className="nombreBebida">
                <h2>{nombre}</h2>
            </div>
            <div className="precioBebida">
                <h5>{precio}</h5>
            </div>
            <button onClick={sumarBebida}>+</button><p>{cantidadBebida}</p><button onClick={restarBebida}>-</button>
        </div>
        </div>
        </>)
}

export default Bebidas;