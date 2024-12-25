import { useFormContext } from "react-hook-form";
import { UserIdentification } from "../model";

const Identification = () => {

    const { register, formState: { errors } } = useFormContext<UserIdentification>();

    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Identification Documents</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="id-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="id-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        {...register("type", { required: "ID type is required" })}
                    >
                        <option value="national-id">National ID Card</option>
                        <option value="driver-license">Driver License</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-expired" className="block text-sm font-medium">Expiry Date</label>
                    <input
                        type="date"
                        id="id-expired"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        {...register("expiryDate", { required: "Expiry date is required" })}
                    />
                </div>
                <div>
                    <label htmlFor="id-file" className="block text-sm font-medium">Upload Document</label>
                    <input
                        type="file"
                        id="id-file"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        {...register("file"
                            // , { required: "Document upload is required" }
                        )
                        }
                    />
                </div>
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Identification Document</button>
        </div>
    )
}

export default Identification