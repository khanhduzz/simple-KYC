import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import { UserData } from "../personal-information/model";
import BasicInformation from "../personal-information/components/BasicInformation";
import AddressPanel from "../personal-information/components/AddressPanel";
import EmailPanel from "../personal-information/components/EmailPanel";
import PhonePanel from "../personal-information/components/PhonePanel";
import Identification from "../personal-information/components/Identification";
import Occupation from "../personal-information/components/Occupation";
import InvestmentSection from "../kyc/components/InvestmentSection";
import NetworthSection from "../kyc/components/NetworthSection";
import WealthSection from "../kyc/components/WealthSection";
import LiabilitySection from "../kyc/components/LiabilitySection";
import IncomeSession from "../kyc/components/IncomeSession";
import AssetSection from "../kyc/components/AssetSection";

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: "KYC & Personal Information", current: true },
];


const UserFormTabs = () => {
    const [activeTab, setActiveTab] = useState("kyc");
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
        console.log("Combined Form Data:", data);
    });

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <Breadcrumb items={breadcrumbItems} />

            <FormProvider {...methods}>
                <form className="mt-6 space-y-6" onSubmit={onSubmit}>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${activeTab === "kyc" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                            onClick={() => setActiveTab("kyc")}
                        >
                            KYC
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${activeTab === "personalInfo" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                            onClick={() => setActiveTab("personalInfo")}
                        >
                            Personal Information
                        </button>
                    </div>

                    {activeTab === "kyc" && (
                        <div>
                            <IncomeSession />
                            <AssetSection />
                            <LiabilitySection />
                            <WealthSection />
                            <NetworthSection />
                            <InvestmentSection />
                        </div>
                    )}
                    {activeTab === "personalInfo" && (
                        <div>
                            <BasicInformation />
                            <div className="border panel rounded-md p-4 dark:text-gray-300 dark:bg-gray-900">
                                <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Contact Information</h3>
                                <AddressPanel />
                                <EmailPanel />
                                <PhonePanel />
                                <Identification />
                                <Occupation />
                            </div>
                        </div>
                    )}

                    <div className="text-right">
                        <button type="submit" className="btn-primary px-6 py-3 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default UserFormTabs;
