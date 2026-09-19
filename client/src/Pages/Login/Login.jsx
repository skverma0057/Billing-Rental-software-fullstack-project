// import { useContext, useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../Context/AppContext";

// const Login = () => {
//   const {setAuthData} = useContext(AppContext);
//   const navigate = useNavigate();

//   const[loading ,setLoading] = useState(false);
//    const [data,setData] = useState({
//     email : "",
//     password : "",
//    })

//     const  onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setData((data) => ({
//         ...data,
//         [name]: value
//     }));

//     const onSubmitHandler = async(e) =>{
//       e.preventDefault();
//       setLoading(true);
//       try{
//         const response = await login(data);
//         if(response.status ===200){
//           localStorage.setItem(
//             "token",response.data.token
//           );
//            localStorage.setItem(
//             "role",response.data.role
//           );
//           setAuthData(response.data.token,response.data.role);
//           navigate( "/dashboard");

//         }

//       }catch(error){
//         console.error(error);

//       }finally{
//         setLoading(false);

//       }
//     }
// };
//   return (
//     <div className="login-background">
//       <div className="card login-card">
//         <div className="card-body">

//           <div className="login-header">
//             <div className="login-icon">👨‍🍳</div>

//             <h2>Welcome Back</h2>
//             <p>Sign in to your account</p>
//           </div>

//           <form onSubmit={onSubmitHandler}>

//             {/* Email */}
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="form-label"
//               >
//                 Email address
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="form-control"
//                 placeholder="yourname@example.com"
//                 required
//                 onChange={onChangeHandler}
//                 value = {data.email}
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="form-label"
//               >
//                 Password
//               </label>

//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="form-control"
//                 placeholder="Enter your password"
//                 required
//                   onChange={onChangeHandler}
//                 value = {data.password}
//               />
//             </div>

//             {/* Remember + Forgot */}
//             <div className="login-options">
//               <div>
//                 <input
//                   type="checkbox"
//                   id="remember"
//                 />
//                 <label htmlFor="remember">
//                   Remember me
//                 </label>
//               </div>

//               <a href="#">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Button */}
//             <div className="d-grid mt-4">
//               <button
//                 type="submit"
//                 className="btn btn-dark btn-lg login-button"
//               >
//                 Sign in
//               </button>
//             </div>

//           </form>

//           <div className="login-footer">
//             <span>Don't have an account?</span>
//             <a href="#">Create account</a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { login } from "../../Service/AuthService";

const Login = () => {
  const { setAuthData } = useContext(AppContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await login(data);

    console.log("Login response:", response);

    localStorage.setItem("user", JSON.stringify(response));

    localStorage.setItem("role", response.role);

    setAuthData(response, response.role);

    navigate("/dashboard");

  } catch (error) {
    console.error("Login failed:", error);

    alert(
      error.response?.data?.message ||
      "Invalid email or password"
    );

  } finally {
    setLoading(false);
  }
};


  // Handle form submission
  

  return (
    <div className="login-background">
      <div className="card login-card">
        <div className="card-body">
          <div className="login-header">
            <div className="login-icon">👨‍🍳</div>

            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>

          <form onSubmit={onSubmitHandler}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="yourname@example.com"
                required
                onChange={onChangeHandler}
                value={data.email}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
                onChange={onChangeHandler}
                value={data.password}
              />
            </div>

            {/* Remember + Forgot */}
            <div className="login-options">
              <div>
                <input type="checkbox" id="remember" />

                <label htmlFor="remember">Remember me</label>
              </div>

              <a href="#">Forgot password?</a>
            </div>

            {/* Button */}
            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-dark btn-lg login-button"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="login-footer">
            <span>Don't have an account?</span>
            <a href="#">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;






