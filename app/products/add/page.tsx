import React from 'react'
import PageBody from './pageBody'
import axios from "axios"

const getData = async () => {
    const categories = await axios.get("http://localhost:8000/api/categories");
    const brands = await axios.get("http://localhost:8000/api/brands");
    return {
        categories: categories.data,
        brands: brands.data
    };
}

const page = async (props: {}) => {
    const data = await getData();
    console.log(data);
    return (
        <PageBody categories={data.categories} brands={data.brands}/>
    )
}
export default page;
