import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleDashboard = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border border-blue-200 max-w-5xl mx-auto p-5 my-5">
                <div>
                    <figure><img className=" w-56 p-16 bg-[#F4F4F4]" src={logo} alt="Movie" /></figure>
                </div>
                <div className="px-8">
                    <div>
                        <h2 className="card-title">{job_title}</h2>
                        <p className="my-3 text-[#757575] font-bold">{company_name}</p>
                        <button className="text-[#9873FF] px-5 py-2 rounded font-extrabold border border-[#9873FF] mr-4">{remote_or_onsite}</button>
                        <button className="text-[#9873FF] px-5 py-2 rounded font-extrabold border border-[#9873FF] mr-4">{job_type}</button>
                        <div className="flex mt-3 gap-7 text-[#757575]">
                            <p className="flex gap-2"><IoLocationOutline className="text-xl"></IoLocationOutline>{location}</p>
                            <p className="flex gap-2"><AiOutlineDollar className="text-xl"></AiOutlineDollar><span>Salary : </span>{salary}</p>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end mx-auto items-center">
                    <Link to={`/job/${id}`}><button className="btn text-white w-full bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleDashboard;