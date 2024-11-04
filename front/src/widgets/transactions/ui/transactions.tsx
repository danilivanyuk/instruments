import React from 'react';

const transaction = {
  title: 'Хлеб',
  category: 'Продукты',
  price: 44,
  date: '21.10 21:24',
};

const transactions = [
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
];

transactions.map((transaction) => console.log(transaction));

export const Transactions = () => {
  return (
    <div className="w-full p-6">
      <p className="mb-3">Recent transactions</p>
      <div className="overflow-auto h-80">
        {transactions.map((transacton, key) => (
          <div className="w-full flex justify-between mb-2" key={key}>
            <div className="flex-col">
              <p>{transacton.title}</p>
              <p>{transacton.category}</p>
            </div>
            <div className="text-right">
              <p>{transacton.price} ₽</p>
              <p>{transacton.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
