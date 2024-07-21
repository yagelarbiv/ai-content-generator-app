import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

export default function TemplateCard(template:TEMPLATE):any{

  return(
    <Link href={`/dashboard/content/${template.slug}`} className="p-5 shadow-md rounded-md border bg-whit flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
      <div className="p-5 shadow-md rounded-md border bg-whit flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={template.icon} alt='icon' width={50} height={50} />
        <h2 className="font-medium text-lg">{template.name}</h2>
        <p className="text-gray-500 line-clamp-3">{template.desc}</p>
      </div>
    </Link>
  );
};