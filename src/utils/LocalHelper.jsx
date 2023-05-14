const setData = (id) => {
  let already = getData();
  const items = already[id];
  if (items) {
    const newItems = items + 1;
    already[id] = newItems;
  } else {
    already[id] = 1;
  }

  localStorage.setItem("data", JSON.stringify(already));
};

const getData = () => {
  let obj = {};
  const data = localStorage.getItem("data");
  if (data) {
    obj = JSON.parse(data);
  }

  return obj;
};

export { setData, getData };
