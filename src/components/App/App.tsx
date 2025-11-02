import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import type { Votes, VoteType } from '../../types/votes';
import css from './App.module.css';

export default function App() {
  // Стан з кількістю голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // ✅ Оновлення стану голосів
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
