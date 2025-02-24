import { IoHome } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";




export default ()=>{
    return(
        <>
         <div className=" grid grid-cols-4 bg-white w-full py-2.5  border-t shadow-xl">
          
          <Link to='/'>
           <MenuItem Iocns={<IoHome/>} Texto='Home'/>
          </Link>
          <Link to={'promo'}>
           <MenuItem Iocns={<RiDiscountPercentFill/>} Texto="Promoções"/>
          </Link>
           <Link to='/sacola'>
           <MenuItem Iocns={<GiShoppingBag/>} Texto={'Pedidos'}/>
           </Link>
           <MenuItem Iocns={<FaUser/>} Texto={'Perfil'}/>
           
         </div>
        
        </>
    )
}

let MenuItem=({Iocns,Texto})=>{
    return(

        <span className="  text-center flex flex-col place-items-center">
            <span className=" text-3xl text-gray-600 text-center">
              {Iocns}
            </span>
       <p className=" trx">{Texto}</p>
   </span>

    )
}