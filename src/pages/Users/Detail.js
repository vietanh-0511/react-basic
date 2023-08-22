import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

function UserDetail() {

    const location = useLocation()

    const [user, setUser] = useState({})

    useEffect(() => {
        console.log(location.state.id);
        fetchUser(location.state.id)
    }, [])

    const fetchUser = (id) => {
        axios.get('users/' + id).then(response =>{
            setUser(response.data.data)
            console.log(user)
        })
    }

    return(
        <>
            UserDetail
        </>
    )
}

export default UserDetail;