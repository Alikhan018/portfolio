import { faFile, faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface node {
    name: string;
    type: string;
    children?: node[];
}

interface ExplorerTreeProps {
    tree: node;
    onClickFile: (fileName: string) => void;
}

const ExplorerTree = ({ tree, onClickFile }: ExplorerTreeProps) => {
    const { name, children, type } = tree;

    return (
        <div className="">
            {type && <span className="text-md hover:text-gray-100 cursor-pointer transition-colors duration-400" onClick={() => type === 'file' && onClickFile(name)}><FontAwesomeIcon icon={type === 'folder' ? faFolder : faFile} /> {name}</span>}
            {children && (
                <div className="ml-4 mt-2 flex flex-col gap-1">
                    {children.map((child: node, key: number) => {
                        return (
                            <ExplorerTree key={key} tree={child} onClickFile={onClickFile} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default ExplorerTree;
