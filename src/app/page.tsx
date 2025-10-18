"use client";

import { CheckCircle, Heart } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34322095/pexels-photo-34322095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"delicious pizza - Photo by Novkov Visuals"},
  {"id":"about-image","url":"https://images.pexels.com/photos/8511866/pexels-photo-8511866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young girl wearing a chef hat prepares pizza with fresh vegetables in a modern kitchen setting."},
  {"id":"feature-1-image","url":"https://images.pexels.com/photos/34322095/pexels-photo-34322095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"gourmet pizza - Photo by Novkov Visuals"},
  {"id":"feature-2-image","url":"https://images.pexels.com/photos/34325290/pexels-photo-34325290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious wood-fired pizza topped with ham and peppers, served hot from the oven."},
  {"id":"feature-3-image","url":"https://images.pexels.com/photos/34325290/pexels-photo-34325290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delicious wood-fired pizza topped with ham and peppers, served hot from the oven."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/34308310/pexels-photo-34308310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"chef in kitchen - Photo by Novkov Visuals"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleApple
            navItems={[{name: "Home", id: "home"}, {name: "Menu", id: "menu"}, {name: "About", id: "about"}, {name: "Contact", id: "contact"}]}
            brandName="Pizza Delight"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Pizza Delight"
            description="Freshly baked pizzas to satisfy your cravings."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{text: "See Menu", href: "menu"}, {text: "Order Now", href: "contact"}]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Learn more about our passion for pizza making."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            bulletPoints={[
              {title: "Quality Ingredients", description: "Only the best for our pizzas.", icon: CheckCircle},
              {title: "Family Recipes", description: "Passed down through generations.", icon: Heart}
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Specialties"
            description="Discover the flavors that make us unique."
            features={[
              {title: "Margherita", description: "A classic delight.", imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url ?? "/public/images/placeholder.webp"},
              {title: "Pepperoni Supreme", description: "For the bold.", imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url ?? "/public/images/placeholder.webp"},
              {title: "Veggie Extravaganza", description: "Fresh and healthy.", imageSrc: assetMap.find(a => a.id === "feature-3-image")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            description="The passionate chefs behind our pizzas."
            members={[
              {id: "1", name: "Chef Mario", role: "Head Chef", imageSrc: assetMap.find(a => a.id === "team-member-1")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Join our mailing list for exclusive offers and updates."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {title: "Explore", items: [{label: "Home", href: "home"}, {label: "Menu", href: "menu"}, {label: "About", href: "about"}]},
              {title: "Contact", items: [{label: "Email", href: "mailto:contact@pizzadelight.com"}, {label: "Phone", href: "tel:+1234567890"}]}
            ]}
            copyrightText="© 2025 Pizza Delight"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
