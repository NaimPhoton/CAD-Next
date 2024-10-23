import AuthForm from "@/components/AuthForm/AuthForm";
import React from "react";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Layout from "@/components/Layout/Layout";
import {useRouter} from "next/router";

const HomePage: React.FC = () => {
  const router = useRouter();
  return (
    <Layout title="Home Page">
      <h1>Welcome to the Home Page!</h1>
      <Counter />
      <AuthForm />
      <Button onClick={() => router.push("login")} text={"Login"} />
    </Layout>
  );
};

export default HomePage;
