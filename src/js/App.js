import React from 'react';


export default function app() {
    return (
        <div>
            <h1>React in Electron </h1>
            <h1>Buffalo Soldier</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('My custom notification!');
            }}>Notify</button>
        </div>

    )

}
