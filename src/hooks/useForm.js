import {useEffect, useState} from "react";

export const useForm = () => {
    const [id,setId]=useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [status,setStatus]=useState("");
    const [createdAt,setCreatedAt]=useState("");

    useEffect(() => {
        console.log("id changed" + id)
    }, [id]);

    useEffect(() => {
        console.log("title changed" + title)
    }, [title]);

    useEffect(() => {
        console.log("description changed" + description)
    }, [description]);

    useEffect(() => {
        console.log("status changed" + status)
    }, [status]);

    useEffect(() => {
        console.log("createAt changed" + createdAt)
    }, [createdAt]);

const handleFormSubmit= (e)=>{
    e.preventDefault();
    console.log("Hello handle form submit");

    const url = "http://localhost:3500";
    const payload={id,title,description,status,createdAt};
    try {
        const response =  fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
        });
        const json =  response.json();
        console.log("Успех:", JSON.stringify(json));
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

    return {id,setId,title,setTitle,description,setDescription,status,setStatus,createdAt,setCreatedAt,handleFormSubmit}
};


