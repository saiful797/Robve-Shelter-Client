import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
// import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const SignInPage = () => {
    const {signInUser, googleSignIn,githubSignIn} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const {register, reset, handleSubmit} = useForm();

    // Navigation Process
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const onSubmit = (data) => {
        const {email, password} = data;
        // console.log(data);
        signInUser(email, password).then(result => {
            if(result.user){
                toast.success('User logged In Successfully!');
            }

            navigate(location?.state? location?.state : '/');
            
            reset();
        })
        .catch(error => {
            if(error.message){
                toast.error('Invalid Credential!!')
            }
        })
        
    }

    const handleSocialMediaSignIn = (socialMediaProvider) =>{
        socialMediaProvider()
         .then(data =>{
            if(data.user){
                toast.success('You Login Successfully!');
                navigate(location?.state || '/');
            }
         })
    }


    return (
        <div className="min-h-screen mt-1">

            <div className="hero-content flex-col">
                <div className="text-center md:mb-2">
                    <h1 className="text-5xl mt-5 font-bold">Sign In now!</h1>
                </div>
                <div className=" w-full shadow-2xl shadow-black max-w-xl rounded-lg bg-base-100 mt-5 md:mt-0">
                    <div className="mt-5 p-5 w-full grid gap-5">
                        <button className="btn w-full" onClick={() => handleSocialMediaSignIn(googleSignIn)}>
                            Google
                        </button>
                        <button className="btn w-full" onClick={() => handleSocialMediaSignIn(githubSignIn)}>
                            Github
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-lg font-medium">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />

                            <span className="top-[60px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base -mt-2">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button  className="btn btn-outline font-bold text-xl">Sign In</button>
                        </div>
                        <div className="flex justify-center gap-5 mt-2">
                            <h1>Do not have an account?</h1>
                            <Link to="/signUp"><p className="text-sky-400 font-bold hover:text-black link link-hover">Sign Up</p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <ScrollToTop />
        </div>
    );
    
};

export default SignInPage;