import { useNavigate } from "react-router-dom";




export default (props)=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/produto/${props.idd}`);
      };
    
    return(

        <div className=" bg-white w-full p-2.5 ">
            <div className=" flex justify-between flex-row ">
                <span className=" flex flex-row  gap-1">
                  <p >{props.Numero}x</p>
                  <p>{props.Titulo}</p>
                </span>
                <p>R$ {props.Preço}</p>
            </div>
            <div className=" flex flex-row justify-between ">
                <span className=" flex flex-row gap-2 text-lg">
                    <button onClick={handleClick} className=" text-blue-500 font-semibold">Editar</button>
                    <button onClick={props.Remover} className=" text-gray-500">Remover</button>

                </span>
                <img className=" size-16 mt-2.5" src={props.Image} alt="" />
            </div>
        </div>
    )
}