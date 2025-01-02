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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/c/1eff-1333-4834-a13f');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data: UserData = await response.json();
                methods.reset(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [methods]);

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

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
                        <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default UserKYC;