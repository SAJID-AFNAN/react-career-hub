import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-44" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold ">{job_title}</h2>
                    <p className="font-bold">{company_name}</p>
                    <div>
                        <button className="text-[#9873FF] px-5 py-2 rounded font-extrabold border border-[#9873FF] mr-4">{remote_or_onsite}</button>
                        <button className="text-[#9873FF] px-5 py-2 rounded font-extrabold border border-[#9873FF] mr-4">{job_type}</button>
                    </div>
                    <div className="flex items-center gap-6 text-[#757575] font-bold my-2">
                        <div className="flex gap-2">
                            <IoLocationOutline className="text-xl"></IoLocationOutline>
                            <p>{location}</p>
                        </div>
                        <div className="flex gap-2">
                            <AiOutlineDollar className="text-xl"></AiOutlineDollar>
                            <p>{salary}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;