"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { useState } from "react";

export default function Form() {
    const data={
        "name": "",
        "info": "",
        "public_key":"2312313123123",
        "screct_key":"213123123",
        "encryption_key":"1231231231"
    }

    const [store,setStore]=useState(data)

    function  setData(e){
            const {name, value} = e.target;
        setStore(old => {
            return {
                ...old,  // Spread the previous state
                [name]: value  // Update the state with the new key-value pair
            };
        });
    }

    const storeData=async ()=>{
        const response = await fetchWithAuth('/branch', {
            method: 'POST',
            body: JSON.stringify(store), // Replace with your data
        });

        if(response.success==true){
            alert('Successfully Add Branch')
        }
    }

    return (
        <div className='dashboard-content'>
            <div className='dashboard-content__topbar topbar flex-ctr'>
                <div className='drawer-open'>
                    <span className='slice-top'></span>
                    <span className='slice-middle'></span>
                    <span className='slice-bottom'></span>
                </div>
            </div>
            <div className='dashboard-content__title-bar title-bar'>
                <h3 className='title'>Branch Add</h3>
            </div>
            <div className='dashboard-main-content-wrap'>

                <div className='dashboard-main-content'>
                        <div className='form-row col-3'>
                            <div className='from-field'>
                                <label>Branch Name</label>
                                <input
                                    name="name"
                                    className='from-element from-element-text'
                                    onInput={setData}
                                    type='text'
                                />
                            </div>
                            <div className='from-field'>
                                <label>Details</label>
                                <div className="select-wrap">
                                   <textarea   name="info"     onInput={setData}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='form-submit'>
                            <button onClick={(e)=>storeData(e)}>Submit</button>
                        </div>
                </div>

            </div>
        </div>
    );
}
