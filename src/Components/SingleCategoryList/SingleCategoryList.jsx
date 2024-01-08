const SingleCategoryList = ({ singleCategory }) => {
    const { logo, category_name, availability } = singleCategory
    return (
        <div className="p-8 rounded-lg bg-slate-100">
            <img className="pb-5" src="../../../src/assets/icons/creative.png" alt="" />
            <h3 className="text-lg font-bold">{category_name}</h3>
            <p className="text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default SingleCategoryList;