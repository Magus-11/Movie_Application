import React,{useState} from 'react';//Brackets are used when the component is not exported by default
import "./style.scss";
const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTabs,setSelectedTabs]=useState(0);
    const [left,setLeft]=useState(0);

    const activeTab=(tab,index)=>{
        setLeft(index * 100);//for moving the carousel item from one to another as all have constant width of 100px
        setTimeout(() => {
            setSelectedTabs(index);
        }, 300);
        onTabChange(tab,index);
    }
  return (
    <div className='switchingTabs'> 
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span 
                    key={index} 
                    className={`tabItem ${selectedTabs===index ? "active" :""}`}
                    onClick={()=>activeTab(tab,index)}
                    >
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTabs