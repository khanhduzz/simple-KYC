import React from 'react'

const Income = () => {
    return (
        <div className="panel dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4">Incomes (A)</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="income-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="income-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="salary">Salary</option>
                        <option value="investment">Investment</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="income-amount" className="block text-sm font-medium">Amount (Currency)</label>
                    <input
                        type="number"
                        id="income-amount"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter amount"
                        required
                    />
                </div>
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Income</button>
        </div>
    )
}

export default Income