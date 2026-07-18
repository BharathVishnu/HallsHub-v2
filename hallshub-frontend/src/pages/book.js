import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Booking() {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [expectedAttendees, setExpectedAttendees] = useState("");
  const [fromDateTime, setFromDateTime] = useState("");
  const [toDateTime, setToDateTime] = useState("");
  const [venue, setVenue] = useState("");

  const allvenues = [
    { roomname: "Main Hall" },
    { roomname: "Conference Room" },
    { roomname: "Auditorium" },
  ];

  function handleBookEvent() {
    if (
      !eventName ||
      !eventCategory ||
      !expectedAttendees ||
      !fromDateTime ||
      !toDateTime ||
      !venue
    ) {
      alert("Please enter all details");
      return;
    }

    alert("Booking submitted (frontend only)");
    
    // Reset form
    setEventName("");
    setEventCategory("");
    setExpectedAttendees("");
    setFromDateTime("");
    setToDateTime("");
    setVenue("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleBookEvent();
  }

  return (
    <main>
      <Sidebar />
      <Navbar />

      <form
        onSubmit={handleSubmit}
        className="font-mont relative rounded-l-3xl w-screen md:w-full flex flex-col items-center justify-center mx-auto mt-10 gap-2 mb-10 md:mb-0"
      >
        {/* Event Name */}
        <div className="ml-5 mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Event name
          </label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="mt-1 p-3 md:p-4 w-[270px] md:w-[700px] lg:w-[900px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* Event Category */}
        <div className="ml-5 mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Event Category
          </label>
          <select
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
            className="mt-1 p-3 md:p-4 w-[270px] md:w-[700px] lg:w-[900px] bg-[#6B739D] rounded-2xl"
          >
            <option value=""></option>
            <option value="Technical">Technical</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Workshop">Workshop</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* Expected Attendees */}
        <div className="ml-5 mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Expected attendees
          </label>
          <input
            type="number"
            value={expectedAttendees}
            onChange={(e) => setExpectedAttendees(e.target.value)}
            className="mt-1 p-3 md:p-4 w-[270px] md:w-[700px] lg:w-[900px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* From / To */}
        <div className="flex gap-5">
          <div>
            <label className="block text-white">From</label>
            <input
              type="datetime-local"
              value={fromDateTime}
              onChange={(e) => setFromDateTime(e.target.value)}
              className="p-3 bg-[#6B739D] rounded-2xl"
            />
          </div>

          <div>
            <label className="block text-white">To</label>
            <input
              type="datetime-local"
              value={toDateTime}
              onChange={(e) => setToDateTime(e.target.value)}
              className="p-3 bg-[#6B739D] rounded-2xl"
            />
          </div>
        </div>

        {/* Venue */}
        <div className="ml-5 mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Venue
          </label>
          <select
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="mt-1 p-3 md:p-4 w-[270px] md:w-[700px] lg:w-[900px] bg-[#6B739D] rounded-2xl"
          >
            <option value=""></option>
            {allvenues.map((room, i) => (
              <option key={i} value={room.roomname}>
                {room.roomname}
              </option>
            ))}
          </select>
        </div>

        {/* Book Button */}
        <button
          type="submit"
          className="mt-6 bg-[#6B739D] text-white rounded-full py-3 px-8"
        >
          Book
        </button>
      </form>
    </main>
  );
}
