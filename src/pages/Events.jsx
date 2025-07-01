import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import SearchFilter from "../components/SearchFilter";
import { parseISO, compareDesc } from "date-fns";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    const { data } = await axios.get(
      "https://event-management-server-liart-gamma.vercel.app/allEvents"
    );
    const sorted = data.sort((a, b) =>
      compareDesc(parseISO(a.dateTime), parseISO(b.dateTime))
    );
    setEvents(sorted);
  };

  useEffect(() => {
    fetch(
      `https://event-management-server-liart-gamma.vercel.app/allEvents?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [search]);

  const handleJoin = async () => {
    // try {
    //   await axios.post(`/api/events/join/${id}`);
    //   setEvents((prev) =>
    //     prev.map((ev) =>
    //       ev._id === id
    //         ? {
    //             ...ev,
    //             AttendeeCount: ev.AttendeeCount + 1,
    //             attendees: [...ev.attendees],
    //           }
    //         : ev
    //     )
    //   );
    // } catch {
    //   alert("You’ve already joined this event.");
    // }
  };
  return (
    <div className="">
      <div className="mx-auto md:w-3/12 p-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          className="input input-bordered w-full"
          placeholder="Search Services by title"
        />
      </div>
      <div>
        <SearchFilter></SearchFilter>
      </div>
      <div className="grid md:grid-cols-3 m-10 gap-10">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            handleJoin={handleJoin()}
          ></EventCard>
        ))}
      </div>
    </div>
  );
}
