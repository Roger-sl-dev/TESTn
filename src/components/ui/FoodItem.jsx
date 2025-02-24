import { useNavigate } from 'react-router-dom';

export default ({ Image, Titulo, Texto, Preço, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produto/${id}`);
  };

  return (
      <div onClick={handleClick}  className="w-full  flex flex-row gap-5 justify-between p-2 rounded-lg bg-white">
        <span className="flex flex-col gap-1 justify-between h-full min-h-28 w-[70%]">
          <h3 className="text-xl font-semibold">{Titulo}</h3>
          <p className="line-clamp-2 text-lg font-medium">{Texto}</p>
          <p className="text-lg font-semibold">
            R${Preço}
          </p>
        </span>
        <span className="w-[30%]">
          <img className="rounded-xl" src={Image} alt="" />
        </span>
      </div>
  );
};

