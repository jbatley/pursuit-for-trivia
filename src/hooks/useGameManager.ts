import { useContext } from 'react';
import GameManagerCtx, { GameManager } from 'contexts/GameManagerCtx';

function useGameManager(): GameManager {
  const values = useContext(GameManagerCtx);

  return values;
}

export default useGameManager;