import {useState,useEffect} from 'react';
import api  from '../services/api';
import { useHistory} from "react-router-dom";

export default function useAuth(){
    const [authenticated,setAuthenticated] = useState(false);	
    const history = useHistory();
    const [senha,setSenha] = useState('');
    const [email,setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
          setAuthenticated(true);
        }
    
        setLoading(false);
    }, []);

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const res = await api.post('/login',{email:email,password:senha})
            localStorage.setItem('token',JSON.stringify(res.token));
            api.defaults.headers.Authorization = `Bearer ${res.token}`;
            setAuthenticated(true);
            console.log(res)
            history.push("/ideias");
        }catch(err){
            console.log(err);
        }
    //    const { user:{token} } = await  api.post('/login');
    //    api.post('/login',{email:email,password:senha})
    //    .then(res => {
    //         localStorage.setItem('token',JSON.stringify(res.token));
    //         api.defaults.headers.Authorization = `Bearer ${res.token}`;
    //         setAuthenticated(true);
    //         console.log(res)
    //         history.push("/ideias");
    //    }).catch(error => {error.message = 'Usuário ou senha inválidos'});

       
    }
    
    function handleLogout(){
        setAuthenticated(false)
        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;
        history.push("/");
    }


    return { authenticated,loading,setAuthenticated,handleLogin,handleLogout,senha,setSenha,email,setEmail };
}