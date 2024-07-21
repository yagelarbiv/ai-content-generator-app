"use client"
import OutputSection from "../_components/OutputSection";
import FormSection from "../_components/FormSection";
import templates from "@/app/(data)/templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


interface PROPS{
  params: {
    'template-slug':string,
  },
};

function CreateNewContent(props:PROPS) {

  const selectedTemplate: TEMPLATE | undefined = templates.find((item) => item.slug === props.params['template-slug']);

  const GenerateAiContent = (formData: any) => {
  }

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button > <ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userformInput={(v: any) => GenerateAiContent(v)} />
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
