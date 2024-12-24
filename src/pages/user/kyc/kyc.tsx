import Breadcrumb from "../../../components/breadscrum/breadscum";
import AssetSession from "./components/AssetSection";
import Income from "./components/Income";
import InvestmentSection from "./components/InvestmentSection";
import LiabilitySection from "./components/LiabilitySection";
import NetworthSection from "./components/NetworthSection";
import WealthSection from "./components/WealthSection";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal KYC', current: true },
];

const UserKYC = () => {

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <Breadcrumb items={breadcrumbItems} />

            <form className="mt-6 space-y-6 dark:text-gray-300 dark:bg-gray-900">
                <Income />
                <AssetSession />
                <LiabilitySection />
                <WealthSection />
                <NetworthSection />
                <InvestmentSection />
                <div className="text-right">
                    <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserKYC;