import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import BasicInformation from "./components/BasicInformation";
import Identification from "./components/Identification";
import Occupation from "./components/Occupation";
import { UserData } from "./model";
import AddressPanel from "./components/AddressPanel";
import PhonePanel from "./components/PhonePanel";
import EmailPanel from "./components/EmailPanel";

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal Information', current: true },
];

const PersonalInformation = () => {

    const methods = useForm<UserData>();

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
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
                        <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button>
                    </div>
                </form>
            </FormProvider>

        </div>
    )
}

export default PersonalInformation;