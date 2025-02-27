

export default ({type,bordas,Change})=>{
    const mostrarPizza = type === "Pedação";

    return(
        <>
          {mostrarPizza && (
        <div>

         <div className="py-5 px-4 bg-gray-100">
         <p className="text-sm font-medium text-gray-600">Borda da Pizza</p>
         <p className="text-sm text-gray-500">Escolha até 1 opção</p>
       </div>

        <fieldset className="space-y-2 bg-white">
          {bordas.map((borda) => (
            <div className="flex flow-row justify-between px-4 py-4" key={borda.nome}>
              <span className="flex flex-col gap-2">
                <p className="text-sm font-normal">{borda.nome} </p>
                <p className="text-xs font-medium text-gray-700">+ R${borda.preco},00</p>
              </span>
              <input
                className="size-5"
                type="radio"
                name="borda"
                value={borda.nome}
                data-preco={borda.preco}
                required
                onChange={Change}
              />
            </div>
          ))}
        </fieldset>
        </div>
      )}
        </>
    )
}