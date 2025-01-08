import Layout from "@/components/Layout/Layout";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <Layout title="Login/Register">
      <form>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
