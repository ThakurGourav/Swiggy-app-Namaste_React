import React from 'react'
import { useState,useEffect } from 'react';

const checkStatus = () => {
    const [checkStatuss,setCheckStatus]=useState(navigator.onLine);
    useEffect(()=>{      
        window.addEventListener('offline',()=>{
            setCheckStatus(false);
        });
        window.addEventListener('online',()=>{
            setCheckStatus(true);
        });
        
    },[]);
    
  return checkStatuss;
};

export default checkStatus;
