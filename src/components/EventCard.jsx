import { Link } from "react-router";
import { format, parseISO } from "date-fns";

export default function EventCard({ event, handleJoin }) {
  const { _id, title, location, description, dateTime } = event || {};
  //   console.log("service", event);
  return (
    <div>
      <div className="card bg-base-300 w-full shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">New!</div>
          </h2>
          <p>{description.substring(0, 50)}...</p>
          <p className="font-semibold">Event Posted By:</p>
          <div className="card-actions justify-between items-center">
            {/* <div className="flex justify-center items-center">
              <img className="w-12" src={serviceProvider.photo} alt="" />
              <p className="badge badge-accent p-4">{serviceProvider.name}</p>
            </div> */}
            <p>
              <strong>Date & Time:</strong>{" "}
              {format(parseISO(dateTime), "PPP p")}
            </p>
            <div>
              <p className="font-semibold">Location:</p>
              <div className="badge badge-outline badge-secondary">
                {location} $
              </div>
            </div>
          </div>
          <Link
            to={`/events/${_id}`}
            // disabled={ev.attendees?.includes(currentUserId)}
            onClick={() => handleJoin(_id)}
          >
            {/* onClick={() => handleJoin(event._id)} */}
            <button className="btn btn-primary">Join Event</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
