/* =================================================================
   LOSSLESS VIDEO LLC — Projects data
   --------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD A VIDEO.

   To add a new project:
   1. Drop the .mp4 file into assets/videos/
   2. Drop a thumbnail image (.jpg or .png) into assets/images/
   3. Copy one of the project objects below, paste it at the top of
      the array, and edit the fields.

   Field reference:
     id          → URL slug (lowercase, no spaces). e.g. "donald"
                   becomes /project.html?id=donald
     title       → Display name shown on cards + project page
     type        → Subtitle text under title (e.g. "Music Video")
     category    → Used for the filter pills on Work page.
                   MUST be one of: music | commercial | film | corporate
     client      → Client name (shown in metadata sidebar)
     year        → 4-digit year
     duration    → "M:SS" format
     description → 1-3 sentence description
     tools       → Array of tools / gear used
     poster      → Path to thumbnail image
     video       → Path to the .mp4 file (or full URL to external host)
     gallery     → Array of image paths shown under the video player
     featured    → true/false. Featured projects show on the home page.

   Order matters — first item shows first on the work page.
   ================================================================= */

const PROJECTS = [
    {
        id: 'donald',
        title: 'Donald',
        type: 'Music Video',
        category: 'music',
        client: 'Donald',
        year: 2024,
        duration: '3:45',
        description: 'Cinematic music video shot in 4K, featuring atmospheric tunnel sequences and high-contrast color grading. Full creative direction and post-production handled in-house.',
        tools: ['4K UHD', 'Final Cut Pro', 'Adobe Color', 'Rode Audio'],
        poster: 'assets/images/L_tunnel.jpg',
        video: 'assets/videos/donald.mp4',
        gallery: [
            'assets/images/L_tunnel.jpg',
            'assets/images/L_hourglass.jpg',
            'assets/images/L_skull.jpg',
            'assets/images/L_wolf.jpg',
            'assets/images/L_city.jpg'
        ],
        featured: true
    },
    {
        id: 'joe',
        title: 'Joe',
        type: 'Music Video',
        category: 'music',
        client: 'Joe',
        year: 2024,
        duration: '4:12',
        description: 'Stylized performance video with practical lighting and handheld camerawork.',
        tools: ['4K UHD', 'Final Cut Pro', 'External Audio'],
        poster: 'assets/images/L_skull.jpg',
        video: 'assets/videos/joe.mp4',
        gallery: ['assets/images/L_skull.jpg', 'assets/images/L_wolf.jpg'],
        featured: true
    },
    {
        id: 'static',
        title: 'Static',
        type: 'Short Film',
        category: 'film',
        client: 'Independent',
        year: 2024,
        duration: '8:30',
        description: 'Short film exploring isolation and memory through a fractured visual style.',
        tools: ['4K UHD', 'Final Cut Pro', 'Color Grading'],
        poster: 'assets/images/L_hourglass.jpg',
        video: 'assets/videos/static.mp4',
        gallery: ['assets/images/L_hourglass.jpg', 'assets/images/L_crying.jpg'],
        featured: true
    },
    {
        id: 'brand-commercial',
        title: 'Brand Commercial',
        type: 'Commercial',
        category: 'commercial',
        client: 'Confidential',
        year: 2024,
        duration: '0:30',
        description: '30-second brand spot with high-energy editing and motion design.',
        tools: ['4K UHD', 'Final Cut Pro', 'Motion Graphics'],
        poster: 'assets/images/L_hero.png',
        video: 'assets/videos/brand-commercial.mp4',
        gallery: ['assets/images/L_hero.png'],
        featured: true
    },
    {
        id: 'corporate-interview',
        title: 'Corporate Interview',
        type: 'Corporate',
        category: 'corporate',
        client: 'Confidential',
        year: 2024,
        duration: '5:00',
        description: 'Multi-camera interview shoot with broadcast-quality audio.',
        tools: ['4K UHD', 'Multi-cam', 'Broadcast Audio'],
        poster: 'assets/images/L_city.jpg',
        video: 'assets/videos/corporate-interview.mp4',
        gallery: ['assets/images/L_city.jpg'],
        featured: false
    },
    {
        id: 'event-highlights',
        title: 'Event Highlights',
        type: 'Corporate',
        category: 'corporate',
        client: 'Confidential',
        year: 2024,
        duration: '2:30',
        description: 'Highlight reel from a corporate event, fast turnaround.',
        tools: ['4K UHD', 'Final Cut Pro'],
        poster: 'assets/images/L_wolf.jpg',
        video: 'assets/videos/event-highlights.mp4',
        gallery: ['assets/images/L_wolf.jpg'],
        featured: false
    },
    {
        id: 'product-commercial',
        title: 'Product Commercial',
        type: 'Commercial',
        category: 'commercial',
        client: 'Confidential',
        year: 2024,
        duration: '1:00',
        description: 'Product showcase with macro photography and dramatic lighting.',
        tools: ['4K UHD', 'Macro Lens', 'Color Grading'],
        poster: 'assets/images/L_crying.jpg',
        video: 'assets/videos/product-commercial.mp4',
        gallery: ['assets/images/L_crying.jpg'],
        featured: false
    },
    {
        id: 'documentary-teaser',
        title: 'Documentary Teaser',
        type: 'Film',
        category: 'film',
        client: 'Independent',
        year: 2024,
        duration: '1:30',
        description: 'Teaser for upcoming documentary feature.',
        tools: ['4K UHD', 'Documentary Style'],
        poster: 'assets/images/L_skull.jpg',
        video: 'assets/videos/documentary-teaser.mp4',
        gallery: ['assets/images/L_skull.jpg'],
        featured: false
    }
];
