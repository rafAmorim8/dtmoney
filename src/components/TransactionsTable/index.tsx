import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){
  const { transactions } = useTransactions();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction =>  (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.transactionType}>
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('en-IN').format(new Date(transaction.createdAt))}
                </td>
              </tr>
              )
            )
          }
        </tbody>
      </table>
    </Container>
  );
}