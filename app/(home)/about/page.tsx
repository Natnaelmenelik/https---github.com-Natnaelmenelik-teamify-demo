import React from "react";
import Navbar from "@/layouts/common/Navbar";
import Footer from "@/layouts/common/Footer";

interface TeamMember {
  name: string;
  role: string;
  education: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    education: "MS Computer Science, Harvard",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
    bio: "Alex envisioned Teamify Room after experiencing the challenges of remote collaboration firsthand. His technical background helps shape our product roadmap.",
  },
  {
    name: "Priya Patel",
    role: "Head of Product",
    education: "MBA, Wharton School",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    bio: "Priya leads product development with a focus on creating seamless virtual collaboration experiences that feel natural and intuitive.",
  },
  {
    name: "Jamal Williams",
    role: "CTO",
    education: "PhD Distributed Systems, MIT",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    bio: "Jamal's expertise in real-time communication systems powers Teamify Room's reliable and high-quality video infrastructure.",
  },
  {
    name: "Sophie Kim",
    role: "Head of Design",
    education: "BFA Interaction Design, RISD",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    bio: "Sophie crafts the elegant, user-friendly interfaces that make Teamify Room a joy to use every day.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[url('/images/background.png')] text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-20 rounded-2xl overflow-hidden">
          <img
            src="/images/background.png"
            alt="Teamify Room in action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent flex items-center">
            <div className="px-8 md:px-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Meet Teamify Room
              </h1>
              <h2 className="text-3xl md:text-5xl font-light mb-8">
                Redefining virtual collaboration
              </h2>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-2xl text-orange-500 font-light mb-8">
            Teamify Room transforms remote work with persistent virtual spaces
            that feel like home for your team.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <p>
              Unlike traditional video calls, Teamify Room creates
              always-available virtual offices where spontaneous conversations
              happen naturally. Our spatial audio and presence features make
              remote collaboration feel as natural as being in the same room.
            </p>
            <p>
              We're building the future of work - one where location doesn't
              limit creativity, where teams stay connected effortlessly, and
              where your best work happens on your terms. Teamify Room is more
              than a tool; it's your team's digital headquarters.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Team Behind Teamify Room
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-6 mx-auto object-cover border-2 border-orange-500"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-4">{member.education}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Features */}
        <div className="mb-20 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Teamify Room?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gray-700/50">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Persistent Spaces
              </h3>
              <p>
                Your virtual office stays open 24/7, just walk in and out like a
                physical space.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700/50">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Spatial Audio
              </h3>
              <p>
                Conversations flow naturally as you move between team members in
                your virtual office.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700/50">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Always Available
              </h3>
              <p>
                No more scheduling meetings - collaborate when inspiration
                strikes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
