import React from 'react'

const NetworthSection = () => {
    return (
        <div className="panel dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4">Net Worth</h3>
            <div>
                <label htmlFor="net-worth-total" className="block text-sm font-medium">Total</label>
                <input
                    type="number"
                    id="net-worth-total"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                    placeholder="Automatically calculated"
                    disabled
                />
            </div>
        </div>
    )
}

export default NetworthSection