import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import CounterApp from '@/app/page'
 
describe('Check for Buttons', () => {
  it('it has an increment button', () => {
    render(<CounterApp />);
    const addButton = screen.getByText('Add');
    expect(addButton).toHaveTextContent('Add')
  });

  it('it has a decrement button', () => {
    render(<CounterApp />);
    const subButton = screen.getByText('Sub');
    expect(subButton).toHaveTextContent('Sub')
  });

  it('it has an reset button', () => {
    render(<CounterApp />);
    const resetButton = screen.getByText('Reset');
    expect(resetButton).toHaveTextContent('Reset')
  });

  it('it displays a counter', () => {
    render(<CounterApp />);
    const counterDisplay = screen.getByText('0');
    expect(counterDisplay).toHaveTextContent('0')
  });
});

describe('Check for increment', () => {
  
 it('increment button increases count by 1', () => {
  render(<CounterApp/>);
  const counterDisplay = screen.getByText('0');
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);
  expect(counterDisplay).toHaveTextContent('1');
 
})

 it('increment button increases count by 1. 4 is expected', () => {
  render(<CounterApp/>);
  const counterDisplay = screen.getByText('0');
  const addButton = screen.getByText('Add');
  for(let i = 0; i < 4; i++){
    fireEvent.click(addButton);
  }
   expect(counterDisplay).toHaveTextContent('4');
 
 })

 it('increment button increases count by 1. 50 is expected', () => {
  render(<CounterApp/>);
  const counterDisplay = screen.getByText('0');
  const addButton = screen.getByText('Add');
  for(let i = 0; i < 50; i++){
    fireEvent.click(addButton);
  }
   expect(counterDisplay).toHaveTextContent('50');
  })
})

describe('Check for decrement', () => {
  
  it('decrement button decreases count by 1', () => {
   render(<CounterApp/>);
   const counterDisplay = screen.getByText('0');
   const subButton = screen.getByText('Sub');
   fireEvent.click(subButton);
   expect(counterDisplay).toHaveTextContent('-1');
  
 })
 
  it('decrement button decreases count by 1. -4 is expected', () => {
   render(<CounterApp/>);
   const counterDisplay = screen.getByText('0');
   const subButton = screen.getByText('Sub');
   for(let i = 0; i < 4; i++){
     fireEvent.click(subButton);
   }
    expect(counterDisplay).toHaveTextContent('-4');
  
  })
 
  it('decrement button decreases count by 1. -50 is expected', () => {
   render(<CounterApp/>);
   const counterDisplay = screen.getByText('0');
   const subButton = screen.getByText('Sub');
   for(let i = 0; i < 50; i++){
     fireEvent.click(subButton);
   }
    expect(counterDisplay).toHaveTextContent('-50');
   })
 })

 describe('Reset the button', () => {
  test('resets count to zero when Reset button is clicked', () => {
    render(<CounterApp />);
    const addButton = screen.getByText('Add');
    const resetButton = screen.getByText('Reset');
    const counterDisplay = screen.getByText('0');

    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(resetButton);

    expect(counterDisplay).toHaveTextContent('0');
  });
 });