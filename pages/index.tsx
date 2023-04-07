import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import { fetchPersons } from "../utils/fetchPersons";
import { Person } from "@/typings";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  persons: Person[];
};

export default function Home({ persons }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {persons.map((person) => {
          return (
            <div key={person._id}>
              <h1>{person.name}</h1>
              <p>{person._id}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const persons: Person[] = await fetchPersons();
  console.log(persons[0]);

  return {
    props: {
      persons,
    },
  };
};
