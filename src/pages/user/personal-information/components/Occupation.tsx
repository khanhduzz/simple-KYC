import React from 'react'

const Occupation = () => {
    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Occupations</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="occupation" className="block text-sm font-medium">Occupation</label>
                    <select
                        id="occupation"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        required>
                        <option value="unemployed">Unemployed</option>
                        <option value="engineer">Engineer</option>
                        <option value="teacher">Teacher</option>
                        <option value="doctor">Doctor</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="occupation-from" className="block text-sm font-medium">From Date</label>
                    <input
                        type="date"
                        id="occupation-from"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="occupation-to" className="block text-sm font-medium">To Date</label>
                    <input
                        type="date"
                        id="occupation-to"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                    />
                </div>
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Occupation</button>
        </div>
    )
}

export default Occupation