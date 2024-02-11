export const columns = [
    { id: "todo", name: "backlog" },
    { id: "inProgress", name: "in progress" },
    { id: "complete", name: "complete" },
];

export const cards = [

    {
        id: "1",
        column: "todo",
        content:
            "GALLERY : Add => (1) filters (ie, curated, b-sides, film, digital, horizontal, vertical, dates); (2) Video Gallery",
        category: ["dev", "product"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "GALLERY/AWS/S3 : Add metadata to objects in S3 bucket for gallery filtering",
        category: ["dev", "product"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "SCRUM BOARD/S3 or Sanity : Fetch data from AWS S3 bucket (or Sanity CMS) to push updates to Scrum board",
        category: ["dev", "product"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "SCRUM BOARD : Add => (1) category per item (product, dev, etc); (2) priority level per item; (3) dates (created, started, completed); (4) 'time-to-completion' calculator for Complete items; (5) AddToArchive function when item is > 30 days; and (6) Archived Scrum items page",
        category: ["dev", "product", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "COMPONENT/MUSIC PLAYER : Found bad UX behavior where onPageLoad, the music player will play song[0] (sorted a-z) when tracklist is opened and then closed by user",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "COMPONENT/MUSIC PLAYER : Enable Music Player across all /routes (except for Gallery for performance reasons)",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "3D CONTENT : Finish => 3D Spring Animation for interactivity via Three.js/R3F",
        category: ["dev", "product", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "3D DEPLOYMENT : Deploy 3D subdomain => <3.dombui.com>",
        category: ["dev", "product"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "3D SIDE QUEST MODELS : Render => (1) selfie, (2) pixelated disco ball,  (3) Japanese Vending Machine for 3D page layout, (4) Pepe paperbag ",
        category: ["design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "3D SIDE QUEST PROJECT : Build small 'Backrooms walking game' for users to unlock codes and easter eggs",
        category: ["dev", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "DATA VIS SIDE QUEST PROJECT : Build Data Visualization pages; using D3, Chart.js, Highcharts, Recharts (?)",
        category: ["dev", "product", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "UI SIDE QUEST PROJECT : Build Bloomberg Terminal-esque admin dashboard for e-commerce",
        category: ["dev", "product", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "SHOP/PRODUCTS/APPAREL : Embroider and deliver garments for Ramo's Tires, friends; and add more designs to webshop (monthly basis?)",
        category: ["product", "design", "business"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "PAGE/HOME : Implement => (1) single-page scrolling homepage(?) [users prefer scrolling vs clicking]; (2) scroll tracking to analyze user behavior",
        category: ["dev", "product", "design"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "DARK MODE : Add Dark Mode across all pages",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "GALLERY/SWIPER : Re-do Swiper.js gallery for mobile responsiveness and smaller viewports; current breakpoints do not work, current layout awful",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "TRADEMARK/LLC : Trademark name and moniker, and register as LLC",
        category: ["business"],

    },
    {
        id: "2",
        column: "inProgress",
        content:
            "DEPLOY NEXTJS BUILD : Deploy the nextjs build for production via Node.js*Hostinger VPS - I did not look into the deployment of nextjs apps; deploying now (Feb 7 2024 23:00); was able to git clone the latest repo to the VPS, but upon launch, half of my APIs did not work. After looking into the issue with S3 and Stripe, I ended up breaking the cart somehow 😭 (Feb 8 2024 15:00); .env.production created in VPS, APIs only work in localhost now, and not in the VPS's IP address; need to check CORS policy for S3 and Stripe",
        category: ["dev", "product", "design"],
        targetDate: ["02-09-2024"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "FIX SHOPPING CART : After looking into the APIs that did not work in production, I broke the cart. Object distinction (gray-sm, gray-lg)no longer works, as well as addProduct, removeProduct, and onCheckout",
        category: ["dev", "product"],
        targetDate: ["02-09-2024"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "PAGE/ABOUT : Re-do About Me page; uses 'old page.tsx'; not a fan of the horizontal Swiper.js layout",
        category: ["dev", "design"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "PAGE/CONTACT : Re-do Contact Me page; slow performance during dev/testing; uses 'old page.tsx' layout; redundant dependencies(?)",
        category: ["dev", "design"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "PAGE/DRAWER OF BUTTONS : Build 'Drawer of Buttons' where users can interact with a selection of buttons",
        category: ["dev", "product", "design"]

    },
    {
        id: "2",
        column: "inProgress",
        content:
            "STRIPE API : Enable coupons and promo codes",
        category: ["dev", "product", "business"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "AWS/S3 : Reconfigure bucket permissions and IAM users",
        category: ["dev"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "COMPONENT/REFACTOR FRAMER ANIMATIONS : Refactor animated divs and elements (framer-motion) into their own components for reusability and scalability",
        category: ["dev"]
    },

    {
        id: "3",
        column: "complete",
        content:
            "SCRUM BOARD : Scrum board with to-do, in progress, and complete columns, and a timer that shows Sprint countdown to next deployment; deployed on its own subdomain => <agile.dombui.com>",
        category: ["dev", "product"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "AWS/S3 : Implement S3 buckets for object hosting (images, other media, app data)",
        category: ["dev"]
    },

    {
        id: "3",
        column: "complete",
        content:
            "CMS/SANITY : Implement content management system via Sanity API",
        category: ["dev"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/CART : Implement shopping cart, product distinction/uniqueIds per product configuration (size, color, etc)",
        category: ["dev", "product"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/PAYMENTS-STRIPE : Implement secure payments funnel via Stripe API",
        category: ["dev", "product", "business"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/HOME : Landing page with countdown to full site deployment",
        category: ["dev", "product"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/GALLERY : Infinite-scroll gallery that fetches images from S3 via AWS SDK",
        category: ["dev", "product"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "COMPONENT/MUSIC PLAYER : Implement music player and pop-up tracklist via Youtube API",
        category: ["dev"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/SHOP : Build Store, Shopping Cart, Product Details, and Product Grid page with products linked via Sanity API",
        category: ["dev", "product", "design"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/SHOP/PRODUCT GRID : Build custom product page",
        category: ["dev", "product", "design"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/PRODUCTS/APPAREL : Design, deliver, and add Product Launch 1 (Friends n Fam) to webstore",
        category: ["dev", "product", "design"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/ABOUT : Build About Me page with 'Equip Avatar' module",
        category: ["dev"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/CONTACT : Build Contact Me page with Resend",
        category: ["dev"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "RESALE LICENSE : Acquire Resale License in State of California in order to buy products at wholesale prices and to sell taxable products online",
        category: ["business"]
    },


    // Add more cards as needed
];

