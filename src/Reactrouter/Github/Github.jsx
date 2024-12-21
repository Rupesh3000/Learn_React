import React, { useState } from 'react'
import { useEffect } from 'react'
import { data, useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()

    // const [data, setDate] = useState([])

    // useEffect(() => {

    //     fetch('https://api.github.com/users/Rupesh3000')
    //         .then(response => response.json())
    //         .then((data) => {
    //             setDate(data)
    //         })
    // }, [])



    return (

        <div className='text-center bg-gray-600 px-5 text-white m-4'>Github Followers: {data.login}
            <img src={data.avatar_url} alt="" />
        </div>

    )
}

export default Github


export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rupesh3000 ')
    return response.json();
}