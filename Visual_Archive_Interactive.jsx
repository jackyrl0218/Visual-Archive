const { useEffect, useMemo, useState } = React;

const CATEGORIES = [
  {
    key: "Immersive Environment / Perceptual Systems",
    color: "#f0a23a",
    intro:
      "These works reorganize perception by using light, mirrors, haze, and architectural scale. I grouped them first because they establish the archive's central question: how can an artwork act on the body before it is interpreted as an image or object?",
  },
  {
    key: "Wearables / Body-Centric Interaction",
    color: "#c471ed",
    intro:
      "This section shifts from room-scale immersion to interfaces worn on or attached to the body. The works here show technology as something intimate, social, and sometimes unsettling rather than neutral.",
  },
  {
    key: "Generative Systems / Algorithmic Aesthetics",
    color: "#53e2bf",
    intro:
      "These pieces foreground rules, iteration, and controlled variation. I organized them together to show how computation becomes a visual method and how system logic can produce both order and surprise.",
  },
  {
    key: "Minimal Materiality / Spatial Calm",
    color: "#d7c7a8",
    intro:
      "This group focuses on reduction, restraint, and attention to material presence. The works are less about spectacle and more about how form, proportion, and atmosphere slow down perception.",
  },
  {
    key: "Feedback Systems / Embodied Tech",
    color: "#e25d4d",
    intro:
      "These works are structured by loops: viewer and image, body and sensor, action and system response. They help me think about interactivity not as novelty but as a way to redistribute agency.",
  },
  {
    key: "Conceptual Systems / Representation",
    color: "#7ec8e3",
    intro:
      "Language, framing, and media display become the subject here. I grouped these works to examine how text, sound, and institutional presentation organize attention and produce meaning.",
  },
  {
    key: "Data Immersion / Computational Aesthetics",
    color: "#47d3c8",
    intro:
      "This section looks at data as both material and environment. The works translate abstraction into sensory experience, often making systems that are normally invisible feel bodily present.",
  },
  {
    key: "Biometric Interaction / Collective Presence",
    color: "#ff6f7c",
    intro:
      "The last section focuses on works that capture, externalize, or stage physiological signals and collective participation. I placed it last because it makes the archive's recurring concern with embodiment most explicit.",
  },
];

const CATEGORY_COLOR = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.color]));

const BIBLIOGRAPHY = [
  {
    code: "B1",
    short: "Bishop, Installation Art",
    full:
      "Bishop, Claire. Installation Art: A Critical History. London: Tate Publishing, 2005.",
  },
  {
    code: "B2",
    short: "Bourriaud, Relational Aesthetics",
    full:
      "Bourriaud, Nicolas. Relational Aesthetics. Dijon: Les presses du reel, 2002.",
  },
  {
    code: "B3",
    short: "Burnham, Systems Esthetics",
    full:
      'Burnham, Jack. "Systems Esthetics." Artforum 7, no. 1 (1968): 30-35.',
  },
  {
    code: "B4",
    short: "Grau, Virtual Art",
    full:
      "Grau, Oliver. Virtual Art: From Illusion to Immersion. Cambridge, MA: MIT Press, 2003.",
  },
  {
    code: "B5",
    short: "Hansen, Bodies in Code",
    full:
      "Hansen, Mark B. N. Bodies in Code: Interfaces with Digital Media. New York: Routledge, 2006.",
  },
  {
    code: "B6",
    short: "Manovich, Language of New Media",
    full:
      "Manovich, Lev. The Language of New Media. Cambridge, MA: MIT Press, 2001.",
  },
  {
    code: "B7",
    short: "Pallasmaa, Eyes of the Skin",
    full:
      "Pallasmaa, Juhani. The Eyes of the Skin: Architecture and the Senses. Chichester: Wiley, 2012.",
  },
  {
    code: "B8",
    short: "Paul, Digital Art",
    full:
      "Paul, Christiane. Digital Art. 4th ed. London: Thames & Hudson, 2023.",
  },
];

const DATA = [
  {
    id: 1,
    title: "Ascent (white)",
    artist: "Karolina Halatek",
    year: "2020",
    medium: "Installation with light and haze",
    img: "https://static.designboom.com/wp-content/uploads/2022/10/light-fog-installation-karolina-halatek-ascent-designboom-600-1.jpg",
    citation: "Halatek, Karolina. Ascent (white), 2020. Installation with light and haze.",
    url: "https://www.karolinahalatek.com/Ascent-white",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "A spiraling volume of light and haze turns empty space into a navigable atmosphere. The work matters to my research because it produces orientation through bodily sensation first and representation second, which aligns with Bishop's writing on installation and Grau's account of immersion.",
    relevance:
      "This is one of the clearest examples in the archive of space behaving like a medium. It pairs closely with Turrell, Eliasson, and teamLab around the question of how viewers physically compose the work through movement.",
    refs: ["B1", "B4", "B7"],
    related: [10, 11, 16],
    kw: ["immersion", "light", "haze", "perception"],
    grad: "linear-gradient(135deg,#0b0d2c,#1a1e4a,#f4f4ff)",
  },
  {
    id: 2,
    title: "Returning the Gaze",
    artist: "Behnaz Farahi",
    year: "2022",
    medium: "Cyber-physical robotic installation",
    img: "https://behnazfarahi.com/returning-the-gaze/returning-the-gaze-01.jpg",
    citation: "Farahi, Behnaz. Returning the Gaze, 2022. Robotic installation.",
    url: "https://behnazfarahi.com/returning-the-gaze/",
    cat: "Wearables / Body-Centric Interaction",
    annotation:
      "A wearable system tracks the model's eyes and redirects amplified images of her gaze back toward viewers. It is relevant because it turns watching into a reciprocal relation, connecting to Hansen's account of embodied interfaces and Bourriaud's emphasis on relations between participants.",
    relevance:
      "This work frames technology as social choreography instead of utility. It cross-references Stelarc and Farahi's other wearables in the archive by making agency visible at the level of the face and body.",
    refs: ["B2", "B5", "B8"],
    related: [15, 29, 30],
    kw: ["wearable", "gaze", "robotics", "social interface"],
    grad: "linear-gradient(135deg,#13051f,#2f0d4a,#c471ed)",
  },
  {
    id: 3,
    title: "Software Portfolio",
    artist: "Katharina Brunner",
    year: "2024",
    medium: "Digital generative artworks",
    img: "https://katharinabrunner.de/wp-content/uploads/2018/11/generativeart.png",
    citation: "Brunner, Katharina. Software Portfolio, 2024. Digital generative artworks.",
    url: "https://katharinabrunner.de/software-portfolio/",
    cat: "Generative Systems / Algorithmic Aesthetics",
    annotation:
      "The portfolio demonstrates how compact procedural rules can produce extensive variation in color, rhythm, and geometry. I included it because it makes algorithmic authorship legible and supports Burnham's systems-based framework as well as Paul's discussion of software-driven art.",
    relevance:
      "This entry helps bridge early computer art and current generative practice. It connects to Molnar, Nees, Reas, and Mohr as a contemporary continuation of rule-based visual thinking.",
    refs: ["B3", "B6", "B8"],
    related: [7, 19, 25, 26],
    kw: ["generative art", "algorithms", "variation", "software"],
    grad: "linear-gradient(135deg,#08180f,#113523,#53e2bf)",
  },
  {
    id: 4,
    title: "Residential Interior Project",
    artist: "Rikai Interior",
    year: "2023",
    medium: "Interior design visualization",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/853ae6145577599.Y3JvcCwxNjM2LDEyODAsMjc1LDA.jpg",
    citation: "Rikai Interior. Residential Interior Project, 2023. Interior design visualization.",
    url: "https://www.behance.net/gallery/145577599/Respublika_31",
    cat: "Minimal Materiality / Spatial Calm",
    annotation:
      "Neutral surfaces, low contrast, and soft textures create a deliberately quiet visual field. It is useful in the archive because it extends minimalist concerns beyond sculpture into lived space and supports Pallasmaa's argument that atmosphere and tactile imagination structure perception.",
    relevance:
      "This image introduces a design-oriented counterpart to Judd, Brancusi, and Ando. It shows that minimality in my research is not only formal but also environmental and sensory.",
    refs: ["B1", "B7"],
    related: [8, 27, 28],
    kw: ["interior", "minimalism", "materiality", "calm"],
    grad: "linear-gradient(135deg,#191713,#2d281f,#d7c7a8)",
  },
  {
    id: 5,
    title: '"monument" 1 for V. Tatlin',
    artist: "Dan Flavin",
    year: "1964",
    medium: "Fluorescent light installation",
    img: "https://cdn.sanity.io/images/juzvn5an/release-adp/93e9ec6973ac508d940bbe53a033ce1bb0452ec9-1440x1920.jpg?w=800",
    citation: 'Flavin, Dan. "monument" 1 for V. Tatlin, 1964. Fluorescent light installation.',
    url: "https://www.davidzwirner.com/artworks/dan-flavin--monument-1-for-v-tatlin-11300",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "Industrial fluorescent tubes define space through emitted light rather than mass. I included it as an early anchor for the archive because it shows how a minimal structure can still create an experiential field, linking installation history to later immersive environments.",
    relevance:
      "Flavin is a historical bridge between minimal form and perceptual atmosphere. This entry cross-references Turrell, Halatek, and Eliasson as later expansions of light into full environments.",
    refs: ["B1", "B4"],
    related: [1, 10, 11],
    kw: ["light installation", "minimalism", "space", "perception"],
    grad: "linear-gradient(135deg,#130800,#c4853d,#fff3e4)",
  },
  {
    id: 6,
    title: "TV Buddha",
    artist: "Nam June Paik",
    year: "1974",
    medium: "Closed-circuit video sculpture",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/TV_Buddha.jpg/960px-TV_Buddha.jpg",
    citation: "Paik, Nam June. TV Buddha, 1974. Closed-circuit video sculpture.",
    url: "https://en.wikipedia.org/wiki/TV_Buddha",
    cat: "Feedback Systems / Embodied Tech",
    annotation:
      "A Buddha statue watches its own live image on a television monitor. The recursive setup makes feedback visible and turns contemplation into a media loop, which strongly connects to Manovich's thinking on mediation and Burnham's systems framework.",
    relevance:
      "This work is central to my interest in self-observation, liveness, and technological reflection. It pairs directly with Nauman, Graham, and Rain Room as differently staged feedback systems.",
    refs: ["B3", "B6", "B8"],
    related: [18, 21, 22],
    kw: ["feedback", "video", "loop", "embodiment"],
    grad: "linear-gradient(135deg,#100b0b,#2d1717,#e25d4d)",
  },
  {
    id: 7,
    title: "(Des)Ordres",
    artist: "Vera Molnar",
    year: "1974",
    medium: "Plotter drawing",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vera_Moln%C3%A1r_%281996%29.png",
      "https://i0.wp.com/spalterdigital.com/wp-content/uploads/2015/12/DSC_8404-copy1.jpg?fit=1655%2C1590&ssl=1",
    ],
    citation: "Molnar, Vera. (Des)Ordres, 1974. Plotter drawing.",
    url: "https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r",
    cat: "Generative Systems / Algorithmic Aesthetics",
    annotation:
      "Molnar uses algorithmic deviation to loosen a strict grid into slight disorder. The work is important because it shows that computation in art does not remove expression; instead, expression emerges from constraint, variation, and controlled disturbance.",
    relevance:
      "It is one of the strongest precedents for the archive's generative cluster. It resonates with Nees and Reas while giving those later works a clear historical foundation.",
    refs: ["B3", "B6", "B8"],
    related: [3, 19, 25],
    kw: ["plotter", "grid", "variation", "system"],
    grad: "linear-gradient(135deg,#f2f1ea,#d7d4ca,#2a2a2a)",
  },
  {
    id: 8,
    title: "Princesse X",
    artist: "Constantin Brancusi",
    year: "1915-16",
    medium: "Bronze sculpture",
    img: "https://www.arthistoryproject.com/site/assets/files/33466/constantin-brancusi-princess-x-1916-obelisk-art-history.png",
    citation: "Brancusi, Constantin. Princesse X, 1915-16. Bronze sculpture.",
    url: "https://en.wikipedia.org/wiki/Princess_X",
    cat: "Minimal Materiality / Spatial Calm",
    annotation:
      "The sculpture compresses bodily reference into a highly reduced, polished form. I included it because it demonstrates how minimal means can still hold bodily ambiguity, which helps connect formal reduction to embodied reading.",
    relevance:
      "This piece supports the archive's quieter material strand. It cross-references Judd, Ando, and the interior image as examples where restraint sharpens attention instead of diminishing it.",
    refs: ["B1", "B7"],
    related: [4, 27, 28],
    kw: ["abstraction", "bronze", "body", "minimal form"],
    grad: "linear-gradient(135deg,#19140d,#c9a35d,#f1e5cf)",
  },
  {
    id: 9,
    title: "Installation for Bilbao",
    artist: "Jenny Holzer",
    year: "1997",
    medium: "LED signboards",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/GuggenheimLED.jpg/1280px-GuggenheimLED.jpg",
    citation: "Holzer, Jenny. Installation for Bilbao, 1997. LED signboards.",
    url: "https://www.guggenheim-bilbao.eus/en/the-collection/works/installation-for-bilbao",
    cat: "Conceptual Systems / Representation",
    annotation:
      "Holzer transforms scrolling text into an architectural encounter. It matters to my archive because language stops functioning as a neutral carrier of content and instead becomes spatial, rhythmic, and bodily, supporting both Bishop's and Bourriaud's attention to situated spectatorship.",
    relevance:
      "This work is a key reference for how information can be staged as environment. It connects to Kruger, Cardiff, and Listening Post through different forms of textual and sonic address.",
    refs: ["B1", "B2", "B8"],
    related: [20, 23, 34],
    kw: ["LED", "text", "architecture", "language"],
    grad: "linear-gradient(135deg,#081019,#183042,#7ec8e3)",
  },
  {
    id: 10,
    title: "The Weather Project",
    artist: "Olafur Eliasson",
    year: "2003",
    medium: "Installation with monofrequency lamps and mist",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Tate.modern.weather.project.jpg",
    citation: "Eliasson, Olafur. The Weather Project, 2003. Installation with monofrequency lamps and mist.",
    url: "https://www.tate.org.uk/whats-on/tate-modern/unilever-series/unilever-series-olafur-eliasson-weather-project",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "A gigantic artificial sun and atmospheric haze transform the museum hall into a collective weather event. I read it as a landmark example of immersion that is simultaneously environmental and social, tying together Grau's account of immersion and Bourriaud's relational framework.",
    relevance:
      "This piece clarifies why spectatorship in my archive is often collective rather than solitary. It relates directly to Halatek, Kusama, and teamLab through large-scale perceptual staging.",
    refs: ["B2", "B4", "B7"],
    related: [1, 16, 17],
    kw: ["environment", "mist", "light", "collective presence"],
    grad: "linear-gradient(135deg,#1e0800,#cc6200,#f7c844)",
  },
  {
    id: 11,
    title: "Afrum I (White)",
    artist: "James Turrell",
    year: "1967",
    medium: "Cross Corner Projection",
    img: "https://collections-images.lacma.org/remote_images/ma-32886-WEB.jpg",
    citation: "Turrell, James. Afrum I (White), 1967. Cross Corner Projection.",
    url: "https://en.wikipedia.org/wiki/James_Turrell",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "A projected cube appears materially present while existing only as light. This work is central to my research because it demonstrates that perception itself can be the artistic medium, reinforcing Pallasmaa's sensory approach and Bishop's writing on installation as an activated encounter.",
    relevance:
      "Turrell is a conceptual and formal hinge in the archive. He links Flavin's minimal light to more expansive installations by Halatek and Eliasson.",
    refs: ["B1", "B4", "B7"],
    related: [1, 5, 10],
    kw: ["light projection", "illusion", "perception", "space"],
    grad: "linear-gradient(135deg,#00041c,#13285f,#a3b3ff)",
  },
  {
    id: 12,
    title: "Pulse Room",
    artist: "Rafael Lozano-Hemmer",
    year: "2006",
    medium: "Interactive installation with light bulbs and heart rate sensors",
    img: "https://www.lozano-hemmer.com/image_sets/pulse_room/mexico_2020/pulse_room_mexico_city_2020_my_4484.jpg",
    citation: "Lozano-Hemmer, Rafael. Pulse Room, 2006. Interactive installation.",
    url: "https://www.lozano-hemmer.com/pulse_room.php",
    cat: "Biometric Interaction / Collective Presence",
    annotation:
      "Participants touch a sensor and see their heartbeat transferred into a field of flashing bulbs, creating an accumulating archive of prior bodies. The work is especially relevant because it visualizes involuntary data and turns intimacy into a shared atmosphere.",
    relevance:
      "This is the clearest biometric anchor in the archive. It cross-references Pulse Index and As We Are around public versions of private bodily signals and identity traces.",
    refs: ["B2", "B5", "B8"],
    related: [32, 33, 35],
    kw: ["heartbeat", "biometric", "light", "participation"],
    grad: "linear-gradient(135deg,#120809,#2f1115,#ff6f7c)",
  },
  {
    id: 13,
    title: "Archive Dreaming",
    artist: "Refik Anadol",
    year: "2017",
    medium: "Immersive media installation with machine learning",
    img: "https://refikanadol.com/wp-content/uploads/2018/03/009-2400x1350.jpg",
    citation: "Anadol, Refik. Archive Dreaming, 2017. Immersive media installation.",
    url: "https://refikanadol.com/works/archive-dreaming/",
    cat: "Data Immersion / Computational Aesthetics",
    annotation:
      "Machine learning reorganizes a large research archive into flowing visual correlations that oscillate between legibility and abstraction. I included it because it stages data not as a chart but as an environment, which strongly aligns with Paul's and Manovich's writing on digital visualization.",
    relevance:
      "This piece helps define the archive's contemporary data-aesthetic pole. It pairs with Ikeda, Flight Patterns, and Machine Hallucinations around translation from information to atmosphere.",
    refs: ["B6", "B8"],
    related: [14, 31, 36],
    kw: ["AI", "archive", "data", "immersion"],
    grad: "linear-gradient(135deg,#040711,#0c1a32,#47d3c8)",
  },
  {
    id: 14,
    title: "data.tron",
    artist: "Ryoji Ikeda",
    year: "2007",
    medium: "Audiovisual installation",
    img: "https://www.ryojiikeda.com/data/work/datamatics-datatron-1.jpg",
    citation: "Ikeda, Ryoji. data.tron, 2007. Audiovisual installation.",
    url: "https://www.ryojiikeda.com/project/datamatics/",
    cat: "Data Immersion / Computational Aesthetics",
    annotation:
      "Rapid fields of numbers and lines are synchronized with sound, overwhelming the viewer with the scale and speed of computation. It is important because it converts abstract data into bodily intensity rather than explanatory graphics.",
    relevance:
      "Ikeda provides a rigorous counterpoint to Anadol's more fluid machine-learning imagery. Together they show two different aesthetics of digital immersion: austere precision and algorithmic excess.",
    refs: ["B4", "B6", "B8"],
    related: [13, 31, 34],
    kw: ["data", "sound", "projection", "digital sublime"],
    grad: "linear-gradient(135deg,#000000,#00120a,#00ff9d)",
  },
  {
    id: 15,
    title: "Third Hand",
    artist: "Stelarc",
    year: "1980-1998",
    medium: "Prosthetic performance",
    img: "https://www.medinart.eu/wp-content/uploads/2014/04/MEDinART_Stelarc_2.jpg",
    citation: "Stelarc. Third Hand, 1980-1998. Prosthetic performance.",
    url: "https://en.wikipedia.org/wiki/Stelarc",
    cat: "Wearables / Body-Centric Interaction",
    annotation:
      "A mechanically actuated third hand extends the body through muscle-triggered control. It remains useful to my research because it treats technology as a literal bodily supplement, foregrounding enhancement, alienation, and agency all at once.",
    relevance:
      "Stelarc pushes body-interface questions to an extreme. It supports a more provocative reading of Farahi's wearables by making augmentation impossible to separate from spectacle and control.",
    refs: ["B5", "B8"],
    related: [2, 29, 30],
    kw: ["prosthetic", "cyborg", "performance", "augmentation"],
    grad: "linear-gradient(135deg,#100b1e,#241338,#c471ed)",
  },
  {
    id: 16,
    title: "Crystal Universe",
    artist: "teamLab",
    year: "2018",
    medium: "Interactive LED installation",
    img: "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/4E8moosGD8XXGB3nHeDxue/public",
    citation: "teamLab. Crystal Universe, 2018. Interactive LED installation.",
    url: "https://www.teamlab.art/e/tokyo/",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "Mirrors and suspended LEDs create a digitally responsive field with no obvious edge. I included it because it extends older immersive strategies into networked interactivity and emphasizes that perception in digital environments is co-produced through movement and interface.",
    relevance:
      "This is a useful contemporary counterpart to Kusama and Eliasson. It shows how immersion shifts once computational responsiveness becomes part of the experience.",
    refs: ["B4", "B5", "B8"],
    related: [10, 17, 35],
    kw: ["LED", "mirror", "interactive", "infinity"],
    grad: "linear-gradient(135deg,#030616,#0e1f5a,#00c9ff)",
  },
  {
    id: 17,
    title: "Infinity Mirrored Room",
    artist: "Yayoi Kusama",
    year: "2013",
    medium: "Mirrors, LED lighting, acrylic balls, water",
    img: "https://www.thebroad.org/sites/default/files/art/kusama_the_souls_of_millions_1.jpg",
    citation: "Kusama, Yayoi. Infinity Mirrored Room, 2013. Mirrors, LED lighting, acrylic balls, and water.",
    url: "https://www.thebroad.org/art/yayoi-kusama/infinity-mirrored-room-souls-millions-light-years-away",
    cat: "Immersive Environment / Perceptual Systems",
    annotation:
      "Mirrors multiply points of light into a seemingly boundless environment, dissolving spatial certainty and bodily scale. It belongs here because it makes interiority itself feel architectural and supports Grau's account of immersive illusion.",
    relevance:
      "Kusama sharpens the archive's interest in self-loss within spectacular environments. It connects with teamLab and Halatek while remaining emotionally more intimate and solitary.",
    refs: ["B1", "B4"],
    related: [1, 16, 10],
    kw: ["mirror", "infinity", "light", "void"],
    grad: "linear-gradient(135deg,#050214,#14052b,#ff56c1)",
  },
  {
    id: 18,
    title: "Rain Room",
    artist: "Random International",
    year: "2012",
    medium: "Water, valves, 3D tracking cameras",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/RainRoomSharjah.jpg/960px-RainRoomSharjah.jpg",
    citation: "Random International. Rain Room, 2012. Interactive installation.",
    url: "https://random-international.com/work/rain-room/",
    cat: "Feedback Systems / Embodied Tech",
    annotation:
      "A rain field responds to tracked bodies, suspending water wherever a participant stands or moves. I included it because it makes feedback tactile and environmental rather than purely screen-based.",
    relevance:
      "The work extends the logic of TV Buddha into an architectural sensor system. It cross-references Nauman and Graham by turning self-awareness into physical navigation.",
    refs: ["B1", "B5", "B8"],
    related: [6, 21, 22],
    kw: ["tracking", "water", "responsive environment", "interaction"],
    grad: "linear-gradient(135deg,#090b12,#1a2234,#5f93b8)",
  },
  {
    id: 19,
    title: "Schotter",
    artist: "Georg Nees",
    year: "1968-70",
    medium: "Computer-generated lithograph",
    img: "https://framemark.vam.ac.uk/collections/2009CE0997/full/735,/0/default.jpg",
    citation: "Nees, Georg. Schotter, 1968-70. Computer-generated lithograph.",
    url: "https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/",
    cat: "Generative Systems / Algorithmic Aesthetics",
    annotation:
      "An ordered grid progressively breaks down as randomness is introduced line by line. The work remains one of the clearest demonstrations of generative thinking, showing how a system can stage order, entropy, and visual argument at once.",
    relevance:
      "Nees is foundational for the logic behind this archive's generative cluster. The print cross-references Molnar, Reas, and Mohr by making algorithmic variation visibly analytical.",
    refs: ["B3", "B6", "B8"],
    related: [7, 25, 26],
    kw: ["computer art", "grid", "randomness", "order"],
    grad: "linear-gradient(135deg,#101010,#2e2e2e,#9bcdb7)",
  },
  {
    id: 20,
    title: "The Forty Part Motet",
    artist: "Janet Cardiff",
    year: "2001",
    medium: "Sound installation with 40 loudspeakers",
    img: [
      "https://cardiffmiller.com/wp-content/uploads/2001/04/b_Tokyo-1280x853.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lydinstallation_ARoS.jpg/1280px-Lydinstallation_ARoS.jpg",
    ],
    citation: "Cardiff, Janet. The Forty Part Motet, 2001. Sound installation with 40 loudspeakers.",
    url: "https://www.gallery.ca/collection/artwork/the-forty-part-motet",
    cat: "Conceptual Systems / Representation",
    annotation:
      "Each loudspeaker plays an individual recorded voice, allowing visitors to compose their own listening path through proximity. I included it because it turns sound, movement, and attention into a spatial reading practice rather than a fixed composition.",
    relevance:
      "This work broadens the archive beyond image-centered immersion. It relates to Holzer and Listening Post by staging information as a field the body must navigate.",
    refs: ["B1", "B2", "B7"],
    related: [9, 34, 10],
    kw: ["sound", "spatial listening", "voices", "navigation"],
    grad: "linear-gradient(135deg,#081018,#1a2834,#7ec8e3)",
  },
  {
    id: 21,
    title: "Live-Taped Video Corridor",
    artist: "Bruce Nauman",
    year: "1969-70",
    medium: "Corridor installation with video",
    img: [
      "https://walklistencreate.org/wp-content/uploads/2025/11/BILD.jpg",
      "https://www.medienkunstnetz.de/assets/img/data/80/bild1.jpg",
    ],
    citation: "Nauman, Bruce. Live-Taped Video Corridor, 1969-70. Corridor installation with video.",
    url: "https://www.medienkunstnetz.de/works/live-taped-video-corridor/",
    cat: "Feedback Systems / Embodied Tech",
    annotation:
      "A narrow corridor controls the viewer's movement while video monitoring produces disorientation between bodily position and mediated image. It is essential here because it reveals that interface can be architectural, coercive, and psychological at once.",
    relevance:
      "Nauman sharpens the archive's concern with control inside interactive systems. It directly supports Rain Room, TV Buddha, and Graham by showing feedback as a spatial condition.",
    refs: ["B1", "B5", "B6"],
    related: [6, 18, 22],
    kw: ["corridor", "surveillance", "video", "disorientation"],
    grad: "linear-gradient(135deg,#110b0b,#2b1515,#e25d4d)",
  },
  {
    id: 22,
    title: "Present Continuous Past(s)",
    artist: "Dan Graham",
    year: "1974",
    medium: "Time-delay video and mirror installation",
    img: [
      "https://www.centrepompidou.fr/media/picture/f7/b1/f7b1170b6caf0d4aeb43563d59ca46ed/thumb_large.jpg",
      "https://www.lissongallery.com/media/images/artworks/dan-graham/Present_Continuous_Pasts_1.width-1200.jpg",
    ],
    citation: "Graham, Dan. Present Continuous Past(s), 1974. Time-delay video and mirror installation.",
    url: "https://www.lissongallery.com/artists/dan-graham/artworks/present-continuous-past-s",
    cat: "Feedback Systems / Embodied Tech",
    annotation:
      "Mirrors and delayed video create layered presents and recent pasts, turning self-perception into a temporal puzzle. I included it because it shows how mediation edits time as much as space, which deepens the archive's feedback thread.",
    relevance:
      "Graham complements Nauman by making the loop more analytic than coercive. It also links to Holzer and Listening Post through the staging of delayed information.",
    refs: ["B3", "B5", "B6"],
    related: [6, 9, 21],
    kw: ["mirror", "delay", "self-perception", "time"],
    grad: "linear-gradient(135deg,#0f0909,#291313,#e25d4d)",
  },
  {
    id: 23,
    title: "Untitled (Your Body is a Battleground)",
    artist: "Barbara Kruger",
    year: "1989",
    medium: "Photographic silkscreen on vinyl",
    img: [
      "https://www.thebroad.org/sites/default/files/styles/webp_convert_only/public/art/kruger_your_body.jpg.webp?itok=Rf2i1ja_",
      "https://upload.wikimedia.org/wikipedia/en/5/51/Your_body_is_a_battleground.jpg",
    ],
    citation: "Kruger, Barbara. Untitled (Your Body is a Battleground), 1989. Photographic silkscreen on vinyl.",
    url: "https://en.wikipedia.org/wiki/Your_body_is_a_battleground",
    cat: "Conceptual Systems / Representation",
    annotation:
      "Kruger uses direct address, mass-media typography, and split photographic structure to politicize the body as an image and site of discourse. It is relevant because it clarifies how representation itself can be an intervention into embodied experience.",
    relevance:
      "This piece gives the archive's body-oriented works a sharper discursive frame. It cross-references Holzer and Farahi by treating spectatorship, gender, and address as active structures.",
    refs: ["B2", "B6"],
    related: [2, 9, 30],
    kw: ["text", "body", "feminism", "mass media"],
    grad: "linear-gradient(135deg,#111111,#292929,#d9d9d9)",
  },
  {
    id: 24,
    title: "Electronic Superhighway: Continental U.S., Alaska, Hawaii",
    artist: "Nam June Paik",
    year: "1995",
    medium: "Video installation with neon and monitors",
    img: [
      "https://ids.si.edu/ids/deliveryService?id=SAAM-2002.23_1&max=960",
      "https://d3ec1vt3scx7rr.cloudfront.net/files/styles/ui_large/s3/images/2021-08/Visitors%20viewing%20Superhighway%202.png",
    ],
    citation: "Paik, Nam June. Electronic Superhighway: Continental U.S., Alaska, Hawaii, 1995. Video installation with neon and monitors.",
    url: "https://americanart.si.edu/artwork/electronic-superhighway-continental-us-alaska-hawaii-71478",
    cat: "Conceptual Systems / Representation",
    annotation:
      "Television monitors and neon outlines map the United States as a dense network of media flows. The work belongs here because it materializes information infrastructure and anticipates later data environments through a critical national image.",
    relevance:
      "Paik helps connect early video feedback to broader media ecologies. This piece supports Anadol and Listening Post by treating information networks as both image and environment.",
    refs: ["B3", "B6", "B8"],
    related: [6, 13, 34],
    kw: ["network", "video wall", "mapping", "media culture"],
    grad: "linear-gradient(135deg,#08080d,#16203a,#7ec8e3)",
  },
  {
    id: 25,
    title: "Process 14",
    artist: "Casey Reas",
    year: "2004",
    medium: "Software process / generative drawing",
    img: [
      "https://freight.cargo.site/w/1200/i/U2588336390681352196285628009108/p418-1-resized.jpg",
      "https://reas.com/process/14/image-1.jpg",
    ],
    citation: "Reas, Casey. Process 14, 2004. Software process / generative drawing.",
    url: "https://reas.com/process/",
    cat: "Generative Systems / Algorithmic Aesthetics",
    annotation:
      "Reas translates concise textual instructions into a living visual procedure. I included it because it makes code, diagram, and image coexist, clarifying how generative art can be both a system description and a visual event.",
    relevance:
      "This entry is especially useful for linking early plotter work to contemporary software practice. It cross-references Molnar, Nees, and Brunner through a shared commitment to rule-based emergence.",
    refs: ["B3", "B6", "B8"],
    related: [3, 7, 19],
    kw: ["software art", "instructions", "process", "emergence"],
    grad: "linear-gradient(135deg,#09110d,#183126,#53e2bf)",
  },
  {
    id: 26,
    title: "P-197 D",
    artist: "Manfred Mohr",
    year: "1978",
    medium: "Computer-generated drawing",
    img: [
      "https://www.mercedes-benz.art/media/Mohr_P-197.jpg",
      "https://dam.org/archive/images/mohr/manfred-mohr-p197d.jpg",
    ],
    citation: "Mohr, Manfred. P-197 D, 1978. Computer-generated drawing.",
    url: "https://dam.org/archive/mohr/manfred-mohr.htm",
    cat: "Generative Systems / Algorithmic Aesthetics",
    annotation:
      "Mohr uses computational permutations to test how simple geometric systems can yield surprising complexity. The work strengthens the archive because it situates generative aesthetics within rigorous mathematical reduction rather than decorative randomness.",
    relevance:
      "Mohr is a useful counterpart to Reas and Brunner. His drawings keep the archive's generative category historically broad while preserving a tight focus on systems thinking.",
    refs: ["B3", "B6", "B8"],
    related: [3, 19, 25],
    kw: ["geometry", "computer drawing", "permutation", "system"],
    grad: "linear-gradient(135deg,#f0f0ee,#d8d8d2,#262626)",
  },
  {
    id: 27,
    title: "Church of the Light",
    artist: "Tadao Ando",
    year: "1989",
    medium: "Architecture",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ibaraki_Kasugaoka_Church_light_cross.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Church_of_the_Light.jpg/1280px-Church_of_the_Light.jpg",
    ],
    citation: "Ando, Tadao. Church of the Light, 1989. Ibaraki, Osaka, Japan.",
    url: "https://en.wikipedia.org/wiki/Church_of_the_Light",
    cat: "Minimal Materiality / Spatial Calm",
    annotation:
      "Concrete, shadow, and a cruciform opening produce an austere space where light becomes structure. I included it because it shows that minimal environments can be emotionally charged through proportion and sensory restraint rather than ornament.",
    relevance:
      "Ando gives the archive's minimal branch an architectural scale. The project cross-references Flavin and Turrell by showing light as both spiritual and spatial material.",
    refs: ["B4", "B7"],
    related: [5, 8, 11],
    kw: ["architecture", "light", "concrete", "silence"],
    grad: "linear-gradient(135deg,#111111,#262626,#d7c7a8)",
  },
  {
    id: 28,
    title: "Untitled (Stack)",
    artist: "Donald Judd",
    year: "1967",
    medium: "Galvanized iron and transparent green lacquer",
    img: [
      "https://sma-search-api.ku.edu/ea4208842c08996bda056e641cd793b4b74066379b42086fda0a837d677233f8/1972.0028.jpg",
      "https://www.moma.org/media/W1siZiIsIjM2ODQ1MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEyMDB4MTIwMFx1MDAzZSJdXQ.jpg?sha=3c98c28d2c87cc5d",
    ],
    citation: "Judd, Donald. Untitled (Stack), 1967. Galvanized iron and transparent green lacquer on galvanized iron.",
    url: "https://www.moma.org/collection/works/81072",
    cat: "Minimal Materiality / Spatial Calm",
    annotation:
      "The repeated units emphasize interval, edge, and wall relation more than symbolism. It is relevant because it demonstrates a stripped material logic that still shapes bodily awareness of scale and spacing.",
    relevance:
      "Judd strengthens the archive's minimalist foundation. He provides a formal counterweight to the more atmospheric entries in this category such as the interior project and Ando's architecture.",
    refs: ["B1", "B7"],
    related: [4, 8, 27],
    kw: ["minimalism", "seriality", "objecthood", "space"],
    grad: "linear-gradient(135deg,#171717,#2e2e2e,#d7c7a8)",
  },
  {
    id: 29,
    title: "Spider Dress 2.0",
    artist: "Anouk Wipprecht",
    year: "2015",
    medium: "Interactive wearable sculpture",
    img: [
      "https://www.designboom.com/twitterimages/uploads/2014/12/spider-dress-anouk-wipprecht-designboom01.jpg",
      "https://www.anoukwipprecht.nl/wp-content/uploads/2015/03/spiderdress20_4.jpg",
    ],
    citation: "Wipprecht, Anouk. Spider Dress 2.0, 2015. Interactive wearable sculpture.",
    url: "https://www.anoukwipprecht.nl/projects/spider-dress-2-0/",
    cat: "Wearables / Body-Centric Interaction",
    annotation:
      "A robotic dress detects the proximity of others and extends mechanical limbs in response. I included it because it makes personal space programmable and turns wearable technology into a social boundary system.",
    relevance:
      "This work makes the archive's wearables section more explicitly behavioral. It pairs with Farahi and Stelarc by treating the body as a reactive platform for public interaction.",
    refs: ["B2", "B5", "B8"],
    related: [2, 15, 30],
    kw: ["wearable", "robotic fashion", "proximity", "defense"],
    grad: "linear-gradient(135deg,#14081e,#32104d,#c471ed)",
  },
  {
    id: 30,
    title: "Caress of the Gaze",
    artist: "Behnaz Farahi",
    year: "2017",
    medium: "Interactive 3D-printed wearable",
    img: [
      "https://behnazfarahi.com/assets/img/og/og_caress-of-the-gaze.jpg",
      "https://behnazfarahi.com/caress-of-the-gaze/caress-of-the-gaze-01.jpg",
    ],
    citation: "Farahi, Behnaz. Caress of the Gaze, 2017. Interactive 3D-printed wearable.",
    url: "https://behnazfarahi.com/caress-of-the-gaze/",
    cat: "Wearables / Body-Centric Interaction",
    annotation:
      "The wearable responds to attention by opening and closing its small tendril-like surfaces across the body. It is useful because it makes social perception tactile and architectural at the scale of skin.",
    relevance:
      "This work deepens the archive's interest in gaze, sensitivity, and response. It directly supports Returning the Gaze while also speaking back to Kruger's politicized body image.",
    refs: ["B5", "B8"],
    related: [2, 23, 29],
    kw: ["body interface", "3D print", "gaze", "responsive surface"],
    grad: "linear-gradient(135deg,#10061a,#27103b,#c471ed)",
  },
  {
    id: 31,
    title: "Flight Patterns",
    artist: "Aaron Koblin",
    year: "2005",
    medium: "Data visualization",
    img: [
      "https://www.aaronkoblin.com/work/flightpatterns/title.jpg",
      "https://aaronkoblin.com/images/uploads/flightpatterns_usa_1024.jpg",
    ],
    citation: "Koblin, Aaron. Flight Patterns, 2005. Data visualization.",
    url: "https://aaronkoblin.com/work/flightpatterns/",
    cat: "Data Immersion / Computational Aesthetics",
    annotation:
      "Flight data becomes a luminous cartographic pattern that reveals density, circulation, and infrastructure. I included it because it demonstrates how a dataset can gain affective and visual force without losing its systemic basis.",
    relevance:
      "Koblin helps connect information graphics to immersive data art. He sits productively between Paik's media mapping and Anadol's atmospheric archive visualizations.",
    refs: ["B6", "B8"],
    related: [13, 14, 24],
    kw: ["data visualization", "mapping", "infrastructure", "pattern"],
    grad: "linear-gradient(135deg,#051015,#0e2732,#47d3c8)",
  },
  {
    id: 32,
    title: "Pulse Index",
    artist: "Rafael Lozano-Hemmer",
    year: "2010",
    medium: "Biometric installation",
    img: [
      "https://www.lozano-hemmer.com/image_sets/pulse_index/hong_kong_2023/pulse_index_hong_kong_2023_wkcda_001_t.jpg",
      "https://www.lozano-hemmer.com/image_sets/pulse_index/pulse_index_05.jpg",
    ],
    citation: "Lozano-Hemmer, Rafael. Pulse Index, 2010. Biometric installation.",
    url: "https://www.lozano-hemmer.com/pulse_index.php",
    cat: "Biometric Interaction / Collective Presence",
    annotation:
      "Participants place a finger on a sensor to record their pulse and fingerprint, producing a wall of shifting biometric traces. The work belongs here because it ties identity, bodily data, and archive logic into a single public display.",
    relevance:
      "Pulse Index expands the heartbeat logic of Pulse Room into a denser data portrait. It strengthens the archive's argument that biometric media can be intimate and administrative at the same time.",
    refs: ["B5", "B8"],
    related: [12, 33, 36],
    kw: ["fingerprint", "pulse", "identity", "archive"],
    grad: "linear-gradient(135deg,#11080a,#301318,#ff6f7c)",
  },
  {
    id: 33,
    title: "As We Are",
    artist: "Matthew Mohr",
    year: "2014",
    medium: "Interactive portrait sculpture",
    img: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUAmoFr9GzHBvCqFvFNoYEAYIfBDFqABkI5JCKWFvg05Pxpkr0OQO26tuH7D52b0OIFCMwHZfHfDTwb3QlRu3bRbo5P6vPX-vS5Yoqmund-rBsdLc4ijZFbCwR9bMUz3PDR7sUeRl7rM0t/s1600/matthew-mohrs-latest-interactive-sculpture-as-we-are-displays-your-face-by-taking-a-selfie.png",
      "https://matthewmohr.com/wp-content/uploads/2014/09/AsWeAre-3.jpg",
    ],
    citation: "Mohr, Matthew. As We Are, 2014. Interactive portrait sculpture.",
    url: "https://matthewmohr.com/as-we-are/",
    cat: "Biometric Interaction / Collective Presence",
    annotation:
      "A large-scale head sculpture scans visitors and displays their faces on its surface, turning portraiture into a public, participatory event. I included it because it literalizes the translation from body to data-driven image.",
    relevance:
      "This work is helpful for thinking about self-image in biometric systems. It connects to Pulse Index and TV Buddha through public forms of mediated self-recognition.",
    refs: ["B5", "B8"],
    related: [6, 12, 32],
    kw: ["portrait", "scan", "public interaction", "self-image"],
    grad: "linear-gradient(135deg,#12090a,#2a1115,#ff6f7c)",
  },
  {
    id: 34,
    title: "Listening Post",
    artist: "Mark Hansen and Ben Rubin",
    year: "2001",
    medium: "Data-driven installation",
    img: [
      "https://static.wixstatic.com/media/035244_516142e5fd21466aaf92b39e0883e66f~mv2.png/v1/crop/x_26,y_16,w_346,h_239/fill/w_339,h_235,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/035244_516142e5fd21466aaf92b39e0883e66f~mv2.png",
      "https://www.earstudio.com/projects/listeningpost/listeningpost-01.jpg",
    ],
    citation: "Hansen, Mark, and Ben Rubin. Listening Post, 2001. Data-driven installation.",
    url: "https://www.earstudio.com/projects/listeningpost.html",
    cat: "Conceptual Systems / Representation",
    annotation:
      "Text harvested from online chat spaces is reorganized into voice, rhythm, and a field of small screens. The piece matters because it turns live network language into a choreographed public artwork, balancing information extraction with poetic structure.",
    relevance:
      "Listening Post links Holzer's textual environments to data-based aesthetics. It also helps tie the conceptual and data sections of the archive together through language as live feed.",
    refs: ["B2", "B6", "B8"],
    related: [9, 20, 24],
    kw: ["network text", "screens", "voice", "live data"],
    grad: "linear-gradient(135deg,#081018,#1a2934,#7ec8e3)",
  },
  {
    id: 35,
    title: "Your uncertain shadow (colour)",
    artist: "Olafur Eliasson",
    year: "2010",
    medium: "Installation with colored light projection",
    img: [
      "https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_1280,w_1280/img/your-uncertain-shadow-colour_19665.jpg",
      "https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_1280,w_1280/img/your-uncertain-shadow-colour_19663.jpg",
    ],
    citation: "Eliasson, Olafur. Your uncertain shadow (colour), 2010. Installation with colored light projection.",
    url: "https://olafureliasson.net/artwork/your-uncertain-shadow-colour-2010/",
    cat: "Biometric Interaction / Collective Presence",
    annotation:
      "Visitors encounter a colored shadow that detaches from stable bodily outlines and responds to movement. I included it because it treats the body as mutable data while preserving the immediacy of a shadow-like double.",
    relevance:
      "This work creates a strong bridge between immersion and biometrics. It relates to Crystal Universe, Pulse Room, and As We Are through different forms of responsive embodiment.",
    refs: ["B4", "B5", "B8"],
    related: [12, 16, 33],
    kw: ["shadow", "body tracking", "interactive", "presence"],
    grad: "linear-gradient(135deg,#120814,#2f0f34,#ff6f7c)",
  },
  {
    id: 36,
    title: "Machine Hallucinations - Nature Dreams",
    artist: "Refik Anadol",
    year: "2021",
    medium: "AI data sculpture",
    img: [
      "https://refikanadol.com/wp-content/uploads/2021/12/01-2400x1350.jpg",
      "https://refikanadol.com/wp-content/uploads/2021/09/refik-anadol-machine-hallucinations-nature-dreams-01.jpg",
    ],
    citation: "Anadol, Refik. Machine Hallucinations - Nature Dreams, 2021. AI data sculpture.",
    url: "https://refikanadol.com/works/machine-hallucinations-nature-dreams/",
    cat: "Data Immersion / Computational Aesthetics",
    annotation:
      "Nature imagery is reprocessed through machine-learning systems into a flowing, immersive visual field that feels both organic and synthetic. It is relevant because it shows how AI aesthetics can merge archive, simulation, and spectacle.",
    relevance:
      "This entry extends Archive Dreaming into a more image-saturated mode. It also helps connect biometric and data concerns by showing how large datasets become seemingly sentient surfaces.",
    refs: ["B4", "B6", "B8"],
    related: [13, 31, 32],
    kw: ["AI", "hallucination", "nature", "data sculpture"],
    grad: "linear-gradient(135deg,#07101b,#10304b,#47d3c8)",
  },
];

function getWorkById(id) {
  return DATA.find((item) => item.id === id);
}

function bibliographyLookup(code) {
  return BIBLIOGRAPHY.find((item) => item.code === code);
}

function ImageTile({ work, style, onClick }) {
  const sources = Array.isArray(work.img) ? work.img : [work.img];
  const [imgIndex, setImgIndex] = useState(0);
  const color = CATEGORY_COLOR[work.cat] || "#999";

  useEffect(() => {
    setImgIndex(0);
  }, [work.id]);

  const activeSrc = sources[imgIndex];
  const exhausted = imgIndex >= sources.length;

  if (exhausted || !activeSrc) {
    return (
      <div
        onClick={onClick}
        style={{
          ...style,
          background: work.grad,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          textAlign: "center",
          cursor: onClick ? "pointer" : "default",
        }}
      >
        <div
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 16,
            color: "#f7f2e9",
            marginBottom: 6,
          }}
        >
          {work.title}
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color,
            letterSpacing: ".08em",
          }}
        >
          {work.artist} / {work.year}
        </div>
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={`${work.title} by ${work.artist}`}
      onClick={onClick}
      onError={() => setImgIndex((current) => current + 1)}
      style={{ ...style, objectFit: "cover", cursor: onClick ? "pointer" : "default" }}
    />
  );
}

function WorkCard({ work, onOpen, index }) {
  const color = CATEGORY_COLOR[work.cat] || "#999";

  return (
    <article
      onClick={() => onOpen(work)}
      style={{
        background: "#111214",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 18px 45px rgba(0,0,0,.22)",
        animation: `fadeIn .45s ease both`,
        animationDelay: `${index * 0.02}s`,
        breakInside: "avoid",
      }}
    >
      <div style={{ position: "relative", paddingTop: "70%", background: "#0b0b0d" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageTile work={work} style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(0,0,0,.62)",
            color,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: ".08em",
          }}
        >
          {String(work.id).padStart(2, "0")}
        </div>
      </div>
      <div style={{ padding: 18 }}>
        <div
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 22,
            color: "#f2ede3",
            lineHeight: 1.15,
            marginBottom: 6,
          }}
        >
          {work.title}
        </div>
        <div style={{ color: "#9c9c9c", fontSize: 14, marginBottom: 10 }}>
          {work.artist} / {work.year}
        </div>
        <p style={{ color: "#c9c4bb", fontSize: 14, lineHeight: 1.65, marginBottom: 14 }}>
          {work.annotation}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {work.kw.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "#8e8e8e",
                background: "rgba(255,255,255,.05)",
                borderRadius: 999,
                padding: "5px 9px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "#898989", lineHeight: 1.6 }}>
          <strong style={{ color: color }}>Texts:</strong>{" "}
          {work.refs.map((code) => bibliographyLookup(code)?.short || code).join("; ")}
        </div>
      </div>
    </article>
  );
}

function DetailModal({ work, onClose }) {
  const color = CATEGORY_COLOR[work.cat] || "#999";

  useEffect(() => {
    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        padding: 22,
        background: "rgba(0,0,0,.84)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(980px, 100%)",
          maxHeight: "90vh",
          overflow: "auto",
          background: "#111214",
          borderRadius: 18,
          border: `1px solid ${color}44`,
          boxShadow: "0 30px 80px rgba(0,0,0,.48)",
        }}
      >
        <div style={{ position: "sticky", top: 0, zIndex: 2, textAlign: "right", padding: 12 }}>
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: "rgba(255,255,255,.08)",
              color: "#d8d8d8",
              fontSize: 18,
            }}
          >
            x
          </button>
        </div>

        <div style={{ padding: "0 24px 28px" }}>
          <div
            style={{
              width: "100%",
              height: 420,
              borderRadius: 14,
              overflow: "hidden",
              background: "#09090b",
              marginBottom: 22,
            }}
          >
            <ImageTile work={work} style={{ width: "100%", height: "100%", display: "block" }} />
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "5px 12px",
              borderRadius: 999,
              background: `${color}20`,
              color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              marginBottom: 14,
            }}
          >
            {work.cat}
          </div>

          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 36,
              color: "#f2ede3",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            {work.title}
          </h2>

          <div style={{ color: "#9e9e9e", fontSize: 16, marginBottom: 20 }}>
            {work.artist} / {work.year} / {work.medium}
          </div>

          <section style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#7f7f7f",
                letterSpacing: ".08em",
                marginBottom: 7,
              }}
            >
              Annotation
            </div>
            <p style={{ fontSize: 15, color: "#d1cbc1", lineHeight: 1.75 }}>{work.annotation}</p>
          </section>

          <section style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#7f7f7f",
                letterSpacing: ".08em",
                marginBottom: 7,
              }}
            >
              Why It Matters In This Archive
            </div>
            <p style={{ fontSize: 15, color: "#d1cbc1", lineHeight: 1.75 }}>{work.relevance}</p>
          </section>

          <section style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#7f7f7f",
                letterSpacing: ".08em",
                marginBottom: 7,
              }}
            >
              Citation
            </div>
            <p style={{ fontSize: 14, color: "#b8b1a7", lineHeight: 1.7, marginBottom: 6 }}>
              {work.citation}
            </p>
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color, fontSize: 13, textDecoration: "none", borderBottom: `1px solid ${color}55` }}
            >
              {work.url}
            </a>
          </section>

          <section style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#7f7f7f",
                letterSpacing: ".08em",
                marginBottom: 7,
              }}
            >
              Bibliography Cross-References
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {work.refs.map((code) => {
                const ref = bibliographyLookup(code);
                return (
                  <div
                    key={code}
                    style={{
                      borderLeft: `2px solid ${color}`,
                      paddingLeft: 12,
                      color: "#c6c0b7",
                      fontSize: 14,
                      lineHeight: 1.65,
                    }}
                  >
                    <strong style={{ color }}>{code}</strong> {ref?.full || code}
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#7f7f7f",
                letterSpacing: ".08em",
                marginBottom: 7,
              }}
            >
              Related Works In Archive
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {work.related.map((id) => {
                const relatedWork = getWorkById(id);
                if (!relatedWork) return null;
                return (
                  <span
                    key={id}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.05)",
                      color: "#d7d0c6",
                      fontSize: 13,
                    }}
                  >
                    {String(id).padStart(2, "0")} {relatedWork.title}
                  </span>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  const grouped = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        ...category,
        works: DATA.filter((item) => item.cat === category.key),
      })),
    []
  );

  const visibleGroups =
    selectedCategory === "All"
      ? grouped
      : grouped.filter((group) => group.key === selectedCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: #09090b; }
        body { font-family: 'DM Sans', sans-serif; color: #f2ede3; }
        a { color: inherit; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media print {
          body { background: #ffffff !important; color: #111111 !important; }
          .no-print-sticky { position: static !important; backdrop-filter: none !important; }
          .page-shell { max-width: none !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#09090b" }}>
        <header
          style={{
            padding: "72px clamp(18px,4vw,64px) 40px",
            borderBottom: "1px solid rgba(255,255,255,.06)",
            background:
              "radial-gradient(circle at top left, rgba(255,185,122,.12), transparent 28%), radial-gradient(circle at top right, rgba(111,198,255,.10), transparent 24%), #09090b",
          }}
        >
          <div className="page-shell" style={{ maxWidth: 1380, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: ".2em",
                color: "#7b7b7b",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              ARS Visual Culture / Final Image Archive / Spring 2026
            </div>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(40px,6vw,74px)",
                lineHeight: 1,
                fontWeight: 400,
                margin: "0 0 12px",
                maxWidth: 980,
              }}
            >
              Visual Archive: Embodied Perception, Systems, and Immersive Media
            </h1>
            <p style={{ maxWidth: 920, color: "#ccc4b8", fontSize: 17, lineHeight: 1.85, margin: "0 0 16px" }}>
              This archive gathers 36 images across installation art, wearables, generative systems,
              minimalist spatial design, feedback environments, conceptual media, data visualization, and
              biometric interaction. The organizing principle is not chronology but a set of recurring
              research questions about how bodies, systems, and environments shape perception.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                color: "#8f8b84",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
              }}
            >
              <span>Jack Yuan</span>
              <span>/</span>
              <span>Parsons School of Design</span>
              <span>/</span>
              <span>36 Works</span>
              <span>/</span>
              <span>8 Bibliographic Sources</span>
            </div>
          </div>
        </header>

        <section style={{ padding: "28px clamp(18px,4vw,64px) 8px" }}>
          <div
            className="page-shell"
            style={{
              maxWidth: 1380,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.5fr) minmax(320px,1fr)",
              gap: 22,
            }}
          >
            <div
              style={{
                background: "#111214",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  color: "#868686",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Organizing Principles
              </div>
              <p style={{ color: "#d1cbc1", fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                I organized the archive into eight thematic sections that move from environmental immersion
                to bodily interface, then to systems, conceptual media, and biometric participation. This
                arrangement lets the archive read as an argument: perception is never neutral, and these
                works show different ways that technology, material form, and spatial design produce how a
                viewer feels, understands, or becomes visible.
              </p>
              <p style={{ color: "#d1cbc1", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The annotations intentionally cross-reference other works and bibliography entries so that
                the archive can stand on its own as a research document. Rather than treating each image as
                isolated, the archive emphasizes clusters, precedents, and conceptual overlaps.
              </p>
            </div>

            <div
              style={{
                background: "#111214",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: ".12em",
                  color: "#868686",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Bibliography Key
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {BIBLIOGRAPHY.map((ref) => (
                  <div key={ref.code} style={{ color: "#d1cbc1", fontSize: 13, lineHeight: 1.7 }}>
                    <strong style={{ color: "#f0a23a" }}>{ref.code}</strong> {ref.full}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="no-print-sticky"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            padding: "16px clamp(18px,4vw,64px)",
            background: "rgba(9,9,11,.92)",
            backdropFilter: "blur(14px)",
            borderTop: "1px solid rgba(255,255,255,.03)",
            borderBottom: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <div
            className="page-shell"
            style={{ maxWidth: 1380, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 8 }}
          >
            <button
              onClick={() => setSelectedCategory("All")}
              style={{
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.12)",
                background: selectedCategory === "All" ? "rgba(255,255,255,.08)" : "transparent",
                color: selectedCategory === "All" ? "#f2ede3" : "#8d8d8d",
                padding: "8px 14px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                cursor: "pointer",
              }}
            >
              All / {DATA.length}
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                style={{
                  borderRadius: 999,
                  border: `1px solid ${category.color}55`,
                  background: selectedCategory === category.key ? `${category.color}22` : "transparent",
                  color: selectedCategory === category.key ? category.color : "#8d8d8d",
                  padding: "8px 14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                {category.key.split(" / ")[0]}
              </button>
            ))}
          </div>
        </div>

        <main style={{ padding: "28px clamp(18px,4vw,64px) 80px" }}>
          <div className="page-shell" style={{ maxWidth: 1380, margin: "0 auto" }}>
            {visibleGroups.map((group) => (
              <section key={group.key} style={{ marginBottom: 42 }}>
                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      display: "inline-block",
                      borderBottom: `2px solid ${group.color}`,
                      color: group.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                      paddingBottom: 5,
                    }}
                  >
                    {group.key}
                  </div>
                  <p style={{ maxWidth: 980, color: "#c6c0b7", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                    {group.intro}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                    gap: 22,
                  }}
                >
                  {group.works.map((work, index) => (
                    <WorkCard key={work.id} work={work} onOpen={setSelectedWork} index={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>

        <footer
          style={{
            padding: "26px clamp(18px,4vw,64px) 42px",
            borderTop: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <div className="page-shell" style={{ maxWidth: 1380, margin: "0 auto", color: "#8f8b84", lineHeight: 1.8 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".12em" }}>
              Submission Note
            </div>
            <p style={{ fontSize: 14, margin: "10px 0 0" }}>
              This version is structured to work both as an interactive archive and as a PDF export. Before
              final submission, proofread the wording against your bibliography format and spot-check any
              external image hosts to make sure every image renders the way you want in export.
            </p>
          </div>
        </footer>
      </div>

      {selectedWork ? <DetailModal work={selectedWork} onClose={() => setSelectedWork(null)} /> : null}
    </>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
