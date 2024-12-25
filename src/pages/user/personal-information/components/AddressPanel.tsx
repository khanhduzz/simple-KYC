import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import ErrorMessage from '../../../../components/error';
import { AddressType, UserData } from '../model';

const AddressPanel: React.FC = () => {
    const name = "addresses";

    const { register, formState: { errors }, control } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Addresses</h3>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-2 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400">Address #{index + 1}</legend>

                    <div>
                        <label htmlFor={`${name}.${index}.country`} className="block text-sm font-medium">Country</label>
                        <input
                            type="text"
                            id={`${name}.${index}.country`}
                            {...register(`${name}.${index}.country`, { required: "Country is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color"
                            placeholder="Enter country"
                        />
                        <ErrorMessage errors={errors?.[name]?.[index]?.country?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.city`} className="block text-sm font-medium">City</label>
                        <input
                            type="text"
                            id={`${name}.${index}.city`}
                            {...register(`${name}.${index}.city`, { required: "City is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color"
                            placeholder="Enter city"
                        />
                        <ErrorMessage errors={errors?.[name]?.[index]?.city?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.street`} className="block text-sm font-medium">Street</label>
                        <input
                            type="text"
                            id={`${name}.${index}.street`}
                            {...register(`${name}.${index}.street`, { required: "Street is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color "
                            placeholder="Enter street"
                        />
                        <ErrorMessage errors={errors?.[name]?.[index]?.street?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.postalCode`} className="block text-sm font-medium">Postal Code</label>
                        <input
                            type="text"
                            id={`${name}.${index}.postalCode`}
                            {...register(`${name}.${index}.postalCode`, { required: "Postal code is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter postal code"
                        />
                        <ErrorMessage errors={errors?.[name]?.[index]?.postalCode?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.type`} className="block text-sm font-medium">Type</label>
                        <select
                            id={`${name}.${index}.type`}
                            {...register(`${name}.${index}.addressType`, { required: "Address type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        >
                            <option value="mailing">Mailing</option>
                            <option value="work">Work</option>
                        </select>
                        <ErrorMessage errors={errors?.[name]?.[index]?.addressType?.message} />
                    </div>

                    <div className="col-span-2">
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn-danger px-4 py-2 mt-4 rounded-md"
                        >
                            Delete
                        </button>
                    </div>
                </fieldset>
            ))}

            <button
                type="button"
                onClick={() =>
                    append({ country: '', city: '', street: '', postalCode: '', addressType: AddressType.Mailing })
                }
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Address
            </button>
        </div>
    );
};

export default AddressPanel;
