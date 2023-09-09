import React from 'react'
import "./bot.css"
import Widget from '@auroraai-bot-platform/rasa-webchat';

const Bot = () => {

    var Bottype;
    const hindi=(event)=>{
        Bottype="hindi";
        event.target.style.display="none";
    }
    const english=(event)=>{
        Bottype="english";
        event.target.style.display="none";
    }
  return (
    <div>
        <div className='parent'>
            <div className='hindi' >
               <button  onClick={hindi}>
               मैं आपकी क्या सहायता कर सकता हूँ?
               </button>
            </div>
            <div className='english'>
                <button onClick={english}>
                    How may I help you?
                </button>
            </div>
            <div className='mainbot'>
            {Bottype==="english"?
            <Widget
      initPayload={"/greet"}
      socketUrl={"http://localhost:5005"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"AgroBot"}
      subtitle="Harvesting Knowledge, Cultivating Prosperity"
      languageList={'en'}
    />: 
    <Widget
    initPayload={"/greet"}
    socketUrl={"http://localhost:5006"}
    socketPath={"/socket.io/"}
    customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
    title={"एग्रोबॉट"}
    subtitle="खेतों की भाषा में सहायक"
    languageList={'en'}/>}
            </div>
        </div>    
    </div>
  )
}

export default Bot