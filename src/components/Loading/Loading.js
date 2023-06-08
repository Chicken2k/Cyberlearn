import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
  const {isLoading} = useSelector((state)=>state.loadingReducer)
  return (
    <Fragment>
      {isLoading ? <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:99}}>
      <img src='https://i.gifer.com/ZZ5H.gif'
        alt='loading'
      ></img>
    </div> : ''}
    </Fragment>
  )
}
