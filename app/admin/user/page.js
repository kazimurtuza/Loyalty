"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [staffList, setStaffList] = useState(null);
  const branch = getCookie("branch");
  const usertype = getCookie("usertype");
  const [currentPage, setCurrentPage] = useState(1);
  console.log(branch);

  const buttonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    backgroundColor: "var(--primary-color)",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const infoStyle = {
    margin: "0 10px",
    fontSize: "16px",
  };

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from an API or other source
      let result;
      // if (usertype != "brand-admin") {
      //   result = await fetchWithAuth(
      //     `branch-employee/${branch}?page=${currentPage}`
      //   );
      // } else {
      //   result = await fetchWithAuth(`employee-list?page=${currentPage}`);
      // }

      result = await fetchWithAuth(`user?page=${currentPage}`);
      console.log(result);

      setStaffList(result.result);
    };

    fetchData();
  }, [currentPage]);

  // Pagination click handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <div className="dashboard-content__title-bar title-bar flex-ctr-spb">
        <h3 className="title">User List</h3>
      </div>
      <div className="dashboard-main-content-wrap">
        <div className="dashboard-main-content">
          <div className="dashboard-table-wrap flex-spb">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {staffList &&
                  staffList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.user_type}</td>
                        <td className="status">
                          {item.status ? "Active" : "Inactive"}
                        </td>
                        <td>
                          <Link
                            href={{
                              pathname: "/admin/staff/edit",
                              query: { id: item._id }, // Add your parameters here
                            }}
                            className="px-4 py-2 mx-1 bg-main text-white rounded"
                          >
                            {/* Edit */}
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              id="Layer_1"
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke-width="1.5px"
                              stroke-miterlimit="10"
                              stroke="#ffffff"
                              stroke-opacity="1"
                            >
                              <path
                                class="cls-1"
                                d="M7.23,20.59l-4.78,1,1-4.78L17.89,2.29A2.69,2.69,0,0,1,19.8,1.5h0a2.7,2.7,0,0,1,2.7,2.7h0a2.69,2.69,0,0,1-.79,1.91Z"
                              />
                              <line
                                class="cls-1"
                                x1="0.55"
                                y1="22.5"
                                x2="23.45"
                                y2="22.5"
                              />
                              <line
                                class="cls-1"
                                x1="19.64"
                                y1="8.18"
                                x2="15.82"
                                y2="4.36"
                              />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <div className="pagination" style={{ textAlign: "center" }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={buttonStyle}
              >
                Previous
              </button>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                style={buttonStyle}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
