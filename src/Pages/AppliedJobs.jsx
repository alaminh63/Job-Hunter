import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import FilterdPageCard from "../components/FilterdPageCard";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [remote, setRemote] = useState([]);

  useEffect(() => {
    setJobs(data);
    setRemote(data);
  }, []);

  const remoteHandler = (type) => {
    const setType = remote.filter((remotes) => remotes.jobType === type);
    setJobs(setType);
  };
  return (
    <section className=" mt-[140px]">
      <h1 className="text-center font-bold text-3xl mt-5">Applied Jobs</h1>
      <div className="block ml-auto dropdown dropdown-bottom relative my-10">
        <label
          tabIndex={0}
          className=" block  w-[100px] ml-auto bg-indigo-500 px-5 py-2 text-center rounded-md"
        >
          Filter
        </label>
        <ul
          tabIndex={0}
          className="absolute right-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => remoteHandler("Remote")}>
            <a className="border-2 border-b-indigo-600 ">Remote</a>
          </li>

          <li onClick={() => remoteHandler("Onsite")}>
            <a className="border-2 border-b-indigo-600 ">Onsite</a>
          </li>
        </ul>
      </div>

      {jobs.map((card) => (
        <FilterdPageCard key={card._id} card={card}></FilterdPageCard>
      ))}
    </section>
  );
};

export default AppliedJobs;
