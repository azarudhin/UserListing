import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {Avatar} from 'baseui/avatar';
import {useStyletron} from 'baseui';
import {expandBorderStyles} from 'baseui/styles';
import UserList from './UserList';
import { useNavigate } from 'react-router-dom';
export default function PageList({setIsList}) {
    const fetchPanets = async () => {
        const result = await fetch('https://api.github.com/users',{
            headers:{
                'X-GitHub-Api-Version': '2022-11-28',
                'Accept': 'application/vnd.github+json',
                // 'Authorization':'Bearer <YOUR-TOKEN>'
            }
        })
        return result.json()
        }
        
      const { data, status,isLoading } = useQuery('Planets', fetchPanets)
   
      
      let navigate = useNavigate();
      const Changed=(e)=>{
           console.log("data", e)
      setIsList(e)
       }
  return (
        
        <div>
        
        <h2 style={{textAlign:'left',padding:'30px',fontSize:'24px',fontFamily: "'Raleway', sans-serif"}}>Users</h2>    
     <div className='over_all_card'>
        {isLoading?
        <>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h3>Loading...</h3>
        </div>
        </>
        
        :data&&data.map((e,i)=>{
            return(
                <>
                
     <div className='card' onClick={()=>{
        navigate('/userlist')
        Changed(e)
        
    }
    }>
        <div style={{width:'130px'}}>
   
      <img src={`${e.avatar_url}`} alt="Avatar" class="avatar"/>
    
  
        </div>
        <div style={{width:'120px'}}>
        <div className='headersection'>
            <h2 className='firstname'>{e.login}</h2>
            <h2 className='firstname'>{e&&e.logn}</h2>
        </div>
<h4>{e.login}</h4>
        </div>
     </div>
     {/* <div className='card'>
        <div>
   
      <img src="https://avatars.githubusercontent.com/u/5?v=4" alt="Avatar" class="avatar"/>
    
  
        </div>
        <div>
        <div className='headersection'>
            <h2 className='firstname'>FirstName</h2>
            <h2 className='firstname'>LastName</h2>
        </div>
<h4>User Name</h4>
        </div>
        
     </div> */}
                </>
            )
        })    
        }

     </div>
        </div>
    

  )
}
