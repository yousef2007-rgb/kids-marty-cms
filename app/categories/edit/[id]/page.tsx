import React from 'react'
import PageBody from './pageBody'
import axios from "axios"

const getData = async (_id: string) => {
    const category = await axios.get(`http://localhost:8000/api/categories/${_id}`)
    return {
        category:category.data
    };
}

const page = async ({ params: { id }, }: { params: { id: string } }) => {
    const data = await getData(id);
    console.log(data);
    return (
        <PageBody category={data.category} />
    )
}
export default page;
