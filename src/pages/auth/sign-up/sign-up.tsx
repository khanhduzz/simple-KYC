import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PrimaryButton from "../../../components/button";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";

interface SignUpData {
    email: string;
    password: string;
    confirmPassword: string;
    term: boolean;
}

const SignUp = () => {
    const { watch, register, handleSubmit, formState: { errors } } = useForm<SignUpData>();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const termsAccepted = watch("term", false);

    const onSubmit = (data: SignUpData) => {
        setLoading(true);
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                return res.json();
            })
            .then(responseData => {
                console.log("Signup successful");
                showSuccessToast('Sign up successfully!');
                navigate('/auth/login');
            })
            .catch(error => {
                showErrorToast('Sign up failed!');
                console.error("Signup failed", error);
            })
            .finally(() => setLoading(false))
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
            <a href="#" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                <img src="/logo.png" className="mr-4 h-11" alt="Simple KYC Logo" />
                <span>Sign-up for Simple KYC</span>
            </a>
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Create a Free Account
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            defaultValue="carter@sun.com"
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
                            defaultValue="Test1234!qqqqq"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 12, message: "Password must be at least 12 characters" },
                                pattern: {
                                    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#&!]).{6,}$/,
                                    message: "Password must contain at least one letter, one digit, and one special character (@, #, &, !)."
                                }
                            })}
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            defaultValue="Test1234!qqqqq"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) => value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="term"
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                {...register("term")}
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="term" className="font-medium text-gray-900 dark:text-white">
                                I accept the <a href="#" className="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>
                    <PrimaryButton title="Create account" onClick={handleSubmit(onSubmit)} term={termsAccepted} loading={loading}/>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/auth/login" className="text-primary-700 hover:underline dark:text-primary-500">Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
