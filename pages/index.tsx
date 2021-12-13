import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import fetch from 'node-fetch';
import api from '../http/api';
import {changeUserAC} from "../redux/actions/index"
import axios from 'axios';
import Publish from '../components/common/Publish/Publish';
import { compileString } from 'sass';

const Home: NextPage = (props:any) => {
//异步请求的数据(客户端渲染);
  const [name,setName]=useState<any>("")
  useEffect(()=>{
    (async()=>{
      const res:any =await axios({
        url:"https://api.apiopen.top/getSingleJoke?sid=28654780"
      })
      setName(res.result.name)
      console.log("客户端获取的数据",res);
      console.log("服务端注入的数据",props);
    })();
  },[])
//异步请求的数据(客户端渲染);

  //状态机内部的数据;
  const stateData:any = useSelector<any>(state=>{
    console.log("状态机数据",state);
    return state
  })
  //状态机内部的数据;

  //派发action修改状态机内部的数据;
  const dispatch = useDispatch();
  const changeRedux=()=>{
    dispatch(changeUserAC("李海"))
  } 
  //派发action修改状态机内部的数据;

  //调用封装的axios获取后台数据
  const getData = async () => {
    const res:any = await api.dataManage.GetCollectionData();
    console.log('请求结果',res);
    alert(`请求结果${res.result.name}`)
  };
  //调用封装的axios获取后台数据

  const compareEffect=async()=>{
    window.location.reload()
  }

  //saga拦截
  const goToSaga=()=>{
    dispatch(
      {
        type:'changeUserData',
        payload:'刘利'
      }
    )
  } 
  //saga拦截

  return (
    <>
          <div style={{marginLeft:30}}>
            <p>来自服务端注入预渲染的:{props.data.result.name}</p>
            <p>来自异步请求返回的:{name}</p>
            <p><button style={{background:"black",color:"white"}} onClick={()=>compareEffect()}>对比服务端渲染和客户端渲染效果</button></p>
            <p>来自Redux的数据:{stateData.user.users}</p>
            <p><button style={{background:"black",color:"white"}} onClick={()=>changeRedux()}>派发事件修改redux数据</button></p>
            <p><button style={{background:"black",color:"white"}} onClick={()=>getData()}>调用封装的axios获取后台数据</button></p>
            <p><button style={{background:"black",color:"white"}} onClick={()=>goToSaga()}>通过saga中间件拦截后修改redux数据</button></p>
            <div style={{marginLeft:0,marginTop:30}}><Publish/></div>
          </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.apiopen.top/getSingleJoke?sid=28654780`)
  const data = await res.json()
  return { props: { data } }
}
// export async function getStaticProps() {
//   const res = await fetch('...')
//   const posts = await res.json()
//   return {
//     props: {
//       return { props: { data } }
//     },
//   }
// }
export default Home
