import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/Postlist";
import PostForm from "./components/PostForm";
import PostDetails from "./components/PostDetails";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

import UserDetail from "./components/UserDetail";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { add, del, edit, get } from "./redux/action";

function App() {
  const items = useSelector((state) => state.items);
  const currentItem = useSelector((state) => state.currentItem);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAdd = () => {
    const newItem = prompt("Enter a new item:");
    dispatch(add(newItem));
  };

  const handleDelete = (index) => {
    dispatch(del(index));
  };

  const handleEdit = (index) => {
    const newItem = prompt("Enter the new value:");
    dispatch(edit(index, newItem));
  };

  const handleGet = (index) => {
    dispatch(get(index));
    alert(currentItem);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter and sort items
  const filteredItems = items
    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });

  return (
    <>
      <div className="App container">
        <Navbar />
        <header className="App-header">
          <h1>Welcome to My React Blog App</h1>

          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<PostDetails />} />

              <Route path="/users/:userId" element={<UserDetail />} />

              <Route
                path="/new"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-secondary mt-2" onClick={handleSort}>
              Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
            </button>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleGet(index)}
                      >
                        Get
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No items found</td>
                </tr>
              )}
            </tbody>
          </table>

          <button className="btn btn-primary" onClick={handleAdd}>
            Add Item
          </button>
        </header>
      </div>
    </>
  );
}

export default App;
