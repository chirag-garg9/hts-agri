import React, { useState } from 'react'
import "./bot.css"
import Widget from '@auroraai-bot-platform/rasa-webchat';

const Bot = () => {
    // const[Bottype,setBottype]=useState();

    
   

    // const hindi=(event)=>{
    //     setBottype("hindi");
    //   console.log(Bottype);
       
    // }
    // const english=(event)=>{
    //    setBottype("english");
    //   console.log(Bottype);
        
    // }
  return (
    <div>
        <div className='parent'>
            {/* <div className='hindi side-btn btn' >
               <button  onClick={hindi}>
                HI
               </button>
            </div>
            <div className='english side-btn btn'>
                <button onClick={english}>
                    EN
                </button>
            </div> */}
            {/* <div className='mainbot'>
            {Bottype==="english"?
            <Widget
      initPayload={""}
      socketUrl={"http://localhost:6005"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"AgroBot"}
      subtitle="Harvesting Knowledge"
      languageList={'en'}
    />: 
    <Widget
    initPayload={""}
    socketUrl={"http://localhost:5005"}
    socketPath={"/socket.io/"}
    customData={{"language": "hi"}} // arbitrary custom data. Stay minimal as this will be added to the socket
    title={"एग्रोबॉट"}
    subtitle="खेतों की भाषा में सहायक"
    languageList={'hi'}/>}
            </div> */}
        </div> 
    {/* <Widget
      initPayload={""}
      socketUrl={"http://localhost:6005"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"AgroBot"}
      subtitle="Harvesting Knowledge"
      languageList={'en'}
    /> */}
      <Widget
    initPayload={""}
    socketUrl={"http://localhost:5005"}
    socketPath={"/socket.io/"}
    customData={{"language": "hi"}} // arbitrary custom data. Stay minimal as this will be added to the socket
    title={"एग्रोबॉट"}
    subtitle="खेतों की भाषा में सहायक"
    languageList={'hi'}/> 
    </div>
  )
}

export default Bot