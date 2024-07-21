"use client"
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRef } from 'react';

function OutputSection() {
  const editorRef:any = useRef();
  return (
      <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between item-center p-5'>
          <h2 className='font-medium text-lg'>Your Result</h2>
          <Button className='flex gap-2'> <Copy className='w-4 h-4'/> copy</Button>
        </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will apear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
};

export default OutputSection;
