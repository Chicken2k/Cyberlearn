import { Fragment, useEffect } from "react";
import { Routes, Route ,redirect, Router ,Redirect, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../util/Setting/config";


const CheckoutTemplate = ({ component: Component, ...restProps }) => {
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem(USER_LOGIN)){
        navigate('/login')
      }
    },[])

  return (
    <Fragment>

      <Component />

    </Fragment>
  );
};

export default CheckoutTemplate;
