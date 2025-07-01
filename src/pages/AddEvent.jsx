import { useForm, Controller } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { formatISO, isBefore } from "date-fns";
import DatePicker from "react-datepicker";
// import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function AddEvent() {
  const axiosPublic = useAxiosPublic();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      location: "",
      description: "",
      dateTime: new Date(), // single Date object
    },
  });

  const onSubmit = async (values) => {
    // serialise date to ISO string for the DB
    const eventItem = {
      ...values,
      dateTime: formatISO(values.dateTime),
      AttendeeCount: 0,
      // attendees: [currentUser._id], // optional auto‑join by the creator
    };
    const eventRes = await axiosPublic.post("/event", eventItem);
    console.log(eventRes.data);
    if (eventRes.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${values.title} is added to the event.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2/5 mx-auto p-10 shadow-2xl my-10"
    >
      {/* TITLE */}
      <div>
        <label className="block font-medium">Event Title *</label>
        <input
          className="input"
          placeholder="React Conference"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* DATE + TIME */}
      <div>
        <label className="block font-medium">Date &amp; Time *</label>
        <Controller
          control={control}
          name="dateTime"
          rules={{
            required: "Pick a date & time",
            validate: (value) =>
              !isBefore(value, new Date()) || "Event can’t be in the past",
          }}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              onChange={field.onChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="yyyy-MM-dd HH:mm"
              className="input"
            />
          )}
        />
        {errors.dateTime && (
          <p className="text-red-500 text-sm">{errors.dateTime.message}</p>
        )}
      </div>

      {/* LOCATION */}
      <div>
        <label className="block font-medium">Location *</label>
        <input
          className="input"
          placeholder="Dhaka"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          className="input h-24"
          placeholder="Describe the event..."
          {...register("description")}
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="my-10 btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving…" : "Add Event"}
      </button>
    </form>
  );
}
