import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const dataRes = await response.json()
            if (!response.ok) {
                throw data
            }
            console.log(dataRes, '<<<<< hooks')
            setData(dataRes)
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
            // setLoading(false)
        }
    }

    console.log(data)

    useEffect(() => {
        fetchData()
    }, []);

    return {
        data,
        loading
    }
}