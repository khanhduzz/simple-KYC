import { useFieldArray, useFormContext } from "react-hook-form";
import { LiabilityType, UserData } from "../../personal-information/model";

type Props = {
    disable?: boolean
}

const LiabilitySection = ({ disable = false }: Props) => {
    const name = "liabilities";

    const { register, formState: { errors }, control, watch } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    const liabilities = watch(name) || [];
    const totalLiabilities = liabilities.reduce((total, item) => total + (Number(item.amount) || 0), 0);

    return (
        <div className={`panel dark:text-gray-300 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <h3 className="text-lg font-medium mb-4">Liabilities (C)</h3>
            <p className="text-sm mb-4 text-gray-600">
                Liabilities are any outstanding debts or obligations you may have. These can include loans such as personal loans, mortgages, or other forms of debt.
            </p>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-2 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 flex justify-between w-full gap-2 items-center">
                        <span>Liability #{index + 1}</span>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn-danger px-2 py-1 rounded-md"
                        >
                            Delete
                        </button>
                    </legend>

                    <div>
                        <label htmlFor={`${name}.${index}.liability-type`} className="block text-sm font-medium">
                            Type
                        </label>
                        <select
                            id={`${name}.${index}.liability-type`}
                            {...register(`${name}.${index}.liabilityType`, { required: "Liability type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        >
                            <option value="personal-loan">Personal Loan</option>
                            <option value="real-estate-loan">Real Estate Loan</option>
                            <option value="others">Others</option>
                        </select>
                        {errors?.[name]?.[index]?.liabilityType && (
                            <p className="text-red-500 text-sm mt-1">{errors[name][index]?.liabilityType?.message}</p>
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
            <div className="mt-4">
                <label htmlFor="liabilities-total" className="block text-sm font-medium">Total Liabilities</label>
                <input
                    type="number"
                    id="liabilities-total"
                    value={totalLiabilities}
                    readOnly
                    className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                />
            </div>

            <button
                type="button"
                onClick={() => append({ liabilityType: LiabilityType.PersonalLoan, amount: "", totalAmount: '' })}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Liability
            </button>
        </div>
    );
};

export default LiabilitySection;
