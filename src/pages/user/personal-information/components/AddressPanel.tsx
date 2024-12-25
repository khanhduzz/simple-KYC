import React, { useState } from 'react';
import { UserAddress } from '../model';

const AddressForm: React.FC = () => {
    const [addresses, setAddresses] = useState<UserAddress[]>([
        { country: '', city: '', street: '', postalCode: '', type: 'mailing' },
    ]);

    const handleAddAddress = () => {
        setAddresses([
            ...addresses,
            { country: '', city: '', street: '', postalCode: '', type: 'mailing' },
        ]);
    };

    const handleChange = (
        index: number,
        field: keyof UserAddress,
        value: string
    ) => {
        const updatedAddresses = [...addresses];
        if (field === "type") {
            updatedAddresses[index][field] = value as UserAddress["type"];
        } else {
            updatedAddresses[index][field] = value;
        }
        setAddresses(updatedAddresses);
        console.log(addresses);
        
    };

    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h4 className="text-md font-semibold mb-4">Addresses</h4>
            {addresses.map((address, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor={`country-${index}`} className="block text-sm font-medium">
                            Country
                        </label>
                        <input
                            type="text"
                            id={`country-${index}`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter country"
                            value={address.country}
                            onChange={(e) => handleChange(index, 'country', e.target.value)}
                            // required
                        />
                    </div>
                    <div>
                        <label htmlFor={`city-${index}`} className="block text-sm font-medium">
                            City
                        </label>
                        <input
                            type="text"
                            id={`city-${index}`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter city"
                            value={address.city}
                            onChange={(e) => handleChange(index, 'city', e.target.value)}
                            // required
                        />
                    </div>
                    <div>
                        <label htmlFor={`street-${index}`} className="block text-sm font-medium">
                            Street
                        </label>
                        <input
                            type="text"
                            id={`street-${index}`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter street"
                            value={address.street}
                            onChange={(e) => handleChange(index, 'street', e.target.value)}
                            // required
                        />
                    </div>
                    <div>
                        <label htmlFor={`postal-code-${index}`} className="block text-sm font-medium">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            id={`postal-code-${index}`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter postal code"
                            value={address.postalCode}
                            onChange={(e) => handleChange(index, 'postalCode', e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`address-type-${index}`} className="block text-sm font-medium">
                            Type
                        </label>
                        <select
                            id={`address-type-${index}`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            value={address.type}
                            onChange={(e) => handleChange(index, 'type', e.target.value)}
                        >
                            <option value="mailing">Mailing</option>
                            <option value="work">Work</option>
                        </select>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddAddress}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Address
            </button>
        </div>
    );
};

export default AddressForm;
