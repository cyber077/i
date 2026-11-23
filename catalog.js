export const categories = [
  {
    id: "speakers",
    name: "Loudspeakers",
    img: "monitor",
    desc: "Complete systems",
  },
  {
    id: "drivers",
    name: "Speaker Drivers",
    img: "woofer",
    desc: "Woofers & tweeters",
  },
  {
    id: "components",
    name: "Crossover Parts",
    img: "crossover",
    desc: "Networks & inductors",
  },
  { id: "amplifiers", name: "Amplifiers", img: "amp", desc: "Power & control" },
];

export const products = [
  {
    id: "axis-m5",
    name: "Axis M5",
    type: "Bookshelf loudspeaker",
    category: "speakers",
    img: "monitor",
    price: 14900,
    desc: "A compact two-way monitor in warm walnut. Made for close listening, small rooms, and records you know by heart.",
    specs: {
      Configuration: "2-way passive",
      "Bass driver": "5.25 inches",
      Impedance: "8 Ω",
      Finish: "Walnut",
      Unit: "Single speaker",
    },
  },
  {
    id: "flux-w8",
    name: "Flux W8",
    type: "Midbass driver",
    category: "drivers",
    img: "woofer",
    price: 4200,
    desc: "A textured cone and cast frame form the heart of this eight-inch midbass driver. A starting point for a new cabinet build.",
    specs: {
      Diameter: "8 inches",
      Impedance: "8 Ω",
      "Cone material": "Treated paper",
      "Frame material": "Cast aluminium",
      Unit: "Single driver",
    },
  },
  {
    id: "phase-x2",
    name: "Phase X2",
    type: "Two-way crossover",
    category: "components",
    img: "crossover",
    price: 2600,
    desc: "A compact two-way network with copper coils and film capacitors. Designed as a starting point for matching a midbass driver with a tweeter.",
    specs: {
      Topology: "2-way passive",
      "Nominal load": "8 Ω",
      "Crossover point": "2.5 kHz",
      Mount: "Board mount",
      Unit: "Single board",
    },
  },
  {
    id: "relay-a40",
    name: "Relay A40",
    type: "Desktop amplifier",
    category: "amplifiers",
    img: "amp",
    price: 8900,
    desc: "A tactile desktop amplifier with a machined volume knob and a quiet visual footprint. Pair it with passive monitors for a compact stereo setup.",
    specs: {
      Channels: "Stereo",
      "Rated output": "40 W per channel",
      Input: "Analogue RCA",
      Finish: "Graphite",
      Unit: "Single amplifier",
    },
  },
  {
    id: "axis-t7",
    name: "Axis T7",
    type: "Floorstanding pair",
    category: "speakers",
    img: "tower",
    price: 34900,
    desc: "A slender pair of floorstanders with a deep graphite finish and a generous bass section for room-scale listening.",
    specs: {
      Configuration: "3-way passive",
      Impedance: "8 Ω",
      Finish: "Graphite",
      Unit: "Stereo pair",
    },
  },
  {
    id: "flux-d1",
    name: "Flux D1",
    type: "Silk dome tweeter",
    category: "drivers",
    img: "tweeter",
    price: 1850,
    desc: "A soft dome seated in a machined faceplate. A compact high-frequency driver for a two-way speaker project.",
    specs: {
      Diameter: "1 inch",
      Diaphragm: "Silk dome",
      Impedance: "8 Ω",
      Unit: "Single tweeter",
    },
  },
  {
    id: "phase-l1",
    name: "Phase L1",
    type: "Air-core inductor",
    category: "components",
    img: "inductor",
    price: 790,
    desc: "Evenly wound copper wire on an open-core spool for passive crossover prototyping.",
    specs: {
      Inductance: "1.0 mH",
      "Core type": "Air core",
      Conductor: "Enamelled copper",
      Unit: "Single inductor",
    },
  },
  {
    id: "relay-a80",
    name: "Relay A80",
    type: "Integrated amplifier",
    category: "amplifiers",
    img: "integrated",
    price: 18900,
    desc: "A two-channel integrated amplifier with a brushed silver lid, tactile controls and a full-width stereo soundstage.",
    specs: {
      Channels: "Stereo",
      "Rated output": "80 W per channel",
      Input: "Analogue RCA",
      Finish: "Silver / graphite",
      Unit: "Single amplifier",
    },
  },
];

export const articles = [
  {
    id: "first-build",
    title: "Planning your first two-way build",
    tag: "Build guide",
    img: "crossover",
    intro:
      "Start with the room and the listening position. Those two decisions will steer your driver, cabinet, and crossover choices.",
    parts: [
      [
        "Pick a proven design",
        "For a first build, choose plans that specify the cabinet volume, drivers, and crossover together. A cabinet that fits a driver physically may still give it the wrong acoustic loading.",
      ],
      [
        "Lay out the system",
        "Check the cutout sizes, mounting depth, port clearance, and space for the network before cutting material. Leave room for the damping and internal wiring.",
      ],
      [
        "Listen one step at a time",
        "Check polarity and secure each connection with the amplifier switched off. Start at low volume, listen to each channel separately, then move the pair into position.",
      ],
    ],
  },
  {
    id: "driver-guide",
    title: "A closer look at the speaker driver",
    tag: "Component notes",
    img: "woofer",
    intro:
      "A driver turns an electrical signal into motion. Every part of the assembly shapes how well it can move air.",
    parts: [
      [
        "Cone and surround",
        "The cone moves the air. The flexible surround and inner suspension keep the movement centered while allowing the cone to travel.",
      ],
      [
        "Voice coil and motor",
        "Current passing through a voice coil interacts with the magnetic field in the gap. The resulting force moves the cone back and forth.",
      ],
      [
        "Read the data together",
        "Diameter alone tells only part of the story. Read the impedance curve, sensitivity, frequency response, and enclosure recommendations as a set.",
      ],
    ],
  },
];
