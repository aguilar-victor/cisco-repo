import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import './Latency.css';

function Latency() {
  const [latency, setLatency] = useState(null);
  const { lastMessage } = useWebSocket('ws://localhost:55455');

  useEffect(() => {
    if (lastMessage !== null) {
      const packetTimestamp = Number(lastMessage.data);
      const currentTimestamp = Date.now();
      setLatency(currentTimestamp - packetTimestamp);
    }
  }, [lastMessage]);

  return (
    <div className="exhibit-card">
      <h2 className="exhibit-title">Packet Latency</h2>
      <div className="exhibit-content">
        {latency !== null ? (
          <p>{latency} ms</p>
        ) : (
          <p>Waiting for data...</p>
        )}
      </div>
    </div>
  );
}

export default Latency;