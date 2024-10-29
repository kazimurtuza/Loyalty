"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Form() {
  const searchParames = useSearchParams();
  const id = searchParames.get("id");
  const data = {
    id: id,
    name: "",
    info: "",
    public_key: "",
    screct_key: "",
    encryption_key: "",
  };

  const [store, setStore] = useState(data);

  function setData(e) {
    const { name, value } = e.target;
    setStore((old) => {
      return {
        ...old, // Spread the previous state
        [name]: value, // Update the state with the new key-value pair
      };
    });
  }

  async function getbranch() {
    try {
      const response = await fetchWithAuth(`/branch/${id}`);
      if (response.success === true) {
        setStore((old) => ({
          ...old,
          name: response.result.name,
          info: response.result.info,
          public_key: response.result.public_key,
          screct_key: response.result.screct_key,
          encryption_key: response.result.encryption_key,
        }));
      }
    } catch (error) {
      console.error("Error fetching branch:", error);
    }
  }

  useEffect(() => {
    getbranch();
  }, []);

  const storeData = async () => {
    const response = await fetchWithAuth("/branch/edit", {
      method: "POST",
      body: JSON.stringify(store), // Replace with your data
    });

    if (response.success == true) {
      console.log(response);
      Swal.fire({
        title: "success",
        text: "Successfully Add Branch",
        icon: "success",
        // confirmButtonText: 'Cool'
      });
    }
  };

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
        <h3 className="title">Edit Branch</h3>
      </div>
      <div className="dashboard-main-content-wrap">
        <div className="dashboard-main-content">
          <div className="form-card">
            {/* form-row col-3 */}
            <div className=" card-body">
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Branch Name</label>
                <div className="col-md-8">
                  <input
                    name="name"
                    className="from-element from-element-text form-control"
                    value={store.name}
                    onInput={setData}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Public Key</label>
                <div className="col-md-8">
                  <input
                    name="public_key"
                    className="from-element from-element-text form-control"
                    onInput={setData}
                    value={store.public_key}
                    type="text"
                    // placeholder="FLWPUBK_TEST-871fc73aca10a3927751990add849f51-X"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Screct key</label>
                <div className="col-md-8">
                  <input
                    name="screct_key"
                    className="from-element from-element-text form-control"
                    onInput={setData}
                    value={store.screct_key}
                    type="text"
                    // placeholder="FLWSECK_TEST-9c9de9a334a635cd6fbbf7c933df78ed-X"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-from-label">
                  Encryption Key
                </label>
                <div className="col-md-8">
                  <input
                    name="encryption_key"
                    className="from-element from-element-text form-control"
                    onInput={setData}
                    value={store.encryption_key}
                    type="text"
                    // placeholder="FLWSECK_TESTac6fe507dafe"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-from-label">Details</label>
                <div className="col-md-8">
                  <textarea
                    className="from-element from-element-textarea form-control"
                    name="info"
                    onInput={setData}
                    value={store.info}
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="form-submit col-md-8 col-md-offset-3">
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
