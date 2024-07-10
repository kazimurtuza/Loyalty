"use client";
import fetchWithAuth from "@/fetchWithAuth";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.css";
export default function Login() {
  const api_base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const post = await fetch(`${api_base_url}/user-login`);
  // const result = await post.json();
  // console.log(result);
  const router = useRouter();

  // All local states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadin, setIsLoading] = useState(false);

  // Login form submit handler
  async function submitForm(e) {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const info = {
      email: email,
      password: password,
    };

    const data = await fetchWithAuth(`/user-login`, {
      method: "POST",
      body: JSON.stringify(info),
    });

    const dataResponse = data;
    console.log(data);

    if (dataResponse) {
      if (dataResponse.success == true) {
        // setCookie("authUserType", data.user.user_type);
        setCookie("authToken", dataResponse.token);
        setCookie("usertype", dataResponse.user.user_type);
        setCookie("authUserName", dataResponse.user.name);
        setCookie("authUserId", dataResponse.user._id);
        setCookie("branch", dataResponse.user.branch);
        let id = getCookie("authUserId");
        console.log(id);
        router.push("admin/dashboard", { scroll: false });
      } else {
        setErrorMessage(data.msg);
      }
    }
    else
    {
        setErrorMessage("Email or Password is incorrect");
    }

    setIsLoading(false);

    // if (data.status === 422) {
    //     setErrorMessage('Invalid Credentials');
    // }
    // if (data.status === 422) {
    //     setErrorMessage("Invalid Credentials");
    // } else if (data.token) {
    //     setCookie("authUserType", data.user.user_type);
    //     setCookie("authToken", data.token);
    //     setCookie("authUserName", data.user.name);
    //     router.push("/admin/dashboard", { scroll: false });
    // } else {
    //     setErrorMessage(data.message);
    // }
  }

  return (
    <div className="user-page login-page">
      <div className="form">
        <img
          src="https://res.cloudinary.com/daqxhckof/image/upload/v1720603791/Loyality/LoyaltyPayPoints_utpc3d.png"
          width={150}
          alt="logo-light"
        />
        <br></br>
        <p>{errorMessage}</p>
        <form className="login-form" onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={`${isLoadin ? "is-loading" : ""}`}>
            <span className="loader"></span>
            Login
          </button>
          <p className="message">
            Forget password?? <a href="#">Recover Password</a>
          </p>
        </form>
      </div>
    </div>
  );
}
