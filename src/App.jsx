import React from 'react'
import Deck from './components/Deck'
import Slide from './components/Slide'

function App() {
  const slides = [
    () => (
      <div className="text-center px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow mb-4">Greek Mythology</h1>
          <p className="text-xl md:text-2xl text-blue-200/90">Culture and Meaning</p>
        </div>
        <div className="mt-10">
          <p className="text-blue-200/80 max-w-2xl mx-auto">A concise, modern slide deck exploring how myths shaped ancient Greek identity, values, and worldview — and why they still matter today.</p>
        </div>
      </div>
    ),

    () => (
      <Slide title="What Is Myth?" subtitle="Stories as cultural technology">
        <ul className="list-disc pl-6 space-y-2">
          <li>Mythos: narrative that explains origins, order, and values</li>
          <li>Not "false" — functions as collective meaning-making</li>
          <li>Transmitted through epic poetry, drama, ritual, and art</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Cosmos and Order" subtitle="From Chaos to Cosmos">
        <ul className="list-disc pl-6 space-y-2">
          <li>Creation begins with Chaos → Gaia, Ouranos, Titans → Olympians</li>
          <li>Establishes a hierarchy mirroring human society and city-states</li>
          <li>Zeus as guarantor of xenia (guest-friendship) and oaths</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Gods as Human Mirrors" subtitle="Anthropomorphic divinities">
        <ul className="list-disc pl-6 space-y-2">
          <li>Gods feel jealousy, love, rage — magnified human emotions</li>
          <li>Offer models and warnings: Athena (craft/wisdom), Ares (violence), Aphrodite (desire)</li>
          <li>Multiple local cults allow plural identities and interpretations</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Heroic Ideals" subtitle="Kleos, arete, and fate">
        <ul className="list-disc pl-6 space-y-2">
          <li>Heroes pursue arete (excellence) and kleos (glory) within moira (fate)</li>
          <li>Achilles: choice between long life and immortal fame</li>
          <li>Odysseus: metis (cunning) vs brute force; homecoming as moral test</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Ritual and Community" subtitle="Religion as practice">
        <ul className="list-disc pl-6 space-y-2">
          <li>Myths embedded in festivals: Dionysia, Panathenaia, Eleusinian Mysteries</li>
          <li>Offerings and sacrifices create reciprocity with the divine</li>
          <li>Sanctuaries (Delphi, Olympia) as pan-Hellenic identity hubs</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Moral Lessons" subtitle="Hubris and its consequences">
        <ul className="list-disc pl-6 space-y-2">
          <li>Hubris vs sophrosyne (moderation): Icarus, Niobe, Arachne</li>
          <li>Hospitality and justice: Baucis and Philemon, Orestes at the Areopagus</li>
          <li>Limits of human knowledge: Prometheus, Pandora</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Gender and Power" subtitle="Voices within patriarchy">
        <ul className="list-disc pl-6 space-y-2">
          <li>Goddesses hold agency: Athena, Artemis, Hera shape political and domestic spheres</li>
          <li>Tragedy gives women narrative force: Medea, Antigone, Clytemnestra</li>
          <li>Myths both reinforce and question gender norms</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Nature and Space" subtitle="Mythic geography">
        <ul className="list-disc pl-6 space-y-2">
          <li>Mountains, springs, and groves as divine residences (Olympus, Delphi)</li>
          <li>Sea as realm of danger and opportunity; Poseidon's ambivalence</li>
          <li>Underworld maps ethics and memory (Hades, Lethe, Elysium)</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Afterlives in Culture" subtitle="From antiquity to today">
        <ul className="list-disc pl-6 space-y-2">
          <li>Renaissance art, neoclassical politics, psychoanalysis (Oedipus complex)</li>
          <li>Modern retellings reframe margins: Circe, Patroclus, Ariadne</li>
          <li>Myths as flexible frameworks for identity and critique</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Key Terms" subtitle="Quick glossary" footnote="Tip: Use these to structure class discussions or exam answers.">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-2 list-none pl-0">
          <li><span className="font-semibold text-white">Mythos</span>: culturally significant narrative</li>
          <li><span className="font-semibold text-white">Arete</span>: excellence/virtue</li>
          <li><span className="font-semibold text-white">Kleos</span>: glory/fame</li>
          <li><span className="font-semibold text-white">Xenia</span>: guest-friendship</li>
          <li><span className="font-semibold text-white">Moira</span>: fate/portion</li>
          <li><span className="font-semibold text-white">Hubris</span>: overbearing pride</li>
        </ul>
      </Slide>
    ),

    () => (
      <Slide title="Discussion Prompts" subtitle="Engage the audience">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Where do you see Greek myths shaping later religious or political ideas?</li>
          <li>Choose one hero and evaluate their virtues and flaws in modern terms.</li>
          <li>How do local variations of a myth change its meaning?</li>
        </ol>
      </Slide>
    ),

    () => (
      <Slide title="Takeaways" subtitle="Why it matters">
        <ul className="list-disc pl-6 space-y-2">
          <li>Myths encode values, conflicts, and social structures</li>
          <li>They operate through ritual, performance, and place</li>
          <li>Enduring because they adapt — speaking to new contexts and questions</li>
        </ul>
      </Slide>
    ),

    () => (
      <div className="text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Thank You</h2>
        <p className="text-blue-200/80">Questions and discussion</p>
      </div>
    ),
  ]

  return <Deck slides={slides} />
}

export default App
