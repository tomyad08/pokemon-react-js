import React from "react";
import { useState } from "react";
import Animation from "./Animation.json";
import Lottie from "lottie-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addAttemps,
  addCoin,
  addGreatball,
  addMasterball,
  addPokeball,
  addPokemons,
  addProducts,
} from "../../../Lib/ProductSlice";
import Home from "../Home/Home";
import MyPokemons from "../MyPokemons/MyPokemons";

const CatchPokemons = ({ input }) => {
  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(true);
  const [condition3, setCondition3] = useState(true);
  const [alias, setAlias] = useState("");
  const [getPokemon, setgetPokemon] = useState(" ");
  const [poke, setPoke] = useState(0);
  const [great, setGreat] = useState(0);
  const [master, setMaster] = useState(0);
  const [button, setButton] = useState(true);
  const [selected, setSelected] = useState([]);
  const [checkBall, setCheckBall] = useState("");
  const [cancel, setCancel] = useState(false);

  const products = useSelector((state) => state.product.products);
  const pokeball = useSelector((state) => state.product.pokeball);
  const masterball = useSelector((state) => state.product.masterball);
  const greatball = useSelector((state) => state.product.greatball);
  const identitas = useSelector((state) => state.product.identitas);
  const dispatch = useDispatch();

  const getData = async (NumRandom) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${NumRandom}/`)
      .then((res) => {
        setgetPokemon(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCount = (value) => {
    setSelected(value);
    setButton(false);
    if (value.id == 0) {
      if (pokeball <= 0) {
        setButton(true);
        setCheckBall("You don't have any pokeball");
      }
      setPoke(poke + 1);
    } else if (value.id == 1) {
      if (greatball <= 0) {
        setButton(true);
        setCheckBall("You don't have any greatball");
      }
      setGreat(great + 1);
    } else if (value.id == 2) {
      if (masterball <= 0) {
        setButton(true);
        setCheckBall("You don't have any checkball");
      }
      setMaster(master + 1);
    }
  };

  const DecrBall = () => {
    if (selected.id == 0) {
      dispatch(addPokeball(Number(-1)));
    } else if (selected.id == 1) {
      dispatch(addGreatball(Number(-1)));
    } else {
      dispatch(addMasterball(Number(-1)));
    }
  };

  const data = [
    {
      id: 0,
      name: "Poke Ball",
      no: poke,
      image: "./light2.png",
    },
    {
      id: 1,
      name: "Great Ball",
      no: great,
      image: "./light1.png",
    },
    {
      id: 2,
      name: "Master Ball",
      no: master,
      image: "./light3.png",
    },
  ];

  const NumRandom = Math.floor(900 * Math.random());

  function cancelPokemon() {
    const cancelRandom = Math.floor(900 * Math.random());
    if (cancelRandom % 10 == 0) {
      return setCancel(true);
    } else {
      return setCancel(false);
    }
  }
  const handleClick = () => {
    cancelPokemon();
    DecrBall();
    getData(NumRandom);
    setCondition1(!condition1);
    setTimeout(() => {
      setCondition2(false);
    }, 1500);
    setTimeout(() => {
      setCondition3(false);
    }, 3000);
  };

  const handleSave = () => {
    const date = new Date();
    const Selected = {
      id: getPokemon.id,
      name: getPokemon.name,
      alias: alias,
      image: getPokemon.sprites.front_default,
      date: date.toString().slice(0, 24),
    };
    dispatch(addProducts(Selected));
    dispatch(addPokemons(1));
    dispatch(addAttemps(1));
    dispatch(addCoin(100));
    input(<MyPokemons input={input} />);
  };

  const handleCancel = () => {
    dispatch(addAttemps(1));
    input(<Home input={input} />);
  };
  return (
    <div className="w-screen bg-slate-200 p-10">
      <div className="p-5 bg-white rounded-lg">
        <h2 className="text-4xl font-bold my-1">Catch a Pokemon</h2>
        <p className="mt-2 mb-5 ">
          it's a wild west out there. Good luck, Pokemon Trainer{" "}
          {identitas[0].username}
        </p>

        {condition1 && (
          <div className="flex">
            <div className="w-2/4">
              <h1 className="text-2xl font-bold mb-5">Choose your Poke Ball</h1>
              <div className="">
                <p className="text-red-500">{checkBall}</p>
                {data.map((value) => (
                  <div
                    className="p-1 border border-2 my-2 border-slate-400 rounded-lg flex w-3/4"
                    onClick={() => handleCount(value)}
                    key={value.id}
                  >
                    <div>
                      <img
                        src={value.image}
                        alt=" "
                        className="w-8 my-1 mx-3"
                      />
                    </div>
                    <div>
                      <p className="text-sm leading-none text-slate-600 font-semibold">
                        {value.no} left
                      </p>
                      <p className="text-lg font-semibold ">{value.name}</p>
                    </div>
                  </div>
                ))}
                {button ? (
                  <button className=" bg-blue-500 py-2 rounded-lg my-5 w-3/4 font-semibold text-white opacity-50">
                    Catch a Pokemon
                  </button>
                ) : (
                  <button
                    className=" bg-blue-500 py-2 rounded-lg my-5 w-3/4 font-semibold text-white"
                    onClick={handleClick}
                  >
                    Catch a Pokemon
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <img src="./image1.png" alt=" " className="w-3/4" />
            </div>
          </div>
        )}
        {!condition1 && condition3 && (
          <div>
            <div className="flex justify-center ">
              <div className="w-60">
                <Lottie animationData={Animation} />
              </div>
            </div>
            {condition2 ? (
              <p className="text-2xl text-center font-semibold">
                Looking for a pokemon...
              </p>
            ) : (
              <p className="text-2xl text-center font-semibold">
                Catching the pokemon...
              </p>
            )}
          </div>
        )}
        {!condition3 && (
          <div className="flex justify-center">
            <div className="w-80 bg-white p-5 rounded-lg">
              <div className="flex justify-center">
                <img
                  src={getPokemon.sprites.front_default}
                  alt=" "
                  className="w-2/4"
                />
              </div>
              {cancel ? (
                <>
                  <h1 className="text-center text-3xl font-semibold">
                    Aw, Snap!
                  </h1>
                  <p className="text-xl text-center mb-5">
                    A {getPokemon.name} has slipped away from your Pokeball
                  </p>
                  <button
                    className="w-full py-1 bg-blue-600 text-center my-2 font-semibold text-white rounded-lg"
                    onClick={handleCancel}
                  >
                    Catch Another Pokemon
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-center text-3xl font-semibold">
                    Congratulation!
                  </h1>
                  <p className="text-xl text-center mb-5">
                    You've found a {getPokemon.name}
                  </p>
                  <label
                    htmlFor="nickname"
                    className="text-md my-2 font-semibold"
                  >
                    Nickname
                  </label>
                  <input
                    id="nickname"
                    type="text"
                    onChange={(e) => setAlias(e.target.value)}
                    className="focus:bg-slate-100 border border-slate-200 border-2 my-2 rounded-lg w-full p-1"
                  />
                  <button
                    className="w-full py-1 bg-blue-600 text-center my-2 font-semibold text-white rounded-lg"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CatchPokemons;
