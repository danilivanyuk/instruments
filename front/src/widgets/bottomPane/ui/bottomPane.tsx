import { AddTransaction } from '@/features/addTransaction';

export const BottomPane = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[62px] bg-cyan-950 rounded-t-xl">
      <div className="flex justify-center items-center h-full">
        <AddTransaction />
      </div>
    </div>
  );
};
