import "./style.css";
export default function Login() {
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
