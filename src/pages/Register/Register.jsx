import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context-providers/Auth/AuthContext";
import { Helmet } from "react-helmet-async";



const Register = () => {

    const {register, updateUserProfile, setUser, setLoading, errorMessage, setErrorMessage} = useContext(AuthContext);

    const navigate = useNavigate();


    const handleRegister = (e) => {

        e.preventDefault();

        setErrorMessage('');

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!pattern.test(password)) {
            setErrorMessage('Password should be at least 6 character long and must have 1 uppercase and 1 lowercase');
            return;
        }
        
        register(email, password)
        .then(() => {
            const updateUserData = {displayName: name, photoURL: photo};
            updateUserProfile(updateUserData)
            .then(() => {
                setUser((prevUser) => {
                return {...prevUser, updateUserData}
                });
            })
            e.target.reset();
            navigate('/')
          })
          .catch((error) => {
            const err = error.message;
            setErrorMessage(err)
            setLoading(false);
          });
    }

    



    return (
        <div>

            <Helmet>
                <title>Register | HomeRevamp</title>
            </Helmet>

<div className="min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto mb-8">
                <h1 className="text-4xl my-4"> Register now </h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body text-black pb-0" onSubmit={handleRegister}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className='px-8 pb-8 text-center text-red-600'>{errorMessage}</p>
                    }

                    <h2 className="px-8 my-4 text-center text-black">Already have an account? then <Link to='/login' className="text-blue-600">Login</Link></h2>
                </div>


            </div>

            
        </div>
    );
};

export default Register;