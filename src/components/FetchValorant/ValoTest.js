import { useState, useEffect } from 'react';
import styles from './Valo.module.css';

const ValoFetch = () => {
  const [agents, setAgents] = useState(null);
  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((result) => {
        setAgents(result);
      });
  }, []);

  return (
    agents && (
      <ol className={styles.testimg}>
        {agents.data.map((agent) => (
          <li key={agent.uuid}>
            <img src={agent.displayIcon} alt="" />
            <h3>{agent.displayName}</h3>
          </li>
        ))}
      </ol>
    )
  );
};
export default ValoFetch;

// isPlayableCharacter=true för att inte rendera ut 2 sovas... men vart?
