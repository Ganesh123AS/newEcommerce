import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AdminAccessControl = ({Component}) => {
    let token = localStorage.getItem("user_token");
    let [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect( () => {
        if(!token){
            navigate("/login")
        }else{
            // api integration for token verification
            let user_detail = {
                result: {
                    _id: 1,
                    name: "sameer",
                    email: "sameer@gmail.com",
                    role: "admin"
                }
            }
            if(user_detail.result.role !== "admin"){
                toast.warning("You do not have permission to access admin pannel")
            }
            setLoading(false);
        }
    }, [])
    return ( Component )
}

export default AdminAccessControl;