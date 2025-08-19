import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { formatContent } from "../utils/format";
import { useEffect, useState } from "react";

interface EditorProps {
    content: string;
    file: string;
}

const getLanguageFromFile = (filename: string): string => {
    const ext = filename.split(".").pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
        'js': 'javascript',
        'jsx': 'jsx',
        'ts': 'typescript',
        'tsx': 'tsx',
        'json': 'json',
        'md': 'markdown',
        'py': 'python',
        'css': 'css',
        'scss': 'scss',
        'html': 'html',
        'xml': 'xml',
        'sql': 'sql',
        'sh': 'bash',
        'yml': 'yaml',
        'yaml': 'yaml'
    };
    return languageMap[ext || ''] || 'text';
};

export default function Editor({ content, file }: EditorProps) {
    const [formatted, setFormatted] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const format = async () => {
            setIsLoading(true);
            try {
                const stringFormat = await formatContent(content, file);
                setFormatted(stringFormat);
            } catch (error) {
                setFormatted(content);
            } finally {
                setIsLoading(false);
            }
        };
        format();
    }, [content, file]);

    const cleanContent = (rawContent: string): string => {
        return rawContent
            .replace(/^\s*\n/, '')
            .replace(/\n\s*$/, '')
            .split('\n')
            .map(line => line.replace(/^\s{16}/, ''))
            .join('\n');
    };

    const displayContent = formatted || content;
    const cleanedContent = cleanContent(displayContent);

    return (
        <div className="bg-[#1e1e1e] text-sm flex flex-col h-[80vh] w-full">
            <div className="px-4 py-2 border-b border-gray-700 bg-[#2d2d30] text-yellow-400 font-mono text-xs flex items-center flex-shrink-0">
                <span className="mr-2">📄</span>
                <span>File: {file}</span>
                {isLoading && <span className="ml-2 text-gray-400">Formatting...</span>}
            </div>
            <div className="flex-1 overflow-y-auto">
                <SyntaxHighlighter
                    language={getLanguageFromFile(file)}
                    style={vscDarkPlus}
                    showLineNumbers={true}
                    wrapLines={true}
                    lineNumberStyle={{
                        color: '#858585',
                        backgroundColor: '#1e1e1e',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        borderRight: '1px solid #3e3e42',
                        fontSize: '12px',
                        minWidth: '40px'
                    }}
                    customStyle={{
                        background: 'transparent',
                        padding: '1rem',
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        fontFamily: '"Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", monospace',
                        height: 'auto',
                        minHeight: '100%'
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: '"Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", monospace',
                            fontSize: '14px'
                        }
                    }}
                >
                    {cleanedContent}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}