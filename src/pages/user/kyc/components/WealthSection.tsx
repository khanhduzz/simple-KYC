const WealthSection = () => {
    return (
        <div className="panel dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4">Source of Wealth (D)</h3>
            <p className="text-sm mb-4 text-gray-600">
                This section identifies the origin of your wealth, such as any inheritance or donations you may have received. It's important htmlFor financial transparency.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="wealth-type" className="block text-sm font-medium">Type</label>
                    <select
                        id="wealth-type"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="inheritance">Inheritance</option>
                        <option value="donation">Donation</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wealth-amount" className="block text-sm font-medium">Amount (Currency)</label>
                    <input
                        type="number"
                        id="wealth-amount"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                        placeholder="Enter amount"
                        required
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="wealth-total" className="block text-sm font-medium">Total Source of Wealth</label>
                <input
                    type="number"
                    id="wealth-total"
                    className="w-full px-4 py-2 mt-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900"
                    placeholder="Calculated Total"
                    readOnly
                />
            </div>
            <button type="button" className="btn-primary px-4 py-2 mt-4 rounded-md">Add Source of Wealth</button>
        </div>
    )
}

export default WealthSection