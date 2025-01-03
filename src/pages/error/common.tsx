type Props = {}

const CommonError = (props: Props) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
                <div className="block mb-5 md:max-w-md">
                    <img src="/icons/error.svg" alt="404 Not found" style={{ width: '150px' }} />
                </div>
                <div className="text-center xl:max-w-4xl">
                    <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Some thing went wrong!!!</h1>
                    <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
                        <a
                            href="/" className="text-primary-700 hover:underline dark:text-primary-500">Back to Homepage</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CommonError