import templates from "@/app/(data)/templates"
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export interface TEMPLATE{
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[],
};

export interface FORM{
    label: string,
    field: string,
    name: string,
    required?: boolean,
};

const TemplateListSection = ({searchInput}:{searchInput:string}) => {

  const [templateList, setTemplateList] = useState<TEMPLATE[]>(templates);
  useEffect(() => {
    if (searchInput) {
      setTemplateList(templates.filter((item:TEMPLATE) => item.name.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      setTemplateList(templates);
    }
  },[searchInput])
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {
        templateList.map((item:TEMPLATE, index:number) => (
          <TemplateCard key={index} {...item} />
        ))
      }
    </div>
  );
};

export default TemplateListSection;
