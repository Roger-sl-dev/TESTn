import BorderList from "./BorderList";


export default ({type,options,Change,borda,Change2})=>{
    const Type='Pedação'
    const mostrarPizza = type === "Pizza";

    return(
        <>
          {mostrarPizza && (
        <div>

         <div className="py-5 px-4 bg-gray-100">
         <p className="font-semibold text-lg">Escolha seu sabor</p>
         <p className="text-lg text-gray-600">Escolha de 1 a 2 opções</p>
       </div>

        <fieldset className="space-y-2 bg-white">
          {options.map((option) => (
            <div className="flex flow-row justify-between px-4 py-4" key={option.nome}>
              <span className="flex flex-col gap-2">
                <p className="text-lg text-black">{option.name} </p>
                <p className="text-sm font-medium">{option. description}</p>
              </span>
              <input
                className="size-5"
                type='checkbox'
                name="option"
                value={option.nome}
                data-preco={option.preco}
                required
                onChange={Change}
              />
            </div>
          ))}
        </fieldset>
        <BorderList type={Type} bordas={borda} Change={Change2}  />
        </div>
      )}
        </>
    )
}