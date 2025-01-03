import { useEffect, useState } from "react";
import { showErrorToast } from "../../../../utils/toastUtils";
import { UserSubmission } from "../../personal-information/model";
import UserSubmissionTableLine from "./UserSubmissionTableLine";
import { fetchUserSubmissions } from "../../../../services/api";

type Props = {};

const UserSubmissionTable = (props: Props) => {
    const [data, setData] = useState<UserSubmission[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchUserSubmissions();
                setData(result);
            } catch (error) {
                showErrorToast("Error when fetching submissions!");
                console.error("Error fetching submissions:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Request Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comfirm Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((submission, index) => (
                            <UserSubmissionTableLine key={index} submissionData={submission} setData={setData} />
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
    );
};

export default UserSubmissionTable;
