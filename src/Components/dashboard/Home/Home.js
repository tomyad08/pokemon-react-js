import { useSelector } from "react-redux";
import CatchPokemons from "../CatchPokemons/CatchPokemons";

const Home = ({ input }) => {
  const pokemons = useSelector((state) => state.product.pokemons);
  const attempts = useSelector((state) => state.product.attempts);
  const coin = useSelector((state) => state.product.coin);
  const identitas = useSelector((state) => state.product.identitas);

  const data = [
    {
      id: 1,
      image: "./placeholder4.png",
      name: "Pokemons Catched",
      no: pokemons,
      style: "w-60 p-5 border border-2 rounded-lg my-5 bg-green-100",
    },
    {
      id: 2,
      image: "./placeholder3.png",
      name: "Catched Attempts",
      no: attempts,
      style: " w-60 p-5 border border-2 rounded-lg my-5 bg-blue-100",
    },
    {
      id: 3,
      image: "./placeholder4.png",
      name: "Coin",
      no: coin,
      style: "w-60 p-5 border border-2 rounded-lg my-5 bg-purple-100",
    },
  ];
  return (
    <div className="w-screen bg-slate-200 p-5">
      <h1 className="text-3xl font-semibold">
        Welcome, {identitas[0].username}!
      </h1>
      <div className="bg-white flex justify-between p-3 my-5 rounded-lg">
        <p className="my-2 font-semibold">Start your Adventure Now!</p>
        <div
          className="bg-blue-500 p-2 font-semibold text-white cursor-pointer rounded-lg"
          onClick={() => input(<CatchPokemons />)}
        >
          Catch a Pokemon
        </div>
      </div>

      <div className="bg-white p-3 rounded-lg">
        <div className="flex">
          <div className="bg-purple-300 rounded-sm w-4 h-30 me-3"></div>
          <h5 className="text-lg font-bold">Overview</h5>
        </div>
        <div className="flex justify-between">
          {data.map((value) => (
            <div className={value.style} key={value.id}>
              <img src={value.image} alt=" " />
              <p className="text-sm font-semibold">{value.name}</p>
              <p className="text-4xl font-bold">{value.no}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
