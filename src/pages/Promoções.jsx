
import { IoIosClose } from "react-icons/io";

import Destaques from "../data/Destaques";
import DestaquesItem from "../components/ui/DestaquesItem";
import FoodItem from "../components/ui/FoodItem";
import { Link } from "react-router-dom";


export default()=>{
    return(
        <section className=" w-screen h-screen bg-gray-200  ">
            <div className=" flex flex-row bg-white p-2 justify-between mb-5 place-items-center">
                <h3 className=" text-xl capitalize font-semibold">promoções</h3>
                <Link className="" to={'/'}>
                <IoIosClose className=" bg-gray-300 rounded-full text-4xl"/>
                </Link>
            </div>

            <div className=" flex flex-col gap-4 px-2">
            {Destaques.map((item) => (
            <FoodItem
              id={item.id}
              Image={item.image} 
              Preço={item.price} 
              Titulo={item.title} 
              Texto={item.description} 
            />
      
        ))}
            </div>

        </section>
    )
}