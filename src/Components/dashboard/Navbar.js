import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteIdentitas } from "../../Lib/ProductSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const pokeball = useSelector((state) => state.product.pokeball);
  const masterball = useSelector((state) => state.product.masterball);
  const greatball = useSelector((state) => state.product.greatball);

  const [condition, setCondition] = useState(false);
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      image: "./light2.png",
      no: pokeball,
    },
    {
      id: 2,
      image: "./light1.png",
      no: greatball,
    },
    {
      id: 3,
      image: "./light3.png",
      no: masterball,
    },
  ];
  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(deleteIdentitas());
    navigate("/");
  };
  return (
    <div className="flex justify-between px-5 my-2">
      <div className="columns-1">
        <img src="./logo.png" alt=" " />
      </div>
      <div className="flex w-64  justify-around">
        {data.map((value) => (
          <div className="flex my-3" key={value.id}>
            <img src={value.image} alt=" " className="w-8" />
            <p className="text-xl font-semibold">{value.no}</p>
          </div>
        ))}
        <div>
          <img
            src="./customer-1.png"
            alt=" "
            className="rounded-full bg-orange-200 cursor-pointer"
            onClick={() => setCondition(!condition)}
          />
          {condition && (
            <div
              className="bg-white drop-shadow-xl p-5 w-40 absolute right-10 rounded-lg cursor-pointer"
              onClick={handleLogOut}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
