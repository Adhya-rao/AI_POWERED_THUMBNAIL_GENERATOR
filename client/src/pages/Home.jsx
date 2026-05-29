import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activePlan, setActivePlan] = useState("pro");

  const features = [
    {
      title: "AI Generation",
      description: "Generate stunning thumbnails instantly using AI prompts.",
    },
    {
      title: "Custom Styles",
      description: "Choose gaming, cinematic, neon, bold and more styles.",
    },
    {
      title: "Fast Download",
      description: "Download thumbnails quickly in high quality.",
    },
    {
      title: "Community Feed",
      description: "Explore and share creations with other creators.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul",
      role: "YouTuber",
      content:
        "Thumblify helped me create thumbnails in seconds. My CTR improved a lot.",
      avatar: "R",
    },
    {
      name: "Sneha",
      role: "Content Creator",
      content:
        "Very clean UI and amazing thumbnail quality. Super easy to use.",
      avatar: "S",
    },
    {
      name: "Arjun",
      role: "Gaming Creator",
      content:
        "Best AI thumbnail generator I’ve used so far for gaming videos.",
      avatar: "A",
    },
  ];

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹99",
      credits: "50 Credits",
      features: ["50 AI generations", "Community access", "Basic styles"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹299",
      credits: "200 Credits",
      popular: true,
      features: [
        "200 AI generations",
        "Premium styles",
        "Priority generation",
        "HD downloads",
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "₹599",
      credits: "500 Credits",
      features: [
        "500 AI generations",
        "All premium features",
        "Fastest generation",
        "Unlimited downloads",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            <div className="space-y-6">
              <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                AI Powered Thumbnail Generator
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Create Stunning YouTube Thumbnails in Seconds
              </h1>

              <p className="text-gray-300 text-lg">
                Generate professional thumbnails with AI prompts, custom styles,
                and powerful editing tools.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/generate")}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition"
                >
                  Generate Now
                </button>

                <button
                  onClick={() => navigate("/community")}
                  className="px-6 py-3 border border-purple-500 rounded-2xl hover:bg-purple-500/10 transition"
                >
                  View Creations
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
                  alt="Thumbnail Preview"
                  className="rounded-2xl w-full h-[350px] object-cover"
                />

                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold">
                    Gaming Thumbnail
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Cinematic AI generated thumbnail preview
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/30">
        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Powerful Features
            </h2>

            <p className="text-gray-400 mt-4">
              Everything you need to create viral thumbnails
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-3xl border transition-all duration-300 ${
                  hoveredCard === index
                    ? "bg-purple-600/20 border-purple-500 scale-105"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              What Creators Say
            </h2>

            <p className="text-gray-400 mt-4">
              Trusted by content creators everywhere
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>

                <p className="text-gray-300 mb-6">
                  "{item.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                    {item.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/50">
        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Pricing Plans
            </h2>

            <p className="text-gray-400 mt-4">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`relative p-8 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  activePlan === plan.id
                    ? "border-purple-500 bg-purple-500/10 scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >

                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-purple-600 text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-3xl font-bold mb-2">
                  {plan.name}
                </h3>

                <p className="text-5xl font-bold mb-2">
                  {plan.price}
                </p>

                <p className="text-gray-400 mb-6">
                  {plan.credits}
                </p>

                <button className="w-full py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition mb-6">
                  Get Started
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-gray-300">
                      ✓ {feature}
                    </p>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Viral Thumbnails?
            </h2>

            <p className="text-gray-300 mb-8">
              Start generating AI thumbnails today and grow your channel faster.
            </p>

            <button
              onClick={() => navigate("/generate")}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl text-lg font-semibold transition"
            >
              Generate Your First Thumbnail
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}