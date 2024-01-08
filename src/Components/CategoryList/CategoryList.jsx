import { useEffect, useState } from "react";
import SingleCategoryList from "../SingleCategoryList/SingleCategoryList";

const CategoryList = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl font-extrabold text-center pb-4">Job Category List</h2>
            <p className="text-[#757575] text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-7 justify-center mt-7 mb-32">
                {
                    category.map(singleCategory => <SingleCategoryList key={singleCategory.id} singleCategory={singleCategory}></SingleCategoryList>)
                }
            </div>
        </div>
    );
};

export default CategoryList;