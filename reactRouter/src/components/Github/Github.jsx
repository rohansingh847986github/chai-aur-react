import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

       const data = useLoaderData()

    // const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohansingh847986github')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // }, [])
  return (
    <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl mb-2 rounded-lg">
      Github Followers: {data.followers}
      <img className=" ml-10" src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/rohansingh847986github')
    return response.json()
}
