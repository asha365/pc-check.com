import { useEffect, useState } from "react"

const useView = () =>{
    const [visible, setVisible] = useState(3);
    useEffect( () =>{
        fetch('customers.json')
        .then(res => res.json())
        .then(data => setVisible(data))
    }, [])

    return [visible, setVisible];
}

export default useView;