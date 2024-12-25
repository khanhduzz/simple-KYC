import React from 'react'

const PhonePanel = () => {
    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h4 className="text-md font-semibold mb-4">Phones</h4>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone-number" className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="tel"
                        id="phone-number"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter phone number"
                        // required
                    />
                </div>
                <div>
                    <label htmlFor="phone-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="phone-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phone-preferred" className="block text-sm font-medium">Preferred</label>
                    <select
                        id="phone-preferred"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Phone</button>
        </div>
    )
}

export default PhonePanel