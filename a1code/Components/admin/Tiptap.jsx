"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import ResizeImage from "tiptap-extension-resize-image";
import Color from "@tiptap/extension-color";
import {TextStyle} from "@tiptap/extension-text-style";
import { AlignCenter, AlignLeft, AlignRight, BoldIcon, Highlighter, ImagesIcon, Link2, Strikethrough, UnderlineIcon,ItalicIcon, List } from "lucide-react";
import { useEffect } from "react";

export default function Tiptap({setContentText,contentText}) {
 const editor = useEditor({
  extensions: [
    StarterKit,
    TextStyle,
Color,

    Underline,

    Highlight,

    Placeholder.configure({
      placeholder: "Start writing your article...",
    }),

    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),

    Link.configure({
      openOnClick: true,
      autolink: true,
      linkOnPaste: true,
      HTMLAttributes: {
        class: "text-blue-600 underline",
      },
    }),

    ResizeImage,
  ],

  content: "",
  onUpdate:({editor})=>{
    setContentText(editor.getHTML())
  }
});
   

const addImages = () => {
  const input = document.createElement("input");

  input.type = "file";
  input.multiple = true;
  input.accept = "image/*";

  input.onchange = async () => {
    const files = Array.from(input.files || []);

    for (const file of files) {
      const url = URL.createObjectURL(file);

      editor
        ?.chain()
        .focus()
        .setImage({
          src: url,
        })
        .run();
    }
  };

  input.click();
};

Link.configure({
  openOnClick: false,
  autolink: true,
  linkOnPaste: true,
  HTMLAttributes: {
    class: "text-blue-600 underline",
    target: "_blank",
    rel: "noopener noreferrer",
  },
})
const setLink = () => {
  const previousUrl = editor.getAttributes("link").href;

  const url = window.prompt("URL", previousUrl);

  if (url === null) return;

  if (url === "") {
    editor.chain().focus().unsetLink().run();
    return;
  }

  editor
    .chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run();
};

  if (!editor) return null;

  return (
    <div className="w-full border border-gray-100 overflow-hidden">

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-100">

        <button type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("bold") ? "bg-black text-white" : "bg-white"
          }`}
        >
          <BoldIcon size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("italic") ? "bg-black text-white" : "bg-white"
          }`}
        >
          <ItalicIcon size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("underline") ? "bg-black text-white" : "bg-white"
          }`}
        >
          <UnderlineIcon size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("strike") ? "bg-black text-white" : "bg-white"
          }`}
        >
          <Strikethrough size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("highlight") ? "bg-yellow-400" : "bg-white"
          }`}
        >
          <Highlighter size={18} />
        </button>

        <button type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="px-3 py-1 rounded bg-white"
        >
          H1
        </button>

        <button type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="px-3 py-1 rounded bg-white"
        >
          H2
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-3 py-1 rounded bg-white"
        >
          .Bullet
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="px-3 py-1 rounded bg-white"
        >
          1.Number
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className="px-3 py-1 rounded bg-white"
        >
          <AlignLeft size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className="px-3 py-1 rounded bg-white"
        >
          <AlignCenter size={18} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className="px-3 py-1 rounded bg-white"
        >
          <AlignRight size={18} />
        </button>
        <button onClick={addImages} type="button"> 
    <ImagesIcon size={18} />
</button>
<button onClick={setLink}>
    <Link2 />
</button>
<input
className=" rounded-full"
  type="color"
  onChange={(e) =>
    editor.chain().focus().setColor(e.target.value).run()
  }
/>
      </div>
      

      {/* Editor */}

      <EditorContent
        editor={editor}
        className="min-h-100 bg-white lg:p-5 p-2 prose max-w-none focus:outline-none"
      />
      <div className="">
        <pre>{contentText}</pre>
      </div>
    </div>
  );
}