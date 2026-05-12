import { Link } from "react-router-dom";

export default function EventsCards() {

    const events = [
       
        {
            id: 3,
            title: "Coding Challenge",
            date: "25 JUL",
            desc: "Join the coding competition and solve real-world programming challenges with creativity.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        },
    ];

    return (
        <div className="bg-slate-50 px-4 py-16">

            <div className="mx-auto max-w-7xl">

                {/* HEADING */}

                <div className="mb-14 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        School Activities
                    </p>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Upcoming Events
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                        Explore educational competitions, workshops, and exciting learning experiences for students.
                    </p>

                </div>

                {/* CARDS */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {events.map((event) => (

                        <div
                            key={event.id}
                            className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* IMAGE */}

                            <div className="relative h-64 overflow-hidden bg-slate-100">

                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* TAG */}

                                <div className="absolute left-5 top-5">

                                    <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-blue-600 backdrop-blur-md">
                                        School Event
                                    </span>

                                </div>

                                {/* DATE */}

                                <div className="absolute right-5 top-5 rounded-2xl bg-white/90 px-4 py-2 text-center shadow-lg backdrop-blur-md">

                                    <p className="text-lg font-black text-slate-900">
                                        {event.date.split(" ")[0]}
                                    </p>

                                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                                        {event.date.split(" ")[1]}
                                    </p>

                                </div>

                                {/* TITLE */}

                                <div className="absolute bottom-5 left-5 right-5">

                                    <h2 className="text-2xl font-bold leading-tight text-white">
                                        {event.title}
                                    </h2>

                                </div>

                            </div>

                            {/* CONTENT */}

                            <div className="p-6">

                                {/* INFO */}

                                <div className="space-y-4">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                                            📍
                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold text-slate-800">
                                                Raman Arnava Vidyalaya
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                School Campus
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">
                                            🗓
                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold text-slate-800">
                                                Event Date
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                {event.date}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* DESCRIPTION */}

                                <p className="mt-5 text-sm leading-relaxed text-slate-500 line-clamp-3">
                                    {event.desc}
                                </p>

                                {/* BUTTON */}

                                <Link
                                    to="/quizevent"
                                    className="mt-6 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                                >
                                    Explore Event
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}