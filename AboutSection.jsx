import { Heart, Globe, Users, Shield, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import wantokImg from "@/assets/wantok-spirit.jpg";
import localFocusImg from "@/assets/local-focus.jpg";
import communityImg from "@/assets/community-driven.jpg";
import transparencyImg from "@/assets/transparency.jpg";

const values = [
  {
    icon: Heart,
    title: "Wantok Spirit",
    description: "Embracing PNG's community values, we work together as one family to uplift every child.",
    color: "bg-primary/10 group-hover:bg-primary",
    iconColor: "text-primary group-hover:text-primary-foreground",
    image: wantokImg,
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Our programs span 22 provinces, reaching children in the most remote highlands and islands.",
    color: "bg-accent/10 group-hover:bg-accent",
    iconColor: "text-accent group-hover:text-accent-foreground",
    image: localFocusImg,
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We partner with local churches, schools, and leaders to create sustainable solutions.",
    color: "bg-secondary/10 group-hover:bg-secondary",
    iconColor: "text-secondary group-hover:text-secondary-foreground",
    image: communityImg,
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "95% of donations go directly to programs. We're committed to accountability.",
    color: "bg-primary/10 group-hover:bg-primary",
    iconColor: "text-primary group-hover:text-primary-foreground",
    image: transparencyImg,
  },
];

const AboutSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (title) => {
    setOpenCard(openCard === title ? null : title);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
            "To break the cycle of poverty in Papua New Guinea by providing children with access to quality education, healthcare, and nutrition — empowering them to build brighter futures for themselves, their families, and their communities."
          </p>
        </div>

        {/* About Us Header */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Hope for Papua New Guinea's Children</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            ECPNG was born from a simple belief: every child in Papua New Guinea, regardless of how remote their village, deserves the chance to learn, grow, and thrive. Since 2010, we've been bringing hope to communities across the nation.
          </p>
        </div>

        {/* Values Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${value.color}`}>
                      <Icon className={`w-6 h-6 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
