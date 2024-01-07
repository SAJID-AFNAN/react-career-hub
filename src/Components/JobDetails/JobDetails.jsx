import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiSubtitlesLight } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, experiences, educational_requirements, contact_information, salary, job_title } = job;
    console.log(job_description);


    const handleAddToast = () => {
        saveJobApplication(id)
        toast('Apply Successfully')
    } 
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">Job Details</h2>
            <div className="grid md:grid-cols-3 gap-5 py-10">
                <div className=" col-span-2 space-y-6">
                    <p><span className="font-bold">Job Description:</span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility:</span>{job_responsibility}</p>
                    <h5 className="font-bold">Educational Requirements:</h5>
                    <p>{educational_requirements}</p>
                    <h5 className="font-bold">Experiences:</h5>
                    <p>{experiences}</p>
                </div>
                <div>
                    <div className="bg-[#f3f4fe] rounded-lg p-7">
                        <h3 className="text-lg font-extrabold border-b-2 pb-6">Job Details</h3>
                        <div className="flex items-center gap-2 mt-6">
                            <AiOutlineDollar className="text-lg"></AiOutlineDollar>
                            <p><span className="font-bold">Salary : </span>{salary} per month</p>
                        </div>
                        <div className="flex gap-2 mt-4 mb-7">
                            <PiSubtitlesLight className="text-xl"></PiSubtitlesLight>
                            <p><span className="font-bold">Job Title : </span>{job_title}</p>
                        </div>
                        <h2 className="font-extrabold text-lg border-b-2 pb-6">Contact Information</h2>
                        <p className="flex items-center gap-2 py-4"><FiPhone></FiPhone><span className="font-bold">Phone : </span>{contact_information.phone}</p>
                        <p className="flex items-center gap-2"><MdOutlineMailOutline></MdOutlineMailOutline><span className="font-bold">E-mail : </span>{contact_information.email}</p>
                        <div className="flex gap-2 py-4">
                            <IoLocationOutline className="text-2xl"></IoLocationOutline>
                            <p><span className="font-bold">Address : </span>{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleAddToast} className="btn text-white w-full mt-4 bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;