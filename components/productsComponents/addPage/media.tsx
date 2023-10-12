"use client"
import React, { FC, useState } from 'react'
import { Props } from './propsType'
import axios from 'axios';
import AddIcon from '@/public/assets/icons/addIcon';
import AdditionalMedia from "./additionalMedia"

export const media: FC<Props> = ({ formData, setFormData, defaultImage, noAdditionalMedia }) => {
    const [selectedImage, setSelectedImage] = useState<any | null>(defaultImage ? defaultImage : null);
    const [extension, setExtension] = useState(null)
    function readFile(file: any) {
        return new Promise(resolve => {
            let myReader = new FileReader();
            myReader.onloadend = function(e) {
                resolve(myReader.result);
            };
            myReader.readAsDataURL(file);
        });
    };
    const handleImageUpload = async (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            setExtension(file.name.split(".")[1])
            setSelectedImage(await readFile(file))
        }
    }

    const handleImageUploadReq = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.URL + "/api/image", {
                imageData: selectedImage,
                extension: extension
            })
            const imageUrl = res.data;

            setFormData({ ...formData, imageUrl: imageUrl })
            alert("uploaded successfully")
        } catch (err) {
            alert("something went wrong :<")
        }
    }
    return (
        <div className="bg-white p-5 my-5 rounded-md shadow-md">
            <h1 className='mb-5 text-gray-700 font-semibold'>Media</h1>
            <div className='flex items-center'>
                {selectedImage ? <img src={selectedImage} alt="Uploaded" className='max-w-[100px] rounded-md mr-2' /> : ""}
                <input className="" type='file' accept='image/*' onChange={handleImageUpload} />
                {selectedImage ? <button onClick={handleImageUploadReq} className='bg-blue-400 text-white p-2 rounded-md font-semibold ml-auto'>Upload</button> : ""}
            </div>

            {!noAdditionalMedia ?
                <AdditionalMedia setFormData={setFormData} formData={formData} /> : ""}
        </div>
    )
}
