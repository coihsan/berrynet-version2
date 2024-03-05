import { ThumbsUp } from "lucide-react";
export const navlink = [
  {
    key: 0,
    text: "Home",
    pathname: "/",
  },
  {
    key: 1,
    text: "Products",
    pathname: "/",
  },
  {
    key: 2,
    text: "Promo",
    pathname: "/",
  },
  {
    key: 3,
    text: "Check Area",
    pathname: "/",
  },
  {
    key: 4,
    text: "Contact Us",
    pathname: "/",
  },
];

interface featureProps {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}
export const feature: featureProps[] = [
  {
    id: 0,
    title: "Personalized Recommendations",
    description:
      "AI algorithms can analyze user behavior and preferences to provide tailored recommendations for content, products, and services, enhancing the overall user experience.",
    icon: ThumbsUp,
  },
];
