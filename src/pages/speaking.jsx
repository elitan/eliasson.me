import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Johan Eliasson</title>
        <meta
          name="description"
          content="Conferences and podcastas I've been on."
        />
      </Head>
      <SimpleLayout
        title="Speaking"
        intro="Conferences and podcastas I've been on."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://tinius.com/2023/09/07/slik-bruker-de-ai-i-redaksjonene/#:~:text=%C2%ABHow%20I%20built%20a%20fully%20automated%20news%20website%20using%20AI.%C2%BB"
              title="How I built a fully automated news website using AI"
              description="Johan Eliasson is an engineer, hacker, and entrepreneur. Although he is not affiliated with the media industry, he is currently working as the Chief Technology Officer (CTO) at OneLab. Before joining OneLab, he was the Chief Executive Officer (CEO) at Nhost, where he developed infrastructure tools for developers. In a short period of time, he created his own English-language news service (nyheter.sh) with machine-generated illustration images, based on the sound from Sweden's Radio news broadcasts, artificial intelligence, a handful of prompts—and significant developer skills."
              event="AI Breakfast, Oslo"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=Q1wWcOrKYL8"
              title="GraphQL for Web and Mobile Apps Made Simple"
              description="Building web and mobile apps with GraphQL should be simple. With Nhost, developers build web and mobile apps with automatically generated GraphQL APIs. In this talk, we'll show you how this is ideal for developers who want to boost productivity without worrying about infrastructure."
              event="GraphQL Galaxy"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=69y4Z9QObAM"
              title="Blazing fast (and smooth) Hasura developer experience using Nhost by Johan Eliasson"
              description="Think Netlify meets Google Firebase but with SQL, GraphQL (Hasura!) and 100% open source. Enter the world of Nhost."
              event="Hasura Con"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://www.youtube.com/watch?v=TXsHwetfQ-Y"
              title="SaaS backend using Stripe and GraphQL with Nhost"
              description="Nhost is the open source GraphQL backend and a development platform. In this livestream, Johan Eliasson from Nhost comes on to chat with Cecil Phillip about some of the features and benefits developers can make use of in Nhost."
              event="Stripe Developers - Dev Chat"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=WpsrKGwnaXk"
              title="Running a Backend as a Service Company "
              description="What goes into running a Backend as a Service company? In this episode of the Open Source Cafe, we discussed with Johan Eliasson from Nhost their journey and the benefits of using Backend as a Service."
              event="Kunal Kushwaha"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=4f8QgvV7Lr4"
              title="How to build an Open Source Project "
              description="In this episode we discussed with Johan Eliasson from Nhost how to build an Open Source Project."
              event="Francesco Ciulla"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://podrocket.logrocket.com/nhost"
              title="Founder Friday: Johan Eliasson of Nhost"
              description="Johan Eliasson joins us to talk about Nhost, an open-source, Backend-as-a-service with a GraphQL API. How does Nhost compare to Firebase and Supabase? Learn more in this episode."
              event="PodRocket"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=bi7_IBTA-I4"
              title="Accelerating Backend with Johan Eliasson of Nhost"
              description="In episode 75 of JAMstack Radio, Brian Douglas chats with Johan Eliasson of Nhost. They discuss their favorite JAMstack tools, the inception of Nhost and its use cases, and other innovations in backend services."
              event="JAMstack Radio"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
