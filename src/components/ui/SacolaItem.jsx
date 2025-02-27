import { useNavigate } from "react-router-dom";




export default (props)=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/produto/${props.idd}`);
      };
    
    return(

        <div className=" bg-white w-full p-2.5 rounded-lg">
            <div className=" flex justify-between flex-row ">
                <span className=" flex flex-row  gap-1">
                  <p >{props.Numero}x</p>
                  <p className="text-sm">{props.Titulo}</p>
                </span>
                <p className=" ">R$ {props.Preço}</p>
            </div>
            <div className=" grid  grid-flow-col place-self-stretch justify-between ">
                <span className="  grid  grid-cols-2 align-bottom gap-5 text-msm place-content-end">
                    <button onClick={handleClick} className=" text-blue-500 font-semibold">Editar</button>
                    <button onClick={props.Remover} className=" text-gray-400">Remover</button>

                </span>
                <img className=" size-12 rounded-lg mt-2.5" src={props.Image} alt="" />
            </div>
        </div>
    )
}