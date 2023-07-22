import { useState } from "react";
import ModalMyPokemons from "./Modal";
import { useSelector } from "react-redux";
import CatchPokemons from "../CatchPokemons/CatchPokemons";

const MyPokemons = ({ inputs }) => {
  const [condition, setCondition] = useState(false);
  const [input, setInput] = useState("");
  const products = useSelector((state) => state.product.products);
  const pokeball = useSelector((state) => state.product.pokeball);
  const masterball = useSelector((state) => state.product.masterball);
  const greatball = useSelector((state) => state.product.greatball);

  function check() {
    if (products.length == 0) {
      return false;
    } else {
      return products;
    }
  }
  const card = check();

  const data = [
    {
      id: 1,
      image: "./light2.png",
      no: pokeball,
    },
    {
      id: 2,
      image: "./light1.png",
      no: masterball,
    },
    {
      id: 3,
      image: "./light3.png",
      no: greatball,
    },
  ];

  const handleClick = (value) => {
    setInput(value);
    setCondition(!condition);
  };

  return (
    <div className="w-screen bg-slate-200">
      <img src="./image8.png" alt=" " />
      <div className="p-5 rounded-xl m-5 bg-white relative -top-56">
        <div className="flex justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold">My Pokemons</h1>
            <p>Here is the place where your pokemons are dwelling</p>
          </div>
          <div className="flex w-64  justify-around mt-5">
            {data.map((value) => (
              <div className="flex my-3" key={value.id}>
                <img src={value.image} alt=" " />
                <p className="font-semibold">{value.no}</p>
              </div>
            ))}
          </div>
        </div>

        {card ? (
          <div className="flex justify-around columns-3">
            {card.map((value) => (
              <div className=" h-80" key={value.id}>
                <div className="bg-slate-200 flex justify-center rounded-lg w-60 h-40 my-2">
                  <img src={value.image} alt=" " />
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-semibold">{value.alias}</h1>
                    <p>{value.name}</p>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 p-2 rounded-lg text-white font-semibold"
                      onClick={() => handleClick(value)}
                    >
                      Release
                    </button>
                  </div>
                </div>
                <p className="text-sm my-3">Catched on {value.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-center">
              <img src="./image9.png" alt=" " className="w-2/4" />
            </div>
            <h1 className="text-center text-3xl text-semibold">
              You don't own any pokemons
            </h1>
            <p className="text-center text-slate-500">
              At some point, you got to catch em all
            </p>
            <div className="flex justify-center">
              <button
                className="p-2 w-1/4 bg-blue-500 text-white rounded-lg my-5"
                onClick={() => inputs(<CatchPokemons />)}
              >
                Catch a Pokemon
              </button>
            </div>
          </div>
        )}
      </div>

      {condition && (
        <div>
          <div className="fixed w-screen h-screen bg-black opacity-80 left-0 top-0"></div>
          <div className="fixed flex w-screen h-screen justify-center items-center z-50 left-0 top-0 ">
            <div className="w-1/4 h-100">
              <ModalMyPokemons input={[input, setCondition]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyPokemons;
