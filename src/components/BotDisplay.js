import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./BotArmy";

function BotDisplay() {

    const [bots, setBots] = useState([])
    const [myBotsArmy, setMyBotsArmy] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then(res => res.json())
            .then(data => { setBots(data) })
    }, [])

    const botsElement = bots.map(bot => {
        return <BotCollection
            key={bot.id}
            bot={bot}
            AddMyBot={AddMyBot}
            deleteBot={deleteBot} />
    })

    function AddMyBot(item) {
        if (!myBotsArmy.includes(item)) {
            setMyBotsArmy(prevState => {
                return [...prevState, item]
            })
        }
    }

    const myBotElement = myBotsArmy.map((bot, index) => {
        return <BotArmy
            key={index}
            mybot={bot}
            dischargeBot={dischargeBot} />
    })

    function dischargeBot(element) {

        setMyBotsArmy(prevState => {
            return prevState.filter(bot => bot !== element);
        });

    }

    function deleteBot(id) {
        fetch(`http://localhost:3000/bots/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                const updatedBots = bots.filter(bot => bot.id !== id)
                setBots(updatedBots)
            })
        console.log('clicked');
    }

    return (
        <div className="bots-containers">
            <div className="bot-collection">
                {myBotElement}
            </div>
            <div className='bots-collection'>
                {botsElement}
            </div>
    
        </div>
    )
}

export default BotDisplay;