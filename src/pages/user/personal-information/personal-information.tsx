import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "../../../components/breadscrum/breadscum";
import BasicInformation from "./components/BasicInformation";
import ContactInformation from "./components/ContactInformation";
import Identification from "./components/Identification";
import Occupation from "./components/Occupation";
import { UserData } from "./model";

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
                    <ContactInformation />
                    <Identification />
                    <Occupation />
                    <div className="text-right">
                        <button type="submit" className="btn-primary px-6 py-3 rounded-md">Submit</button>
                    </div>
                </form>
            </FormProvider>

        </div>
    )
}

export default PersonalInformation;