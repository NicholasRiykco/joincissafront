
import Something from './SlateEditor/Editor'
import 'katex/dist/katex.min.css';
function TextEditor() {
  return (
    <div className="App">
      <Something/>
      {/* <InlineMath math="\int_0^\infty x^2 dx"/> */}
      {/* <BlockMath math="\int_0^\infty x^2 dx"/> */}
    </div>
  );
}

export default TextEditor;

