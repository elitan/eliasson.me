import { Layout } from "components/layout";

const podcasts = [
  "Sam Harris",
  "Eric Weinstein",
  "Jocko Willink",
  "Naval Ravikant",
  "Joe Rogan",
  "Scott Adams",
  "Filip & Fredrik (Swedish)",
];
export default function Home() {
  return (
    <Layout>
      <div>Podcasts I enjoy listening to:</div>

      <ul>
        {podcasts.map((podcast) => {
          return <li className="py-1">{podcast}</li>;
        })}
      </ul>
    </Layout>
  );
}
