import { Container } from "./styles";

export function TransactionsTable(){
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
          <tr>
            <td>Website Development</td>
            <td className="deposit">$ 12,000.00</td>
            <td>Development</td>
            <td>02/20/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdrawal">$ -1,200.00</td>
            <td>Housing</td>
            <td>02/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}