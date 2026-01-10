import React, { useEffect, useState } from "react";

const Card = ({ userData }) => {
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const [formattedStartTime, setFormattedStartTime] = useState("");
  const [formattedEndTime, setFormattedEndTime] = useState("");

  useEffect(() => {
    if (!userData?.startdate || !userData?.enddate) return;

    try {
      const optionsDate = { day: "numeric", month: "short", year: "numeric" };
      const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };

      const start = new Date(userData.startdate);
      const end = new Date(userData.enddate);

      setFormattedStartDate(new Intl.DateTimeFormat("en-US", optionsDate).format(start));
      setFormattedEndDate(new Intl.DateTimeFormat("en-US", optionsDate).format(end));
      setFormattedStartTime(new Intl.DateTimeFormat("en-US", optionsTime).format(start));
      setFormattedEndTime(new Intl.DateTimeFormat("en-US", optionsTime).format(end));
    } catch (err) {
      console.log("Date format error", err);
    }
  }, [userData]);

  return (
    <div className="mx-auto md:mx-0 card text-white hover:text-black border-2 border-white hover:border-black relative overflow-hidden rounded-lg p-6 shadow-2xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white">
      <h2 className="text-2xl font-bold">{userData?.eventname || "Event"}</h2>
      <h3 className="text-2xl font-semibold mb-4">{userData?.club || "Club"}</h3>
      <h4 className="text-2xl font-bold mb-2">{userData?.roomname || "Venue"}</h4>

      <div className="border-b-4 rounded-xl border-gray-300 mb-4"></div>

      <div className="flex justify-between">
        <div className="font-bold">{formattedStartDate || "—"}</div>
        <div className="font-bold">{formattedStartTime || "—"}</div>
      </div>

      <div className="flex justify-between">
        <div className="font-bold">{formattedEndDate || "—"}</div>
        <div className="font-bold">{formattedEndTime || "—"}</div>
      </div>
    </div>
  );
};

export default Card;
