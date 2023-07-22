import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIdentitas } from "../../Lib/ProductSlice";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const identitas = useSelector((state) => state.product.identitas);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [repPassword, setrepPassword] = useState("");
  const [verif, setVerif] = useState("");
  const [verifPass, setVerifPass] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (repPassword != inputs.password) {
      return setVerifPass("your repeat password isn't same with your password");
    }

    if (identitas.length > 0) {
      setVerif("You've an account.");
    } else {
      dispatch(addIdentitas(inputs));
      localStorage.setItem("token", "success");
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 h-100">
        <img src="./Logo.png" alt=" " />
        <div className="border-b-2 border-slate-200 my-2">
          <h1 className="text-4xl font-semibold my-2">Sign Up</h1>
          <p className="text-sm font-semibold my-4">
            Start your journey today to become the best Pokemon Trainer ever
            lived.
          </p>
        </div>
        <div>
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

          <label htmlFor="Email" className="font-semibold">
            Email Adress
            <input
              id="Email"
              name="email"
              value={inputs.email || ""}
              type="email"
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
          <p className="text-red-500">{verifPass}</p>
          <label htmlFor="RepeatPassword" className="font-semibold">
            Repeat Password
            <input
              id="RepeatPassword"
              type="password"
              className="w-full border-1 rounded-lg bg-slate-200 p-2 my-1"
              onChange={(e) => setrepPassword(e.target.value)}
            />
          </label>

          <button
            className="w-full bg-blue-500 py-2 text-center rounded-lg text-white mb-2 font-semibold"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p>
            Have an account?{" "}
            <strong>
              <Link to="/">Login</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
