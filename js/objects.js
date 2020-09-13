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
     type: 'misc'},
    
    {objName: "Andromeda Galaxy",
     description: "Andromeda is the closest galaxy to our own galaxy, the Milky Way. Its name comes from the constellation Andromeda, which itself was named after a character from Greek mythology. Several much smaller companion galaxies surround Andromeda.<br><br><b>Spiral Galaxies and Elliptical Galaxies </b><br><br>Spiral galaxies and elliptical galaxies are the two broad categories into which galaxies are sorted. Spiral galaxies are relatively flat with a bulge in the middle, while ellipticals are more spherical in shape. Spiral galaxies also have “arms”, curved shapes surrounding its center. Some spirals also have prominent “bars”, thick bands which cross the center and connect the arms. Spiral galaxies are thought to have originated as massive clouds of gas with higher angular velocity (spin speed) than ellipticals. This spinning creates a centrifugal force that throws the galaxy out into a disk. The spinning also slows down star formation, causing spiral galaxies to have formed most of their stars later than in ellipticals. Hence, elliptical galaxies have older stars while spirals have younger stars.<br><br><a class='link' onclick='link(11)'>M32</a>",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/M31_09-01-2011.jpg/1920px-M31_09-01-2011.jpg",
     x: 2514.1,
     y: 346.8,
     visited: false,
     type: 'misc'},

    {objName: "M32",
     description: "M32 is a small galaxy orbiting Andromeda along with many other small galaxies. It belongs to a relatively rare type of galaxy known as a compact elliptical with a very high star density. Like most ellipticals, the stars in M32 are old, and most of the young blue stars have died out long ago. No new stars are forming in M32. <br><br><a class='link' onclick='link(10)'>Andromeda</a>",
     imgLink: "",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Sombrero Galaxy",
     description: 'M104, commonly known as the sombrero galaxy, is one of the most visually distinct spiral galaxies. The galaxy happens to be almost perfectly side on from us, giving us a clear view of its dust lanes (the dark rings/edge). The central bulge of M104 is also much larger than usual, exaggerating the sombrero shape. Because star formation usually occurs faster and earlier closer to the center of a galaxy, the center of a spiral galaxy is usually full of many older stars, while the very edges contain dust that hasn’t yet collapsed into stars.<br><br><b> Parts of a Galaxy: </b><br><br>A spiral galaxy is divided into three main parts: the bulge, the lump that sticks out in the middle; the disk, the flat circular part that surrounds the bulge; and the halo, which consists of clusters and stars that aren’t quite in the disk. The bulge in almost all large galaxies contains a massive black hole, which can give off as much light as the whole galaxy [see quasar]. The disk slowly rotates around the bulge. Calculations show that the edges of disks should be moving far more slowly than they are, suggesting that invisible dark matter concentrated around and throughout the galaxy is pulling on it. An elliptical galaxy has no disk, but it still has a center (which may contain a black hole.)',
     imgLink: "https://hubblesite.org/uploads/image/display_image/1415/STScI-H-p0328a-d2560x1440.png",
     x: 1223.5,
     y: 723.3,
     visited: false,
     type: 'misc'},

    {objName: "Virgo cluster",
     description: "The Virgo Cluster is located in the constellation Virgo, which itself is associated both with several greek deities as well as the Virgin Mary. It contains approximately 1500 galaxies, the largest of which is M87 (link to M87).<br><br><b>Clusters and Superclusters</b><br><br>Like all interstellar objects, galaxies tend to come together due to the influence of gravity. Galaxies slowly come together to form galaxy clusters. However, not every galaxy is currently part of a cluster - our Milky Way itself is not. In these dense clusters, galaxy collisions and mergers are relatively common.  Entire galaxy clusters eventually come together to form superclusters. These superclusters are some of the largest structures in the entire universe.",
     imgLink: "https://www.messier-objects.com/wp-content/uploads/2017/08/Virgo-Cluster-768x514.jpg",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Alpha Centauri AB",
     description: "Alpha Centauri is the brightest star in the constellation Centaurus, named after a mythical horse-man creature. However, Alpha Centauri isn’t actually a single star - upon closer inspection, Alpha centauri is actually two stars orbiting each other, Alpha Centauri A and Alpha Centauri B. Both stars are approximately sun sized, with temperatures similar to that of the sun.<br><br><b>Binary Star Systems</b><br><br>Most stars you can see in the night sky aren’t actually single stars - they’re multiple stars. There can be double (binary) star systems, triple star systems, and even quadruple star systems. However, as the number of objects increase, their orbits become increasingly unstable and unpredictable. Optical binaries appear to be two stars through a telescope, but the two stars aren’t actually related - one is much further back. The best kind of binary for astronomers is an eclipsing binary, where one star fully covers the other during their orbits. With eclipsing binaries, astronomers can figure out the masses, orbit size, and actual size of the stars.",
     imgLink: "",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Beta Centauri",
     description: "Beta Centauri isn’t related to Alpha Centauri in any way except for being in a similar place in the sky. Beta Centauri is much further away than Alpha Centauri. However, in reality, Beta Centauri is actually brighter than Alpha Centauri, but it is much further away from us. Beta Centauri is composed of three stars orbiting each other, all of them massive B-type (link to Betelgeuse) stars.",
     imgLink: "",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Proxima Centauri",
     description: "Proxima Centauri is the closest star to our planet. Despite this, it’s also far too dim to see with the naked eye due to its intrinsic low luminosity. It’s also extremely far away compared to the other planets - it would take about 100,000 years to fly there on a modern day rocket. Upon arrival, one would find Proxima Centauri to be a red dwarf, far smaller and cooler than the sun. <br><br><b>Parallax</b><br><br>Look at something. Without turning your head, move sideways relative to it. Whoa, it moved! Look at something much further away now and try this again. Which one moved further? Using this deceptively simple fact, we can figure out how far things are just by measuring how much their image moves when we move. The change in position of the object is called parallax, and it is measured as an angle across the sky (assuming the sky is a giant sphere, it’s similar to measuring latitude and longitude degrees). Since actually moving an observatory is complicated and expensive, astronomers just wait for the Earth itself to move around the sun to measure parallax. One arcsecond (1/3600 degrees) worth of parallax means an object is once parallax-arcsecond away - that is, one parsec.",
     imgLink: "",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Bullet Cluster",
     description: "The Bullet Cluster is a cluster of approximately 40 galaxies (clump on the right in the image). Its name comes from its pointed bullet-like shape. Currently, it is colliding with another galaxy, a larger elliptical galaxy on the left. Their gravitational fields have pulled each other into strange shapes. The colors are artificially added - pink represents areas bright in x-rays, while the bluish-purple areas are where the majority of the mass is, calculated using gravitational lensing (see below). Since the areas don’t quite match up, this suggests that most of the matter in the cluster cannot be seen and does not emit light; that is, the cluster is filled with dark matter.<br><br><b>DARK MATTER</b><br><br>Gravity can bend space and light.  (simplified explanation). Sometimes, the light of an object passing near a massive object can be bent significantly, causing us to see the light of the original object as coming from a different direction. This effect, called gravitational lensing, was discovered when exact “mirror images” of stars were discovered. Apparently, this was just an illusion; the light from the star going different directions had been redirected towards the same point, causing two images to appear. Calculations showed that the visible matter did not exert enough gravitational force to “lense” light this way. Clearly, a massive quantity of invisible matter must exist that we can’t touch, see, or sense. This matter is called “dark matter” (unrelated to dark energy, which causes the universe to fly apart).",
     imgLink: "https://hubblesite.org/files/live/sites/hubble/files/home/science/galaxies/_images/STScI-H-galaxies-0639a-2400x1200.jpg",
     x: 1837.7,
     y: 1038.7,
     visited: false,
     type: 'misc'},

    {objName: "M87's Black Hole and Quasar",
     description: "M87 is a massive elliptical galaxy in the virgo supercluster. Like all large galaxies, at the center of M87 is a supermassive black hole. This black hole contains the mass of more than a billion suns (which is still a tiny fraction of M87’s mass). From this black hole shoots a relativistic jet that stretches thousands of light years. This black hole is relatively famous since it became the first black hole to have a picture taken of it. In reality, the picture isn’t a picture of the black hole itself (which is obviously black), but a picture of its accretion disk.<br><br><b>Black Holes and Quasars</b><br><br>Black holes are places where gravity has surpassed any possible opposing forces and collapsed into an infinitely small point. This usually happens after a very, very large star has run out of fuel and can’t support itself anymore. They grow by accreting mass - that is, having stuff fall in them. Due to their small size, their Roche limit (link to saturn) is relatively far away from them in relation to their radius. This means that things falling into them will be stretched and torn apart. While it may seem like black holes are giant vacuum cleaners, they don’t intrinsically have more “sucking power” than anything else their mass. As mass falls towards a black hole, it orbits the black hole in a giant ring (like Saturn!) called an accretion disk. Mass falling into black holes speeds up - since temperature is just average kinetic energy, this makes them very hot. Hot things radiate energy, making things falling into black holes very, very bright. In 1959, scientists were stunned by a very, very bright radio source. Confused, they called this source a quasi-stellar radio source, or quasar. Nowadays, quasar is a general term used to describe these extremely bright black holes that are currently busy consuming matter",
     imgLink: "https://cdn.britannica.com/s:700x500/26/205226-050-B2621B00/Black-hole-M87-centre-evidence-supermassive-black.jpg",
     x: 1240,
     y: 552.3,
     visited: false,
     type: 'misc'},

    {objName: "M87's Awesome Jet",
     description: "From M87’s black hole extends a massive, extremely bright line (shown in blue) all the way across the galaxy and beyond. This line is actually a jet of gas moving at relativistic speeds, hence its name “relativistic jet”. In fact, it moves so fast that relativistic effects (and/or some theorized optical illusions) make it appear to move faster than the speed of light. The cause of this jet, while unclear, is believed to be a giant torus (donut) of gas directing the super energized gas shooting out of the black hole. The gas itself gets its extreme speed and energy from the gravitational potential energy of material falling into a black hole",
     imgLink: "https://hubblesite.org/uploads/image/display_image/2736/print.jpg",
     x: -100,
     y: -100,
     visited: false,
     type: 'misc'},

    {objName: "Cat's Eye Nebula",
     description: "This image of the Cat’s Eye Nebula shows how beautiful some astronomical phenomena can be. The brilliant colors are artificially added - The Hubble Space Telescope (HST) does not record images in visible wavelengths. The nebula (giant cloud of gas) itself is slowly expanding and moving away from the central star. In the middle is a Wolf-Rayet star, a kind of very hot O-type (see Betelgeuse) star. The star in the middle blew away all of its hydrogen outer layers, which now make up the nebulae. Now fusing heavier elements, the star 9will eventually run out of things to fuse and turn into a white dwarf (see Sirius). This kind of nebula made from the thrown-off outer layers of stars is known as a planetary nebula, despite having nothing to do with planets.",
     imgLink: "https://hubblesite.org/uploads/image/display_image/1578/STScI-H-p0427a-d2560x1440.png",
     x: 650.32,
     y: 166.66,
     visited: false,
     type: 'misc'},

    {objName: "Sirius",
     description: "Sirius is the brightest star in the night sky, not Polaris. Sirius is also known as the “dog star” for its position in Canis Major (and is probably what the dog-man Sirius Black in Harry Potter is named after). Despite appearing as one star to us, Sirius is actually a binary system (see Alpha Centauri), with one star larger than our sun (Sirius A) and one tiny redder star (Sirius B). <br><br><b>Stellar Evolution and the HR Diagram</b><br><br>All stars change, grow, and shrink over their lifetime. To show where a star has been and where it’s going, astronomers keep track of their position on the H-R diagram. The H-R diagram, or Hertzsprung-Russell diagram, is a chart with temperature/color (hotter stars are always bluer, so they mean the same thing) on one axis and luminosity on the other. For historical reasons, increasing temperature goes right to left while increasing luminosity goes down to up. Stars start as prostars, big clumps of gas heated only by gravitational contraction, far right and down low. As fusion starts, they begin to climb to the left and up as they get hotter and brighter. Depending on the star’s mass, the star will fuse different elements at different times, and grow and die at different times. Very low mass stars will burn for far longer than the current age of the universe. Stars like our sun will eventually develop a hot outer layer that swells up, becoming very bright (moving up) and very red (moving right). Large blue stars will burn brighter and faster as they move through different elements and maybe eventually explode (link to crab nebula). In general, the larger the star, the faster it burns out.",
     imgLink: "https://commons.wikimedia.org/wiki/File:Sirius_A_and_B_Hubble_photo.jpg",
     x: 1862,
     y: 759.5,
     visited: false,
     type: 'misc'},

    {objName: "Betelgeuse",
     description: "Betelgeuse is a word taken from an Arabian phrase which means “the armpit of Orion.” Indeed, Betelgeuse is the armpit of the constellation Orion. The name also inspired a questionable movie about dead people named Beetle Juice. Betelgeuse itself is a red supergiant, a star cooler than the sun but far larger (ten suns in diameter). Due to its very large size, it is the tenth brightest star in the sky despite being far from our sun. It will also die quickly, since larger stars fuse elements together faster.<br><br><b>Stellar Classification</b><br><br>Stars are classified in two main ways: brightness and color. Brightness is usually simply a number on a logarithmic scale; apparent magnitude is the brightness of the star from Earth, while absolute magnitude is how bright the star would appear if placed 10 parsecs from Earth. The brighter the star, the lower its magnitude. The sun’s apparent magnitude is almost -27, while its actual magnitude is 4.84. In order to classify star color, astronomers use a star’s light’s spectra, or the brightness of a star in various colors. The stellar classes go, from bluer to redder, OBAFGKM (there are more, but they’re more rare), remembered with “Oh be a fine girl kiss me”. Between these letters a number is also tacked on - an O2 star is bluer than an O1 star. The sun itself is a G2 star. In general, the hotter the star, the higher the spectral class. Therefore, the coolest red dwarfs are usually M type stars while the hottest blue supergiants are O type stars.",
     imgLink: "",
     x: 1951.9,
     y: 587.81,
     visited: false,
     type: 'star'},

    {objName: 'RS Puppis',
     description: "RS Puppis is the brightest Cepheid Variable (see below) in the night sky. While it is relatively dim compared to most stars one can see in the night sky, it is still visible to the naked eye in a very dark place. The star itself is a red supergiant which grows and shrinks significantly and predictably. RS Puppis is located in the constellation of Puppis.<br><br><b>Cepheid Variables</b><br><br>Cepheid Variables are special as stars because they have variable brightness. Across the span of around a month, they will get brighter and dimmer. Every star is balanced by the forces of gas pressure and gravity (see sirius). Cepheid variables are special in that they switch between singly and doubly ionized helium. Doubly ionized helium is more opaque than singly ionized helium. When the outer layers have more doubly ionized helium, they absorb more energy, heat up, and expand. As it expands, it cools and the helium becomes less ionized. This makes it more transparent, and so it absorbs less energy and contracts again and heats up. The ionized helium makes these cycles very dramatic, since transparent outer layers will make the star look much brighter and opaque helium will make it look much dimmer.",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/RS_Puppis.jpg/642px-RS_Puppis.jpg",
     x: 1703.8,
     y: 886.63,
     visited: false,
     type: 'misc'},

    {objName: 'SN 1006',
     description: "SN 1006 was the brightest natural object (other than the Sun and the Moon) to ever appear in the night sky in recorded history. It was recorded in China, Japan, Europe and even North America over one thousand years ago. Some sources even say that it could be seen during the day. No neutron star or black hole has ever been found at the location of the supernova, suggesting that it wasn’t a typical core collapse supernova.<br><br><b>Classifying Supernova</b><br><br>Supernovae, giant stellar explosions, were originally classified by the colors in their light. Different elements absorb and emit different colors, prompting scientists to sort them into Type I and Type II supernovae based on the presence or absence of hydrogen in the spectra (colors). From there, they were further divided depending on other elements. However, this was all for naught, as scientists later found out there was no appreciable difference between any of the supernovae; the only exception was the Type Ia supernovae. Non Type Ia supernovae are known as “core collapse supernovae” and are caused by single stars collapsing (see crab nebula). Type Ia supernovae are strange in that they are oddly consistent in their absolute brightness. This makes them very useful for measuring how far things are - if you know how bright it is and how bright it looks, you can tell the distance because brightness falls off with distance. Their exact cause is debated, but common belief is that they are the products of binary systems. One star accretes (rips off using gravity and absorbs) matter from a larger, less dense one (usually a red giant). When it absorbs too much matter, it eventually undergoes very rapid fusion, burning through the fuel from the other star very quickly and creating enough energy to blast the star apart.",
     imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sn_1006.jpg/794px-Sn_1006.jpg',
     x: 967.8,
     y: 939.1,
     visited: false,
     type: 'misc'}
];

var terms = [
    {termName: "Radiation, Wavelength, Spectra, Photon, Absorb",
     explanation: "Look at any source of light, such as a lightbulb, a glow in the dark sticker, or the sun (actually, don’t look at the sun). All of these sources are emitting energy and sending it out in the form of particles, called photons.<br><br>A photon is a tiny massless particle that moves at light speed. <br><br>When energy is sent by emitting, or radiating particles like photons, it is known as radiation. <br><br>However, in a complicated twist of physics, light is also like a wave. It oscillates up and down at different speeds, carrying energy across space. These waves of light are known as electromagnetic waves. X-rays, UV rays, microwaves, and visible light are all electromagnetic waves oscillating at different speeds.<br><br>How fast light is oscillating is referred to as its frequency. The distance between crests (tops) of a wave is known as the wavelength.  Since all light moves forward in space at the same speed, the higher the frequency, the lower the wavelength. Higher frequency waves carry more energy.<br><br>Real light from any source comes in the form of photons, which carry different amounts of energy and therefore come with different wavelengths, with some wavelengths being more common than others. This range of light is known a spectrum. Spectra is the plural of spectrum, and is used to refer to the practice of analyzing the amounts of each wavelength in a sample of light for more information.<br><br>Everything radiates energy. The brightness with which they radiate and the wavelengths at which they radiate depend on their temperature - hot things radiate in lower wavelengths and higher frequencies. The reason why most things are not glowing to us is because the frequencies of their radiation are too low for us to see. <br><br>Individual toms can absorb photons. However, for complicated chemistry reasons, specific atoms only absorb specific photons at set frequencies. For this reason, the frequencies absorbed by certain atoms will have less photons. When a spectrum is missing certain wavelengths that are defined by certain elements, it is known as an absorption spectrum."
    },
    {termName: "Gas Pressure",
     explanation: "All gasses consist of tiny particles (atoms, usually) flying around and ricocheting off each other. Since they’re a body of flying things moving in random directions, gasses tend to spread out. The force from the outward flying gas particles which causes the gas to spread is known as gas pressure. Since hotter gasses have faster moving particles, the hotter the gas, the higher the gas pressure. In a star, gravity pulls inwards while gas pressure (and other forces at denser stages) pushes outwards. "
    },
    {termName: "Kinetic and Potential Energy",
     explanation: "Kinetic energy is the energy of motion. All moving things carry kinetic energy. Since heat is just the vibration of molecules, hot things also carry kinetic energy. The other kind of energy is potential energy. In astronomy, most potential energy is held in the form of gravitational potential energy. THe further from a heavy object another object is, the more gravitational potential energy it has. This kind of energy is turned into kinetic energy as gravity pulls on falling objects, speeding them up. Since kinetic energy and thermal energy are the same, objects technically heat up as they fall."
    },
    {termName: "Centrifugal Force",
     explanation: "Spinning objects tend to fly outwards. To keep them in a circle, another force is needed. A centrifugal force is, literally defined, just a force that points towards or away from the center, but usually refers to the “force” that the tendency of spinning objects to fly away exerts. Technically, “centrifugal force” itself does not exist as an actual force like gravity. However, it is often added while trying to understand physics while orbiting around an object to account for that tendency to fly outwards."
    },
    {termName: "Angular Momentum",
     explanation: "Angular momentum is Newton’s 1st law of motion applied: “Without an outside force, an object in motion will stay in motion, while an object at rest will stay at rest”. Angular momentum is the product of an object’s mass, velocity and distance from the object it’s rotating around (mvr). What’s important about angular momentum is that in the absence of friction or air resistance, angular momentum is always conserved. Therefore, if radius increases, since mvr is constant and mass is constant, the velocity of the object must decrease. As radius shrinks, velocity grows. Therefore, if either a rotating object shrinks in size or an object orbiting another drops down lower, they will move faster."
    }
];

var zoomins = [
    {name: "Centauri",
     objName: "Centauri",
     imgLink: "https://upload.wikimedia.org/wikipedia/commons/6/61/Alpha%2C_Beta_and_Proxima_Centauri_%281%29.jpg",
     x: 1008.3,
     y: 1073.5,
     type: "misc"
    }
];
