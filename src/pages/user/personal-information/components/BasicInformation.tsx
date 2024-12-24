const BasicInformation = () => {
    return (
        <div className="border panel rounded-md p-4 dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter your first name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter your last name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="middle-name" className="block text-sm font-medium">Middle Name</label>
                    <input
                        type="text"
                        id="middle-name"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter your middle name"
                    />
                </div>
                <div>
                    <label htmlFor="dob" className="block text-sm font-medium">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium">Age</label>
                    <input
                        type="number"
                        id="age"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter your age"
                        required
                    />
                </div>
            </div>
        </div >
    )
}

export default BasicInformation