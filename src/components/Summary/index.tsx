import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p className="title">Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>$ 1,000.00</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>$-500.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$ 500.00</strong>
      </div>
    </Container>
  )
}