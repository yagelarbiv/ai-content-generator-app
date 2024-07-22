"use client"
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from 'react';

function OutputSection({aiOutput}:{ aiOutput: string }) {
  const editorRef:any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput]);

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
