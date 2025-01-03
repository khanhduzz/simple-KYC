import { useState } from "react";
import { UserSubmission, UserSubmissionAction, SubmissionAction } from "../../personal-information/model";
import { showErrorToast, showSuccessToast } from "../../../../utils/toastUtils";
import { updateSubmissionStatus } from "../../../../services/api";

type Props = {
    submissionData: UserSubmission;
    setData: React.Dispatch<React.SetStateAction<UserSubmission[]>>;
};

const UserSubmissionTableLine = ({ submissionData, setData }: Props) => {
    const { id, name, status, requestDate, confirmDate, action } = submissionData;
    const [loading, setLoading] = useState(false);

    const handleActionUpdate = async (newAction: UserSubmissionAction) => {
        setLoading(true);
        try {
            // Just fake data here
            const updatedSubmission = await updateSubmissionStatus(id, "approve");
            console.log(updatedSubmission);

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id
                        ? { ...item, action: newAction }
                        : item
                )
            );
            showSuccessToast(`${newAction} submission successfully!`);
        } catch (error) {
            showErrorToast("Failed to update submission action!");
            console.error(`Error updating action to '${newAction}':`, error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4">
                <a href={`${id}/pi`}>{name}</a>
            </td>
            <td className="px-6 py-4">
                <span
                    className={`px-2 py-1 text-xs font-medium leading-tight rounded-full ${
                        status === SubmissionAction.Approve
                            ? "text-green-700 bg-green-100"
                            : status === SubmissionAction.Reject
                            ? "text-red-700 bg-red-100"
                            : "text-yellow-700 bg-yellow-100"
                    }`}
                >
                    {status}
                </span>
            </td>
            <td className="px-6 py-4">{requestDate}</td>
            <td className="px-6 py-4">{confirmDate || "N/A"}</td>
            <td className="px-6 py-4">
                <button
                    onClick={() =>
                        handleActionUpdate(
                            action === UserSubmissionAction.Request
                                ? UserSubmissionAction.Cancel
                                : UserSubmissionAction.Request
                        )
                    }
                    disabled={loading || status != SubmissionAction.Waiting}
                    className={`px-3 py-2 text-xs font-medium leading-tight rounded ${
                        action === UserSubmissionAction.Request
                            ? "bg-red-700 hover:bg-red-800 text-white"
                            : "bg-blue-700 hover:bg-blue-800 text-white"
                    } ${status != SubmissionAction.Waiting ? "hidden" : ''}`}
                >
                    {loading ? "Updating..." : action === UserSubmissionAction.Request ? "Cancel" : "Request"}
                </button>
            </td>
        </tr>
    );
};

export default UserSubmissionTableLine;
