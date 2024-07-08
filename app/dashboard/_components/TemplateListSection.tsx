//@ts-nocheck
import React, { useEffect,useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    aiPrompt:string,
    slug:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
declare const item: any

const TemplateListSection = ({userSearchInput}:any) => {
  useEffect(()=>{
    if(userSearchInput){
      const filterData = Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Templates)
    }

  },[userSearchInput])

  const [templateList,setTemplateList]=useState(Templates)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {Templates.map((item:TEMPLATE,index:number)=>(
            <TemplateCard {...item} />

        ))}
    </div>
  )
}

export default TemplateListSection