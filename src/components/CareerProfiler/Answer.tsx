import type { Opinion } from '@/types/CareerProfiler';

type Answer = {
  opinion: Opinion;
  isCurrentAnswerActive: boolean;
  handleUpdateAnswer: () => void;
};

export const Answer = ({ opinion, isCurrentAnswerActive, handleUpdateAnswer }: Answer) => {
  return (
    <ul>
      <li>
        <button onClick={handleUpdateAnswer}>{opinion}</button>
      </li>
    </ul>
  );
};
