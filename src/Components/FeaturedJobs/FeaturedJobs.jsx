import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    //this not the best way 
    const [dataLength, setDataLength] = useState([4])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className= {dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;