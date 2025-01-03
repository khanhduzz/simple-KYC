import { useFormContext, useFieldArray } from "react-hook-form";
import { OccupationType, UserData } from "../model";
import ErrorMessage from "../../../../components/error";

type Props = {
    disable?: boolean
}

const Occupation = ({ disable = false }: Props) => {

    const name = "occupation";

    const { watch, register, formState: { errors }, control } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    return (
        <div className={`panel mb-6 dark:text-gray-300 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Occupations</h3>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-3 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 flex justify-between w-full gap-2 items-center">
                        <div>
                            Occupation #{index + 1}
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="btn-danger px-2 py-1 rounded-md"
                            >
                                Delete
                            </button>
                            <div className="col-span-3">
                            </div>
                        </div>
                    </legend>

                    <div>
                        <label htmlFor={`${name}.${index}.occupation-type`} className="block text-sm font-medium">Occupation</label>
                        <select
                            id={`${name}.${index}.occupation-type`}
                            {...register(`${name}.${index}.occupationType`, { required: "Occupation type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color  "
                        >
                            <option value="unemployed">Unemployed</option>
                            <option value="engineer">Engineer</option>
                            <option value="teacher">Teacher</option>
                            <option value="doctor">Doctor</option>
                            <option value="others">Others</option>
                        </select>
                        <ErrorMessage errors={errors?.occupation?.[index]?.occupationType?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.fromDate`} className="block text-sm font-medium">From Date</label>
                        <input
                            type="date"
                            id={`${name}.${index}.fromDate`}
                            {...register(`${name}.${index}.fromDate`, { required: "Occupation start date is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color"
                        />
                        <ErrorMessage errors={errors?.occupation?.[index]?.fromDate?.message} />
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.toDate`} className="block text-sm font-medium">To Date</label>
                        <input
                            type="date"
                            id={`${name}.${index}.toDate`}
                            {...register(`${name}.${index}.toDate`, {
                                required: "Occupation end date is required",
                                validate: (toDate) => {
                                    const fromDate = watch(`${name}.${index}.fromDate`);
                                    if (!fromDate) return "Start date must be selected first";
                                    return new Date(toDate) > new Date(fromDate) || "End date must be later than start date";
                                }
                            })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color"
                        />
                        <ErrorMessage errors={errors?.occupation?.[index]?.toDate?.message} />
                    </div>

                </fieldset>
            ))}

            <button
                type="button"
                onClick={() => append({ occupationType: OccupationType.Unemployed, fromDate: "", toDate: "" })}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Occupation
            </button>
        </div>
    );
};

export default Occupation;
