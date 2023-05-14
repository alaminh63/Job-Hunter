import { ImLocation } from "react-icons/im";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const FilterdPageCard = ({ card }) => {
  const { logo, jobTitle, company, jobType, location, salary, jobTime, _id } =
    card;

  return (
    <article className="my-[12px]  md:flex gap-5 p-[30px] border rounded-md">
      <div className="bg-[#F4F4F4] md:w-[240px] w-full h-[240px] flex justify-center items-center">
        <img className="h-[50px] w-[150px] rounded-md" src={logo} alt="" />
      </div>
      <div className="md:flex justify-between items-center w-full">
        {/* left  */}
        <div>
          <h2 className="text-2xl font-bold">{jobTitle}</h2>
          <p className="text-2xl my-2">{company}</p>
          <div className="flex gap-3">
            <button className="btn-outlines">{jobType}</button>
            <button className="btn-outlines">{jobTime}</button>
          </div>
          <div className="flex gap-2 items-center mt-4 text-[#757575]">
            <p className="flex gap-2 items-center">
              <ImLocation />
              {location}
            </p>
            <p className="flex gap-2 items-center">
              <AiOutlineDollarCircle />
              {salary}
            </p>
          </div>
        </div>
        <div>
          <Link to={`/job-details/${_id}`}>
            <button className="get-start-btn">View Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FilterdPageCard;
