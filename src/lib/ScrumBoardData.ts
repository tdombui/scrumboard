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
            "DEPLOY 3D : Deploy 3d work and 3d subdomain",
        category: ["dev", "product"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "DEPLOY 3.dombui.com : Deploy 3D subdomain => <3.dombui.com>",
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
            "COMPONENT/MUSIC PLAYER : Found unintended UX behavior where onPageLoad, the music player will play song[0] (sorted a-z) when tracklist is opened and then closed by user",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "COMPONENT/MUSIC PLAYER : Enable Music Player across all /routes",
        category: ["dev"]
    },
    {
        id: "1",
        column: "todo",
        content:
            "GALLERY/BASE64 : base64 encoding of images for caching/local storage",
        category: ["dev"]
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
            "SHOP/PRODUCTS/APPAREL : Embroider and deliver garments for Ramo's Tires, friends; and add more designs to webshop",
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
            "TRADEMARK/LLC : Trademark `INSOMNYC`, and register as LLC",
        category: ["business"],

    },
    {
        id: "1",
        column: "todo",
        content:
            "STRIPE API : Enable coupons and promo codes",
        category: ["dev", "product", "business"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "1",
        column: "todo",
        content:
            "PRODUCTS/APPAREL : Design, deliver, and add Product Launch 2 (Friends n Fam) to webstore",
        category: ["product", "design"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "BLENDER : Complete scenes (1) blockbuster, (2) boogie, (3) harbor freight, (4) barcelona",
        category: ["design"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "BLOG : Complete Sanity schema and deploy blog",
        category: ["dev","product","design"]
    },
    // {
    //     id: "2",
    //     column: "inProgress",
    //     content:
    //         "SHOP BANNER : Shop announcements and updates",
    //     category: ["dev", "product"],
    //     startDate: ["02-21-2024"],
    //     targetDate: ["02-22-2024"],
    //     completeDate: ["2-22-2024"],
    // },
    {
        id: "2",
        column: "inProgress",
        content:
            "SUBSCRIBE 2 NEWSLETTER : Integrate opt-in `subscribe to newsletter` function to Contact Form; DynamoDB for entries",
        category: ["dev", "product"]
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "PAGE/DRAWER OF BUTTONS : Build 'Drawer of Buttons' where users can interact with a selection of buttons",
        category: ["dev", "product", "design"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],

    },
    {
        id: "2",
        column: "inProgress",
        content:
            "AWS/S3 : Reconfigure bucket permissions and IAM users",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "2",
        column: "inProgress",
        content:
            "COMPONENT/REFACTOR FRAMER ANIMATIONS : Refactor animated divs and elements (framer-motion) into their own components for reusability and scalability",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "Split domains dombui<>insomnyc : Separate concerns and deploy separate domains => dombui.com & insomnyc.com",
        category: ["dev", "product"]
    },
    {
        id: "3",
        column: "complete",
        content:
            "ADD PAYMENT METHODS : all major credit cards, BNPL providers, apple and g pay, cashapp",
        category: ["dev", "product"],
        targetDate: ["02-19-2024"],
        completeDate: ["2-20-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP COMPONENTS : payment icons,  faq, returns, terms, sizing, shipping",
        category: ["dev", "product"],
        targetDate: ["02-19-2024"],
        completeDate: ["2-20-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/ABOUT : Redo About page",
        category: ["dev", "design"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "FREE SHIPPING : conditionally display free shipping option for orders >= $75",
        category: ["dev"],
        targetDate: ["02-19-2024"],
        completeDate: ["2-20-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "TERMS : Display t&cs on product pages",
        category: ["dev", "product"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "TRANSFER DOMAIN : from Hostinger to Vercel",
        category: ["dev", "product"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "GTM : Implement GTM for all routes; track abandoned cart",
        category: ["dev"],
        targetDate: ["02-16-2024"],
        completeDate: ["2-17-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "FILE IMPORTS : Redo file paths from relative to absolute",
        category: ["dev", "product"],
        targetDate: ["02-19-2024"],
        completeDate: ["2-23-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "DEPLOY NEXTJS BUILD : Deploy the nextjs build for production",
        category: ["dev", "product", "design"],
        targetDate: ["02-06-2024"],
        completeDate: ["2-14-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "Continuous integration/continuous deployment : Implement CI/CD pipeline; (1) source control + CI w/ github, (2)CD w/ vercel",
        category: ["dev", "product"],
        startDate: ["02-16-2024"],
        targetDate: ["03-4-2024"],
        completeDate: ["02-15-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOPPING CART : redo cart; add to cart, remove from cart, empty cart, increment, checkout, uniqueId (id-col-sz)",
        category: ["dev", "product"],
        targetDate: ["02-09-2024"],
        completeDate: ["2-12-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/CONTACT : Re-do Contact Me page",
        category: ["dev", "design"],
        targetDate: ["02-09-2024"],
        completeDate: ["2-13-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "COMPONENT/TERMS : Re-do Terms page into react component",
        category: ["dev", "design"],
        targetDate: ["02-16-2024"],
        completeDate: ["2-16-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SCRUM BOARD : Scrum board with backlog, in progress, and complete columns, and a timer that shows Sprint countdown to next deployment; deployed on its own subdomain => agile.dombui.com",
        category: ["dev", "product"],
        targetDate: ["02-09-2024"],
        completeDate: ["2-12-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "AWS/S3 : Implement S3 buckets for object hosting (images, other media, app data)",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "CMS/SANITY : Implement content management system via Sanity API",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/CART : Implement shopping cart, product composition/uniqueIds per product configuration (size, color, etc)",
        category: ["dev", "product"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/PAYMENTS-STRIPE : Implement secure payments funnel via Stripe API",
        category: ["dev", "product", "business"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/HOME : Landing page with countdown to full site deployment",
        category: ["dev", "product"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/GALLERY : Infinite-scroll gallery that fetches images from S3 via AWS SDK",
        category: ["dev", "product"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "COMPONENT/MUSIC PLAYER : Implement music player and pop-up tracklist via Youtube API",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/SHOP : Build Store, Shopping Cart, Product Details, and Product Grid page with products linked via Sanity API",
        category: ["dev", "product", "design"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/SHOP/PRODUCT GRID : Build custom product page",
        category: ["dev", "product", "design"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "SHOP/PRODUCTS/APPAREL : Design, deliver, and add Product Launch 1 (Friends n Fam) to webstore",
        category: ["dev", "product", "design"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/ABOUT : Build About page with 'Equip Avatar' module",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "PAGE/CONTACT : Build Contact Me page with Resend API",
        category: ["dev"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
    {
        id: "3",
        column: "complete",
        content:
            "RESALE LICENSE : Acquire Resale License in State of California to buy products at wholesale and to sell taxable products online",
        category: ["business"],
        targetDate: ["02-14-2024"],
        completeDate: ["2-19-2024"],
    },
];

