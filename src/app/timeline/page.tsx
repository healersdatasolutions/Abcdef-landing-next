import React from "react";
import { Timeline } from "@/components/ui/timeline";
import NavigationMenuNew from "@/components/Navbar/Navbar";

export default function TimelinePage() {
  const data = [
    {
      year: "2024",
      events: [
        {
          title: "March - May",
          content: "Idea conceptualization, research, and ideation phase.",
        },
        {
          title: "June - August",
          content: "Developed the platform prototype on-chain using ICP Blockchain.",
        },
        {
          title: "September - November",
          content: "Conducted initial onboarding of partner hospitals for pilot testing and gathered valuable feedback.",
        },
        {
          title: "December",
          content: "Published the mobile application on the Google Play Store.",
        },
      ],
    },
    {
      year: "2024 - 2025",
      events: [
        {
          title: "December - February",
          content: "Focused on user testing for the mobile application, onboarding users, and marketing efforts.",
        },
        {
          title: "March - May",
          content: "Achieved onboarding of 15+ hospitals and built a user base of 1,000 beta users on the app.",
        },
      ],
    },
    {
      year: "Future Vision",
      events: [
        {
          title: "2025",
          content: "Scale to onboard 500+ hospitals.",
        },
        {
          title: "Ongoing",
          content: [
            "Launch NFT/crypto rewards to incentivize patient engagement.",
            "Expand globally with multilingual support and culturally tailored healthcare solutions.",
            "Integrate pharmacies and IoT devices for a comprehensive healthcare ecosystem.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <NavigationMenuNew />
      <Timeline data={data} />
      <div className="mt-80 text-black">end of timeline</div>
    </div>
  );
}
