"use client"
import { useState } from 'react';
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function FormSection({
  selectedTemplate,
  userformInput
}: {
  selectedTemplate: TEMPLATE | undefined;
  userformInput: any;
}) {
  const [formData, setFormData] = useState({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userformInput(formData);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon ?? ""}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={(e) => onSubmit(e)}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item?.required} onChange={(e) => handleInputChange(e)} />
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={(e) => handleInputChange(e)} />
            ) : (
              null
            )}
          </div>
        ))}
        <Button type='submit' className='w-full py-6'>Generate Content</Button>
      </form>
    </div>
  );
};

export default FormSection;
