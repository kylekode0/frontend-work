import React from 'react'
import { useParams } from 'react-router-dom'
const socket  = require('../connection/socket').socket

/**
 * 'Join game' is where we actually join the game room. 
 */


const JoinGameRoom = (gameid, userName, isCreator) => {
    /**
     * For this browser instance, we want 
     * to join it to a gameRoom. For now
     * assume that the game room exists 
     * on the backend. 
     *  
     * 
     * TODO: handle the case when the game room doesn't exist. 
     */
    const idData = {
        gameId : gameid,
        userName : userName,
        isCreator: isCreator
    }
    socket.emit("playerJoinGame", idData)
}
  
  
const JoinGame = (props) => {
    /**
     * Extract the 'gameId' from the URL. 
     * the 'gameId' is the gameRoom ID. 
     */
    const { gameid } = useParams()
    JoinGameRoom(gameid, props.userName, props.isCreator)
    return <div>
<<<<<<< HEAD
        <h1 style = {{textAlign: "center"}}>Chess Game</h1>
        <h3 style = {{textAlign: "center"}}>Text1<a href = 'https://Unavailable/' target = '_blank'>Text2</a>. Random Link <a href = 'https://unavailable/' target = '_blank'>Another Link here</a>. Another Link <a href = 'https://unavailable' target = '_blank'>Social Media :)</a>.</h3>
=======
        <h1 style = {{textAlign: "center"}}>Welcome to Chess with Friend!</h1>
        <h3 style = {{textAlign: "center"}}>Made with ❤️ by <a href = 'https://Unavailable/' target = '_blank'>J</a>. Subscribe to my <a href = 'https://unavailable/' target = '_blank'>YouTube channel</a>. Follow me on <a href = 'https://unavailable' target = '_blank'>Instagram</a>.</h3>
>>>>>>> 5b7d264 (Tournament-features)
    </div>
}

export default JoinGame
  
