"use client";

import "../styles/tiptap.css";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MarkdownSerializer,
  defaultMarkdownSerializer,
} from "prosemirror-markdown";

const initialTemplates = [
  "<p>Template 1 Content</p>",
  "<p>Template 2 Content</p>",
  "<p>Template 3 Content</p>",
];

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
];

// Add custom markdown handling for bold
const customMarkdownSerializer = {
  ...defaultMarkdownSerializer,
  marks: {
    ...defaultMarkdownSerializer.marks,
    bold: {
      open: '**',
      close: '**',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    italic: {
      open: '_',
      close: '_',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    // You can also add other marks (like italic, etc.) if needed
  },
};

const MenuBar = ({ setMarkdown }: { setMarkdown: (markdown: string) => void }) => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  const convertToMarkdown = () => {
    const json = editor.getJSON();
    const serializer = new MarkdownSerializer(
      customMarkdownSerializer.nodes,
      customMarkdownSerializer.marks
    );
    const markdown = serializer.serialize(editor.schema.nodeFromJSON(json));
    setMarkdown(markdown);
  };

  return (
    <div className="mb-8 flex gap-5">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className="btn-editor"
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className="btn-editor"
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="btn-editor"
      >
        Undo
      </button>
      <button
        onClick={() => editor.commands.clearContent()}
        className="btn-editor"
      >
        Clear
      </button>
      <button onClick={convertToMarkdown} className="btn-editor">
        Convert to Markdown
      </button>
    </div>
  );
};

export default function Tiptap() {
  const [selectedTemplateNo, setSelectedTemplateNo] = useState(0);
  const templateNames = ["Template 1", "Template 2", "Template 3"];
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="flex space-x-10 mt-8">
      <div className="w-1/2 rounded-md p-4">
        <div>
          <Select onValueChange={(e) => setSelectedTemplateNo(Number(e) - 1)}>
            <SelectTrigger className="w-[180px] absolute top-[75px] left-[500px]">
              <SelectValue
                className=""
                placeholder={templateNames[selectedTemplateNo]}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Template 1</SelectItem>
              <SelectItem value="2">Template 2</SelectItem>
              <SelectItem value="3">Template 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="tiptap h-[500px] overflow-auto p-4 rounded-lg">
          <EditorProvider
            key={selectedTemplateNo} // Force re-render on template change
            slotBefore={<MenuBar setMarkdown={setMarkdown} />}
            extensions={extensions}
            content={initialTemplates[selectedTemplateNo]}
          />
        </div>
      </div>
      <div className="w-1/2 p-4 border rounded-md">
        <h2 className="font-semibold text-xl mb-4">Markdown Preview</h2>
        <textarea
          value={markdown}
          readOnly
          rows={10}
          className="w-full p-2 border rounded-md"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(markdown);
            }}
            className="btn-editor"
          >
            Copy Markdown
          </button>
        </div>
      </div>
    </div>
  );
}
