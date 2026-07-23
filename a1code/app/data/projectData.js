import { assets } from "../../Assets/assests";

const projects = [
  {
    id: 1,
    name: "Grocery Ecommerce Store",
    description:
      "A polished storefront with product filters, cart flow, admin product controls, and order tracking.",
    seller: "Aarav Studio",
    price: "Rs 2,499",
    image: assets.f1,
    category: "Ecommerce",
    date: "2026-07-18",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 2,
    name: "CRM Sales Dashboard",
    description:
      "Lead pipeline, team activity, revenue charts, and task follow-ups for a small sales team.",
    seller: "Pixel Desk",
    price: "Rs 3,200",
    category: "Management",
    image: assets.f1,
    date: "2026-07-16",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 3,
    name: "AI Content SaaS",
    description:
      "Subscription-ready SaaS starter with plans, usage cards, workspace settings, and a clean editor.",
    seller: "Code Foundry",
    price: "Rs 4,999",
    image: assets.f1,
    category: "SaaS",
    date: "2026-07-14",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 4,
    name: "Food Delivery Mobile UI",
    description:
      "Responsive restaurant listings, cart summary, checkout screens, and order status views.",
    seller: "Nisha UI Lab",
    price: "Rs 1,899",
    category: "Mobile",
    image: assets.f1,
    date: "2026-07-12",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 5,
    name: "Portfolio Website Kit",
    description:
      "Modern portfolio with project case studies, services, testimonials, and contact sections.",
    seller: "Frontend Hive",
    price: "Rs 1,499",
    image: assets.f1,
    category: "Web",
    date: "2026-07-10",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 6,
    name: "Inventory Manager",
    description:
      "Stock tracking, supplier records, low-stock alerts, product movement history, and reports.",
    seller: "Ops Craft",
    image: assets.f1,
    price: "Rs 2,799",
    category: "Management",
    date: "2026-07-08",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 7,
    name: "Online Course Platform",
    description:
      "Course catalog, lesson player, progress tracking, instructor cards, and enrollment pages.",
    seller: "Learn Stack",
    price: "Rs 3,850",
    image: assets.f1,
    category: "SaaS",
    date: "2026-07-05",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 8,
    name: "Fashion Storefront",
    description:
      "Elegant product grid, collection pages, variant selectors, wishlist, and checkout preview.",
    seller: "Style Code",
    price: "Rs 2,250",
    image: assets.f1,
    category: "Ecommerce",
    date: "2026-07-02",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 9,
    name: "Agency Landing Page",
    description:
      "Fast marketing site with service blocks, work gallery, pricing, FAQ, and conversion forms.",
    seller: "Launch Works",
    price: "Rs 1,250",
    image: assets.f1,
    category: "Web",
    date: "2026-06-28",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 10,
    name: "Fitness Tracker App",
    description:
      "Workout planner, progress logs, weekly summaries, and nutrition cards for a fitness product.",
    seller: "Fit Bits Lab",
    price: "Rs 2,100",
    category: "Mobile",
    image: assets.f1,
    date: "2026-06-23",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 11,
    name: "Hotel Booking Portal",
    description:
      "Room search, booking details, guest forms, availability status, and confirmation pages.",
    seller: "Travel Code",
    price: "Rs 3,600",
    category: "Web",
    image: assets.f1,
    date: "2026-06-19",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
  {
    id: 12,
    name: "Admin Analytics Suite",
    description:
      "Operational analytics with KPI cards, comparison tables, export actions, and team filters.",
    seller: "Metric Nest",
    image: assets.f1,
    price: "Rs 4,400",
    category: "Management",
    date: "2026-06-15",
    full_dis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatibus, reiciendis totam libero incidunt facere odit quas expedita placeat nobis impedit distinctio sunt assumenda consequatur officiis reprehenderit. Enim, deserunt accusamus?",
  },
];

export default projects;
