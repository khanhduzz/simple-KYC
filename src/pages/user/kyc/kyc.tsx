import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import AssetSession from "./components/AssetSection";
import InvestmentSection from "./components/InvestmentSection";
import LiabilitySection from "./components/LiabilitySection";
import NetworthSection from "./components/NetworthSection";
import WealthSection from "./components/WealthSection";
import { UserData } from "../personal-information/model";
import IncomeSession from "./components/IncomeSession";
import { useEffect, useState } from "react";
import BasicInformation from "../personal-information/components/BasicInformation";
import AddressPanel from "../personal-information/components/AddressPanel";
import EmailPanel from "../personal-information/components/EmailPanel";
import PhonePanel from "../personal-information/components/PhonePanel";
import Identification from "../personal-information/components/Identification";
import Occupation from "../personal-information/components/Occupation";
import { fetchUserData, updateUserData } from "../../../services/api";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import PrimaryButton from "../../../components/button";
import { useNavigate } from "react-router";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal KYC', current: true },
];

type Props = {
    disable?: boolean
}

const UserKYC = ({ disable = true }: Props) => {

    const methods = useForm<UserData>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: UserData = await fetchUserData();
                console.log(data);
                methods.reset(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
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

    return (
        <div className={`grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />

            <FormProvider {...methods}>
                <form className="mt-6 space-y-6 dark:text-gray-300 dark:bg-gray-900" onSubmit={onSubmit}>
                    <BasicInformation />
                    <div className="border panel rounded-md p-4 dark:text-gray-300 dark:bg-gray-900">
                        <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Contact Information</h3>
                        <AddressPanel />
                        <EmailPanel />
                        <PhonePanel />
                        <Identification />
                        <Occupation />
                    </div>
                    <IncomeSession />
                    <AssetSession />
                    <LiabilitySection />
                    <WealthSection />
                    <NetworthSection />
                    <InvestmentSection />
                    <div className="text-right">
                        <PrimaryButton title="Submit" loading={loading} onClick={onSubmit} />
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default UserKYC;