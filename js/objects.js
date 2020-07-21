//stores an array of objects that can be selected
var objects = [
    {objName: "Mercury",
     description: "Mercury is a world of extremes. Being the closest planet to the sun, it’s exposed to much higher levels of radiation than the Earth, causing its daytime side to become extremely hot. Due to its lack of an  atmosphere to trap heat, Mercury is also freezing cold on its nighttime side. Mercury also has the most eccentric (stretched-out) orbit. This means that an observer on Mercury would see a differently-sized sun depending on the time of year.",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/900px-Mercury_in_color_-_Prockter07-edit1.jpg\n",
     x: 1832.2,
     y: 492.1,
     visited: false,
     type: 'planet'},
    
    {objName: "Venus",
     description: "While most planets have average temperatures of far below freezing, Venus has a surface temperature of 700K (427o C). Venus also has the thickest atmosphere out of all the rocky planets. However, this atmosphere isn’t made out of nitrogen and oxygen - it’s almost entirely made from carbon dioxide. Thick clouds of sulfuric acid blanket the planet, making observation from space of the surface extremely difficult.<br><br><b>THE GREENHOUSE EFFECT:</b><br> Venus’ high temperatures and thick atmosphere are intrinsically linked. When sunlight reaches a planet, the light’s wavelength allows it to pass the atmosphere. This light warms the planet, causing it to radiate as well. The planet, being cooler, radiates at lower wavelength. The atmosphere can absorb some of the radiation, causing it to heat up and radiate a portion of the energy back towards the planet, heating it back up. This effect is what makes Venus so hot and keeps the Earth warm enough to support life.",
     imgLink: "https://hubblesite.org/uploads/image/display_image/282/web_print.jpg",
     x: 2128.3,
     y: 509.3,
     visited: false,
     type: 'planet'},

    {objName: "Mars",
     description: "Mars is often considered Earth’s “sister planet” with a similar size, distance from sun and (relatively similar) temperature. However, despite these similarities, Mars is cold and lifeless. Mars, unlike Earth, has virtually no magnetic field. This allows solar radiation to energize the Martian atmosphere, causing it to slowly evaporate from the planet. Additionally, Mars is smaller and can’t hold onto its atmosphere gravitationally as well as Earth. This thin atmosphere means Mars, like Mercury, can’t trap heat well, leaving it frozen and lifeless", 
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
     x: 27.82,
     y: 674.56,
     visited: false,
     type: 'planet'},

    {objName: "Jupiter",
     description: "Jupiter is well known as the largest planet in the solar system with a radius of more than ten times that of Earth’s. Despite its solid appearance, Jupiter has no true surface, only layers of increasingly dense gas. A notable feature of Jupiter is its Great Red Spot, a massive, rotating storm which has been present for hundreds of years. The cause for the redness of the spot is unknown.<br><br><b>Formation of Gas Giants</b><br>The massive size disparity between the small rocky planets and the massive gas giants comes from the gas giants’ ability to retain lighter gasses, such as hydrogen and helium. Lighter gasses aren’t as heavily attracted by gravity, and therefore fly away from the gravitationally weaker rocky planets and slowly evaporate. Additionally, the gasses of the rocky planets, being closer to the sun, have a higher temperature and therefore reach faster speeds, flying away from the planet. This is why we don’t have hydrogen in any significant amount in our atmosphere. The heavier, colder gas giants can retain the more plentiful gasses hydrogen and helium, allowing them to reach much larger sizes",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/600px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg",
     x: 453.5,
     y: 792.76,
     visited: false,
     type: 'planet'},

    {objName: "Saturn",
     description: "Saturn was once thought to have “ears” due to the mysterious bumps on its sides. Once better telescopes were created, it was found out that these were actually rings. These rings are made from suspended ice crystals and rocks orbiting around Saturn.<br>Chemically, Saturn is almost entirely hydrogen and helium, similar to Jupiter and formed in a similar way. However, its large rings make it visually distinctive from the other gas giants.<br><br><b>Tidal Forces</b><br>Gravity from one object pulls more strongly on nearby objects than on far away objects. This causes an effect known as a tidal force, where the difference in gravitational forces within an object slowly pulls it apart. All bodies within a gravitational field feel tidal forces, and bodies closer to the center of a gravitational field feel stronger tidal forces. Within a certain distance, known as the Roche limit, tidal forces exceed the gravity pulling the orbiting object together and pulls it apart. The resulting debris still orbits the central body, creating rings. Saturn’s many rings are composed of the ripped up meteoroids and moons that came too close to it.",
     imgLink: "https://hubblesite.org/uploads/image/display_image/4565/STSCI-H-p1943a-d-1280x720.png",
     x: 412.25,
     y: 784.5,
     visited: false,
     type: 'planet'},

    {objName: "Uranus",
     description: "<b>Uranus and Neptune</b><br>Uranus and Neptune are both gas giants, similar to Jupiter and Saturn. However, they are smaller in size and slightly different in their atmospheric composition. While Jupiter and Saturn are almost entirely hydrogen and helium, Uranus’ and Neptune’s atmospheres contain a significant amount of methane. All gasses absorb certain wavelengths of light, and Uranus and Neptune’s thick atmospheres result in almost all red wavelength light being absorbed and radiated by the planet, causing a blue-green color. Neptune. Uranus is distinct from Neptune in that its axis of rotation is perpendicular, rather than parallel, to its axis of revolution. In other words, Uranus “rolls” around the plane of its orbit",
     imgLink: "",
     x: 2325.4,
     y: 540.05,
     visited: false,
     type: 'planet'},

    {objName: "Neptune",
     description: "<b>Uranus and Neptune</b><br>Uranus and Neptune are both gas giants, similar to Jupiter and Saturn. However, they are smaller in size and slightly different in their atmospheric composition. While Jupiter and Saturn are almost entirely hydrogen and helium, Uranus’ and Neptune’s atmospheres contain a significant amount of methane. All gasses absorb certain wavelengths of light, and Uranus and Neptune’s thick atmospheres result in almost all red wavelength light being absorbed and radiated by the planet, causing a blue-green color. Neptune. Uranus is distinct from Neptune in that its axis of rotation is perpendicular, rather than parallel, to its axis of revolution. In other words, Uranus “rolls” around the plane of its orbit",
     imgLink: "",
     x: 58.597,
     y: 673.8,
     visited: false,
     type: 'planet'},

    {objName: "Horsehead Nebula",
     description: "<b>Nebulae and Star Formation</b><br>Discovered by the Hubble Space Telescope, the Horsehead Nebula was named for its distinctive shape. Note that the image is false color - all Hubble images are taken in black and white and artificially colored.<br><br>Nebulae like the Horsehead Nebula are massive clouds of dust and gas, often illuminated and ionized by stars around it and within it. Within nebulae, clouds of gas collapse into stars, earning nebulae the nickname “stellar nurseries”. It has been theorized that <a class='link' onclick='link(9)'>supernovae</a> can create shock waves which compress gas in these nebulae, generating rapid star formation.",
     imgLink: "https://hubblesite.org/uploads/image/display_image/3165/STScI-H-p1312a-d2560x1440.png",
     x: 1977.5,
     y: 658.03,
     visited: false,
     type: 'misc'},

    {objName: "Crab Pulsar",
     description: "The Crab Nebula was bright enough to see during the daytime one thousand years ago. By today, it has dimmed significantly from radiating so much energy away. Now, through the Hubble Space Telescope, upon very close inspection, we can see a tiny white star - the remains of the star that exploded.<br><br><b>Pulsars and Neutron Stars</b><br>Gravity pulls everything inward. In a normal star, the gravity of so much mass is counteracted by gas pressure. Since PV=nRT (from chemistry), the hotter a star is, the more gas pressure is created. Nuclear fusion keeps the core of a normal star very hot, allowing it to support itself. But what if the star has run out of nuclear fuel? Gravitational contraction releases energy, so some stars (white dwarves) can stave off total collapse through the heat from their own collapse. But when the star is too large and can’t fuse, quantum mechanics takes over. Since no two electrons can be in the exact same state at once, eventually the star collapses so far electrons are “smushed” together and can’t be pushed closer together. This pressure from these electrons is known as “electron degeneracy pressure”. Neutron stars as a consequence of this are extremely dense, and extremely hot from the energy released as they collapsed. They also spin extremely quickly due to conservation of angular momentum (smaller radius = less inertia, since angular momentum is spin speed * inertia, spin speed increases). Their magnetic fields direct electromagnetic radiation towards their magnetic poles, causing two beams of energy to shoot out. As they spin, their beams sometimes shine on our planet. This shining/not shining effect is why these neutron stars are known as pulsars.",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chandra-crab.jpg/375px-Chandra-crab.jpg",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Crab Nebula",
     description: "The Crab Nebula was observed by astronomers a thousand years ago. According to ancient records, it suddenly appeared in the sky and was so bright it could be seen even during the day.<br><br><b>Core Collapse Supernovae</b><br>When a high mass star runs out of elements to fuse together,[link to sirius], the pressure from nuclear fusion can no longer support the outer layers of the star. The outer layers collapse inward and rebound off the denser core, throwing material and energy out in a massive explosion. The brightness of these explosions far exceed the original brightness of any star. Since supernovae eventually fade over time, the Crab Nebula is now much fainter than it was a thousand years ago. The gaseous outer layers of the star, energized by the neutron star, <a class='link' onclick='link(8)'>Crab Pulsar</a>, glow.",
     imgLink: "",
     x: 1989.1,
     y: 483.9,
     visited: false,
     type: 'misc'}
];

var terms = [
    {termName: "Radiation, Wavelength, Spectra, Photon, Absorb",
     explanation: "Look at any source of light, such as a lightbulb, a glow in the dark sticker, or the sun (actually, don’t look at the sun). All of these sources are emitting energy and sending it out in the form of particles, called photons.<br><br>A photon is a tiny massless particle that moves at light speed. <br><br>When energy is sent by emitting, or radiating particles like photons, it is known as radiation. <br><br>However, in a complicated twist of physics, light is also like a wave. It oscillates up and down at different speeds, carrying energy across space. These waves of light are known as electromagnetic waves. X-rays, UV rays, microwaves, and visible light are all electromagnetic waves oscillating at different speeds.<br><br>How fast light is oscillating is referred to as its frequency. The distance between crests (tops) of a wave is known as the wavelength.  Since all light moves forward in space at the same speed, the higher the frequency, the lower the wavelength. Higher frequency waves carry more energy.<br><br>Real light from any source comes in the form of photons, which carry different amounts of energy and therefore come with different wavelengths, with some wavelengths being more common than others. This range of light is known a spectrum. Spectra is the plural of spectrum, and is used to refer to the practice of analyzing the amounts of each wavelength in a sample of light for more information.<br><br>Everything radiates energy. The brightness with which they radiate and the wavelengths at which they radiate depend on their temperature - hot things radiate in lower wavelengths and higher frequencies. The reason why most things are not glowing to us is because the frequencies of their radiation are too low for us to see. <br><br>Individual toms can absorb photons. However, for complicated chemistry reasons, specific atoms only absorb specific photons at set frequencies. For this reason, the frequencies absorbed by certain atoms will have less photons. When a spectrum is missing certain wavelengths that are defined by certain elements, it is known as an absorption spectrum."
    }
];
