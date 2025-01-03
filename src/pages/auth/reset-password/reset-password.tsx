import { useForm } from "react-hook-form";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import { resetPassword } from "../../../services/api";
import { ResetPasswordData } from "../../user/personal-information/model";
import PrimaryButton from "../../../components/button";
import { useNavigate } from "react-router";

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<ResetPasswordData>();
    const [loading, setLoading] = useState(false);
    const isAccepted = watch("accept", false);
    const navigate = useNavigate();

    const onSubmit = async (data: ResetPasswordData) => {
        setLoading(true);
        try {
            await resetPassword(data.email, data.password);
            showSuccessToast("Password reset successfully!");
            navigate('/auth/login');
        } catch (error) {
            showErrorToast("Password reset failed!");
            console.error("Password reset failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
            <a href="#" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                <img src="/logo.png" className="mr-4 h-11" alt="Simple KYC Logo" />
                <span>Simple KYC - Reset Password</span>
            </a>
            <div className="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Reset your password
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
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            defaultValue="Test1234!qqqqq"
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
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="••••••••"
                            defaultValue="Test1234!qqqqq"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: value =>
                                    value === watch("password") || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="accept"
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                {...register("accept")}
                                required
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="accept" className="font-medium text-gray-900 dark:text-white">
                                I accept the{" "}
                                <a href="#" className="text-primary-700 hover:underline dark:text-primary-500">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                    <PrimaryButton title="Reset your password" loading={loading} term={isAccepted} onClick={handleSubmit(onSubmit)} />
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
