"use client";
import {useEffect, useState} from "react";
import fetchWithAuth from "@/fetchWithAuth";

export default function Counter() {
    const data={
        "name":"",
        "branch":null,
        "info":""
    }
    const [store,setStore]=useState(data)
    const [branch,setBranch]=useState([])

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

        const response = await fetchWithAuth('/counter', {
            method: 'POST',
            body: JSON.stringify(store), // Replace with your data
        });

        if(response.success==true){
            setStore(data)
            alert('Successfully Add Counter')
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            // Fetch data from an API or other source
            const result = await fetch('http://localhost:3000/api/branch');
            const data = await result.json();
            setBranch(data.data)
        };

        fetchData();
    }, []);




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
                                value={branch.name}
                                className='from-element from-element-text'
                                onInput={setData}
                                type='text'
                            />
                        </div>
                        <div className="dashboard-form__field select-field">
                            <label>Branch</label>
                            <select name="branch" id=""    value={branch.branch} onChange={setData} className="select from-element from-element" >
                                <option value="" >Select</option>
                                {branch && branch.map(item=>( <option value={item._id} >{item.name}</option>))}
                            </select>
                        </div>
                        <div className='from-field'>
                            <label>Details</label>
                            <div className="select-wrap">
                                <textarea   name="info" value={branch.info}  onInput={setData}></textarea>
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
