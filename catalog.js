export const categories = [
  {
    id: "speakers",
    name: "Loudspeakers",
    img: "monitor",
    desc: "Complete systems",
    intro:
      "Choose a complete passive speaker for your listening space. The Axis M5 fits a desktop or stand and is priced individually. The taller Axis T7 comes as a stereo pair.",
    guide: "first-build",
  },
  {
    id: "drivers",
    name: "Speaker Drivers",
    img: "woofer",
    desc: "Woofers & tweeters",
    intro:
      "Choose the part of the audio range your cabinet needs. The W8 handles midbass duties, while the D1 is a high-frequency driver. Both need an enclosure and a crossover designed for the chosen drivers.",
    guide: "driver-guide",
  },
  {
    id: "components",
    name: "Crossover Parts",
    img: "crossover",
    desc: "Networks & inductors",
    intro:
      "Explore the network inside a passive loudspeaker. The Phase X2 divides a signal between two drivers. The Phase L1 is an individual coil for a circuit that specifies its inductance.",
    guide: "crossover-guide",
  },
  {
    id: "amplifiers",
    name: "Amplifiers",
    img: "amp",
    desc: "Power & control",
    intro:
      "Start with your source and your speakers. Both Relay models accept analogue RCA audio and drive a passive stereo pair. Compare their output ratings alongside your speakers’ load and your listening distance.",
    guide: "amp-guide",
  },
];

export const products = [
  {
    id: "axis-m5",
    name: "Axis M5",
    type: "Bookshelf loudspeaker",
    category: "speakers",
    img: "monitor",
    price: 14900,
    desc: "A compact passive monitor for a desk, shelf, or pair of stands. A 5.25-inch bass driver shares the walnut cabinet with a dedicated tweeter. Each cabinet serves one channel of a stereo system.",
    specs: {
      Configuration: "2-way passive",
      "Bass driver": "5.25 inches",
      Impedance: "8 Ω",
      Finish: "Walnut",
      Unit: "Single speaker",
    },
    summary: "5.25-inch woofer · 8 Ω",
    priceUnit: "per speaker",
    notes: [
      [
        "On a desk",
        "Raise the speakers until their tweeters are close to ear height. Start with both cabinets the same distance from your chair, then turn them slightly inward and listen for a centered vocal.",
      ],
      [
        "In a stereo system",
        "Run speaker cable from each amplifier channel to one M5, keeping the polarity consistent. The 8 Ω figure is the nominal load per cabinet. Check the amplifier’s supported range before pairing.",
      ],
    ],
    faq: [
      [
        "Does the price cover a stereo pair?",
        "It covers one Axis M5 cabinet. Select a quantity of two to build a left and right pair.",
      ],
      [
        "Can I plug a laptop straight into the M5?",
        "The M5 needs an external speaker amplifier. Feed the laptop’s analogue output, or the output of a USB DAC, into the amplifier and connect its speaker outputs to the cabinets.",
      ],
    ],
  },
  {
    id: "flux-w8",
    name: "Flux W8",
    type: "Midbass driver",
    category: "drivers",
    img: "woofer",
    price: 4200,
    desc: "An eight-inch midbass driver for a custom cabinet. The treated-paper cone moves the air, while the cast aluminium frame holds the moving assembly in alignment. Use it as the low-frequency section of a two-way design.",
    specs: {
      Diameter: "8 inches",
      Impedance: "8 Ω",
      "Cone material": "Treated paper",
      "Frame material": "Cast aluminium",
      Unit: "Single driver",
    },
    summary: "8-inch cone · 8 Ω",
    priceUnit: "per driver",
    notes: [
      [
        "Before cutting the baffle",
        "Eight inches is the nominal size. Check the mechanical drawing for the actual cutout, bolt circle, outer rim, and depth. Those dimensions determine whether the basket clears an existing opening.",
      ],
      [
        "Choosing a cabinet",
        "A sealed or vented box needs to be calculated from the driver’s Thiele–Small parameters. Obtain the final parameter sheet before choosing internal volume or tuning a port.",
      ],
    ],
    faq: [
      [
        "Will it replace another eight-inch woofer?",
        "Check the mounting dimensions, impedance curve, sensitivity, and cabinet alignment. Two drivers of the same nominal diameter can behave differently in the same box.",
      ],
      [
        "What should I check before choosing a tweeter?",
        "Look for a usable overlap between the measured responses of both drivers. The tweeter’s recommended operating range and the woofer’s behavior off-axis help determine where to cross them over.",
      ],
    ],
  },
  {
    id: "phase-x2",
    name: "Phase X2",
    type: "Two-way crossover",
    category: "components",
    img: "crossover",
    price: 2600,
    desc: "A passive crossover board that takes one amplified channel and splits it into woofer and tweeter branches. Copper coils and film capacitors form a network with a nominal 2.5 kHz crossover point for the example 8 Ω design.",
    specs: {
      Topology: "2-way passive",
      "Nominal load": "8 Ω",
      "Crossover point": "2.5 kHz",
      Mount: "Board mount",
      Unit: "Single board",
    },
    summary: "2-way network · 2.5 kHz",
    priceUnit: "per board",
    notes: [
      [
        "Reading the crossover point",
        "The nominal figure describes the circuit under its design conditions. Each driver’s impedance changes with frequency, and its acoustic response also shapes the handover.",
      ],
      [
        "Inside the cabinet",
        "Allow room for the board and for wiring to reach each driver without pulling on a terminal. Follow the board markings for input, woofer, tweeter, and polarity.",
      ],
    ],
    faq: [
      [
        "How many boards does a stereo pair need?",
        "A conventional passive two-way pair uses one board per cabinet. The listed unit is one board, so a stereo build uses two.",
      ],
      [
        "Can I use it with any 8 Ω driver pair?",
        "A nominal impedance match is only the first check. Driver sensitivity, frequency response, and the tweeter’s minimum crossover recommendation all matter. Use a network validated for the actual drivers and baffle.",
      ],
    ],
  },
  {
    id: "relay-a40",
    name: "Relay A40",
    type: "Desktop amplifier",
    category: "amplifiers",
    img: "amp",
    price: 8900,
    desc: "A compact two-channel amplifier for a desk or small listening setup. It takes a line-level signal through RCA and supplies the two amplified channels a pair of passive speakers needs. A front-panel dial keeps volume within reach.",
    specs: {
      Channels: "Stereo",
      "Rated output": "40 W per channel",
      Input: "Analogue RCA",
      Finish: "Graphite",
      Unit: "Single amplifier",
    },
    summary: "Stereo · 40 W/channel",
    priceUnit: "per amplifier",
    notes: [
      [
        "Connecting a source",
        "A DAC, streamer, or CD player with line-level analogue output can feed the RCA input. A USB-only source needs an external DAC with analogue outputs.",
      ],
      [
        "Choosing speakers",
        "Check the speaker impedance against the amplifier’s supported load. To estimate listening level, consider speaker sensitivity and listening distance as well as watts per channel.",
      ],
    ],
    faq: [
      [
        "Can I connect a turntable?",
        "A turntable with a built-in phono stage can feed the RCA input in line mode. A cartridge-level output needs a separate phono preamp first.",
      ],
      [
        "Do I need two amplifiers for stereo?",
        "One A40 contains a left and a right channel. Connect one passive speaker to each output.",
      ],
    ],
  },
  {
    id: "axis-t7",
    name: "Axis T7",
    type: "Floorstanding pair",
    category: "speakers",
    img: "tower",
    price: 34900,
    desc: "A floorstanding stereo pair for a listening room where the speakers can stand clear of nearby furniture. The three-way design divides bass, midrange, and treble duties within each graphite cabinet.",
    specs: {
      Configuration: "3-way passive",
      Impedance: "8 Ω",
      Finish: "Graphite",
      Unit: "Stereo pair",
    },
    summary: "3-way passive · 8 Ω",
    priceUnit: "per pair",
    notes: [
      [
        "Finding a starting position",
        "Give the two towers similar spacing from the side walls and aim for equal distances to the listening seat. Move them forward in small steps if bass notes sound uneven near the wall.",
      ],
      [
        "Choosing amplification",
        "Each tower presents a nominal 8 Ω load to its amplifier channel. Room size, listening distance, and speaker sensitivity all affect the power you need.",
      ],
    ],
    faq: [
      [
        "What does a quantity of one include?",
        "One listed unit includes two Axis T7 floorstanding cabinets for left and right playback.",
      ],
      [
        "Do the towers need stands or a subwoofer?",
        "They are designed to stand on the floor. Decide on a subwoofer after hearing the towers in your room and checking the final low-frequency measurements against your listening needs.",
      ],
    ],
  },
  {
    id: "flux-d1",
    name: "Flux D1",
    type: "Silk dome tweeter",
    category: "drivers",
    img: "tweeter",
    price: 1850,
    desc: "A one-inch silk-dome tweeter for the high-frequency branch of a multi-driver loudspeaker. Its circular metal faceplate provides a mounting surface for the baffle, while an external crossover limits the frequencies sent to the dome.",
    specs: {
      Diameter: "1 inch",
      Diaphragm: "Silk dome",
      Impedance: "8 Ω",
      Unit: "Single tweeter",
    },
    summary: "1-inch silk dome · 8 Ω",
    priceUnit: "per tweeter",
    notes: [
      [
        "Matching the woofer",
        "Compare sensitivity and measured response around the intended crossover region. The relative output of both drivers determines whether level matching is needed.",
      ],
      [
        "Mounting the faceplate",
        "Check the faceplate diameter, recess depth, and screw pattern against the baffle drawing. Protect the silk dome from pressure while handling the part.",
      ],
    ],
    faq: [
      [
        "Can I test it directly on an amplifier?",
        "Use a suitable high-pass network and start at low level. Feeding bass or a full-range signal directly to a tweeter can damage it.",
      ],
      [
        "Can I choose a crossover from the 8 Ω rating alone?",
        "You also need the impedance curve, resonance data, recommended crossover range, and intended filter slope. Those figures guide the choice for a particular cabinet.",
      ],
    ],
  },
  {
    id: "phase-l1",
    name: "Phase L1",
    type: "Air-core inductor",
    category: "components",
    img: "inductor",
    price: 790,
    desc: "A 1.0 mH air-core coil for a passive crossover schematic that calls for that value. The winding uses enamelled copper wire. In a series woofer branch, its increasing reactance helps roll off higher frequencies.",
    specs: {
      Inductance: "1.0 mH",
      "Core type": "Air core",
      Conductor: "Enamelled copper",
      Unit: "Single inductor",
    },
    summary: "1.0 mH · Air core",
    priceUnit: "per coil",
    notes: [
      [
        "Reading a parts list",
        "Match inductance first, then compare DC resistance, wire gauge, and physical size. Winding resistance forms part of the circuit and can affect the driver’s level.",
      ],
      [
        "Laying out several coils",
        "Leave space between inductors and orient nearby coil axes at right angles where the board allows. This reduces magnetic coupling between adjacent windings.",
      ],
    ],
    faq: [
      [
        "Is one coil a complete two-way crossover?",
        "It is a single component. Follow the full circuit diagram for capacitor values, resistors, and the other driver branch.",
      ],
      [
        "Does the coil have a positive terminal?",
        "This standalone inductor is non-polarized. Either lead can be used at either end of its assigned circuit position.",
      ],
    ],
  },
  {
    id: "relay-a80",
    name: "Relay A80",
    type: "Integrated amplifier",
    category: "amplifiers",
    img: "integrated",
    price: 18900,
    desc: "A two-channel integrated amplifier for a passive stereo system. The brushed silver lid and graphite front frame a large volume dial. Its analogue RCA input accepts line-level audio from a separate source.",
    specs: {
      Channels: "Stereo",
      "Rated output": "80 W per channel",
      Input: "Analogue RCA",
      Finish: "Silver / graphite",
      Unit: "Single amplifier",
    },
    summary: "Stereo · 80 W/channel",
    priceUnit: "per amplifier",
    notes: [
      [
        "At the equipment rack",
        "Route line-level cables to the RCA input and speaker cable from the left and right outputs. Leave the vents clear and follow the final installation clearances when planning a shelf.",
      ],
      [
        "Comparing output ratings",
        "The A80 concept lists 80 W per channel and the A40 lists 40 W. Compare final measurements at the same speaker load, distortion limit, and number of driven channels.",
      ],
    ],
    faq: [
      [
        "Will twice the rated power sound twice as loud?",
        "Under the same test conditions, doubling amplifier power adds about 3 dB of available level before clipping. Speaker sensitivity and listening distance also affect what you hear.",
      ],
      [
        "Can it power active studio monitors?",
        "Active monitors already contain amplifiers and normally accept line-level signals. Use an appropriate line-level output from your source or controller, and keep amplified speaker outputs for passive speakers.",
      ],
    ],
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
  {
    id: "crossover-guide",
    title: "Reading a passive crossover schematic",
    tag: "Circuit notes",
    img: "inductor",
    intro:
      "Trace one amplifier channel from the input terminals to each driver. A two-way network gives the woofer and tweeter different electrical paths.",
    parts: [
      [
        "Follow each branch",
        "In a simple first-order design, a series inductor reduces high-frequency current to the woofer, and a series capacitor reduces low-frequency current to the tweeter. More complex networks add components for slope, level, or impedance correction.",
      ],
      [
        "Check units before ordering",
        "Read inductors in millihenries (mH), capacitors in microfarads (µF), and resistors in ohms (Ω). Compare the full component description, including resistance or voltage rating where specified.",
      ],
      [
        "Check the acoustic result",
        "The electrical filter and the drivers both shape the measured output. Validate a design with both drivers installed in the intended cabinet. A crossover frequency printed on a board is a starting point for that check.",
      ],
    ],
  },
  {
    id: "amp-guide",
    title: "Matching an amplifier to passive speakers",
    tag: "System setup",
    img: "integrated",
    intro:
      "Work backwards from the speakers and the listening seat. The load, distance, and signal source tell you more about a suitable amplifier than its largest printed wattage figure.",
    parts: [
      [
        "Check the speaker load",
        "Find the speaker’s nominal impedance and, when available, its minimum impedance. Consult the amplifier’s supported loads for the intended number of speakers per channel.",
      ],
      [
        "Read power figures together",
        "Compare continuous power ratings at the same impedance and distortion limit. A speaker’s sensitivity indicates how much sound it produces under a stated input and measurement distance.",
      ],
      [
        "Trace the source connection",
        "A line-level source can feed a compatible analogue input. A turntable cartridge needs a phono stage, and a digital-only source needs digital-to-analogue conversion somewhere in the chain.",
      ],
    ],
  },
];
