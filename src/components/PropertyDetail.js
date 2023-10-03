import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Urls } from '../Urls';
import { Card } from './Card';
import { Home } from './Home';

export const PropertyDetail = () => {
    let params = useParams();
    const [propertyDetail, setPropertyDetail] = useState()

    useEffect(()=>{
        const getProperty = async()=>{
            await axios.get(`${Urls}singleProperty/${params._id}`)
            .then((response)=>response)
            .then((data)=>{
                setPropertyDetail(data)
            })
        }
        getProperty();
    },[])

    console.log(propertyDetail)
  return (
    <div>
        <Home/>
    </div>
  )
}
