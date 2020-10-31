import { Layout } from "components/layout";

const builds = [
  {
    name: "Nhost",
    url: "https://nhost.io",
    description:
      "The Jamstack backend with Hasura. Better than Google Firebase.",
  },
  {
    name: "GraphQL Stockholm",
    url: "https://graphql.se",
    description: "Meetup",
  },
  {
    name: "Teamfind",
    url: "https://teamfind.se",
    description: "Recruitment system",
  },
];

export default function Home() {
  return (
    <Layout>
      <div>Building</div>

      {builds.map((build) => {
        return (
          <div className="py-6">
            <div className="mb-2">
              <a href={build.url}>
                <span className="text-2xl">{build.name}</span>
                <span className="ml-2">{build.url}</span>
              </a>
            </div>
            <div className="text-gray-700">{build.description}</div>
          </div>
        );
      })}
    </Layout>
  );
}
