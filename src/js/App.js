import React from "react";

export default function App() {
  return (
    <>
      <h1>prva komponenta!!!</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("pa bola Tino!");
        }}
      >
        Notify
      </button>
    </>
  );
}
