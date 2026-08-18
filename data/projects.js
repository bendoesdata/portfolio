const data = [
    // {
    //     title: "Sounds of Shifting Attention",
    //     date: "2026",
    //     description:
    //         "Data sonification of one year of Wikipedia data.",
    //     summary:
    //         "Sounds of Shifting Attention was a live data sonification performance for ICAD 2026. The piece translated one year of Wikipedia data into an evolving soundscape capturing the changing trends across the website and the sentiment associated with them.",
    //     type: "album",
    //     tags: ["data sonification", "music", "performance"],
    //     imgUrl: "../images/projects/shifting-attention/tree-ring.png",
    //     url: "projects/sounds-shifting-attention.html",
    //     client: "International Community for Auditory Display (ICAD)"
    // },
    {
        title: "Forager",
        date: "2026",
        description:
            "Album release on limited cassette via AKP Recordings",
        summary:
            "Forager is an album released by St. Silva, a musical moniker of Ben Dexter Cooley. Using a combination of field recordings, tape loops, and modular synthesis, Forager is a warm collection of looping mediations that blur the line between electronic and the natural, merging formless exploration with found sounds in an unlikely collaboration of time and space.",
        type: "album",
        tags: ["music", "field recording"],
        imgUrl: "../images/projects/forager/forager-cropped.png",
        url: "projects/forager.html",
        client: "AKP Recordings"
    },
    {
        title: "Sonic Flows",
        date: "2026",
        description:
            "Award-winning data sonification and visualization of the Hubbard Brook Experimental Forest",
        summary:
            "Sonic Flows is an audiovisual piece that translates a full year of precipitation, streamflow, and soil moisture data from Hubbard Brook into a layered ambient soundscape. Submitted to the inaugural Hubbard Brook Data Jam, it won 3rd place and was awarded best technical implementation for multisensory experience. Field recordings made on-site at the watershed are woven throughout to preserve a sense of place and connection to the forest.",
        type: "data experience",
        tags: ["data sonification", "visualization", "award-winning"],
        imgUrl: "../images/projects/sonic-flows/sonic-flows-square2.png",
        url: "projects/sonic-flows.html",
        client: "Hubbard Brook Experimental Forest"
    },
    {
        title: "Lunarcy",
        date: "2025",
        description:
            "Immersive aerialist show with custom-built sensors for Burlington's NYE festival.",
        summary:
            "Lunarcy was a multidisciplinary interactive aerialist show commissioned for Burlington's NYE Highlight 2025 festival, built in collaboration with designer Nate Hicks. Each dancer wore a custom-built Arduino ESP32 sensor on their leg that streamed real-time gyroscope data over WiFi to Touchdesigner, which then manipulated animated visuals in sync with their movements. The show's lunarpunk theme inspired futuristic-yet-organic soundscapes alongside visuals drawn from Physarum networks and topographic terrain maps.",
        type: "data experience",
        tags: ["installation", "performance", "sensors"],
        imgUrl: "../images/projects/lunarcy/DSC09581.jpg",
        url: "projects/lunarcy.html",
        client: "Burlington Highlight Festival"
    },
    {
        title: "Dancer in the Loop",
        date: "2024",
        description:
            "Interactive audiovisual installation for Burlington's NYE festival 2024.",
        summary:
            "Dancer in the Loop was an interactive audiovisual installation for Burlington's NYE Highlight 2024 festival, where audience members entered a room of full-wall projections that responded in real time to their movement through a series of cameras. Across five different scenes, visitors could sway, dance, and interact to discover how the visuals changed and how different types of motion added new notes, triggered sounds, or altered synth parameters in the music. The piece was a celebration of human movement and technology that responds rather than controls.",
        type: "data sonification, data experience",
        tags: ["installation", "interactive", "audiovisual"],
        imgUrl: "../images/projects/dancer-in-the-loop/IMG_8855.jpg",
        url: "projects/dancer-loop.html",
        client: "Burlington Highlight Festival"
    },
    {
        title: "The Carrington Event",
        date: "2022",
        description:
            "Data sonification of the greatest solar storm in recorded history.",
        summary:
            "The Carrington Event is an award-winning live data sonification of the 1859 solar storm—the largest on record—translating 150-year-old scientific graph paper data into a live musical performance. Created in collaboration with Duncan Geere, each artist independently interpreted the same dataset of storm declination, horizontal force, and strength, then performed simultaneously from Vermont and Malmö, Sweden using instruments including a Tascam cassette deck and tape loops. The piece was published on French net label Camembert Electrique and received a Data Sonification Award in the field of Astronomy.",
        type: "data sonification",
        tags: ["data sonification", "award-winning"],
        imgUrl: "../images/projects/carrington/carrington-preview-award.png",
        url: "projects/carrington-event.html",
        client: "out via Camembert Electrique"
    },
    {
        title: "Chromallel",
        date: "2022",
        description:
            "Data sound installation for a community mural project.",
        summary:
            "Chromallel was a generative sound installation created alongside artist Linden Eller for a community mural event at The Phoenix Art Gallery in Waterbury, VT. A webcam continuously watched the evolving mural wall, and custom software detected and totaled specific colors as they appeared—translating that color data into musical parameters sent in real time to hardware synthesizers. The result was a soundscape that grew and shifted organically alongside the artwork, fusing data sonification with computer vision.",
        type: "data sonification",
        tags: ["installation", "data sonification", "community"],
        imgUrl: "../images/projects/paralleling/IMG_8708.jpg",
        url: "projects/chromallel-sound.html",
        client: "The Phoenix Art Gallery // Linden Eller"
    },
    {
        title: "Map for Grasslands",
        date: "2021",
        description:
            "Data visualization story and interactive map of America's shrinking grasslands.",
        summary:
            "Created in collaboration with the Cornell Lab of Ornithology, Map for Grasslands is a scrollytelling advocacy site documenting the dramatic disappearance of America's grasslands—over 60% lost in the past century—and its devastating impact on species like the Northern Bobwhite, which has declined by 81%. The site walks users through an animated narrative of land cover change, then opens into an interactive map where they can layer species abundance and habitat data to explore the crisis in their own region. It was built in support of proposed federal legislation to protect national grasslands, modeled after the North American Wetlands Conservation Act.",
        type: "data visualization",
        tags: ["data visualization", "interactive map", "scrollytelling"],
        imgUrl: "../images/projects/grasslands/alt-cover.png",
        url: "projects/map-for-grasslands.html",
        client: "Cornell Lab of Ornithology"
    },
    {
        title: "Microbiome Data Portal",
        date: "2021",
        description:
            "Data portal for exploring and visualizing microbiome research.",
        summary:
            "Built with MIT's Center for Microbiome Informatics & Therapeutics, the Microbiome Data Portal makes publicly available scientific research accessible by combining datasets across 7+ disease states into a single interactive tool. Users can visualize bacterial abundance across every sample in a study, group results by disease state, and run real-time client-side statistical analyses comparing two population groups. The portal bridges the gap between dense academic datasets and meaningful visual exploration.",
        type: "data visualization",
        tags: ["data visualization", "portal", "research"],
        imgUrl: "../images/projects/microbiome/circle-cover.png",
        url: "projects/microbiome-data-portal.html",
        client: "MIT Center for Microbiome Informatics & Therapeutics"
    },
    {
        title: "Global Flood Dashboard",
        date: "2020",
        description:
            "Design for one of the world's largest collection of flood maps.",
        summary:
            "The Global Flood Dashboard is an interactive interface built for the world's largest collection of historical flood maps, created in collaboration with Floodbase (formerly Cloud to Street) to provide public access to over 15 years of flood data. The site opens with a narrative story on climate change displacement research, then transitions into an exploratory dashboard where users can surface historic flood events and examine their impact on vulnerable populations. It pairs storytelling with direct data access to communicate both the scale and the human stakes of global flooding.",
        type: "data visualization",
        tags: ["data visualization", "dashboard", "maps"],
        imgUrl: "../images/front-page/dashboard.png",
        url: "projects/global-flood-dashboard.html",
        client: "Floodbase (formerly Cloud to Street)"
    },
    {
        title: "Parametric Press Essay",
        date: "2020",
        description:
            "Interactive article on the potential of algae for carbon sequestration.",
        summary:
            "Published in Issue 02 of Parametric Press, this visual essay—\"Tiny Algae and the Political Theater of Planting One Trillion Trees\"—argues for algae as an underutilized tool in the fight against climate change. It combines original research, multiple datasets, and academic sources with custom-designed interactive visualizations, including an explainer showing why planting trees alone cannot meet carbon removal targets.",
        type: "data visualization",
        tags: ["interactive article", "data visualization"],
        imgUrl: "../images/front-page/algae-radar.png",
        url: "projects/parametric-press.html",
        client: "Parametric Press"
    },
    {
        title: "To All the Books in 2020",
        date: "2021",
        description:
            "Data viz essay looking back on the books I read in 2020.",
        summary:
            "To All the Books I Read in 2020 is an interactive scrollytelling site visualizing all 40 books read that year, grouping and arranging them by genre, rating, and chronological timeline. Readers scroll through a personal narrative to discover which titles stood out most, and at the end the bubbles become interactive—each one opening a full written review. It's a personal data essay that treats a year of reading as both a dataset and a story.",
        type: "data visualization",
        tags: ["data visualization", "personal", "scrollytelling"],
        imgUrl: "../images/front-page/book-scrolly.png",
        url: "projects/to-the-books.html",
        client: "personal project"
    },
    {
        title: "2019 - Visualized",
        date: "2020",
        description:
            "A visual retrospective of the data I tracked during 2019.",
        summary:
            "In 2019, I intentionally tracked workouts, computer activity, and music listening habits using apps and personal logs, then analyzed everything at the year's end. The result is a series of poster-style visualizations covering cycling, steps, app usage, and more—an exercise in reflection through information design inspired by the annual Feltron Reports. A companion blog post on Nightingale walks through the process and motivation behind the project.",
        type: "data visualization",
        tags: ["data visualization", "personal"],
        imgUrl: "../images/front-page/workouts.png",
        url: "projects/my-year-2019.html",
        client: "personal project"
    }
];
