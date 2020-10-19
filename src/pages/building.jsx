import { Layout } from "components/layout";

export default function Home() {
  return (
    <Layout>
      <div>Building</div>

      <div className="italic text-3xl">Will update more soon!</div>

      <div className="py-6">
        <a href="https://nhost.io" className="text-lg text-semibold">
          Nhost
        </a>
        <div className="py-2 text-gray-700">okok</div>
      </div>
      <div className="">
        <a href="https://graphql.se">GraphQL.se Stockholm Meetup</a>
      </div>
      <div className="">
        <a href="https://teamfind.se">Teamfind</a>
      </div>
    </Layout>
  );
}
