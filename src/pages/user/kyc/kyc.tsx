import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import AssetSession from "./components/AssetSection";
import InvestmentSection from "./components/InvestmentSection";
import LiabilitySection from "./components/LiabilitySection";
import NetworthSection from "./components/NetworthSection";
import WealthSection from "./components/WealthSection";
import { PersonalKYC } from "../personal-information/model";
import IncomeSession from "./components/IncomeSession";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal KYC', current: true },
];

const UserKYC = () => {

    const methods = useForm<PersonalKYC>();

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <Breadcrumb items={breadcrumbItems} />

            <FormProvider {...methods}>
                <form className="mt-6 space-y-6 dark:text-gray-300 dark:bg-gray-900" onSubmit={onSubmit}>
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