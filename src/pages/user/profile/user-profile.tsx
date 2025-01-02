import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/breadscrum/breadscum';
import { UserData } from '../personal-information/model';
import SingleField from './components/SingleField';
import { fetchUserData } from '../../../services/api';

type Props = {}

const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/users' },
    { label: 'Personal Information', current: true },
];

const UserProfile = (props: Props) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchUserData();
                setUserData(response);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Error loading user data</div>;
    }

    return (
        <>
            <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
                <Breadcrumb items={breadcrumbItems} />

                <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                        <img
                            className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                            src="/images/users/bonnie-green-2x.png"
                            alt="Jese picture"
                        />
                        <div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Profile picture</h3>
                            <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size of 800K</div>
                            <div className="flex items-center space-x-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Upload picture
                                </button>
                                <button
                                    type="button"
                                    className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
                    <form>
                        <fieldset disabled={true}>
                            <div className="grid grid-cols-6 gap-6">
                                <SingleField infor={userData.basicInfor.firstName} name="first name" />
                                <SingleField infor={userData.basicInfor.lastName} name="last name" />
                                <SingleField infor={userData.addresses[0].country} name="country" />
                                <SingleField infor={userData.addresses[0].city} name="city" />
                                <SingleField infor={userData.addresses[0].street} name="address" />
                                <SingleField infor={userData.emails[0].emailAddress} name="email" />
                                <SingleField infor={userData.phones[0].phoneNumber} name="phone" />
                                <SingleField infor={userData.basicInfor.dateOfBirth} name="birth day" />
                                <SingleField infor={userData.organization ?? ''} name="organization" />
                                <SingleField infor={userData.role} name="role" />
                                <SingleField infor={userData.department ?? ''} name="deparment" />
                                <SingleField infor={userData.addresses[0].postalCode ?? ''} name="zip/postal code" />
                                <div className="col-span-6 sm:col-full">
                                    <a
                                        href='1/pi'
                                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        type="submit">Edit
                                    </a>
                                    <a
                                        href='1/kyc'
                                        className="ml-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        type="submit">KYC
                                    </a>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserProfile