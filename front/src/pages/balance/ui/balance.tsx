import { PageContainer } from '@/shared/ui/pageContainer';
import { BottomPane } from '@/widgets/bottomPane';
import { Budgets } from '@/widgets/budgets/ui/budgets';
import { Transactions } from '@/widgets/transactions';

export const Balance = () => {
  return (
    <PageContainer>
      <Budgets />
      <Transactions />
      <BottomPane />
    </PageContainer>
  );
};
