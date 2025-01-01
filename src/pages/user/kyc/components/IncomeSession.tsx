import { useFieldArray, useFormContext } from "react-hook-form";
import { IncomeType, UserData } from "../../personal-information/model";

type Props = {
    disable?: boolean
}

const IncomeSession = ({ disable = false }: Props) => {
    const name = "incomes";

    const { register, formState: { errors }, control } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    return (
        <div className={`panel dark:text-gray-300 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <h3 className="text-lg font-medium mb-4">Incomes (A)</h3>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-2 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 flex justify-between w-full gap-2 items-center">
                        <span>Income #{index + 1}</span>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn-danger px-2 py-1 rounded-md"
                        >
                            Delete
                        </button>
                    </legend>

                    <div>
                        <label htmlFor={`${name}.${index}.income-type`} className="block text-sm font-medium">
                            Type
                        </label>
                        <select
                            id={`${name}.${index}.income-type`}
                            {...register(`${name}.${index}.incomeType`, { required: "Income type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        >
                            <option value="salary">Salary</option>
                            <option value="investment">Investment</option>
                            <option value="others">Others</option>
                        </select>
                        {errors?.[name]?.[index]?.type && (
                            <p className="text-red-500 text-sm mt-1">{errors[name][index]?.incomeType?.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor={`${name}.${index}.amount`} className="block text-sm font-medium">
                            Amount (Currency)
                        </label>
                        <input
                            type="number"
                            id={`${name}.${index}.amount`}
                            {...register(`${name}.${index}.amount`, {
                                required: "Amount is required",
                                min: { value: 1, message: "Amount must be greater than zero" },
                            })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                            placeholder="Enter amount"
                        />
                        {errors?.[name]?.[index]?.amount && (
                            <p className="text-red-500 text-sm mt-1">{errors[name][index]?.amount?.message}</p>
                        )}
                    </div>
                </fieldset>
            ))}

            <button
                type="button"
                onClick={() => append({ incomeType: IncomeType.Salary, amount: "" })}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Income
            </button>
        </div>
    );
};

export default IncomeSession;
