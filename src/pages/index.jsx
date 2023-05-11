import { dataBase } from "../data/dataBase";

export const Homepage = () => {
  const ville = dataBase[0];
  return <div> Salutttttt, {ville.name} </div>;
};
