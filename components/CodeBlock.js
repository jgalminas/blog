import { CodeBlock as Code, dracula	} from "react-code-blocks";

export default function CodeBlock({ text, language , lineNum}) {
    return (
        <div className="code-block">
        <Code
        text={text}
        language={language}
        showLineNumbers={lineNum}
        startingLineNumber={1}
        theme={dracula}
        codeBlock={true}/>
        </div>
    )
}