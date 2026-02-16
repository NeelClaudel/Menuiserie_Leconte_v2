import React from "react";
import Contact from "@/components/Contact/Contact_index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Menuiserie Leconte",

  // other metadata
  description: "Contact Menuiserie Leconte, Artisan menuisier dans le Morbihan"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
