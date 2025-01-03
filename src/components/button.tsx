import React from 'react'

type Props = {
    term?: boolean;
    loading?: boolean;
    title: string;
    onClick?: () => void;
    padding?: string;
    textColor?: string;
    bgColor?: string;
    disabledBgColor?: string;
    hoverBgColor?: string;
    borderRadius?: string;
}

const PrimaryButton = ({
    term = true,
    loading = false,
    title,
    onClick,
    padding = "px-5 py-3",
    textColor = "text-white",
    bgColor = "bg-primary-700",
    disabledBgColor = "bg-gray-500",
    hoverBgColor = "hover:bg-primary-800",
    borderRadius = "rounded-lg",
}: Props) => {
    return (
        <button
            type="button"
            disabled={!term || loading}
            onClick={onClick}
            className={`w-full ${padding} text-base font-medium text-center ${textColor} ${borderRadius} focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 
                ${!term || loading
                    ? `${disabledBgColor} cursor-not-allowed`
                    : `${bgColor} ${hoverBgColor}`
                }`}
        >
            {loading ? (
                <div className="flex items-center justify-center">
                    <svg
                        className="w-5 h-5 mr-2 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                        ></path>
                    </svg>
                    {title}
                </div>
            ) : (
                title
            )}
        </button>
    )
}

export default PrimaryButton
