import { useFormContext, useFieldArray } from "react-hook-form";
import ErrorMessage from "../../../../components/error";
import { EmailType, UserData } from "../model";

const EmailPanel = () => {
    const name = "emails";

    const { register, formState: { errors }, control } = useFormContext<UserData>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h4 className="text-md font-semibold mb-4">Emails</h4>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-2 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400">Email #{index + 1}</legend>
                    <div>
                        <label htmlFor={`${name}.${index}.emailAddress`} className="block text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            id={`${name}.${index}.emailAddress`}
                            {...register(`${name}.${index}.emailAddress`, {
                                required: "Email address is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email format",
                                },
                            })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                            placeholder="Enter email address"
                        />
                        <ErrorMessage errors={errors?.emails?.[index]?.emailAddress?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.emailType`} className="block text-sm font-medium">Type</label>
                        <select
                            id={`${name}.${index}.emailType`}
                            {...register(`${name}.${index}.emailType`, { required: "Email type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                        >
                            <option value="personal">Personal</option>
                            <option value="work">Work</option>
                        </select>
                        <ErrorMessage errors={errors?.emails?.[index]?.emailType?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.preferred`} className="block text-sm font-medium">Preferred</label>
                        <select
                            id={`${name}.${index}.preferred`}
                            {...register(`${name}.${index}.preferred`, { required: "Preferred status is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <ErrorMessage errors={errors?.emails?.[index]?.preferred?.message} />
                    </div>

                    <div className="col-span-3">
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
                    append({ emailAddress: '', emailType: EmailType.Personal, preferred: false })
                }
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Email
            </button>
        </div>
    );
};

export default EmailPanel;
