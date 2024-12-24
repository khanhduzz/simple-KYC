import React from 'react'

const EmailPanel = () => {
    return (
        <div className="panel mb-6 dark:text-gray-300 dark:bg-gray-900">
            <h4 className="text-md font-semibold mb-4">Emails</h4>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="email-address" className="block text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        id="email-address"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter email address"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="email-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email-preferred" className="block text-sm font-medium">Preferred</label>
                    <select
                        id="email-preferred"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Email</button>
        </div>
    )
}

export default EmailPanel