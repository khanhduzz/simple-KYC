import React from 'react'

const InvestmentSection = () => {
    return (
        <div className="panel dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4">Investment Experience and Objectives</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="investment-experience" className="block text-sm font-medium">Experience in Financial Markets</label>
                    <select
                        id="investment-experience"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="<5-years">&lt; 5 years</option>
                        <option value="5-10-years">&gt; 5 and &lt; 10 years</option>
                        <option value=">10-years">&gt; 10 years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="risk-tolerance" className="block text-sm font-medium">Risk Tolerance</label>
                    <select
                        id="risk-tolerance"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color dark:text-gray-900">
                        <option value="10%">10%</option>
                        <option value="30%">30%</option>
                        <option value="all-in">All-in</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InvestmentSection