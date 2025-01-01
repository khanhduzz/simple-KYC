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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/c/3482-3c28-49a8-872e');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data: UserData = await response.json();
                console.log(data);
                
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