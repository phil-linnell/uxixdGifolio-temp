const gifs = [
  {
    day: "044",
    content: "Foil blocking refracts light to give that nostalgic chase card special status.",
    client: "Micro but Many",
    gif: "ultrarare.mp4"
  },
  {
    day: "043",
    content: "We used facial recognition to deliver personalised experiences to the designated driver.",
    client: "Toyota | ustwo",
    gif: "facerecognition.mp4"
  },
  {
    day: "042",
    content: "An AV should not provide a crossing for a pedestrian, unless the road's full width can be provided.",
    client: "OEM X",
    gif: "avcrossing.mp4"
  },
  {
    day: "041",
    content: "Some fun for a Saturday. An old educational Flash game I designed and co-developed for the British Museum.",
    client: "British Museum",
    gif: "britishmuseum.mp4"
  },
  {
    day: "040",
    content: "The motorcycle ignition kicks off the startup for the HMI with a colour-coded systems check.",
    client: "Ducati",
    gif: "bikestartup.mp4"
  },
  {
    day: "039",
    content: "Pause live TV at any moment to bring up contextually relevant additional content.",
    client: "Samsung | AllofUs",
    gif: "samsungtv.mp4"
  },
  {
    day: "038",
    content: "My book about my toy car collection shows off their opening doors with it's lenticular cover!",
    client: "Micro but Many",
    gif: "microlenticular.mp4"
  },
  {
    day: "037",
    content: "I asked a classroom of 10-year-olds to draw what they would want from a driverless car.",
    client: "NewTerritory",
    gif: "avkids.mp4"
  },
  {
    day: "036",
    content: "Reductionist approach to glanceable turn-by-turn motorcycle navigation.",
    client: "Ducati",
    gif: "ducaticluster.mp4"
  },
  {
    day: "035",
    content: "Touch interactives should provide time to rest the arm between taps.",
    client: "Science Museum",
    gif: "whoami.mp4"
  },
  {
    day: "034",
    content: "We combined data with creativity, enabling users to output art from the data they layer.",
    client: "Worldpay",
    gif: "worldpayart.mp4"
  },
  {
    day: "033",
    content: "Combining parking permit + bay data, GoPark instantly displays parking eligibility in situ and in real-time.",
    client: "Ford | ustwo",
    gif: "fordgopark.mp4"
  },
  {
    day: "032",
    content: "Bouba is round and bouncy. Kiki is sharp and direct. We used personality to prioritise info.",
    client: "OEM X",
    gif: "boubakiki.mp4"
  },
  {
    day: "031",
    content: "Explore the life-size exterior and interior of your dream car using AR.",
    client: "JLR | ustwo",
    gif: "jlrarhmi.mp4"
  },
  {
    day: "030",
    content: "IXD can bring brand delight to packaging - or a raspberry from a virtual pet.",
    client: "PlayStation",
    gif: "eyepet.mp4"
  },
  {
    day: "029",
    content: "Gestures in the car can be problematic. We explored a 'gesture zone' to rein in the ambiguity.",
    client: "Toyota | ustwo",
    gif: "toyotavolume.mp4"
  },
  {
    day: "028",
    content: "Simple interactions are often best, like this gaming radial dial + button combo.",
    client: "Science Museum",
    gif: "greenhouse.mp4"
  },
  {
    day: "027",
    content: "Real sand is driven into reclaimed tyres for this off-road racing game.",
    client: "PlayStation",
    gif: "sandkit.mp4"
  },
  {
    day: "026",
    content: "Is a needle pointing at a number the best way to show speed? We explore alternatives.",
    client: "ustwo",
    gif: "ferrari.mp4"
  },
  {
    day: "025",
    content: "Using VR to safely test our electric vehicle sound designs with doppler effect.",
    client: "Nissan | ustwo",
    gif: "evsoundtest.mp4"
  },
  {
    day: "024",
    content: "Shifting seat configuration allows for groups of friends or groups of strangers.",
    client: "ustwo",
    gif: "rooseating.mp4"
  },
  {
    day: "023",
    content: "Move map under pin, rather than move pin. A green aperture reaffrims focus on selection.",
    client: "Ford | ustwo",
    gif: "fordgoparkzone.mp4"
  },
  {
    day: "022",
    content: "A 'phygital' twin of a working project helps test for digital and physical / ergonomic requirements offsite.",
    client: "AllofUs",
    gif: "phygitaltwin.mp4"
  },
  {
    day: "021",
    content: "A metal cube levitates with electro-magnets + precision weight distribution.",
    client: "Huawei | AllofUs",
    gif: "huaweicube.mp4"
  },
  {
    day: "020",
    content: "Interactive timeline showing the development of autonomous vehicles.",
    client: "ustwo",
    gif: "avtimeline.mp4"
  },
  {
    day: "019",
    content: "Contextual actions. Directions back to your car, with beep and flash offered upon approach.",
    client: "JLR | ustwo",
    gif: "jlr.mp4"
  },
  {
    day: "018",
    content: "Contextual surface displays for pairing and authorisation feedback.",
    client: "Garmin",
    gif: "garmincar.mp4"
  },
  {
    day: "017",
    content: "Architect your own floorplan as you explore the architect's digital showroom.",
    client: "CenterPlan | Unit9",
    gif: "centerplanbuild.mp4"
  },
  {
    day: "016",
    content: "Design your island on the physical game-board as it comes to life with AR on screen.",
    client: "Science Museum",
    gif: "sciencemuseum.mp4"
  },
  {
    day: "015",
    content: "An AR car configurator with life-size Land Rover so you can picture yours in your driveway.",
    client: "JLR | ustwo",
    gif: "jlrar.mp4"
  },
  {
    day: "014",
    content: "Closure experience; an AV should acknowledge a thank you gesture to establish human-machine respect.",
    client: "OEM X",
    gif: "avclosure.mp4"
  },
  {
    day: "013",
    content: "Concept for an interactive touch sphere using interior projection and touch-sensitive mesh.",
    client: "NBA | AllofUs",
    gif: "nbabasketball.mp4"
  },
  {
    day: "012",
    content: "An unboxing narrative that releases components in order of setup steps.",
    client: "PlayStation",
    gif: "playtvunbox.mp4"
  },
  {
    day: "011",
    content: "Using an Xbox Kinect camera for gaze detection to detect when the HMI needs to display for the driver.",
    client: "Toyota | ustwo",
    gif: "toyotafocus.mp4"
  },
  {
    day: "010",
    content: "When balance and vision don't match, car sickness occurs. Alexa I Spy solves that using real-time objects to spy.",
    client: "Ford | HMSD",
    gif: "fordechoauto.mp4"
  },
  {
    day: "009",
    content: "Connected homes with contextual presets. Ie. 'Away Mode', 'Cosy Mode', 'Party Mode' etc.",
    client: "Garmin",
    gif: "garminhome.mp4"
  },
  {
    day: "008",
    content: "E-ink tech means utilisation of a single AV can shift to the city's demands throughout the day.",
    client: "ustwo",
    gif: "roo.mp4"
  },
  {
    day: "007",
    content: "Start your car, from your watch - just like James Bond.",
    client: "JLR | ustwo",
    gif: "jlrremote.mp4"
  },
  {
    day: "006",
    content: "Decision fatigue? Select an option at random with a 'Surprise me' option.",
    client: "Micro but Many",
    gif: "randomcar.mp4"
  },
  {
    day: "005",
    content: "Context is key(board). A centred spacebar on-screen keyboard can save input time.",
    client: "Samsung | AllofUs",
    gif: "keyboard.mp4"
  },
  {
    day: "004",
    content: "We used haptic screens that utilise sound waves to mimic the feel of buttons for the blind.",
    client: "VW | ustwo",
    gif: "vwblindscreen.mp4"
  },
  {
    day: "003",
    content: "Dynamic navigation that meets you where most comfortable.",
    client: "CenterPlan | Unit9",
    gif: "centerplan.mp4"
  },
  {
    day: "002",
    content: "Indicate driver's speed exceeds the road's limit with peripheral colour.",
    client: "Citroën | ustwo",
    gif: "cluster.mp4"
  },
  {
    day: "001",
    content: "Where it all began. Build fast, learn fast. The prototypical approach to interaction design.",
    client: "Toyota | ustwo",
    gif: "toyotabuck.mp4"
  }
];

export default gifs;
