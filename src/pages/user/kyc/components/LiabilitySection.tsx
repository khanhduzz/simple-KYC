import React from 'react'

const LiabilitySection = () => {
    return (
        <div className="panel dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4">Liabilities (C)</h3>
            <p className="text-sm mb-4 text-gray-600">
                Liabilities are any outstanding debts or obligations you may have. These can include loans such as personal loans, mortgages, or other forms of debt.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="liability-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="liability-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="personal-loan">Personal Loan</option>
                        <option value="real-estate-loan">Real Estate Loan</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="liability-amount" className="block text-sm font-medium">Amount (Currency)</label>
                    <input
                        type="number"
                        id="liability-amount"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter amount"
                        required
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="liabilities-total" className="block text-sm font-medium">Total Liabilities</label>
                <input
                    type="number"
                    id="liabilities-total"
                    className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                    placeholder="Calculated Total"
                    readOnly
                />
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Liability</button>
        </div>
    )
}

export default LiabilitySection