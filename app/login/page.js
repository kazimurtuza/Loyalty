
import "./style.css";

export  default async function Login() {
  const post = await fetch('http://loyaltypaypoints.com:2023/api/counter/660116169c2673a181361372');
  const result = await post.json();
  console.log(result);

    return (
      <div className="user-page login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p className="message">Forget password?? <a href="#">Recover Password</a></p>
        </form>
      </div>
    </div>
    );
}
