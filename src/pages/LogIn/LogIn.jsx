import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../provider/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";


const LogIn = () => {

  const location = useLocation();




  const navigate = useNavigate();

    <Navbar></Navbar>
const {signInUser} = useContext(Authcontext);


    const handleLogIn =e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=(form.get('email'));
        const password=form.get('password');
        console.log(email , password);
        signInUser(email , password)
        .then(result=>{
            console.log(result.user);

            // navigate after login
            
            navigate(location?.state? location.state : '/');

        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


            <form onSubmit={handleLogIn} className="card-body  py-8 px-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-2xl p-3">Do not have a account ? <Link className="text-2xl text-blue-600" to="/register">Register</Link></p>


          </div>
        </div>
      </div>
    );
};

export default LogIn;