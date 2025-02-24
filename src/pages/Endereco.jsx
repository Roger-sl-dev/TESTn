import { IoIosClose } from "react-icons/io"
import { Link, Outlet } from "react-router-dom"



export default ( {children})=>{
    return(
        <>
        <section>
            <section className=" px-3  shadow-md  w-full py-4 flex flex-row justify-between">
              <h3 className="  text-black text-xl font-semibold">Endereço de entrega</h3>
                  <Link className="text-gray-500 text-2xl bg-gray-300 p-1.5 rounded-full"  to="/">
                     <IoIosClose />
                  </Link>
            </section>
            <section>
                {children}
            </section>
        </section>
        </>
    )
}