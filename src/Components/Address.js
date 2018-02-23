import React from 'react';

const Address = (props) => {
  const { address, balance } = props;

  if (!balance)
    return null;

  const {final_balance, n_tx, total_received } = balance;

  return (
    <div className="col-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>Final Balance</td>
            <td>{final_balance / 100000000} BTC</td>
          </tr>
          <tr>
            <td>No. Transactions </td>
            <td>{n_tx}</td>
          </tr>
          <tr>
            <td>Total Received</td>
            <td>{total_received}</td>
          </tr>
        </tbody>
      </table>
      </div>
  );
}

export default Address;
