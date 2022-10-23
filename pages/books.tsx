import React from 'react'
import type { NextPage } from 'next'

const books = [
  {
    title: `Shape Up. Stop Running in Circles and Ship Work that Matters`,
    finishedReading: '2022',
    author: {
      name: 'Ryan Singer'
    }
  },
  {
    title: `Angel: How to Invest in Technology Startups`,
    finishedReading: '2022',
    author: {
      name: 'Jason Calacanis'
    }
  },
  {
    title: `Ta betalt! : Hur pris påverkar allt`,
    finishedReading: '2022',
    author: {
      name: 'Andreas Johansson'
    }
  },
  {
    title: `80/20 Running`,
    finishedReading: '2022',
    author: {
      name: 'Matt Fitzgerald'
    }
  },
  {
    title: `Bad Blood`,
    finishedReading: '2022',
    author: {
      name: 'John Carreyrou'
    }
  },
  {
    title: `Marketing Made Simple`,
    finishedReading: '2022',
    author: {
      name: 'Donald Miller'
    }
  },
  {
    title: `Building a StoryBrand`,
    finishedReading: '2022',
    author: {
      name: 'Donald Miller'
    }
  },
  {
    title: `Atomic Habits: Tiny Changes, Remarkable Results`,
    finishedReading: '2021',
    author: {
      name: 'James Clear'
    }
  },
  {
    title: `The Great Mental Models: General Thinking Concepts`,
    finishedReading: '2021',
    author: {
      name: 'Shane Parrish'
    }
  },
  {
    title: `Competing Against Luck: The Story of Innovation and Customer Choice`,
    finishedReading: '2021',
    author: {
      name: 'Clayton M. Christensen'
    }
  },
  {
    title: `Animal Farm`,
    finishedReading: '2021',
    author: {
      name: 'George Orwell'
    }
  },
  {
    title: `The Mom Test: How to talk to customers and learn if your business is a good idea when everyone is lying to you`,
    finishedReading: '2021',
    author: {
      name: 'Rob Fitzpatrick'
    }
  },
  {
    title: `Ignore Everybody: And 39 Other Keys to Creativity`,
    finishedReading: '2021',
    author: {
      name: 'Hugh MacLeod'
    }
  },
  {
    title: `Ålevangeliet`,
    finishedReading: '2021',
    author: {
      name: 'Patrik Svensson'
    }
  },
  {
    title: `The Hard Thing About Hard Things`,
    finishedReading: '2021',
    author: {
      name: 'Ben Horowitz'
    }
  },
  {
    title: `Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen`,
    finishedReading: '2020',
    author: {
      name: 'Christopher McDougall'
    }
  },
  {
    title: `The Courage to Be Disliked: How to Free Yourself, Change your Life and Achieve Real Happiness`,
    finishedReading: '2020',
    author: {
      name: 'Ichiro Kishimi'
    }
  },
  {
    title: `Loserthink: How Untrained Brains Are Ruining America`,
    finishedReading: '2020',
    author: {
      name: 'Scott Adams'
    }
  },
  {
    title: `The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers`,
    finishedReading: '2020',
    author: {
      name: 'Ben Horowitz'
    }
  },
  {
    title: `How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life`,
    finishedReading: '2020',
    author: {
      name: 'Scott Adams'
    }
  },
  {
    title: `The Three-Body Problem (Remembrance of Earth’s Past #1)`,
    finishedReading: '2020',
    author: {
      name: 'Liu Cixin'
    }
  },
  {
    title: `Riding the Storm`,
    finishedReading: '2020',
    author: {
      name: 'Duncan Bannatyne'
    }
  },
  {
    title: `The Black Swan: The Impact of the Highly Improbable`,
    finishedReading: '2020',
    author: {
      name: 'Nassim Nicholas Taleb'
    }
  },
  {
    title: `Digital Minimalism: Choosing a Focused Life in a Noisy World`,
    finishedReading: '2020',
    author: {
      name: 'Cal Newport'
    }
  },
  {
    title: `How Democracies Die: What History Reveals About Our Future`,
    finishedReading: '2020',
    author: {
      name: 'Steven Levitsky'
    }
  },
  {
    title: `Win Bigly: Persuasion in a World Where Facts Don't Matter`,
    finishedReading: '2020',
    author: {
      name: 'Scott Adams'
    }
  },
  {
    title: `Six Easy Pieces: Essentials of Physics By Its Most Brilliant Teacher`,
    finishedReading: '2020',
    author: {
      name: 'Richard P. Feynman'
    }
  },
  {
    title: `Flash Boys: A Wall Street Revolt`,
    finishedReading: '2020',
    author: {
      name: 'Michael Lewis'
    }
  },
  {
    title: `Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime`,
    finishedReading: '2020',
    author: {
      name: 'Sean Caroll'
    }
  },
  {
    title: `The Rational Optimist: How Prosperity Evolves`,
    finishedReading: '2019',
    author: {
      name: 'Matt Ridely'
    }
  },
  {
    title: `Can't Hurt Me: Master Your Mind and Defy the Odds`,
    finishedReading: '2019',
    author: {
      name: 'David Goggins'
    }
  },
  {
    title: `The Madness of Crowds: Gender, Race and Identity`,
    finishedReading: '2019',
    author: {
      name: 'Douglas Murry'
    }
  },
  {
    title: `I backspegeln: Min tid i Scania, Volkswagen och Wallenbergsfären`,
    finishedReading: '2019',
    author: {
      name: 'Leif Östling'
    }
  },
  {
    title: `Skin in the Game: The Hidden Asymmetries in Daily Life`,
    finishedReading: '2019',
    author: {
      name: 'Nassim Nicholas Taleb'
    }
  },
  {
    title: `Meditations`,
    finishedReading: '2019',
    author: {
      name: 'Marcus Aurelius'
    }
  },
  {
    title: `Surely You're Joking, Mr. Feynman!": Adventures of a Curious Character`,
    finishedReading: '2019',
    author: {
      name: 'Richard P. Feynman'
    }
  },
  {
    title: 'Man and His Symbols',
    finishedReading: '2019',
    author: {
      name: 'Carl Jung'
    }
  },
  {
    title: '21 Lessons for the 21st Century',
    finishedReading: '2019',
    author: {
      name: 'Yuval Noah Harari'
    }
  },
  {
    title: 'Pre-Suasion: A Revolutionary Way to Influence and Persuade',
    finishedReading: '2019',
    author: {
      name: 'Robert B. Cialdini'
    }
  },
  {
    title: 'Homo Deus: A History of Tomorrow',
    finishedReading: '2019',
    author: {
      name: 'Yuval Noah Harari'
    }
  },
  {
    title: 'Discipline Equals Freedom: Field Manual',
    finishedReading: '2019',
    author: {
      name: 'Jocko Willink'
    }
  },
  {
    title: 'Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland',
    finishedReading: '2019',
    author: {
      name: 'Christopher R. Browning'
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    finishedReading: '2018',
    author: {
      name: 'Cal Newport'
    }
  },
  {
    title: 'Störst av allt',
    finishedReading: '2018',
    author: {
      name: 'Malin Persson Giolito'
    }
  },
  {
    title: 'Astrophysics for People in a Hurry',
    finishedReading: '2018',
    author: {
      name: 'Neil deGrasse Tyson'
    }
  },
  {
    title: 'Never Split the Difference: Negotiating as if Your Life Depended on It',
    finishedReading: '2018',
    author: {
      name: 'Chris Voss'
    }
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    finishedReading: '2018',
    author: {
      name: 'Yuval Noah Harari'
    }
  },
  {
    title: 'Extreme Ownership: How U.S. Navy SEALs Lead and Win',
    finishedReading: '2018',
    author: {
      name: 'Jocko Willink'
    }
  },
  {
    title: 'Inadequate Equilibria: Where and How Civilizations Get Stuck',
    finishedReading: '2018',
    author: {
      name: 'Eliezer Yudkowsky'
    }
  },
  {
    title: 'The War on Normal People',
    finishedReading: '2018',
    author: {
      name: 'Andrew Yang'
    }
  },
  {
    title: 'The Elephant in the Brain: Hidden Motives in Everyday Life',
    finishedReading: '2018',
    author: {
      name: 'Kevin Simler'
    }
  },
  {
    title: '12 Rules for Life: An Antidote to Chaos',
    finishedReading: '2018',
    author: {
      name: 'Jordan Peterson'
    }
  },
  {
    title: 'On Tyranny: Twenty Lessons from the Twentieth Century',
    finishedReading: '2018',
    author: {
      name: 'Timothy Snyder'
    }
  },
  {
    title: 'Lying',
    finishedReading: '2018',
    author: {
      name: 'Sam Harris'
    }
  },
  {
    title: 'Life 3.0: Being Human in the Age of Artificial Intelligence',
    finishedReading: '2017',
    author: {
      name: 'Max Tegmark'
    }
  },
  {
    title: 'Waking Up: A Guide to Spirituality Without Religion',
    finishedReading: '2017',
    author: {
      name: 'Sam Harris'
    }
  },
  {
    title: '1984',
    finishedReading: '2017',
    author: {
      name: 'George Orwell'
    }
  },
  {
    title: 'The Martian',
    finishedReading: '2017',
    author: {
      name: 'Andy Weir'
    }
  },
  {
    title: 'I Am Malala',
    finishedReading: '2017',
    author: {
      name: 'Malala Yousafzai'
    }
  },
  {
    title: 'Det är något som inte stämmer',
    finishedReading: '2017',
    author: {
      name: 'Martina Haag'
    }
  },
  {
    title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    finishedReading: '2017',
    author: {
      name: 'Ashlee Vance'
    }
  },
  {
    title: 'En man som heter Ove',
    finishedReading: '2017',
    author: {
      name: 'Fredrik Backman'
    }
  },
  {
    title: 'Hundraåringen som klev ut genom fönstret och försvann',
    finishedReading: '2017',
    author: {
      name: 'Jonas Jonasson'
    }
  },
  {
    title: 'Analfabeten som kunde räkna',
    finishedReading: '2017',
    author: {
      name: 'Jonas Jonasson'
    }
  },
  {
    title: "The Leader's Guide",
    finishedReading: '2017',
    author: {
      name: 'Eric Ries'
    }
  },
  {
    title: 'The Lean Startup',
    finishedReading: '2017',
    author: {
      name: 'Eric Ries'
    }
  },
  {
    title: 'What If? Serious Scientific Answers to Absurd',
    finishedReading: '2017',
    author: {
      name: 'Randall Munroe'
    }
  },
  {
    title: 'Free Will',
    finishedReading: '2017',
    author: {
      name: 'Sam Harris'
    }
  }
]

const Books: NextPage = () => {
  return (
    <div className="text-gray-200">
      <ul className="list-disc list-inside">
        {books.map((book) => {
          return (
            <li key={book.title}>
              {book.title} <span className="text-gray-400">by {book.author.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Books
