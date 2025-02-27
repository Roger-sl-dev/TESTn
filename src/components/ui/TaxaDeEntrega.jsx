import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState({ logradouro: "Calcular taxa e tempo de entrega" });

  useEffect(() => {
    const storedAddress = localStorage.getItem("endereco");
    if (storedAddress) {
      const parsedAddress = JSON.parse(storedAddress);
      setAddressData({
        logradouro: parsedAddress.logradouro || "Calcular taxa e tempo de entrega",
        numero: parsedAddress.numero || "",
      });
    }
  }, []);

  const hClick = () => {
    navigate(`/cep`);
  };

  return (
    <div onClick={hClick} className="bg-white w-full gap-2.5 p-3  flex flex-row place-items-center cursor-pointer">
      <svg
        className="MuiSvgIcon-root size-7 fill-gray-400"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.01 16c-.27 0-.52-.1-.71-.29-.2-.2-.29-.43-.29-.71-.01-.55.43-.99.98-1h.02c.28 0 .51.1.71.29.18.19.28.43.28.7s-.1.51-.29.71-.43.3-.7.3zm-.88-3.66c0-.45.1-.84.29-1.16.19-.33.53-.7 1-1.12.28-.25.48-.47.61-.66s.19-.4.19-.64c0-.29-.11-.53-.32-.74-.21-.2-.5-.3-.85-.3-.37 0-.74.1-.96.3-.21.2-.4.45-.4.98H9c0-1.01.46-1.73.97-2.21C10.53 6.28 11.25 6 12 6c.59 0 1.11.12 1.57.35s.79.55 1.05.96.38.86.38 1.35-.1.9-.31 1.25-.48.71-.89 1.09c-.32.3-.53.56-.65.77s-.18.49-.18.81V13h-1.85v-.66h.01zM18 10.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
      </svg>
      <p className="  font-semibold text-sm text-gray-700">{addressData.logradouro} {addressData.numero}</p>
    </div>
  );
}
