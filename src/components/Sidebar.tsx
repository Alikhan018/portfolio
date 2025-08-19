import { sidebarIconsTop, sidebarIconsBottom } from "../data/sidebar-icons";
import List from "./shared/List";
import ExplorerTree from "./shared/ExplorerTree";
import root from "../data/folder";

interface SidebarProps {
    onOpenFile: (file: string) => void;
}

export default function Sidebar({ onOpenFile }: SidebarProps) {
    return (
        <div className="w-60 h-[80vh] bg-gray-900 text-gray-300 ">
            <div className="flex h-full">
                <div className="flex flex-col bg-gray-800 w-1/4 justify-between h-full">
                    <div>
                        <List list={sidebarIconsTop} />
                    </div>
                    {/* <div>
                        <List list={sidebarIconsBottom} />
                    </div> */}
                </div>
                <div className="w-full">
                    <div className="flex border-b border-gray-700 p-3">
                        <h2 className="text-lg font-bold">Explorer</h2>
                    </div>
                    <div className="p-3">
                        <ExplorerTree tree={root} onClickFile={onOpenFile} />
                    </div>
                </div>
            </div>

        </div >
    );
}
