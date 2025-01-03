import UserSubmissionTable from "./components/UserSubmissionTable"

type Props = {}

const UserSubmission = (props: Props) => {
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Submissions</h1>
                <UserSubmissionTable />
            </div>
        </>
    )
}

export default UserSubmission