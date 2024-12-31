import React, { useEffect, useState } from "react";
import { SubmissionAction, SubmissionData, SubmissionStatus } from "../../user/personal-information/model";
import TableLine from "./TableLine";

type Props = {};

const Table = (props: Props) => {
    const [data, setData] = useState<SubmissionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/c/5a22-8836-417c-90c6");
                if (!response.ok) throw new Error("Failed to fetch data");
                const result: SubmissionData[] = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching submissions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAction = async (action: "approve" | "reject", id: string) => {
        try {
            const submission = data.find((item) => item.id === id);
            if (!submission) throw new Error("No submission available to update.");

            const response = await fetch(`https://dummyjson.com/c/cedc-55ba-42aa-b2cb`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ action }),
            });

            if (!response.ok) throw new Error("Failed to update status");

            const updatedSubmission = await response.json();

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, action: updatedSubmission.action } : item
                )
            );

            console.log(`Action '${action}' performed successfully for ${submission.name}`);
        } catch (error) {
            console.error(`Error performing action '${action}':`, error);
        }
    };

    return (
        <>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : data.length > 0 ? (
                            data.map((submission, index) => (
                                <TableLine
                                    key={index}
                                    submissionData={submission}
                                    onChangeAction={handleAction}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center">
                                    No submissions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
