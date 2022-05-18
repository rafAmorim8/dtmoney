import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useContext(TransactionsContext);
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      transactionType,
    });

    setTitle('');
    setCategory('');
    setTransactionType('');
    setAmount(0);

    onRequestClose();
  }

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
    <Container onSubmit={handleCreateNewTransaction}>

      <h2>Create new transaction</h2>

      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input 
        type="number" 
        placeholder="Amount"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
      />

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => setTransactionType('deposit')}
          isActive={transactionType === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setTransactionType('withdrawal')}
          isActive={transactionType === 'withdrawal'}
          activeColor="red"
        >
          <img src={expenseImg} alt="Expense" />
          <span>Expense</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input
        placeholder="Category"
        value={category}
        onChange={event => setCategory(event.target.value)} 
      />

      <button type="submit">Add Transaction</button>
    </Container>
  </Modal>
  );
}