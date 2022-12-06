import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className='text-gray-300'>
      <p>Hey, I am Johan.</p>
      <p>
        Link: <a href='https://vattenfilter.co'>vattenfilter.co</a>
      </p>
    </div>
  );
};

export default Home;
