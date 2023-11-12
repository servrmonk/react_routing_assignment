import {  Route, Routes } from "react-router-dom";


import React from "react";

export default function Welcome() {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Routes>
      <Route path="new-user" element={<p>Welcome, new User</p>} />
      </Routes>
    </section>
  );
}

