"use client"
import OutputSection from "../_components/OutputSection";
import FormSection from "../_components/FormSection";
import templates from "@/app/(data)/templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { generatePrompt } from "@/utils/AiModel";


interface PROPS{
  params: {
    'template-slug':string,
  },
};

function CreateNewContent(props:PROPS) {
  const selectedTemplate: TEMPLATE | undefined = templates.find((item) => item.slug === props.params['template-slug']);
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>('')

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt= `${JSON.stringify(formData)}, ${selectedPrompt}`;
    console.log(FinalAIPrompt);
    const result = await generatePrompt(FinalAIPrompt);
    setAiOutput(result);
    setLoading(false);
  };

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button > <ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userformInput={(v: any) => GenerateAiContent(v)} loading={loading} />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
