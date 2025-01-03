import { useFieldArray, useFormContext } from "react-hook-form";
import { IdentificationType, UserData } from "../model";
import ErrorMessage from "../../../../components/error";
import { useEffect } from "react";

type Props = {
    disable?: boolean
}

const Identification = ({ disable = false }: Props) => {

    const name = "identification";

    const { register, formState: { errors }, control } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    useEffect(() => {
        if (fields.length === 0) {
            append({
                idType: IdentificationType.NationalIdCard,
                expiryDate: "",
                file: new File(["dummy content"], "example.txt", { type: "text/plain" }),
            });
        }
    }, [])

    return (
        <div className={`panel mb-6 dark:text-gray-300 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Identification Documents</h3>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-3 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 flex justify-between w-full gap-2 items-center">
                        <div>
                            Indentification #{index + 1}
                        </div>
                        <div>
                            {fields.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="btn-danger px-2 py-1 rounded-md"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </legend>

                    <div>
                        <label htmlFor={`${name}.${index}.id-type`} className="block text-sm font-medium">Type</label>
                        <select
                            id={`${name}.${index}.id-type`}
                            {...register(`${name}.${index}.idType`, { required: "ID type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                        >
                            <option value="national-id-card">National ID Card</option>
                            <option value="driver-license">Driver License</option>
                        </select>
                        <ErrorMessage errors={errors?.identification?.[index]?.idType?.message} />
                    </div>
                    <div>
                        <label htmlFor={`${name}.${index}.id-expired`} className="block text-sm font-medium">Expiry Date</label>
                        <input
                            type="date"
                            id={`${name}.${index}.id-expired`}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                            {...register(`${name}.${index}.expiryDate`, { required: "Expiry date is required" })}
                        />
                        <ErrorMessage errors={errors?.identification?.[index]?.expiryDate?.message} />
                    </div>
                    <div>
                        <label htmlFor={`${name}.${index}.id-file`} className="block text-sm font-medium">Upload Document</label>
                        <input
                            type="file"
                            id={`${name}.${index}.id-file`}
                            className="text-sm w-full mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                            {...register(`${name}.${index}.file`
                                , { required: "Document upload is required" }
                            )
                            }
                        />
                        <ErrorMessage errors={errors?.identification?.[index]?.file?.message} />
                    </div>
                </fieldset>
            ))}
            <button
                type="button"
                onClick={() => append({
                    idType: IdentificationType.NationalIdCard,
                    expiryDate: "",
                    file: new File(["dummy content"], "example.txt", { type: "text/plain" })
                })}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Identification Document
            </button>
        </div>
    )
}

export default Identification