import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import root from "./data/folder";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  const [openFile, setOpenFile]: any = useState<string>("about.js");

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">

      <div className="flex flex-col w-[1200px]">
        <Header />
        <div className="flex">
          <Sidebar onOpenFile={setOpenFile} />
          <Editor content={root.children.find(file => file.name === openFile)?.content} file={openFile} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
