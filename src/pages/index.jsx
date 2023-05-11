import { dataBase } from "../data/dataBase";
import HomePage from "../components/HomePage";

export const Homepage = () => {
  const ville = dataBase[0];
  return <div> <HomePage /> </div>;
};
