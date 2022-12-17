import { useEffect, useState } from "react"

const useCustomers = () =>{
    const [customerReviews, setCustomerReviews] = useState([]);
    useEffect( () =>{
        fetch('customers.json')
        .then(res => res.json())
        .then(data => setCustomerReviews(data))
    }, [])

    return [customerReviews, setCustomerReviews];
}

export default useCustomers;