import { Person } from "../typings";

export const fetchPersons = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPersons`);

  const data = await res.json();
  const persons: Person[] = data.persons;

  return persons;
};
