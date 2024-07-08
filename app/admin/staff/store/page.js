"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export default function Counter() {
    const usertype = getCookie("usertype");
    const branchId = getCookie("branch");
    console.log(branchId);
    const data={
        "first_name":"",
        "last_name":"",
        "email":"",
        "phone":"",
        "password":"",
        "user_type":"employee",
        "branch":""
    }

    const $baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [store,setStore]=useState(data)
    const [branch,setBranch]=useState([])

    useEffect(() => {
        if (usertype === "branch-admin") {
            setStore((prevStore) => ({
                ...prevStore,
                branch: branchId
            }));
        }
    }, [usertype, branchId]);

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
        const response = await fetchWithAuth('/user-register', {
            method: 'POST',
            body: JSON.stringify(store), // Replace with your data
        });
        if(response)
        {
            if(response.success==true){
                setStore(data)
                Swal.fire({
                    title: 'success',
                    text: 'Successfully Add Staff',
                    icon: 'success',
                    // confirmButtonText: 'Cool'
                })
            } else {
                alert(response.msg);
            }
        }
        else
        {
            Swal.fire({
                title: 'Error',
                text: 'Already Registered',
                icon: 'error',
                // confirmButtonText: 'Cool'
            })
        }
       
    }

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data from an API or other source
            const result = await fetch(`${$baseUrl}/api/branch`);
            const data = await result.json();
            setBranch(data.data)
        };

        fetchData();
    }, [$baseUrl]);

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
                <h3 className='title'>Staff Add</h3>

            </div>
            <div className='dashboard-main-content-wrap'>

                <div className='dashboard-main-content staff-store'>
                    <div className='form-row col-3'>
                        <div className='from-field'>
                            <label>First Name</label>
                            <input
                                name="first_name"
                                value={store.first_name}
                                className='from-element from-element-text'
                                onInput={setData}
                                type='text'
                            />
                        </div>
                        <div className='from-field'>
                            <label>Last Name</label>
                            <input
                                name="last_name"
                                value={store.last_name}
                                className='from-element from-element-text'
                                onInput={setData}
                                type='text'
                            />
                        </div>

                        <div className='from-field'>
                            <label>Phone</label>
                            <input
                                name="phone"
                                value={store.phone}
                                className='from-element from-element-text'
                                onInput={setData}
                                type='text'
                            />
                        </div>
                        <div className='from-field'>
                            <label>Email</label>
                            <input
                                name="email"
                                value={store.email}
                                className='from-element from-element-text'
                                onInput={setData}
                                type='text'
                            />
                        </div>
                        {usertype!='branch-admin' &&
                            <div className="dashboard-form__field select-field from-field">
                                <label>Branch</label>
                                <select name="branch" id=""    value={branch.branch} onChange={setData} className="select from-element from-element" >
                                    <option value="" >Select</option>
                                    {branch && branch.map((item,index)=>( <option value={item._id} key={index}>{item.name}</option>))}
                                </select>
                            </div>
                        }

                        <div className="dashboard-form__field select-field from-field">
                            <label>User Type</label>
                            <select name="user_type" id=""    value={store.user_type} onChange={setData} className="select from-element from-element" >
                                <option value="" >Select</option>
                                <option value="employee" >Employee</option>
                                {usertype=="brand-admin" &&  <option value="branch-admin" >Branch Admin</option>}
                                {usertype=="brand-admin" &&  <option value="brand-admin" >Brand Admin</option>}

                            </select>
                        </div>
                        <div className='from-field'>
                            <label>Password</label>

                            <input
                                name="password"
                                type="password"
                                value={store.password}
                                className='from-element from-element-text'
                                onInput={setData}
                            />
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
