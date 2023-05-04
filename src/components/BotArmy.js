import React from 'react';

function BotArmy({mybot = [], dischargeBot}){
    return (
        <div className='each-bot' onClick={()=> dischargeBot(mybot)}>
            <img src={mybot.avatar_url} alt="Avatar Loading..." />
            <h5>{mybot.name}</h5>
            <p>{mybot.catchphrase}</p>
            <span>
                <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{mybot.health}</p>
                <p><i className="fa fa-bolt" aria-hidden="true"></i>{mybot.damage}</p>
                <p><i className="fa fa-shield" aria-hidden="true"></i>{mybot.armor}</p>
            </span>
        </div>
    )
}

export default BotArmy;