import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

import "./index.css";

const TabelData = () => {
  const { dispatch, transactions } = useContext(TransactionContext);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Note</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((eachItem) => (
            <tr key={eachItem.id}>
              <td>{eachItem.date}</td>
              <td>{eachItem.category}</td>
              <td>{eachItem.note}</td>
              <td>{eachItem.amount}</td>
              <td>
                <button className="table-icons">
                  <CiEdit className="table-icon" />
                </button>
              </td>
              <td>
                <button
                  className="table-icons"
                  onClick={() =>
                    dispatch({ type: "DELETE", payload: eachItem.id })
                  }
                >
                  <MdDelete className="table-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TabelData;
