import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import SingleDashboard from "../SingleDashboard/SingleDashboard";
import { IoIosArrowDown } from "react-icons/io";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([])
    const [displayJob, setDisplayJob] = useState([])

    const handleFilterJobs = filter => {
        if(filter === 'All'){
            setDisplayJob(applied)
        }
        else if(filter === 'Remote'){
            const remoteJobs = applied.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = applied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJobs)
        }
    }


    useEffect(() => {
        const storedJobs = getStoredJobApplication()
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))

            let appliedJob = [];
            for (const id of storedJobs) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    appliedJob.push(job)
                }
            }
            // console.log(jobs, storedJobs, appliedJob);
            setApplied(appliedJob)
            setDisplayJob(appliedJob)
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">Jobs Applied</h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter By <IoIosArrowDown></IoIosArrowDown></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilterJobs('All')}><a>All</a></li>
                    <li onClick={() => handleFilterJobs('Remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilterJobs('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    displayJob.map(job => <SingleDashboard key={job.id} job={job}></SingleDashboard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;