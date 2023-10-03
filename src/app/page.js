import Link from "next/link";
import React from "react";
import Head from "next/head";
import { HomeComponent } from "./components/Home";
import RootLayout from "./layout";
// import { PrimeReactProvider } from 'primereact/api';

function page() {
  return <HomeComponent />;
}

export default page;
