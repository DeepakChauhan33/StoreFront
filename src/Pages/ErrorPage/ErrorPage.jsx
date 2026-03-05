import React from 'react'
import ErrorImg from "../../Images/ErrorImg.svg"

const ErrorPage = () => {
    return (
        <section
            className="min-h-120 pt-5 text-center bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ErrorImg})` }}
        >

        </section>
    )
}

export default ErrorPage