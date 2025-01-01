import { SubmissionAction, SubmissionData, SubmissionStatus } from "../../user/personal-information/model";

type Props = {
    submissionData: SubmissionData
    onChangeAction: (action: 'approve' | 'reject', id: string) => void;
};

const TableLine = ({ submissionData, onChangeAction }: Props) => {

    const { name, status, date, action } = submissionData;

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">
                    <a href={`${submissionData.id}/pi`}>
                        {name}
                    </a>
                </td>
                <td className="px-6 py-4">
                    <span
                        className={`px-2 py-1 text-xs font-medium leading-tight rounded-full ${status === SubmissionStatus.Active
                            ? 'text-green-700 bg-green-100'
                            : status === SubmissionStatus.Inactive
                                ? 'text-red-700 bg-red-100'
                                : 'text-yellow-700 bg-yellow-100'
                            }`}
                    >
                        {status}
                    </span>
                </td>
                <td className="px-6 py-4">{date}</td>
                <td className="px-6 py-4 text-right">
                    {action === SubmissionAction.Waiting ? (
                        <>
                            <button
                                className="text-green-600 dark:text-green-500 hover:underline mr-2"
                                onClick={() => onChangeAction("approve", submissionData.id)}
                            >
                                Approve
                            </button>
                            <button
                                className="text-red-600 dark:text-red-500 hover:underline"
                                onClick={() => onChangeAction("reject", submissionData.id)}
                            >
                                Reject
                            </button>
                        </>
                    ) : (
                        <span
                            className={`px-2 py-1 text-xs font-medium leading-tight rounded-full ${submissionData.action === SubmissionAction.Approve
                                ? "text-green-700 bg-green-100"
                                : "text-red-700 bg-red-100"
                                }`}
                        >
                            {submissionData.action === SubmissionAction.Approve ? "Approved" : "Rejected"}
                        </span>
                    )}
                </td>

            </tr>
        </>
    );
};

export default TableLine;
