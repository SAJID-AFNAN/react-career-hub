const SingleDashboard = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-40" src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDashboard;