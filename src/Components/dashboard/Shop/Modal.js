import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoin,
  addGreatball,
  addMasterball,
  addPokeball,
} from "../../../Lib/ProductSlice";

const ModalShop = ({ input }) => {
  const coin = useSelector((state) => state.product.coin);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);
  const [checkPrice, setCheckPrice] = useState("");

  const inputs = input[0];
  const setCondition = input[1];
  const result = count * inputs.price;

  const addBall = () => {
    if (inputs.name === "The Poke Ball") {
      dispatch(addPokeball(Number(count)));
    } else if (inputs.name === "The Great Ball") {
      dispatch(addGreatball(Number(count)));
    } else {
      dispatch(addMasterball(Number(count)));
    }
  };

  const handleClick = (value) => {
    if (value == 1) {
      if (coin - result < 0) {
        return setCheckPrice(
          "You're not enough coins, please reduce the amount or increase the coins"
        );
      }
      setCondition1(false);
      setCondition2(true);
      setCondition3(false);
    } else if (value == 2) {
      addBall();
      dispatch(addCoin(-result));
      setCondition2(false);
      setCondition3(true);
    } else if (value == 3) {
      setCondition3(false);
      setCondition1(true);
      setCondition(false);
    }
  };

  return (
    <div className="bg-white p-3 w-96 rounded-xl">
      <div className="flex justify-end mx-2">
        <p className="font-semibold" onClick={() => setCondition(false)}>
          x
        </p>
      </div>
      {condition1 && (
        <div>
          <div className="flex">
            <div className="bg-red-200 w-3 h-6 me-2"></div>
            <p className="text-xl font-semibold">Purchase {inputs.name}</p>
          </div>

          <p className="mt-5 mb-2">
            You're going to purchace: {inputs.name}. How much do you want?
          </p>
          <p className="text-red-500">{checkPrice}</p>
          <input
            type="number"
            className="w-full p-1 my-3 border border-1 border-slate-200 rounded-lg focus:bg-slate-200"
            onChange={(e) => setCount(e.target.value)}
          />
          <button
            className="w-full p-1 text-center bg-blue-500 rounded-lg text-white"
            onClick={() => handleClick(1)}
          >
            Confirm
          </button>
        </div>
      )}

      {condition2 && (
        <div>
          <div className="flex">
            <div className="bg-red-200 w-3 h-6 me-2"></div>
            <p className="text-xl font-semibold">Purchase {inputs.name}</p>
          </div>

          <p className="mt-5 mb-2">
            You're going to purchace:
            <strong>
              {count} {inputs.name}
            </strong>
            . That will cost you?
          </p>

          <div className="flex my-4">
            <img src="./wallet.png" alt=" " />
            <p className="text-2xl font-semibold">{result}</p>
          </div>
          <button
            className="w-full p-1 text-center bg-blue-500 rounded-lg text-white"
            onClick={() => handleClick(2)}
          >
            Checkout
          </button>
        </div>
      )}

      {condition3 && (
        <div>
          <div className="flex">
            <div className="bg-red-200 w-3 h-6 me-2"></div>
            <p className="text-xl font-semibold">Thank you!</p>
          </div>
          <p className="mt-5 mb-2">Thank you for your purchase!</p>
          <p className="mt-5 mb-2">These items has added to your inventory.</p>
          <div className="flex my-4">
            <img src="./light2.png" alt=" " className="w-10" />
            <p className="text-3xl font-semibold">{count}</p>
          </div>
          <button
            className="w-full p-1 text-center bg-blue-500 rounded-lg text-white"
            onClick={() => handleClick(3)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
export default ModalShop;
