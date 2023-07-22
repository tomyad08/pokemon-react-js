import { useState } from "react";
import ModalShop from "./Modal";

const Shop = () => {
  const [input, setInput] = useState("");
  const [condition, setCondition] = useState(false);

  const handleClick = (value) => {
    setInput(value);
    setCondition(!condition);
  };

  const data = [
    {
      id: 1,
      image: "./bol1.png",
      name: "The Poke Ball",
      desc: "Mass-produced reliable",
      price: 50,
    },
    {
      id: 2,
      image: "./bol2.png",
      name: "The Great Ball",
      desc: "It lives by it's name. 'Great' performance in the field",
      price: 175,
    },
    {
      id: 3,
      image: "./bol3.png",
      name: "The Master Ball",
      desc: "No pokemon can handle the power this Poke Ball has",
      price: 500,
    },
  ];

  return (
    <div className="w-full bg-slate-200">
      <img src="./image2.png" alt=" " />
      <div className="p-5 rounded-xl m-5 bg-white relative -top-56">
        <div className="flex justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold">The Pokemon Shop</h1>
            <p>
              Welcome to the pokemon shop! please look around and buy what you
              need.
            </p>
          </div>
        </div>

        <div className="flex justify-around columns-3">
          {data.map((value) => (
            <div
              className=" h-60 w-1/4"
              key={value.id}
              onClick={() => handleClick(value)}
            >
              <div className=" flex justify-center rounded-lg my-2">
                <img src={value.image} alt=" " className="w-full" />
              </div>
              <div className="flex justify-between">
                <div className="w-3/4">
                  <h1 className="text-xl font-semibold">{value.name}</h1>
                  <p className="text-sm">{value.desc}</p>
                </div>
                <div className="flex w-1/4 bg-green-200 rounded-lg p-1 h-7">
                  <img src="./wallet.png" alt=" " className="w-5 h-5" />
                  <p className="text-sm font-semibold w-5 h-5">{value.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {condition && (
        <div>
          <div className="fixed w-screen h-screen bg-black opacity-80 left-0 top-0"></div>
          <div className="fixed flex w-screen h-screen justify-center items-center z-50 left-0 top-0 ">
            <div className="w-1/4 h-100">
              <p className="text-white absolute top-10">x</p>
              <ModalShop input={[input, setCondition]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Shop;
