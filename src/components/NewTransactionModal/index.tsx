import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Close Modal" />
    </button>
    <Container>

      <h2>Create new transaction</h2>

      <input 
        type="text"
        placeholder="Title"
      />

      <input 
        type="number" 
        placeholder="Amount"
      />

      <TransactionTypeContainer>
        <button>
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </button>

        <button>
          <img src={expenseImg} alt="Expense" />
          <span>Expense</span>
        </button>
      </TransactionTypeContainer>

      <input
        placeholder="Category" 
      />

      <button type="submit">Add Transaction</button>
    </Container>
  </Modal>
  );
}