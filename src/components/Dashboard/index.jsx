import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useNavigate } from "react-router";
import { useState } from "react";

import TableData from "../TableData";
import Form from "../Form";

import "./index.css";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 2800 },
  { name: "Apr", income: 4000, expense: 3908 },
  { name: "May", income: 4500, expense: 3000 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 800 },
  { name: "Travel", value: 300 },
  { name: "Shopping", value: 500 },
];

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"];

const Dashboard = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const navigate = useNavigate();

  return (
    <section className="dashboard">
      <h1 className="title">Expense Tracker</h1>

      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <h2>Total Balance</h2>
          <h3>$5,000</h3>
        </div>

        <div className="card">
          <h2>Total Income</h2>
          <h3>$2,500</h3>
        </div>

        <div className="card">
          <h2>Total Expense</h2>
          <h3>$1,500</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-wrapper">
        <div className="chart-container">
          <h1>30-Day Spending Trend</h1>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#ef4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h1>Expenses by Category</h1>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <div className="table-head">
          <h3>Recent Transactions</h3>
          <button
            className="add-transaction-btn"
            onClick={() => setDisplayForm(true)}
          >
            Add Transaction
          </button>
        </div>

        <TableData />
      </div>

      {displayForm && <Form onClose={() => setDisplayForm(false)} />}
    </section>
  );
};

export default Dashboard;
