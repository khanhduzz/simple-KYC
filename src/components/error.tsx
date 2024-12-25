import React from 'react'

type Props = { errors?: string }

const ErrorMessage = ({ errors }: Props) => {
    const check = errors ? errors : '';

    return (
        <p className="text-red-500 text-sm mt-1">{check}</p>
    )
}

export default ErrorMessage