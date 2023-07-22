import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const identitas = useSelector((state) => state.product.identitas);

  const [inputs, setInputs] = useState({});
  const [verif, setVerif] = useState("");
  const [account, setAccount] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (identitas.length == 0) {
      return setAccount("Please, sign up first before log in.");
    }
    if (
      inputs.username == identitas[0].username &&
      inputs.password == identitas[0].password
    ) {
      return navigate("/dashboard");
    }
    setVerif("You're password is wrong");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 h-100">
        <img src="./Logo.png" alt=" " />
        <div className="border-b-2 border-slate-200 my-2">
          <h1 className="text-4xl font-semibold my-2">Login</h1>
        </div>
        <div>
          <p className="text-red-500">{account}</p>
          <p className="text-red-500">{verif}</p>
          <label htmlFor="Username" className="font-semibold">
            Username
            <input
              id="Username"
              name="username"
              value={inputs.username || ""}
              type="text"
              className="w-full border-1 rounded-lg bg-slate-200 p-2 my-1"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Password" className="font-semibold">
            Password
            <input
              id="Password"
              name="password"
              value={inputs.password || ""}
              type="password"
              className="w-full border-1 rounded-lg bg-slate-200 p-2 my-1"
              onChange={handleChange}
            />
          </label>
          <button
            className="w-full bg-blue-500 py-2 text-center rounded-lg text-white mb-5 font-semibold"
            onClick={handleClick}
          >
            Sign In
          </button>
          <p>
            Don't have any account?{" "}
            <strong>
              <Link to="/signup">Sign up</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
