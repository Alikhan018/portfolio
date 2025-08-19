import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserTypescript from "prettier/parser-typescript";
import parserHtml from "prettier/parser-html";
import parserMarkdown from "prettier/parser-markdown";
import parserPostcss from "prettier/parser-postcss";

export async function formatContent(content: string, file: string) {
    const ext = file.split(".").pop();
    let parser: any = "babel";

    switch (ext) {
        case "js":
        case "jsx":
            parser = "babel";
            break;
        case "ts":
        case "tsx":
            parser = "typescript";
            break;
        case "json":
            parser = "json";
            break;
        case "html":
            parser = "html";
            break;
        case "css":
            parser = "css";
            break;
        case "md":
            parser = "markdown";
            break;
    }

    try {
        let formatted = await prettier.format(content, {
            parser,
            plugins: [
                parserBabel,
                parserTypescript,
                parserHtml,
                parserMarkdown,
                parserPostcss,
            ],
            semi: true,
            singleQuote: true,
        });
        return formatted;
    } catch (e) {
        console.error("Prettier formatting error:", e);
        return content; // fallback
    }
}
