import React from "react";

import { experiences } from "@/constants";

import Experience from "@/components/Experience";

const Experiences = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {experiences.map((experience, index) => {
          return (
            <Experience
              key={index}
              job_title={experience["job_title"]}
              company_name={experience["company_name"]}
              start_date={experience["start_date"]}
              end_date={experience["end_date"]}
              experience_skills={experience["skills"]}
              experience_description={experience["description"]}
              experience_image={experience["image_link"]}
              experience_link={experience["link"]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
