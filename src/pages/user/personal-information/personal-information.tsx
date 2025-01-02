import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import BasicInformation from "./components/BasicInformation";
import Identification from "./components/Identification";
import Occupation from "./components/Occupation";
import { UserData } from "./model";
import AddressPanel from "./components/AddressPanel";
import PhonePanel from "./components/PhonePanel";
import EmailPanel from "./components/EmailPanel";
import { useEffect, useState } from "react";
import { fetchUserData, updateUserData } from "../../../services/api";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import PrimaryButton from "../../../components/button";
import { useNavigate } from "react-router";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal Information', current: true },
];

type Props = {
    disable?: boolean
}

const PersonalInformation = ({ disable = false }: Props) => {

    const methods = useForm<UserData>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: UserData = await fetchUserData();
                methods.reset(data);
            } catch (error) {
                showErrorToast(`Fetching data error: ${error}`)
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [methods]);

    const onSubmit = methods.handleSubmit(async (data) => {
        setLoading(true);
        try {
            const updatedData = await updateUserData(data);
            showSuccessToast('Updated successfully!');
            console.log('User data updated successfully:', updatedData);
            navigate("/pages/user/profile");
        } catch (error) {
            console.error('Error updating user data:', error);
            showErrorToast(`Updating error: ${error}`)
        } finally {
            setLoading(false);
        }
    });

    // if (loading) {
    //     return <div className="text-center mt-6">Loading...</div>;
    // }

    return (
        <div className={`grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />

            <FormProvider {...methods}>
                <form className="mt-6 space-y-6" onSubmit={onSubmit}>
                    <BasicInformation />
                    <div className="border panel rounded-md p-4 dark:text-gray-300 dark:bg-gray-900">
                        <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Contact Information</h3>
                        <AddressPanel />
                        <EmailPanel />
                        <PhonePanel />
                        <Identification />
                        <Occupation />
                    </div>
                    <div className="text-right">
                        {/* <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button> */}
                        <PrimaryButton title="Submit" loading={loading} onClick={onSubmit} />
                    </div>
                </form>
            </FormProvider>

        </div>
    )
}

export default PersonalInformation;