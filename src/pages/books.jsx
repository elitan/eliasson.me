import { Layout } from "components/layout";

export default function Home() {
  const authors = {
    samharris: {
      name: "Sam Harris",
      img: "sam-harris.jpg",
    },
  };

  const books = [
    {
      title: "Free Will",
      finishedReading: "2017-08-09",
      img: "free-will.jpg",
      author: {
        name: "Sam Harris",
        img: "sam-harris.jpg",
      },
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <div className="py-6 text-center uppercase text-lg">
          Books I've read
        </div>
        <div className="">
          {books.map((book) => {
            return (
              <div className="flex border rounded-sm p-6 shadow-lg hover:shadow-2xl transition-all ease-linear duration-200">
                <div>
                  <img
                    className="w-32"
                    src={`/images/books/${book.img}`}
                    alt={book.title}
                  />
                </div>
                <div className="ml-8">
                  <div className="mb-4 text-4xl">{book.title}</div>
                  <div className="flex items-center">
                    <div
                      className="rounded-full w-16 h-16 bg-cover"
                      style={{
                        backgroundImage: `url(/images/authors/${book.author.img})`,
                      }}
                    ></div>
                    <div className="px-4 text-gray-700 text-xl">
                      {book.author.name}
                    </div>
                  </div>
                  <div className="py-4">
                    <table>
                      <tbody>
                        <tr>
                          <td>Finished:</td>
                          <td>{book.finishedReading}</td>
                        </tr>
                        <tr>
                          <td className="text-right">Rating:</td>
                          <td>5/5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
