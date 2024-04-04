import { useContext } from "react";
import { Link } from "react-router-dom";
import  { Authcontext } from "../../provider/AuthProvider";
const Register = () => {
    const {createUser} = useContext(Authcontext);


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
        const email= form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password,name,photo);

        createUser(email , password)
        .then(result=>{
            console.log(result.user);

        })
        .catch(error=>{
            console.log(error);
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


            <form onSubmit={handleRegister} className="card-body  py-8 px-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-2xl p-3">Already , have a account ? <Link className="text-2xl text-blue-600" to="/login">Log In</Link></p>


          </div>
        </div>
      </div>
    );
};

export default Register;