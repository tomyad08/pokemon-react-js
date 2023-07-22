import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../Lib/ProductSlice";

const ModalMyPokemons = ({ input }) => {
  const inputs = input[0];
  console.log(inputs);
  const setCondition = input[1];
  const dispatch = useDispatch();
  const data = {
    // id: props.inputs.id,
    // name: props.inputs.alias,
  };
  const handleDelete = () => {
    dispatch(deleteProduct(inputs.id));
    setCondition(false);
  };

  return (
    <div className="bg-white h-44 p-3 w-80 rounded-xl">
      <div className="flex">
        <div className="bg-red-200 w-3 h-6 me-2"></div>
        <p className="text-xl font-semibold">Realese {inputs.name}</p>
      </div>

      <p className="mt-5 mb-2">
        Are you sure you want to realese {inputs.name}? This action is
        irreversible.
      </p>
      <div className="flex justify-around">
        <button
          className="btn border border-1 border-slate-300 p-2 w-20 text-center rounded-lg active:bg-blue-500 font-semibold"
          onClick={handleDelete}
        >
          Yes
        </button>
        <button
          className="btn border border-1 border-slate-300 p-2 w-20 text-center rounded-lg active:bg-blue-500 font-semibold"
          onClick={() => setCondition(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};
export default ModalMyPokemons;
