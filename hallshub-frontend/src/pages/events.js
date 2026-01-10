import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import Card from "@/components/card";
import Sidebar from "@/components/Sidebar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Booking() {
  const items = [
    { section: "All", category: "All" },
    { section: "Technical", category: "Technical" },
    { section: "Cultural", category: "Cultural" },
    { section: "Hackathon", category: "Hackathon" },
    { section: "Workshop", category: "Workshop" },
    { section: "Sports", category: "Sports" }
  ];

  // Fake event data for UI
  const [userData] = useState([
    {
      id: 1,
      eventname: "React Workshop",
      eventcategory: "Workshop",
      roomname: "Main Hall"
    },
    {
      id: 2,
      eventname: "Hack Night",
      eventcategory: "Hackathon",
      roomname: "Auditorium"
    },
    {
      id: 3,
      eventname: "Football Meet",
      eventcategory: "Sports",
      roomname: "Ground"
    }
  ]);

  const [selectedSection, setSelectedSection] = useState("All");
  const [loading] = useState(false);

  const filteredResources =
    selectedSection === "All"
      ? userData
      : userData.filter((data) => data.eventcategory === selectedSection);

  const renderedCards = filteredResources.map((data) => (
    <Card key={data.id} userData={data} />
  ));

  const handleCarouselChange = (index) => {
    setSelectedSection(items[index].category);
  };

  return (
    <main>
      <Sidebar />
      <Navbar />

      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel
            showStatus={false}
            showThumbs={false}
            className="mr-16 ml-16 md:mr-64 md:ml-64"
            onChange={handleCarouselChange}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="p-8 font-mont text-white text-xl cursor-pointer"
              >
                {item.section}
              </div>
            ))}
          </Carousel>

          <div className="mt-10 md:mb-14 md:ml-20 md:mr-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-8 lg:gap-16">
            {renderedCards.length > 0 ? (
              renderedCards
            ) : (
              <div className="font-mont text-center text-2xl">
                no events found
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
