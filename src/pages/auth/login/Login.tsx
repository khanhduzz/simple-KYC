import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginData } from "../../user/personal-information/model";
import { useContext, useState } from "react";
import { AuthenticatedContext } from "../../../shared/Authenticated";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import PrimaryButton from "../../../components/button";
import { loginUser } from "../../../services/api";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const [loading, setLoading] = useState(false);
    const isAuthenticated = useContext(AuthenticatedContext);
    const navigate = useNavigate();

    const onSubmit = async (dataLogin: LoginData) => {
        setLoading(true);
        try {
            const data = await loginUser("emilys", "emilyspass");
            sessionStorage.setItem("accessToken", data.accessToken);

            const user = {
                name: "Carter Zenke",
                email: "carter@harvard.edu.com",
                role: dataLogin.remember ? "admin" : "user",
            };

            isAuthenticated.setUser(user);
            sessionStorage.setItem("user", JSON.stringify(user));
            showSuccessToast("Login successfully!");
            navigate("/");
        } catch (error) {
            showErrorToast("Login failed!");
            console.error("Login failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
            <a href="#" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                <img src="/logo.png" className="mr-4 h-11" alt="Simple KYC Logo" />
                <span>Simple KYC Authentication</span>
            </a>
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sign in to platform
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            defaultValue="carter@gmail.com"
                            placeholder="name@company.com"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("email", { required: "Email is required", pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            type="password"
                            id="password"
                            defaultValue="Test124!aaaaaa"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 12, message: "Password must be at least 12 characters" },
                                maxLength: { value: 16, message: "Password must be shorter than 17 characters" },
                                pattern: {
                                    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#&!]).{6,}$/,
                                    message: "Password must contain at least one letter, one digit, and one special character (@, #, &, !)."
                                }
                            })}
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                {...register("remember")}
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">Remember me <i>(Temporal: check for Admin)</i></label>
                        </div>
                        <Link to='/auth/reset-password' className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</Link>
                    </div>
                    <PrimaryButton title="Login to your account" loading={loading} onClick={handleSubmit(onSubmit)} />
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Forgot password? <Link to='/auth/sign-up' className="text-primary-700 hover:underline dark:text-primary-500">Sign-up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
