"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Counter() {
  const searchParames = useSearchParams();
  const id = searchParames.get("id");
  const data = {
    id: id,
    name: "",
    info: "",
  };

  const [store, setStore] = useState(data);
  const [branch, setBranch] = useState([]);

  function setData(e) {
    const { name, value } = e.target;
    setStore((old) => {
      return {
        ...old, // Spread the previous state
        [name]: value, // Update the state with the new key-value pair
      };
    });
  }

  const storeData = async () => {
    const response = await fetchWithAuth("/counter/edit", {
      method: "POST",
      body: JSON.stringify(store), // Replace with your data
    });

    if (response.success == true) {
      Swal.fire({
        title: "success",
        text: "Successfully Updated Counter",
        icon: "success",
        // confirmButtonText: 'Cool'
      });
    }
  };

  async function setCounter() {
    try {
      const response = await fetchWithAuth(`/counter/${id}`);

      if (response.status === true) {
        setStore((old) => ({
          ...old,
          name: response.result.name,
          info: response.result.info,
        }));
      }
    } catch (error) {
      console.error("Error fetching branch:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from an API or other source
      const result = await fetchWithAuth("/branch");
      const data = await result.data;
      setBranch(data);
    };
    setCounter();

    fetchData();
  }, []);

  return (
    <div className="dashboard-content">
      <div className="dashboard-content__topbar topbar flex-ctr">
        <div className="drawer-open">
          <span className="slice-top"></span>
          <span className="slice-middle"></span>
          <span className="slice-bottom"></span>
        </div>
      </div>
      <div className="dashboard-content__title-bar title-bar">
        <h3 className="title">Counter Edit</h3>
      </div>
      <div className="dashboard-main-content-wrap">
        <div className="dashboard-main-content">
          <div className="form-card">
            <div className="card-body">
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Counter Name</label>
                <div className="col-md-8">
                  <input
                    name="name"
                    value={store.name}
                    className="from-element from-element-text form-control"
                    onInput={setData}
                    type="text"
                  />
                </div>
              </div>
              {/* <div className="dashboard-form__field select-field">
                            <label  className="col-md-3 col-from-label">Branch</label>
                            <select name="branch" id=""    value={branch?branch.branch:""} onChange={setData} className="select from-element from-element" >
                                <option value="" >Select</option>
                                {branch && branch.map(item=>( <option value={item._id} >{item.name}</option>))}
                            </select>
                        </div> */}
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Details</label>
                <div className="col-md-8">
                  <div className="select-wrap">
                    <textarea
                      className="form-control"
                      name="info"
                      value={store ? store.info : ""}
                      onInput={setData}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="form-submit col-md-8 col-md-offset-3 ">
                  <button onClick={(e) => storeData(e)}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
