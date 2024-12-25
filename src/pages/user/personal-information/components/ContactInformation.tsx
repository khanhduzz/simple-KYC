import AddressPanel from './AddressPanel'
import EmailPanel from './EmailPanel'
import PhonePanel from './PhonePanel'

const ContactInformation = () => {

    return (
        <div className="border panel rounded-md p-4 dark:text-gray-300 dark:bg-gray-900">
            <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-gray-300">Contact Information</h3>
            {/* <AddressPanel /> */}
            <EmailPanel />
            <PhonePanel />
        </div>
    )
}

export default ContactInformation