import { toCapitalize } from "../../../../utils/functions"

type Props = {
    infor: string,
    name: string,
}

const SingleField = ({ infor, name }: Props) => {
    return (
        <>
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor={`${infor}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {toCapitalize(name)}
                </label>
                <input
                    type="text"
                    name={`${infor}`}
                    id={`${infor}`}
                    value={infor}
                    readOnly
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
            </div>
        </>
    )
}

export default SingleField