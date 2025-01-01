import { useFieldArray, useFormContext } from "react-hook-form";
import { SourceOfWealthType, UserData } from "../../personal-information/model";

type Props = {
    disable?: boolean
}

const WealthSection = ({ disable = false }: Props) => {
    const name = "sourceOfWealths";

    const { register, formState: { errors }, control, watch } = useFormContext<UserData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    const wealth = watch(name) || [];
    const totalWealth = wealth.reduce((total, item) => total + (Number(item.amount) || 0), 0);

    return (
        <div className={`panel dark:text-gray-300 dark:bg-gray-900 ${disable ? 'disabled' : ''}`}>
            <h3 className="text-lg font-medium mb-4">Source of Wealth (D)</h3>
            <p className="text-sm mb-4 text-gray-600">
                This section identifies the origin of your wealth, such as any inheritance or donations you may have received. It's important for financial transparency.
            </p>

            {fields.map((item, index) => (
                <fieldset key={item.id} className="grid grid-cols-2 gap-4 border rounded-md p-4 mb-4">
                    <legend className="text-sm font-medium text-gray-600 dark:text-gray-400 flex justify-between w-full gap-2 items-center">
                        <span>Wealth Source #{index + 1}</span>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn-danger px-2 py-1 rounded-md"
                        >
                            Delete
                        </button>
                    </legend>

                    <div>
                        <label htmlFor={`${name}.${index}.wealth-type`} className="block text-sm font-medium">
                            Type
                        </label>
                        <select
                            id={`${name}.${index}.wealth-type`}
                            {...register(`${name}.${index}.sourceOfWealthType`, { required: "Wealth type is required" })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        >
                            <option value="inheritance">Inheritance</option>
                            <option value="donation">Donation</option>
                        </select>
                        {errors?.[name]?.[index]?.sourceOfWealthType && (
                            <p className="text-red-500 text-sm mt-1">{errors[name][index]?.sourceOfWealthType?.message}</p>
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
                <label htmlFor="wealth-total" className="block text-sm font-medium">Total Source of Wealth</label>
                <input
                    type="number"
                    id="wealth-total"
                    value={totalWealth}
                    readOnly
                    className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                />
            </div>

            <button
                type="button"
                onClick={() => append({ sourceOfWealthType: SourceOfWealthType.Inheritance, amount: "", totalAmount: "" })}
                className="btn-primary px-4 py-2 mt-4 rounded-md"
            >
                Add Source of Wealth
            </button>
        </div>
    );
};

export default WealthSection;
