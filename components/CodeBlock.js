import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlock({ text, language , lineNum}) {
    return (
        <div className="code-block">
        <CopyBlock
        text={text}
        language={language}
        showLineNumbers={lineNum}
        startingLineNumber={1}
        theme={dracula}
        codeBlock={true}/>
        </div>
    )
}