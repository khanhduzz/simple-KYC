import Breadcrumb from "../../../components/breadscrum/breadscum";
import BasicInformation from "./components/BasicInformation";
import ContactInformation from "./components/ContactInformation";
import Identification from "./components/Identification";
import Occupation from "./components/Occupation";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal Information', current: true },
];

const PersonalInformation = () => {
    function handleSubmit(): import("react").FormEventHandler<HTMLFormElement> | undefined {
        return;
    }

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <Breadcrumb items={breadcrumbItems} />

            <form className="mt-6 space-y-6" onSubmit={handleSubmit()}>
                <BasicInformation />
                <ContactInformation />
                <Identification />
                <Occupation />
                <div className="text-right">
                    <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default PersonalInformation;