
const Banner = () => {

    return (
        <div className="flex items-center justify-between mt-16 mb-32">
            <div className="pl-10">
                <h1 className="text-7xl font-extrabold">One Step <br /> Closer To Your <br /><span className=" text-[#7E90FE] ">Dream Job</span></h1>
                <p className="py-6 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn text-white mt-4 bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">Apply Now</button>
            </div>
            <div>
                <img src="../../../src/assets/images/user.png" alt="Image" />
            </div>
        </div>
    );
};

export default Banner;