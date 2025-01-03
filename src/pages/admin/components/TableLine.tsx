import { SubmissionAction, SubmissionData, SubmissionStatus } from "../../user/personal-information/model";
import { updateSubmissionStatus } from "../../../services/api";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import { toCapitalize } from "../../../utils/functions";
import { useState } from "react";
import PrimaryButton from "../../../components/button";

type Props = {
    submissionData: SubmissionData;
    setData: React.Dispatch<React.SetStateAction<SubmissionData[]>>;
};

const TableLine = ({ submissionData, setData }: Props) => {
    const { name, status, date, action } = submissionData;
    const [loading, setLoading] = useState(false);
    const [modalAction, setModalAction] = useState<"approve" | "reject" | null>(null);

    const handleAction = async (action: "approve" | "reject") => {
        setLoading(true);
        try {
            const updatedSubmission = await updateSubmissionStatus(submissionData.id, action);
            console.log(updatedSubmission);

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === submissionData.id
                        ? {
                            ...item,
                            action: action === "approve" ? SubmissionAction.Approve : SubmissionAction.Reject,
                            status: action === "approve" ? SubmissionStatus.Active : SubmissionStatus.Inactive,
                        }
                        : item
                )
            );

            showSuccessToast(`${toCapitalize(action)} submission successfully!`);
        } catch (error) {
            showErrorToast("Update submission failed!");
            console.error(`Error performing action '${action}':`, error);
        } finally {
            setLoading(false);
            setModalAction(null);
        }
    };

    const openModal = (action: "approve" | "reject") => {
        setModalAction(action);
    };

    const closeModal = () => {
        setModalAction(null);
    };

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">
                    <a href={`${submissionData.id}/pi`}>{name}</a>
                </td>
                <td className="px-6 py-4">
                    <span
                        className={`px-2 py-1 text-xs font-medium leading-tight rounded-full ${status === SubmissionStatus.Active
                            ? "text-green-700 bg-green-100"
                            : status === SubmissionStatus.Inactive
                                ? "text-red-700 bg-red-100"
                                : "text-yellow-700 bg-yellow-100"
                            }`}
                    >
                        {status}
                    </span>
                </td>
                <td className="px-6 py-4">{date}</td>
                <td className="px-6 py-4 text-center" style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                    {action === SubmissionAction.Waiting ? (
                        <>
                            <PrimaryButton
                                title="Approve"
                                onClick={() => openModal("approve")}
                                padding="px-3 py-2"
                                bgColor="bg-green-700"
                                hoverBgColor="hover:bg-green-800"
                                textColor="text-white"
                            />
                            <PrimaryButton
                                title="Reject"
                                onClick={() => openModal("reject")}
                                padding="px-3 py-2"
                                bgColor="bg-red-700"
                                hoverBgColor="hover:bg-red-800"
                                textColor="text-white"
                            />
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

            {modalAction && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-center mb-4">
                            <p className="text-lg">
                                Are you sure you want to {modalAction === "approve" ? "approve" : "reject"} this submission?
                            </p>
                        </div>
                        <div className="flex justify-center gap-6">
                            <PrimaryButton
                                title="Cancel"
                                onClick={closeModal}
                                padding="px-3 py-2"
                                bgColor="bg-gray-700"
                                hoverBgColor="hover:bg-gray-800"
                                textColor="text-white"
                            />
                            <PrimaryButton
                                title={toCapitalize(modalAction)}
                                loading={loading}
                                onClick={() => handleAction(modalAction)}
                                padding="px-3 py-2"
                                bgColor={modalAction === "approve" ? "bg-green-700" : "bg-red-700"}
                                hoverBgColor={modalAction === "approve" ? "hover:bg-green-800" : "hover:bg-red-800"}
                                textColor="text-white"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TableLine;
