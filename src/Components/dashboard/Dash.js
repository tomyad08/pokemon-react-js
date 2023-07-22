import React from "react";
import { useState } from "react";
import CatchPokemons from "./CatchPokemons/CatchPokemons";
import Home from "./Home/Home";
import MyPokemons from "./MyPokemons/MyPokemons";
import NavBar from "./Navbar";
import Shop from "./Shop/Shop";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIdentitas } from "../../Lib/ProductSlice";

const Dashboard = () => {
  const [show, setShow] = useState(null);
  const [condition, setCondition] = useState(true);
  const firstAlternative = <Home input={setShow} />;
  const secondAlternative = <MyPokemons inputs={setShow} />;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      image: "./home.png",
      name: "Home",
    },
    {
      id: 2,
      image: "./light5.png",
      name: "Catch a Pokemon",
    },
    {
      id: 3,
      image: "./light4.png",
      name: "My Pokemons",
    },

    {
      id: 4,
      image: "./store.png",
      name: "Shop",
    },
  ];

  const handleClick = (id) => {
    if (id === 1) {
      return setShow(<Home input={setShow} />);
    } else if (id === 2) {
      return setShow(<CatchPokemons input={setShow} />);
    } else if (id === 3) {
      setCondition(false);
      setShow(false);
      return;
    } else if (id === 4) {
      return setShow(<Shop />);
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(deleteIdentitas());
  };
  return (
    <div className="w-full overflow-y-visible">
      <NavBar />
      <div className="flex">
        <div className="w-1/4 h-screen bg-white p-2">
          <div className="columns-1 mx-5">
            {data.map((value) => (
              <div
                className="flex my-3 active:bg-slate-300 p-2 rounded-lg cursor-pointer"
                key={value.id}
                onClick={() => handleClick(value.id)}
              >
                <img src={value.image} alt=" " className="me-3 w-7" />
                <p className="text-center font-semibold">{value.name}</p>
              </div>
            ))}
          </div>
          <div className="columns-1 absolute bottom-5">
            <div
              className="flex justify-between cursor-pointer"
              onClick={handleLogOut}
            >
              <img src="./logout.png" alt=" " className="mx-2" />
              <p className="font-semibold">Logout</p>
            </div>
          </div>
        </div>
        {condition && <>{show ? show : firstAlternative}</>}
        {!condition && <>{show ? show : secondAlternative}</>}
      </div>
    </div>
  );
};
export default Dashboard;
