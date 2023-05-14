import { getData } from "../utils/LocalHelper";


const LoderApplied = async () => {
  const res = await fetch("/featured.json");
  const data = await res.json();
  const get = getData();
  const newArr = [];
  for (const id in get) {
    const getEd = data.find((saveEd) => saveEd._id == id);

    if (getEd) {
      const qun = get[id];
      getEd.quantity = qun;
      newArr.push(getEd);
    }
  }
  return newArr;
};

export default LoderApplied;
