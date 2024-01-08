import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import SingleDashboard from "../SingleDashboard/SingleDashboard";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([])

    const { logo } = applied

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
        }
    }, [])
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center my-10">Jobs Applied</h2>
            <div>
                {
                    applied.map(job => <SingleDashboard key={job.id} job={job}></SingleDashboard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;