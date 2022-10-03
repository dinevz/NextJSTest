import { Hero, Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: { src: "/img/video.png", alt: "", width: 288, height: 480 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  cards: [
      {
      img: { src: "/img/briefIcon.png", alt: "", width: 100, height: 100 },
      title: "Brief",
      description: <>Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.</>,
      width: 400,
    },
    {
      img: { src: "/img/searchIcon.png", alt: "", width: 100, height: 100 },
      title: "Search",
      description: <>In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.</>,
      width: 425,
    },
    {
      img: { src: "/img/pitchIcon.png", alt: "", width: 100, height: 100 },
      title: "Pitch",
      description: <>Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.</>,
      width: 450,
    }
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps}/>
        {/** Other sections */}
      </div>
    </>
  );
}
