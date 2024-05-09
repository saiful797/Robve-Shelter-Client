import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import SignInWithSocialMedia from "../components/SignInWithSocialMedia/SignInWithSocialMedia";
// import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {register , handleSubmit} = useForm();

    // Navigation Process
    // const navigate = useNavigate(null);

    const onSubmit = (data) => {
        // const {email, password} = data;
        console.log(data);
        // singInUser(email, password).then(result => {
        //     if(result.user){
        //         // 
        //     }

        //     navigate(location?.state || '/');
            
        //     reset();
        // })
        
    }

    return (
        <div className="min-h-screen mt-1">

            <div className="hero-content flex-col">
                <div className="text-center md:mb-2">
                    <h1 className="text-5xl mt-5 font-bold">Sign In now!</h1>
                </div>
                <div className=" w-full max-w-sm rounded-lg bg-base-100 mt-5 md:mt-0">
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
                    <div className="pb-5 -mt-5">
                        <div className="text-xl font-bold text-center text-orange-500 font-DancingScript">OR</div>
                        <div className="mt-2">
                            {/* <SignInWithSocialMedia/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default SignInPage;