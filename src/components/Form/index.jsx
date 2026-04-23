import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

import "./index.css";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    id: "",
    amount: "",
    type: "",
    category: "",
    date: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(TransactionContext);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const validation = () => {
    let newErrors = {};
    if (!formData.amount || Number(formData.amount) <= 0) {
      newErrors.amount = "Amount should be greater than 0";
    }
    if (!formData.type) {
      newErrors.type = "Type is required!";
    }
    if (!formData.category) {
      newErrors.category = "Category is required!";
    }
    if (!formData.date) {
      newErrors.date = "Date is required!";
    }
    if (!formData.note) {
      newErrors.note = "Note is required!";
    }
    setErrors(newErrors);
  };

  const handleSubmitData = (event) => {
    const newData = {
      ...formData,
      id: Date.now().toString(),
      amount: Number(formData.amount),
      createAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD", payload: newData });
    onClose();
  };

  return (
    <div className="form-container" onClick={onClose}>
      <form
        className="form-data"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmitData}
      >
        <div className="form-top">
          <h1>Expense Form</h1>

          <button type="button" className="cross-btn" onClick={onClose}>
            <ImCross />
          </button>
        </div>

        <div className="form-field">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            name="amount"
            onChange={handleInputChange}
            value={formData.amount}
          />
          {errors.amount && <p className="error-msg">{errors.amount}</p>}
        </div>

        <div className="form-field">
          <label>Type</label>
          <input
            type="text"
            placeholder="Enter type"
            name="type"
            onChange={handleInputChange}
            value={formData.type}
          />
          {errors.type && <p className="error-msg">{errors.type}</p>}
        </div>

        <div className="form-field">
          <label>Category</label>
          {/* <input type="text" placeholder="Enter category" /> */}
          <select
            name="category"
            id="category"
            onChange={handleInputChange}
            value={formData.category}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="error-msg">{errors.category}</p>}
        </div>

        <div className="form-field">
          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={handleInputChange}
            value={formData.date}
          />
          {errors.date && <p className="error-msg">{errors.date}</p>}
        </div>

        <div className="form-field">
          <label>Note</label>
          <input
            type="text"
            placeholder="Enter note"
            name="note"
            onChange={handleInputChange}
            value={formData.note}
          />
          {errors.note && <p className="error-msg">{errors.note}</p>}
        </div>

        <div className="form-field">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
