import {useState,useEffect} from 'react';
import {api}  from '../../services/api';
import { useNavigate} from "react-router-dom";

export default function LoginUser(){
    const [authenticated,setAuthenticated] = useState(false);	
    const navigate = useNavigate();
    const [senhaD,setSenhaD] = useState('');
    const [emailD,setEmailD] = useState('');
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    
    //     if (token) {
    //       api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    //       setAuthenticated(true);
    //     }
    
    //     setLoading(false);
    // }, []);

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const res = await api.post('/login',{email:emailD,password:senhaD})
            localStorage.setItem('token',JSON.stringify(res.token));
            api.defaults.headers.Authorization = `Bearer ${res.token}`;
            if(res)setAuthenticated(true);
            console.log(res)
            navigate("/ideias");
        }catch(err){
            console.log(err);
        }
       
    }

    function handleLogout(){
        setAuthenticated(false)
        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;
        navigate("/");
    }


    return { authenticated,loading,setAuthenticated,handleLogin,handleLogout,senhaD,setSenhaD,emailD,setEmailD};
}