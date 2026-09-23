/* Single source of truth for Heart & Homestead site content.
   Emily edits this file to connect real links, venues, and galleries. */
export const PHOTOS = {
  hero: "/assets/photo-family-sunset.jpg",
  familyHorses: "/assets/photo-family-horses.jpg",
  mamaBaby: "/assets/photo-mama-baby-horse.jpg",
  dadToddler: "/assets/photo-dad-toddler-horse.jpg",
  grandpaGrandgirl: "/assets/photo-grandpa-grandgirl.jpg",
} as const;

export const LOGOS = {
  primary: "/assets/logo-primary.jpg",
  banner: "/assets/logo-banner.jpg",
  emblem: "/assets/logo-emblem.jpg",
} as const;

/* Placeholder links for external integrations — replace with Emily's real
   profiles / gallery / payment links when she provides them. */
export const LINKS = {
  instagram: "https://www.instagram.com/heartandhomestead2026",
  facebook: "https://www.facebook.com/heartandhomesteadphotography",
  pixieset: "https://hearthomesteadphotography.mypixieset.com/",
  contractsPayments: "https://heartandhomestead.booking.com",
  sessionResources: "https://drive.google.com/heartandhomestead-resources",
  email: "handhphoto26@gmail.com",
  phone: "812-764-9706",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Sessions", to: "/sessions" },
  { label: "Experiences", to: "/experiences" },
  { label: "Locations", to: "/locations" },
] as const;

export type SessionType = {
  id: string;
  name: string;
  short: string;
  whoFor: string;
  feel: string;
  description: string;
  receive: string[];
  image?: string;
  placeholder?: boolean;
};

export const SESSION_TYPES: SessionType[] = [
  {
    id: "families",
    name: "Families + Children",
    short:
      "For the loud laughs, little hands, missing teeth, inside jokes, changing seasons, and all the beautiful chaos in between.",
    whoFor: "Families of every shape and size, and children being exactly who they are.",
    feel:
      "Relaxed and rooted in connection rather than perfect posing. We move, play, and let the real moments arrive on their own.",
    description:
      "Family sessions are laid-back and unhurried. There is room for the way your youngest reaches for your hand, the joke only your family understands, and the season you are in right now.",
    receive: [
      "A session built around your family, not around posing",
      "Guidance before and gentle direction during",
      "A private gallery of finished images on Pixieset",
      "Photographs you will treasure for generations",
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e0a180a7-1b08-49c8-b58f-90c31a874aea.jpg",
  },
  {
    id: "seniors",
    name: "Seniors",
    short:
      "A senior session should feel like you, not like a checklist of poses. We create something personal around your personality, interests, style, and the season you are stepping into.",
    whoFor: "Seniors ready to mark this chapter in a way that feels truly theirs.",
    feel:
      "Personal, easygoing, and centered on what makes you, you. Your personality leads; the camera follows.",
    description:
      "We will design your session around your interests, your style, and the places you love, so the photographs feel like a real reflection of who you are right now.",
    receive: [
      "A session built around your personality and interests",
      "Location and styling ideas that feel like you",
      "A private gallery of finished images on Pixieset",
      "Photographs for the next chapter",
    ],
    placeholder: true,
  },
  {
    id: "maternity",
    name: "Maternity + Newborn",
    short:
      "Beautifully honest photographs of this season: the waiting, the glow, the quiet anticipation of new life.",
    whoFor: "Mothers-to-be and growing families who want this season remembered.",
    feel:
      "Gentle, unhurried, and full of warmth. We photograph the realness of this moment: soft light and honest feeling.",
    description:
      "A maternity session is about honoring where you are right now: the change, the anticipation, the love already taking shape. We keep it relaxed and personal, whether that means the golden field, the quiet of home, or somewhere that means something to you.",
    receive: [
      "A relaxed session built around this season",
      "Location guidance that fits your style",
      "A private gallery of finished images on Pixieset",
      "Photographs to share with your child one day",
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e4624f36-8b67-47b8-9ad9-0589ccb8bef7.jpg",
  },
  {
    id: "couples",
    name: "Couples + Engagements",
    short:
      "Connection over perfection. These sessions are about the way you naturally interact, laugh, move, and belong together.",
    whoFor: "Couples who want honest, unfiltered photographs of the way you love.",
    feel:
      "Like an afternoon together, not a photo shoot. We walk, talk, and let the camera catch the in-between.",
    description:
      "No stiff poses and no pressure. These sessions celebrate how you naturally are together: the way you laugh, the way you lean in, the way you belong to each other.",
    receive: [
      "A relaxed session with room for real connection",
      "Location guidance that matches your story",
      "A private gallery of finished images on Pixieset",
      "Photographs of this season of your love",
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/895f8945-fdf3-44ef-8187-b6351318f2ef.jpg",
  },
  {
    id: "branding",
    name: "Branding + Products",
    short:
      "Thoughtful imagery for small businesses, makers, creatives, and brands that want their visuals to feel personal and intentional.",
    whoFor: "Small businesses and makers who want imagery that feels like them.",
    feel:
      "Collaborative and creative. We build a visual story around your work, your space, and the people behind it.",
    description:
      "Portraits, products, workspaces, behind-the-scenes moments, social media content, and website imagery, made to feel personal rather than produced.",
    receive: [
      "Branding portraits and product imagery",
      "Workspace and behind-the-scenes content",
      "Social media and website-ready visuals",
      "Imagery that makes your brand feel like you",
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/0626fdae-e5a1-42d3-b033-a9635ab38444.jpg",
  },
  {
    id: "events",
    name: "Events",
    short:
      "From meaningful celebrations to community gatherings, events deserve to be remembered as they actually felt.",
    whoFor: "Celebrations and gatherings where the feeling is the point.",
    feel:
      "Quiet and observant. I photograph people, details, connection, and energy, letting the day unfold without interruption.",
    description:
      "Candid, story-first coverage that focuses on the moments between the moments: real emotion, real people, real energy.",
    receive: [
      "Story-first coverage of your celebration",
      "Candid moments and meaningful details",
      "A private gallery of finished images on Pixieset",
      "The feeling of the day, kept",
    ],
    placeholder: true,
  },
  {
    id: "creative",
    name: "Creative Portraits",
    short:
      "Portrait work that leans into imagination, storytelling, and you. These sessions are made for the images only you could ask for.",
    whoFor: "Anyone with a portrait idea that deserves to be made beautifully.",
    feel:
      "Playful and collaborative, with space for whimsy, movement, and the unexpected.",
    description:
      "From personal projects to artistic portraits, these sessions are where we get to be creative together and make something that feels like you.",
    receive: [
      "A collaborative, creative session",
      "Styling and concept ideas",
      "A private gallery of finished images on Pixieset",
      "Portraits that are truly yours",
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bde8000a-89af-4541-b3ae-22c51d8419b3.jpg",
  },
];

export const EXPERIENCES = [
  {
    id: "always-ranch",
    name: "Always Ranch LLC",
    tagline: "Some stories deserve a setting that feels just as memorable as the photographs.",
    description:
      "Always Ranch offers a warm, open-country setting filled with animals, golden light, natural textures, and space to simply be together. Families and children can interact with the place rather than simply stand for photos.",
    features: [
      "Horses",
      "Mini cows",
      "Donkeys",
      "Open fields",
      "Fences",
      "Barn-style environments",
      "Lake",
      "Sunsets",
      "Golden hour",
    ],
    photo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e3be5f6e-42f6-46f0-a438-72ae0e0d7dfc.jpg",
  },
  {
    id: "fairytale-gardens",
    name: "Fairytale Gardens",
    tagline: "For children who still believe in magic.",
    description:
      "Whimsical, storybook-inspired gardens where childhood imagination becomes photographs filled with wonder, play, and storytelling. Think Peter Pan, Little Red Riding Hood, and Hansel & Gretel worlds brought to golden-hour life.",
    features: ["Peter Pan", "Little Red Riding Hood", "Hansel & Gretel", "Storybook settings"],
    photo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bde8000a-89af-4541-b3ae-22c51d8419b3.jpg",
  },
];

export type Venue = {
  name: string;
  region: string;
  photos: string[];
  why: string;
  bestSessions: string[];
  bestTime: string;
  seasonal: string;
  shouldKnow: string;
  link: string | null;
};

export const VENUES: Venue[] = [
  {
    name: "Always Ranch LLC",
    region: "Southern Indiana · open country",
    photos: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e3be5f6e-42f6-46f0-a438-72ae0e0d7dfc.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/db0adb96-2418-4c6b-8f95-686bf64996cc.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/3669eb9c-6a26-4cdf-a8d8-8a66ee24bfee.jpg"],
    why: "A warm, open-country setting filled with animals, golden light, and space to simply be together. It lets families and children interact with the land instead of standing still for photos.",
    bestSessions: [
      "Families + Children",
      "Creative Portraits",
      "Generational portraits",
      "Mini experiences",
    ],
    bestTime: "Golden hour, about two hours before sunset",
    seasonal: "Spring and fall are especially beautiful; summer evenings stay golden late",
    shouldKnow:
      "The animals are friendly and the setting is relaxed. Come ready to wander, play, and take your time.",
    link: null,
  },
  {
    name: "Fairytale Gardens",
    region: "Southern Indiana · a storybook garden",
    photos: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bde8000a-89af-4541-b3ae-22c51d8419b3.jpg"],
    why: "Whimsical, storybook-themed gardens that turn childhood imagination into photographs filled with wonder, play, and storytelling.",
    bestSessions: ["Children", "Families", "Creative Portraits"],
    bestTime: "Soft morning light or golden hour",
    seasonal: "Blooming seasons from spring through early autumn",
    shouldKnow:
      "Dress little ones in something they can run and play in. Favorite storybook outfits are welcome.",
    link: null,
  },
];

export const FAQS = [
  {
    q: "How far do you travel?",
    a: "I photograph across Southern Indiana and I love a good road trip for the right story. When we plan your session, we will talk about your location and what is possible.",
  },
  {
    q: "What should we wear?",
    a: "Comfortable, classic pieces that feel like you. I will send simple, helpful guidance when we plan your session, and we will build a wardrobe direction around your location and the feeling you want.",
  },
  {
    q: "What if my children don't cooperate?",
    a: "That is the part I love. Children being exactly who they are makes the best photographs. We never force poses on kids; we give them space, play, and patience, and the real moments show up on their own.",
  },
  {
    q: "Do you help with locations?",
    a: "Yes. I have favorite locations across Southern Indiana, including the Always Ranch and storybook gardens, and I am always finding new places with a story. Tell me the feeling you want and we will find the right setting together.",
  },
  {
    q: "How long until I receive my gallery?",
    a: "I will share a clear timeline when you book, and I keep you posted along the way. Your finished images arrive in a private Pixieset gallery that you can revisit whenever you like.",
  },
  {
    q: "Can I purchase additional images?",
    a: "Yes. Your gallery and what is included are explained during booking, and we can talk through anything extra you would love to keep.",
  },
  {
    q: "Do you offer full galleries?",
    a: "Every session is personally tailored, so we will talk about what is right for your story when we plan together. Your finished collection is delivered through a private gallery on Pixieset.",
  },
  {
    q: "Do you photograph events?",
    a: "Yes. From meaningful celebrations to community gatherings, I photograph events with a story-first, candid approach that remembers them as they actually felt.",
  },
  {
    q: "Do you photograph branding?",
    a: "Yes. I create thoughtful imagery for small businesses, makers, and creatives: branding portraits, products, workspaces, behind-the-scenes, and social media content.",
  },
  {
    q: "Can I bring pets?",
    a: "Pets are family. If they are part of your story, bring them. The Always Ranch also has its own friendly residents who love being included.",
  },
  {
    q: "What happens if it rains?",
    a: "Southern Indiana weather is part of the story, but we will watch the forecast and find a dry window or a plan B together. Every session is scheduled with a little flexibility built in.",
  },
  {
    q: "Do you offer rush editing?",
    a: "If you have a date that matters, tell me when we book and I will do my best to work around it. Timelines are shared up front, always.",
  },
  {
    q: "How do payments work?",
    a: "Payment details are shared as part of booking, and I am always happy to answer questions along the way.",
  },
];

export type PortfolioCategory = {
  id: string;
  label: string;
  images: string[];
  placeholder: boolean;
};

/* Maps a session id to its exact inquiry-form option (for pre-selecting). */
export const OPTION_BY_SESSION: Record<string, string> = {
  families: "Family",
  seniors: "Senior",
  maternity: "Maternity",
  couples: "Couples / Engagement",
  branding: "Branding",
  events: "Event",
  creative: "Creative Portrait",
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  { id: "families", label: "Families", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e0a180a7-1b08-49c8-b58f-90c31a874aea.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/998e3409-208c-4ad7-9cac-fa1b3312b552.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/10db36c4-2de6-4690-98be-63d1230c89bd.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/56aff75e-f68d-4edb-b843-f8e228be9302.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/c38e317b-f4e6-4522-96ad-ece407b91a11.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/18046339-3293-41e6-8eae-218c4433a2fd.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/26c9eebe-9e49-4743-81f4-94c7509402f5.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/987356b9-5907-45fd-acaf-5dc0c569fad8.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/28669d06-6802-4177-aff7-dfc0c136d1a5.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/d5e961b5-3316-417a-a1e9-9821f5e97061.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/1c4f2cef-4016-41c4-8b77-3d9947f5e443.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/56c6f1cf-6458-490c-b467-ba8290784c75.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/2de5f466-ac2d-4184-bf06-532e01303d49.jpg", "/assets/gallery/families-46.jpg"], placeholder: false },
  { id: "children", label: "Children", images: [], placeholder: true },
  { id: "maternity", label: "Maternity", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e4624f36-8b67-47b8-9ad9-0589ccb8bef7.jpg"], placeholder: false },
  { id: "seniors", label: "Seniors", images: [], placeholder: true },
  { id: "couples", label: "Couples + Engagements", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/895f8945-fdf3-44ef-8187-b6351318f2ef.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/4506d312-37bc-44d8-8a85-45b2ed91948c.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e2f52c0c-e90b-4373-a483-ce74ab8101fd.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/c1347020-bbae-4456-acaf-e7bfcff7050f.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/b504b0b8-3345-48fa-a346-14a6c9552a39.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/081bd16e-7a7e-4637-8a57-60b776aeb645.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/990804a9-047a-4426-87f6-dbce8e20d937.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/50c11b40-a199-43a9-a61d-a972f45ee63b.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/87d08644-9e00-4649-9e84-e9f4e271f8b4.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/43abc02b-3d45-4040-ac80-c436675053a3.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/7f47c757-8fe9-4267-aac0-93c65f0eab97.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/c1ed6854-a7fe-448a-9998-4bc8466f66f4.jpg"], placeholder: false },
  { id: "branding", label: "Branding + Products", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/0626fdae-e5a1-42d3-b033-a9635ab38444.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e3f0a12d-e6f9-494f-a734-bfa7721c1613.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/7c128b1d-e4a0-4dcf-a782-9f18ddce7096.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/35c191ab-2675-49ee-b32e-b0e2ad292b8d.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/7b17322b-c5fa-4d9a-a282-84298dce7687.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/f27a6e2a-f8c5-454e-89bb-1c4e251e4f9b.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/c84e5d8e-7326-4ba6-baa9-6925a9d58361.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/90d6f40d-e3df-4f94-b3ea-45a8a497200a.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/9ae41329-b6f2-4f21-86bf-261e74ba7ec0.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/d0bcc7b6-e85e-4693-9c4a-a9d308a1bd30.jpg"], placeholder: false },
  { id: "events", label: "Events", images: [], placeholder: true },
  { id: "creative", label: "Creative Portraits", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bde8000a-89af-4541-b3ae-22c51d8419b3.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/ad6effa6-2e63-483e-ba93-eec18ee5f61a.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/72dc724e-a2ea-4a00-80c0-13ad4e8a91e3.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/2ec8b32e-7906-4c38-94cb-66e30c912032.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bd604503-221a-451f-8048-1cb3115c9df3.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/a922dfaa-4c94-4285-802f-397f33a3a730.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/dd7c6c84-1472-45e1-ac96-23bc886e7216.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/60569940-c853-4ae7-8b13-62b098dc0651.jpg"], placeholder: false },
  { id: "experiences", label: "Experiences", images: ["https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/e3be5f6e-42f6-46f0-a438-72ae0e0d7dfc.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/18008064-e07e-4f95-9cff-683a42ae3901.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/2cf5e1da-4dc9-48bb-a876-634bbded0d96.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/4c286829-8c0f-4020-b62c-d33ede2445cc.jpg", "https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/904eee64-8bb8-4c4f-b55c-120e1ae1d24d.jpg"], placeholder: false },
];