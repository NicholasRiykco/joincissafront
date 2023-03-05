import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function Editor() {
  const editor = useBlockNote({
    onUpdate: ({ editor }) => {
      // Log the document to console on every updated
      console.log(editor.getJSON());
    },
  });

  return <BlockNoteView editor={editor} />;
}
export default Editor;
