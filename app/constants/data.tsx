import {
  ThumbsUp,
  ShieldBan,
  ScanSearch,
  LineChart,
  Bot,
  BrainCircuit,
} from "lucide-react";
import { ElementRef, ReactElement } from "react";
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
  color: string;
}
export const feature: featureProps[] = [
  {
    id: 0,
    title: "Personalized Recommendations",
    description:
      "AI algorithms can analyze user behavior and preferences to provide tailored recommendations for content, products, and services, enhancing the overall user experience.",
    icon: <ThumbsUp />,
    color: "bg-purple-500",
  },
  {
    id: 1,
    title: "Enhanced Security",
    description:
      "AI-powered security measures can detect and prevent various online threats, such as malware, phishing attacks, and identity theft, offering users a safer browsing environment.",
    icon: <ShieldBan />,
    color: "bg-teal-500",
  },
  {
    id: 2,
    title: "Improved Search Results",
    description:
      "AI algorithms can understand user intent better and deliver more relevant search results, saving users time and effort in finding the information they need.",
    icon: <ScanSearch />,
    color: "bg-pink-500",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "AI can analyze vast amounts of data to predict trends and patterns, helping users make informed decisions about their online activities, such as investments, purchasing decisions, and content creation strategies.",
    icon: <LineChart />,
    color: "bg-rose-500",
  },
  {
    id: 4,
    title: "Automation and Efficiency",
    description:
      "AI-driven automation can streamline repetitive tasks, such as email filtering, content moderation, and customer support, freeing up users' time and increasing productivity.",
    icon: <Bot />,
    color: "bg-green-500",
  },
  {
    id: 5,
    title: "Seamless Integration",
    description:
      "AI-powered internet services can seamlessly integrate with other smart devices and platforms, offering users a cohesive and interconnected digital experience across various devices and applications.",
    icon: <BrainCircuit />,
    color: "bg-indigo-500",
  },
];
