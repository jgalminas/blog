import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlock({ text, language }) {
    return (
        <div className="code-block">
        <CopyBlock
        text={text}
        language={language}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
        codeBlock={true}/>
        </div>
    )
}