import React from "react";
import { useParams } from "react-router-dom";

import { useDataGlobally } from "../Context/Context";
import { setData } from "../utils/LocalHelper";

const JobDetails = () => {
  const { cards } = useDataGlobally();
  const { id } = useParams();
  const job = cards.find((card) => card._id === id);

  if (!job) {
    return;
  }

  const handleJobData = (id) => {
    setData(id);
  };

  return (
    <section className="px-3">
      <h1 className="text-center font-bold text-3xl py-20">Job Details</h1>
      <br></br>
      <div className="md:grid md:grid-cols-3 gap-8 -full">
        <div className="col-span-2">
          <h1 className="mb-5">
            <span className="font-bold">Job Description</span> :{" "}
            <span className="text-[#757575]"> {job.description}</span>
          </h1>
          <h1 className="mb-5">
            <span className="font-bold">Job Responsibility</span> :{" "}
            <span className="text-[#757575]">{job.jobResponsibility}</span>
          </h1>
          <h1 className="my-5 font-bold">Educational Requirements:</h1>
          <p className="mb-5 text-[#757575]">{job.requirements}</p>
          <h1 className="font-bold mb-5">Experiences:</h1>
          <p className="text-[#757575]">{job.experiences}</p>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-6 mt-5">Job Details</h1>
          <hr className="border-2 border-[#d9ddf2]" />
          <div className="my-7 ">
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src="/assets/Icons/Frame.png" alt="" />
              <div>
                <p className="my-2">
                  {" "}
                  <span className="font-bold text-[#474747]">Salary</span> :
                  100K - 150K (Per Month)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-5 h-5" src="/assets/Icons/Frame-1.png" alt="" />
              <div>
                <p>
                  {" "}
                  <span className="font-bold text-[#474747]">
                    Job Title
                  </span> : {job.jobTitle}{" "}
                </p>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-lg mb-3">Contact Information</h1>
          <hr className="border-2 border-[#d9ddf2]" />
          <div className="flex items-center gap-1">
            <img className="w-5 h-5" src="/assets/Icons/Frame-2.png" alt="" />
            <div>
              <p className="my-3">
                {" "}
                <span className="font-bold text-[#474747]">Phone</span> :{" "}
                {job.phone}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-5 h-5" src="/assets/Icons/Frame-3.png" alt="" />
            <div>
              <p>
                {" "}
                <span className="font-bold text-[#474747]">Email</span> :{" "}
                {job.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-5 h-5" src="/assets/Icons/Frame-4.png" alt="" />
            <div>
              <p className="my-3">
                {" "}
                <span className="font-bold text-[#474747]">Address</span> :{" "}
                {job.address}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleJobData(job._id)}
            className="my-10 w-full p-2 rounded-md text-white bg-indigo-400"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
